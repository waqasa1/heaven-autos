"use client";

import { useState } from "react";
import { StoreShell } from "@/components/layout/StoreShell";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const text = encodeURIComponent(
      `Heaven Autos enquiry\nName: ${form.get("name")}\nPhone: ${form.get("phone")}\n${form.get("message")}`,
    );
    window.open(`https://wa.me/923001234567?text=${text}`, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <StoreShell>
      <section className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="font-headline text-4xl font-extrabold">Contact us</h1>
        <p className="mt-3 text-slate-600">Montgomery Road and DHA Phase 5, Lahore. Monday–Saturday, 10 AM – 10 PM.</p>
        <p className="mt-1 font-bold">+92 300 1234567 · orders@heavenautos.pk</p>
        <form onSubmit={submit} className="mt-8 space-y-3">
          <input name="name" required placeholder="Name" className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm" />
          <input name="phone" required placeholder="Phone" className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm" />
          <textarea name="message" required placeholder="Which car and accessory do you need?" rows={4} className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm" />
          <button type="submit" className="bg-slate-900 text-white font-bold px-5 py-3 rounded-xl">Send on WhatsApp</button>
          {sent && <p className="text-sm text-emerald-700">WhatsApp should be open with your message.</p>}
        </form>
      </section>
    </StoreShell>
  );
}
