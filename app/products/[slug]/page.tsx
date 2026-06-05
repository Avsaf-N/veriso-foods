import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrimaryButton, SecondaryButton } from "@/components/buttons";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { VisualProduct } from "@/components/visual-product";
import { getProduct, getRelatedProducts, products } from "@/lib/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return {};
  }

  return {
    title: product.name,
    description: `${product.name} from Veriso Foods. ${product.shortDescription}`,
    openGraph: {
      title: `${product.name} | Veriso Foods`,
      description: product.description,
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const specs = [
    ["Origin", product.origin],
    ["Mesh Options", product.meshOptions],
    ["Moisture Guidance", product.moistureGuidance],
    ["Private Label", product.privateLabel],
    ["MOQ", product.moq],
  ];

  return (
    <>
      <section className="grid min-h-screen items-center gap-10 px-5 pb-20 pt-36 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:pt-44">
        <div className="mx-auto w-full max-w-7xl contents">
          <Reveal className="mx-auto w-full max-w-xl lg:ml-auto">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-[#d9b46c]">
              Product Detail
            </p>
            <h1 className="font-display text-5xl leading-tight text-white sm:text-7xl">
              {product.name}
            </h1>
            <p className="mt-7 text-xl leading-9 text-white/66">{product.description}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <PrimaryButton href="/contact">Inquire About This Product</PrimaryButton>
              <SecondaryButton href="/products">All Products</SecondaryButton>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="mx-auto w-full max-w-xl lg:mr-auto">
            <VisualProduct product={product} />
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">
          {specs.map(([label, value], index) => (
            <Reveal key={label} delay={index * 0.04}>
              <div className="glass h-full rounded-[1.75rem] p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d9b46c]">
                  {label}
                </p>
                <p className="mt-5 text-lg leading-8 text-white/72">{value}</p>
              </div>
            </Reveal>
          ))}
          <Reveal>
            <div className="glass h-full rounded-[1.75rem] p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d9b46c]">
                Packaging Options
              </p>
              <ul className="mt-5 grid gap-3 text-white/72">
                {product.packagingOptions.map((option) => (
                  <li key={option}>{option}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-10 max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#d9b46c]">
              Related Products
            </p>
            <h2 className="font-display text-4xl text-white sm:text-6xl">
              Continue building your import range.
            </h2>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {getRelatedProducts(product.slug).map((related) => (
              <ProductCard key={related.slug} product={related} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
