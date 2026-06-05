import { Inquiry, InquiryInput } from "@/lib/inquiry-types";
import { siteConfig } from "@/lib/site-config";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

type GlobalWithInquiries = typeof globalThis & {
  __verisoInquiries?: Inquiry[];
};

export function createInquiry(input: InquiryInput, status: Inquiry["status"]): Inquiry {
  return {
    id: crypto.randomUUID(),
    ...input,
    status,
    createdAt: new Date().toISOString(),
  };
}

export async function saveInquiry(input: InquiryInput) {
  const inquiry = createInquiry(input, "stored");

  if (supabaseUrl && (supabaseServiceRoleKey || supabaseAnonKey)) {
    const response = await fetch(`${supabaseUrl}/rest/v1/inquiries`, {
      method: "POST",
      headers: {
        apikey: supabaseServiceRoleKey || supabaseAnonKey || "",
        Authorization: `Bearer ${supabaseServiceRoleKey || supabaseAnonKey}`,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: JSON.stringify({
        id: inquiry.id,
        name: inquiry.name,
        company: inquiry.company,
        country: inquiry.country,
        email: inquiry.email,
        product: inquiry.product,
        quantity: inquiry.quantity,
        message: inquiry.message,
        status: inquiry.status,
        created_at: inquiry.createdAt,
      }),
    });

    if (response.ok) {
      return { inquiry, storage: "supabase" as const };
    }
  }

  const globalStore = globalThis as GlobalWithInquiries;
  globalStore.__verisoInquiries = globalStore.__verisoInquiries || [];
  globalStore.__verisoInquiries.unshift(inquiry);

  return { inquiry, storage: "memory" as const };
}

export async function listInquiries() {
  if (supabaseUrl && supabaseServiceRoleKey) {
    const response = await fetch(
      `${supabaseUrl}/rest/v1/inquiries?select=*&order=created_at.desc&limit=100`,
      {
        headers: {
          apikey: supabaseServiceRoleKey,
          Authorization: `Bearer ${supabaseServiceRoleKey}`,
        },
        cache: "no-store",
      },
    );

    if (response.ok) {
      const rows = (await response.json()) as Array<{
        id: string;
        name: string;
        company: string;
        country: string;
        email: string;
        product: string | null;
        quantity: string | null;
        message: string;
        status: Inquiry["status"];
        created_at: string;
      }>;

      return {
        configured: true,
        source: "supabase" as const,
        inquiries: rows.map((row) => ({
          id: row.id,
          name: row.name,
          company: row.company,
          country: row.country,
          email: row.email,
          product: row.product || "Not specified",
          quantity: row.quantity || "Not specified",
          message: row.message,
          status: row.status,
          createdAt: row.created_at,
        })),
      };
    }
  }

  const globalStore = globalThis as GlobalWithInquiries;
  return {
    configured: false,
    source: "memory" as const,
    inquiries: globalStore.__verisoInquiries || [],
  };
}

export async function sendInquiryEmail(inquiry: Inquiry) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const contactToEmail = process.env.CONTACT_TO_EMAIL || process.env.COMPANY_EMAIL;

  if (!resendApiKey || !contactToEmail) {
    return { sent: false };
  }

  const subject = `Veriso Foods export inquiry from ${inquiry.company}`;
  const body = buildInquiryEmailBody(inquiry);
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || "Veriso Foods <onboarding@resend.dev>",
      to: contactToEmail,
      reply_to: inquiry.email,
      subject,
      text: body,
    }),
  });

  return { sent: response.ok, subject, body };
}

export function buildFallbackMailto(inquiry: Inquiry) {
  const subject = `Veriso Foods export inquiry from ${inquiry.company}`;
  const body = buildInquiryEmailBody(inquiry);
  const to = process.env.CONTACT_TO_EMAIL || process.env.COMPANY_EMAIL || siteConfig.companyEmail;

  if (!to) {
    return "";
  }

  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function buildInquiryEmailBody(inquiry: Inquiry) {
  return [
    "New Veriso Foods export inquiry",
    "",
    `Name: ${inquiry.name}`,
    `Company: ${inquiry.company}`,
    `Country: ${inquiry.country}`,
    `Email: ${inquiry.email}`,
    `Product: ${inquiry.product || "Not specified"}`,
    `Quantity: ${inquiry.quantity || "Not specified"}`,
    `Status: ${inquiry.status}`,
    `Created: ${inquiry.createdAt}`,
    "",
    "Message:",
    inquiry.message,
  ].join("\n");
}
