import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Packaging & Private Label",
  description:
    "Bulk packaging, retail packs, private label support, cartons, pouches, liners, bags, and export-ready formats from Veriso Foods.",
};

export default function PackagingPage() {
  const options = [
    "10 kg and 25 kg bulk cartons",
    "Food-grade poly inner liners",
    "Moisture-barrier bags",
    "Retail pouch coordination",
    "Private-label carton markings",
    "Buyer artwork and custom labels",
    "Pallet-ready export cartons",
    "Channel-specific pack formats",
  ];

  return (
    <>
      <PageHero
        eyebrow="Packaging & Private Label"
        title="Packaging formats for importers, distributors, and branded ingredient programs."
        description="Veriso Foods supports bulk export packing and private-label coordination based on product type, MOQ, artwork readiness, and destination-market requirements."
      />
      <section className="px-5 pb-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="glass rounded-[1.75rem] p-8">
            <h2 className="font-display text-4xl text-white">Bulk and retail-ready support.</h2>
            <p className="mt-6 text-lg leading-8 text-white/64">
              Buyers can discuss cartons, bags, liners, pouches, custom label
              support, private-label pack formats, and export-ready carton
              markings. Final options depend on product, quantity, packaging
              material, and target market.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="grid gap-4 sm:grid-cols-2">
            {options.map((option) => (
              <div key={option} className="rounded-3xl border border-white/10 bg-white/[0.055] p-5 text-white/76">
                {option}
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
