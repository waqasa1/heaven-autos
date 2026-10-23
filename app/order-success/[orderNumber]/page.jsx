import Link from "next/link";
import { StoreShell } from "@/components/layout/StoreShell";
import { findOrder } from "@/lib/store";

export default async function OrderSuccessPage({ params }) {
  const { orderNumber } = await params;
  const order = findOrder(orderNumber);

  return (
    <StoreShell>
      <section className="max-w-lg mx-auto px-4 py-16 text-center">
        <h1 className="font-headline text-3xl font-extrabold">Order received</h1>
        <p className="mt-3 text-sm text-slate-600">
          Reference <span className="font-bold">{orderNumber}</span>
          {order ? ` · Rs. ${order.total.toLocaleString("en-PK")}` : ""}
        </p>
        <p className="mt-2 text-sm text-slate-500">
          Our dispatch desk will confirm the advance token on WhatsApp.
        </p>
        <Link href={`/track-order?q=${orderNumber}`} className="inline-block mt-6 text-sm font-bold text-sky-700">
          Track this order
        </Link>
      </section>
    </StoreShell>
  );
}
