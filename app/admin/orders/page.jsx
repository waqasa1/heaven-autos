"use client";

import { useEffect, useState } from "react";
import { AdminLayout } from "@/components/layout/AdminLayout";

const STATUSES = ["pending", "confirmed", "shipped", "delivered", "cancelled"];

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState([]);

  const load = () => {
    fetch("/api/admin/orders")
      .then((response) => response.json())
      .then((body) => setOrders(body.orders || []));
  };

  useEffect(() => {
    load();
  }, []);

  const update = async (id, orderStatus) => {
    await fetch(`/api/admin/orders/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderStatus }),
    });
    load();
  };

  return (
    <AdminLayout>
      <h1 className="font-headline text-2xl font-extrabold">Orders</h1>
      <div className="mt-6 overflow-x-auto rounded-2xl bg-white border border-slate-200">
        <table className="w-full text-sm">
          <thead className="text-left text-xs uppercase tracking-wide text-slate-400">
            <tr>
              <th className="p-3">Order</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t border-slate-100">
                <td className="p-3 font-bold">{order.orderNumber}</td>
                <td>
                  {order.customer.name}
                  <div className="text-xs text-slate-500">{order.customer.phone}</div>
                </td>
                <td>Rs. {order.total.toLocaleString("en-PK")}</td>
                <td>
                  <select
                    value={order.orderStatus}
                    onChange={(event) => update(order.id, event.target.value)}
                    className="rounded-lg border border-slate-200 px-2 py-1"
                  >
                    {STATUSES.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
            {orders.length === 0 && (
              <tr>
                <td className="p-4 text-slate-500" colSpan={4}>
                  No orders yet. A checkout from the shop will show up here.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
