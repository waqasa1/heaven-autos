"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { StoreShell } from "@/components/layout/StoreShell";

function Tracker() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [orders, setOrders] = useState(null);
  const [error, setError] = useState("");

  const submit = async (event) => {
    event.preventDefault();
    setError("");
    const response = await fetch(`/api/orders/track?q=${encodeURIComponent(query)}`);
    const data = await response.json();
    if (!data.success) {
      setOrders([]);
      setError(data.message);
      return;
    }
    setOrders(data.orders);
  };

  return (
    <section className="max-w-xl mx-auto px-4 py-10">
      <h1 className="font-headline text-3xl font-extrabold">Track your order</h1>
      <form onSubmit={submit} className="mt-6 flex gap-2">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="HA-10001 or phone number"
          className="flex-1 rounded-xl border border-slate-200 px-3 py-2.5 text-sm"
        />
        <button type="submit" className="bg-slate-900 text-white text-sm font-bold px-4 rounded-xl">
          Track
        </button>
      </form>
      {error && <p className="mt-4 text-sm text-rose-600">{error}</p>}
      {orders?.map((order) => (
        <div key={order.id} className="mt-4 rounded-2xl border border-slate-200 p-4 text-sm">
          <p className="font-bold">
            {order.orderNumber} · <span className="capitalize">{order.orderStatus}</span>
          </p>
          <p className="text-slate-500 mt-1">
            {order.customer.name} · {order.customer.city} · Rs. {order.total.toLocaleString("en-PK")}
          </p>
        </div>
      ))}
    </section>
  );
}

export default function TrackOrderPage() {
  return (
    <StoreShell>
      <Suspense>
        <Tracker />
      </Suspense>
    </StoreShell>
  );
}
