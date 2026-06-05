import { NextRequest, NextResponse } from "next/server";
import { InquiryInput } from "@/lib/inquiry-types";
import { buildFallbackMailto, saveInquiry, sendInquiryEmail } from "@/lib/inquiry-store";

export async function POST(request: NextRequest) {
  const payload = (await request.json()) as Partial<InquiryInput>;
  const required = ["name", "company", "country", "email", "message"] as const;
  const missing = required.filter((field) => !payload[field]?.trim());

  if (missing.length > 0) {
    return NextResponse.json(
      { ok: false, message: `Missing required fields: ${missing.join(", ")}` },
      { status: 400 },
    );
  }

  const input: InquiryInput = {
    name: payload.name?.trim() || "",
    company: payload.company?.trim() || "",
    country: payload.country?.trim() || "",
    email: payload.email?.trim() || "",
    product: payload.product?.trim() || "Not specified",
    quantity: payload.quantity?.trim() || "Not specified",
    message: payload.message?.trim() || "",
  };

  const { inquiry, storage } = await saveInquiry(input);
  const email = await sendInquiryEmail(inquiry);
  const fallbackUrl = buildFallbackMailto(inquiry);

  if (email.sent) {
    return NextResponse.json({
      ok: true,
      storage,
      email: "sent",
      message: "Inquiry saved and email notification sent.",
    });
  }

  return NextResponse.json({
    ok: true,
    storage,
    email: "not_configured",
    fallbackUrl,
    message:
      storage === "supabase"
        ? "Inquiry saved. Email notification is not configured yet."
        : "Inquiry saved locally for this session. Configure Supabase for persistent storage.",
  });
}
