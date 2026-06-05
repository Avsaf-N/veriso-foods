import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Veriso Foods dehydrated powders including onion, garlic, tomato, ginger, beetroot, and moringa powder.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Premium dehydrated powders for international B2B buyers."
        description="Each product is positioned for commercial import, manufacturing, distribution, food service, and private-label programs."
      />
      <section className="px-5 pb-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <Reveal key={product.slug} delay={index * 0.04}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
