"use client";

import { useEffect, useState } from "react";
import { AdminLayout } from "@/components/layout/AdminLayout";

export default function AdminDashboardPage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/admin/dashboard")
      .then((response) => response.json())
      .then((body) => {
        if (!body.success) setError(body.message || "Unable to load the dashboard");
        else setData(body);
      });
  }, []);

  const metrics = data?.metrics;

  return (
    <AdminLayout>
      <h1 className="font-headline text-2xl font-extrabold">Dashboard</h1>
      {error && <p className="mt-4 text-sm text-rose-600">{error}</p>}
      {metrics && (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Orders", metrics.totalOrders],
            ["Revenue", `Rs. ${metrics.revenue.toLocaleString("en-PK")}`],
            ["Pending", metrics.pendingOrders],
            ["Customers", metrics.customers],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl bg-white border border-slate-200 p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-slate-400">{label}</p>
              <p className="mt-1 font-headline text-2xl font-extrabold">{value}</p>
            </div>
          ))}
        </div>
      )}
      {data?.lowStock?.length > 0 && (
        <div className="mt-8 rounded-2xl bg-white border border-slate-200 p-5">
          <h2 className="font-bold">Low stock</h2>
          <ul className="mt-3 space-y-1 text-sm">
            {data.lowStock.map((item) => (
              <li key={item.sku}>
                {item.name} — {item.stock} left ({item.sku})
              </li>
            ))}
          </ul>
        </div>
      )}
      {data?.recentOrders?.length > 0 && (
        <div className="mt-8 rounded-2xl bg-white border border-slate-200 p-5 overflow-x-auto">
          <h2 className="font-bold">Recent orders</h2>
          <table className="mt-3 w-full text-sm">
            <tbody>
              {data.recentOrders.map((order) => (
                <tr key={order.id} className="border-t border-slate-100">
                  <td className="py-2 font-bold">{order.orderNumber}</td>
                  <td>{order.customer.name}</td>
                  <td>Rs. {order.total.toLocaleString("en-PK")}</td>
                  <td className="capitalize">{order.orderStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </AdminLayout>
  );
}
