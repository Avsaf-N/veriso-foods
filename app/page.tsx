import type { Metadata } from "next";
import { PrimaryButton, SecondaryButton } from "@/components/buttons";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { VisualProduct } from "@/components/visual-product";
import { markets } from "@/lib/markets";
import { products } from "@/lib/products";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Premium Dehydrated Ingredient Export Company",
  description:
    "Veriso Foods sources export-grade dehydrated food ingredients from trusted Indian manufacturing partners for international B2B buyers.",
  openGraph: {
    title: "Veriso Foods | Premium Dehydrated Ingredient Export Company",
    description:
      "Premium sourcing, quality coordination, packaging support, and export-focused supply from India.",
  },
};

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-screen items-center px-5 pt-28 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(217,180,108,0.18),transparent_32rem),radial-gradient(circle_at_80%_20%,rgba(101,163,13,0.12),transparent_30rem)]" />
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <Reveal>
            <p className="mb-6 inline-flex rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-[#f6d891]">
              India to international B2B buyers
            </p>
            <h1 className="font-display text-6xl leading-[0.92] tracking-tight text-white sm:text-7xl lg:text-8xl">
              Veriso <span className="gold-text">Foods</span>
            </h1>
            <h2 className="mt-7 max-w-3xl text-3xl font-semibold leading-tight text-white/92 sm:text-5xl">
              Premium Dehydrated Ingredients From India
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/66">
              We help importers, distributors, manufacturers, and private-label
              brands source export-grade dehydrated powders through trusted
              Indian manufacturing partnerships.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <PrimaryButton href="/contact">Request Quote</PrimaryButton>
              <SecondaryButton href="/products">View Products</SecondaryButton>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="glass relative min-h-[34rem] overflow-hidden rounded-[2rem] p-5">
              <div className="grid h-full grid-cols-2 gap-4 sm:grid-cols-3">
                {products.map((product, index) => (
                  <div
                    key={product.slug}
                    className="flex min-h-40 flex-col justify-end overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-4"
                  >
                    <div className="relative mb-5 h-24 overflow-hidden rounded-2xl">
                      <Image
                        src={product.heroImage}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm font-semibold text-white/85">{product.name}</p>
                    <p className="mt-1 text-xs text-white/42">0{index + 1}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Product Preview"
            title="Core dehydrated powders for commercial food applications."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 3).map((product, index) => (
              <Reveal key={product.slug} delay={index * 0.05}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <PrimaryButton href="/products">Explore All Products</PrimaryButton>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <VisualProduct product={products[5]} />
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col justify-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#d9b46c]">
              Quality Trust
            </p>
            <h2 className="font-display text-4xl leading-tight text-white sm:text-6xl">
              Export-grade supply needs more than a catalog.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/64">
              Veriso Foods coordinates product matching, batch review, packaging
              readiness, supplier communication, and shipment support so buyers
              can source from India with greater clarity.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Export Markets"
            title="Focused on practical import markets across the Gulf and North America."
            description="Destination requirements vary by product, buyer channel, labeling, and documentation."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {markets.slice(0, 4).map((market, index) => (
              <Reveal key={market.name} delay={index * 0.04}>
                <div className="glass rounded-3xl p-6">
                  <h3 className="text-2xl font-semibold text-white">{market.name}</h3>
                  <p className="mt-4 leading-7 text-white/60">{market.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <SecondaryButton href="/export-markets">View Markets</SecondaryButton>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#d9b46c]/20 bg-[#d9b46c]/[0.07] p-8 text-center sm:p-14">
          <Reveal>
            <h2 className="font-display text-4xl text-white sm:text-6xl">
              Build your next ingredient import program with Veriso Foods.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/66">
              Share your product, quantity, packaging, and destination market.
              We will respond with sourcing possibilities and next steps.
            </p>
            <div className="mt-9">
              <PrimaryButton href="/contact">Request Quote</PrimaryButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
