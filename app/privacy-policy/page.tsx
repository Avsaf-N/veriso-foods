import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Veriso Foods website inquiries and contact information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy Policy"
        description="A simple privacy note for buyers contacting Veriso Foods through this website."
      />
      <section className="px-5 pb-28 lg:px-8">
        <Reveal className="glass mx-auto max-w-4xl rounded-[1.75rem] p-8">
          <div className="space-y-6 text-white/66">
            <p>
              {siteConfig.name} collects inquiry details such as name, company,
              country, email, product interest, quantity, and message only to
              respond to B2B export inquiries.
            </p>
            <p>
              Contact details are used for buyer communication, quotation
              follow-up, sourcing coordination, and export-related discussion.
              Information is not sold.
            </p>
            <p>
              If email or database services are connected through environment
              variables, inquiry details may be processed by those configured
              services for notification and storage.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
