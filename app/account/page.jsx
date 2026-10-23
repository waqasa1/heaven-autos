"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { StoreShell } from "@/components/layout/StoreShell";

export default function AccountPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((response) => response.json())
      .then(async (data) => {
        setUser(data.user);
        const tracked = await fetch("/api/account/orders");
        if (tracked.ok) {
          const body = await tracked.json();
          setOrders(body.orders || []);
        }
      });
  }, []);

  const logout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/");
    router.refresh();
  };

  return (
    <StoreShell>
      <section className="max-w-3xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="font-headline text-3xl font-extrabold">Account</h1>
            <p className="text-sm text-slate-500 mt-1">
              {user ? `${user.name} · ${user.email}` : "Loading..."}
            </p>
          </div>
          <button type="button" onClick={logout} className="text-sm font-bold text-slate-600">
            Sign out
          </button>
        </div>
        <h2 className="mt-8 font-headline text-xl font-bold">Your orders</h2>
        {orders.length === 0 ? (
          <p className="mt-4 text-sm text-slate-500">No orders matched this email yet.</p>
        ) : (
          <ul className="mt-4 space-y-2">
            {orders.map((order) => (
              <li key={order.id} className="border border-slate-200 rounded-xl p-3 text-sm">
                <span className="font-bold">{order.orderNumber}</span> · Rs.{" "}
                {order.total.toLocaleString("en-PK")} · {order.orderStatus}
              </li>
            ))}
          </ul>
        )}
      </section>
    </StoreShell>
  );
}
