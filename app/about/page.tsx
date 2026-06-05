import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn how Veriso Foods sources dehydrated ingredients from trusted Indian manufacturing partners for international B2B buyers.",
};

export default function AboutPage() {
  const points = [
    "We source from trusted manufacturing partners across India.",
    "We help buyers define product, grade, packaging, MOQ, and shipment needs.",
    "We focus on export-grade communication, repeat supply, and practical documentation support.",
  ];

  return (
    <>
      <PageHero
        eyebrow="About Veriso"
        title="A modern sourcing partner for premium dehydrated food ingredients."
        description="Veriso Foods exists for international buyers who need reliable Indian sourcing without unclear communication, weak packaging, or generic trading."
      />
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="glass rounded-[1.75rem] p-8">
            <h2 className="font-display text-4xl text-white">What we do</h2>
            <p className="mt-6 text-lg leading-8 text-white/66">
              Veriso Foods connects global B2B buyers with premium dehydrated
              ingredient supply from India. We coordinate product matching,
              manufacturing partner communication, quality expectations,
              packaging planning, and export support for commercial buyers.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="grid gap-4">
            {points.map((point, index) => (
              <div key={point} className="rounded-3xl border border-white/10 bg-white/[0.055] p-6">
                <span className="text-sm text-[#d9b46c]">0{index + 1}</span>
                <p className="mt-4 text-xl font-semibold text-white">{point}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Business Model"
            title="Partner-led manufacturing, Veriso-led export coordination."
            description="This model lets buyers access strong Indian ingredient capabilities while working through one focused export-facing sourcing partner."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {["Manufacturing partner sourcing", "Buyer-specific packaging review", "Export communication and follow-up"].map((item) => (
              <Reveal key={item} className="glass rounded-3xl p-7">
                <h3 className="text-2xl font-semibold text-white">{item}</h3>
                <p className="mt-4 leading-7 text-white/60">
                  Built for buyers who care about quality, consistency, documentation,
                  and long-term supplier relationships.
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
