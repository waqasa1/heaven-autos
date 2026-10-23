import Link from "next/link";
import { notFound } from "next/navigation";
import { StoreShell } from "@/components/layout/StoreShell";
import { getProductBySlug, categoryLabel } from "@/lib/catalog";
import { ProductPurchase } from "./ProductPurchase";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product not found — Heaven Autos" };
  return { title: `${product.name} — Heaven Autos`, description: product.description };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <StoreShell activeCategory={product.category}>
      <article className="max-w-[1100px] mx-auto px-4 sm:px-8 py-8 grid lg:grid-cols-2 gap-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-2xl border border-slate-200 object-cover bg-slate-50"
        />
        <div>
          <Link href={`/shop?category=${product.category}`} className="text-xs font-bold text-sky-700">
            {categoryLabel(product.category)}
          </Link>
          <h1 className="font-headline text-3xl font-extrabold text-slate-950 mt-2">
            {product.name}
          </h1>
          <p className="text-sm text-slate-500 mt-2">{product.subtitle}</p>
          <p className="mt-4 text-2xl font-black">
            Rs. {product.price.toLocaleString("en-PK")}
            <span className="ml-2 text-sm font-medium text-slate-400 line-through">
              Rs. {product.originalPrice.toLocaleString("en-PK")}
            </span>
          </p>
          <p className="mt-2 text-xs font-semibold text-emerald-700">{product.fitmentBadge}</p>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">{product.description}</p>
          <ul className="mt-4 space-y-1 text-sm text-slate-700">
            {(product.features || []).map((feature) => (
              <li key={feature}>• {feature}</li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-slate-500">
            SKU {product.sku} · {product.stock} in stock · {product.warranty}
          </p>
          <ProductPurchase product={product} />
        </div>
      </article>
    </StoreShell>
  );
}
