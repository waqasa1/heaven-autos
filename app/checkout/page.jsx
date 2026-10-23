"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { StoreShell } from "@/components/layout/StoreShell";
import { useCart } from "@/components/store/CartProvider";

const CITIES = ["Lahore", "Karachi", "Islamabad", "Rawalpindi", "Multan", "Faisalabad", "Peshawar"];

export default function CheckoutPage() {
  const cart = useCart();
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const subtotal = cart.items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );
  const shippingFee = cart.items.length === 0 || subtotal >= 5000 ? 0 : 299;

  const submit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.get("name"),
        phone: form.get("phone"),
        city: form.get("city"),
        address: form.get("address"),
        notes: form.get("notes"),
        paymentMethod: form.get("paymentMethod"),
        items: cart.items.map((item) => ({
          productId: item.product.id,
          name: item.product.name,
          price: item.product.price,
          quantity: item.quantity,
          image: item.product.image,
        })),
      }),
    });
    const data = await response.json();
    setLoading(false);
    if (!data.success) {
      setError(data.message || "Could not place the order");
      return;
    }
    cart.clear();
    router.push(`/order-success/${data.order.orderNumber}`);
  };

  return (
    <StoreShell>
      <section className="max-w-xl mx-auto px-4 py-8">
        <h1 className="font-headline text-3xl font-extrabold">Checkout</h1>
        <p className="mt-2 text-sm text-slate-500">
          Total Rs. {(subtotal + shippingFee).toLocaleString("en-PK")}
          {shippingFee === 0 ? " · free shipping" : ` · shipping Rs. ${shippingFee}`}
        </p>
        {cart.items.length === 0 ? (
          <p className="mt-6 text-sm text-slate-500">Add something to your cart first.</p>
        ) : (
          <form onSubmit={submit} className="mt-6 space-y-4">
            <input name="name" required placeholder="Full name" className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm" />
            <input name="phone" required placeholder="Phone" className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm" />
            <select name="city" className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm">
              {CITIES.map((city) => (
                <option key={city}>{city}</option>
              ))}
            </select>
            <textarea name="address" required placeholder="Delivery address" className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm" rows={3} />
            <textarea name="notes" placeholder="Order notes" className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm" rows={2} />
            <select name="paymentMethod" className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm">
              <option value="cod">Cash on delivery + advance token</option>
              <option value="advance">Full advance</option>
            </select>
            {error && <p className="text-sm font-medium text-rose-600">{error}</p>}
            <button type="submit" disabled={loading} className="w-full bg-slate-900 text-white font-bold py-3 rounded-xl">
              {loading ? "Placing order..." : "Place order"}
            </button>
          </form>
        )}
      </section>
    </StoreShell>
  );
}
