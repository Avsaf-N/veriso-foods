import type { Metadata } from "next";
import { ContactCard } from "@/components/contact-card";
import { InquiryForm } from "@/components/inquiry-form";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { getEmailHref, getWhatsappHref, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Send Veriso Foods a dehydrated ingredient export inquiry with product, country, quantity, and packaging requirements.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Send a detailed import inquiry."
        description="Tell us the product, quantity, packaging format, private-label needs, and destination market. The more specific the request, the faster the sourcing conversation can move."
      />
      <section className="px-5 pb-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <ContactCard />
          </Reveal>
          <Reveal delay={0.1}>
            <InquiryForm />
          </Reveal>
        </div>
        <div className="mx-auto mt-8 max-w-7xl">
          <Reveal className="glass rounded-[1.75rem] p-8">
            <h2 className="text-3xl font-semibold text-white">Buyer contact options</h2>
            <p className="mt-5 text-lg leading-8 text-white/64">
              The form works locally with safe fallback behavior. Add email and
              database environment variables later to enable live notifications
              and persistent inquiry storage.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              <a
                href={getWhatsappHref()}
                className="rounded-full bg-[#25D366] px-6 py-4 text-center text-sm font-semibold text-black transition hover:-translate-y-1 hover:bg-white"
              >
                WhatsApp Veriso Foods
              </a>
              <a
                href={getEmailHref()}
                className="rounded-full border border-white/15 bg-white/[0.06] px-6 py-4 text-center text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-white/[0.1]"
              >
                {siteConfig.companyEmail ? "Email Veriso Foods" : siteConfig.fallbackEmailLabel}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
