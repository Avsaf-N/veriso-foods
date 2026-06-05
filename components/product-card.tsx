import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group product-glow block h-full rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-5 transition duration-500 hover:-translate-y-2 hover:border-[#d9b46c]/45 hover:bg-white/[0.08]"
    >
      <div className="relative mb-7 h-56 overflow-hidden rounded-[1.35rem] bg-black/35">
        <Image
          src={product.image}
          alt={`${product.name} from Veriso Foods`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      </div>
      <h3 className="text-2xl font-semibold text-white">{product.name}</h3>
      <p className="mt-3 leading-7 text-white/62">{product.shortDescription}</p>
      <p className="mt-5 text-sm font-semibold text-[#d9b46c]">View specifications</p>
    </Link>
  );
}
