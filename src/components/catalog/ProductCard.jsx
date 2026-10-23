"use client";

import Link from "next/link";
import { useCart } from "@/components/store/CartProvider";

export function ProductCard({ product }) {
  const cart = useCart();
  const wished = cart.wishlistIds.includes(product.id);

  return (
    <article className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all p-4 flex flex-col">
      <Link
        href={`/products/${product.slug}`}
        className="relative h-56 w-full rounded-xl overflow-hidden bg-slate-50 border border-slate-200"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-3 left-3 bg-rose-600 text-white text-[11px] px-2 py-0.5 rounded font-extrabold">
          -{product.discountPercent}% OFF
        </span>
      </Link>
      <p className="mt-3 text-[11px] font-bold uppercase tracking-wide text-slate-400">
        {product.sku}
      </p>
      <h2 className="font-headline text-base font-bold text-slate-900 mt-1 line-clamp-2">
        <Link href={`/products/${product.slug}`} className="hover:text-sky-600">
          {product.name}
        </Link>
      </h2>
      <p className="mt-2 text-sm font-bold text-slate-950">
        Rs. {product.price.toLocaleString("en-PK")}{" "}
        <span className="text-xs font-medium text-slate-400 line-through">
          Rs. {product.originalPrice.toLocaleString("en-PK")}
        </span>
      </p>
      <div className="mt-4 flex gap-2">
        <button
          type="button"
          onClick={() => cart.addItem(product, 1)}
          className="flex-1 bg-slate-900 text-white text-xs font-bold py-2.5 rounded-xl"
        >
          Add to Cart
        </button>
        <button
          type="button"
          onClick={() => cart.toggleWishlist(product)}
          className="px-3 rounded-xl border border-slate-200 text-slate-600"
          aria-label="Save to wishlist"
        >
          <span className="material-symbols-outlined text-[18px]">
            {wished ? "favorite" : "favorite_border"}
          </span>
        </button>
      </div>
    </article>
  );
}
