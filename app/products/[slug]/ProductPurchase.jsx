"use client";

import Link from "next/link";
import { useCart } from "@/components/store/CartProvider";

export function ProductPurchase({ product }) {
  const cart = useCart();

  return (
    <div className="mt-6 flex flex-wrap gap-3">
      <button
        type="button"
        onClick={() => cart.addItem(product, 1)}
        className="bg-slate-900 text-white font-bold px-6 py-3 rounded-xl"
      >
        Add to Cart
      </button>
      <Link
        href="/checkout"
        onClick={() => cart.addItem(product, 1)}
        className="border border-slate-200 font-bold px-6 py-3 rounded-xl"
      >
        Buy now
      </Link>
    </div>
  );
}
