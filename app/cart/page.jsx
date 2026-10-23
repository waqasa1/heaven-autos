"use client";

import Link from "next/link";
import { StoreShell } from "@/components/layout/StoreShell";
import { useCart } from "@/components/store/CartProvider";

export default function CartPage() {
  const cart = useCart();
  const subtotal = cart.items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  return (
    <StoreShell>
      <section className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="font-headline text-3xl font-extrabold">Your cart</h1>
        {cart.items.length === 0 ? (
          <p className="mt-6 text-sm text-slate-500">
            Your cart is empty.{" "}
            <Link href="/shop" className="font-bold text-sky-700">
              Browse the shop
            </Link>
          </p>
        ) : (
          <div className="mt-6 space-y-3">
            {cart.items.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-3 items-center border border-slate-200 rounded-xl p-3"
              >
                <img
                  src={item.product.image}
                  alt=""
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <Link
                    href={`/products/${item.product.slug || item.product.id.replace(/^prod-/, "")}`}
                    className="text-sm font-bold line-clamp-2"
                  >
                    {item.product.name}
                  </Link>
                  <p className="text-xs text-slate-500 mt-1">
                    Rs. {item.product.price.toLocaleString("en-PK")}
                  </p>
                </div>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(event) =>
                    cart.updateQuantity(item.product.id, Number(event.target.value))
                  }
                  className="w-16 rounded-lg border border-slate-200 px-2 py-1 text-sm"
                />
                <button
                  type="button"
                  onClick={() => cart.removeItem(item.product.id)}
                  className="text-xs font-bold text-rose-600"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="flex items-center justify-between pt-4">
              <p className="font-bold">Subtotal Rs. {subtotal.toLocaleString("en-PK")}</p>
              <Link
                href="/checkout"
                className="bg-slate-900 text-white text-sm font-bold px-5 py-3 rounded-xl"
              >
                Checkout
              </Link>
            </div>
          </div>
        )}
      </section>
    </StoreShell>
  );
}
