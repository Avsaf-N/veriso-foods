import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Quality Assurance",
  description:
    "Veriso Foods quality assurance process for export-grade dehydrated ingredients, supplier verification, batch checking, and packaging standards.",
};

export default function QualityPage() {
  const items = [
    ["Supplier Verification", "Manufacturing partners are reviewed for product fit, export readiness, communication reliability, and batch consistency."],
    ["Batch Checking", "Commercial batches are checked against buyer requirements, product expectations, and packaging suitability before dispatch."],
    ["Packaging Standards", "Liners, cartons, pouches, bags, and pallet plans are reviewed for export handling and destination needs."],
    ["Export-Grade Consistency", "Repeat supply planning focuses on practical specification alignment and dependable buyer communication."],
    ["Traceability", "Order details, product identity, supplier coordination, and shipment references are organized for clear follow-up."],
  ];

  return (
    <>
      <PageHero
        eyebrow="Quality Assurance"
        title="Quality is managed through sourcing discipline, batch review, and export-ready packaging."
        description="Veriso Foods gives international buyers a structured path for qualifying products and coordinating repeat commercial supply."
      />
      <section className="px-5 pb-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-5">
          {items.map(([title, text], index) => (
            <Reveal key={title} delay={index * 0.05}>
              <article className="glass h-full rounded-[1.75rem] p-6">
                <div className="mb-8 grid h-12 w-12 place-items-center rounded-2xl border border-[#d9b46c]/30 bg-[#d9b46c]/10 text-[#f5d999]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h2 className="text-xl font-semibold text-white">{title}</h2>
                <p className="mt-4 leading-7 text-white/60">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
