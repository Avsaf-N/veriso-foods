import Image from "next/image";
import { Product } from "@/lib/products";

export function VisualProduct({ product }: { product: Product }) {
  return (
    <div className="product-glow relative min-h-[26rem] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-6">
      <Image
        src={product.image}
        alt={`${product.name} premium dehydrated ingredient`}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover"
        priority={product.slug === "onion-powder"}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
      <div className="absolute bottom-8 left-8 right-8 rounded-3xl border border-white/10 bg-black/55 p-5 backdrop-blur-xl">
        <p className="text-sm font-semibold text-white">{product.name}</p>
        <p className="mt-2 text-sm text-white/55">{product.useCase}</p>
      </div>
    </div>
  );
}
