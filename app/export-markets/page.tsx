import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { markets } from "@/lib/markets";

export const metadata: Metadata = {
  title: "Export Markets",
  description:
    "Veriso Foods supports dehydrated ingredient buyers in UAE, Saudi Arabia, Qatar, Oman, Kuwait, USA, and Canada.",
};

export default function ExportMarketsPage() {
  return (
    <>
      <PageHero
        eyebrow="Export Markets"
        title="Focused supply conversations for Gulf and North American buyers."
        description="Requirements vary by destination market, buyer channel, documentation, labeling, and product application. Veriso Foods helps coordinate the details early."
      />
      <section className="px-5 pb-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="glass relative mb-10 overflow-hidden rounded-[2rem] p-6 sm:p-10">
            <div className="map-grid relative min-h-[24rem] overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/40">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_44%,rgba(217,180,108,0.2),transparent_8rem),radial-gradient(circle_at_22%_36%,rgba(255,255,255,0.08),transparent_8rem)]" />
              <div className="absolute left-[18%] top-[42%] h-px w-[55%] origin-left bg-gradient-to-r from-[#d9b46c] to-transparent" />
              <div className="absolute left-[28%] top-[52%] h-px w-[48%] origin-left rotate-[-18deg] bg-gradient-to-r from-[#d9b46c] to-transparent" />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {markets.map((market, index) => (
              <Reveal key={market.name} delay={index * 0.04}>
                <article className="glass h-full rounded-[1.75rem] p-7">
                  <h2 className="text-3xl font-semibold text-white">{market.name}</h2>
                  <p className="mt-4 leading-7 text-white/62">{market.detail}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
