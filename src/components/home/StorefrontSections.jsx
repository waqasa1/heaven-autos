"use client";

import Link from "next/link";

const BRANDS = [
  { name: "Black Odor", q: "odor" },
  { name: "Areon", q: "areon" },
  { name: "Elixir", q: "elixir" },
  { name: "Meguiar's", q: "meguiar" },
];

const HOT = [
  { title: "Sun Shades", text: "QuikSlide custom fit", href: "/shop?category=shades-mats", icon: "wb_sunny" },
  { title: "Floor Mats", text: "7D and 10D exact fit", href: "/shop?q=mats", icon: "layers" },
  { title: "Electronics", text: "Android panels and dash cams", href: "/shop?category=led-tech", icon: "android" },
  { title: "Car Care", text: "Ceramic and interior chemicals", href: "/shop?category=detailing", icon: "water_drop" },
  { title: "Exterior", text: "Visors, covers, and kits", href: "/shop?category=exterior", icon: "directions_car" },
];

const MODELS = [
  { title: "BYD Atto 3 2025–2026", href: "/shop?q=atto" },
  { title: "BYD Shark 2025–2026", href: "/shop?q=shark" },
  { title: "Haval H6 Facelift", href: "/shop?make=haval" },
  { title: "Toyota Revo Hilux", href: "/shop?q=revo" },
  { title: "Honda Civic", href: "/shop?q=civic" },
  { title: "Changan Oshan X7", href: "/shop?q=oshan" },
  { title: "Suzuki Alto", href: "/shop?make=suzuki&model=alto" },
  { title: "KIA Sportage", href: "/shop?make=kia" },
];

const REASONS = [
  { icon: "straighten", title: "Vehicle-specific fitment", text: "Mats, shades, and panels measured for Toyota, Honda, Suzuki, Kia, Hyundai, MG, Haval, and BYD." },
  { icon: "verified", title: "Premium products", text: "Accessories chosen for heat, dust, and daily use on Pakistani roads, not generic one-size parts." },
  { icon: "auto_fix_high", title: "Studio installation", text: "PPF, ceramic coating, and interior restoration booked at the Lahore studio." },
  { icon: "local_shipping", title: "Nationwide delivery", text: "Tracked courier across Pakistan, with an advance token required to confirm the order." },
];

const FUEL = [
  ["Petrol (Super)", "377.71"],
  ["High Speed Diesel", "391.75"],
  ["Light Speed Diesel", "272.29"],
  ["Kerosene Oil", "329.54"],
];

export function BrandRow() {
  return (
    <section className="px-4 sm:px-8 py-10 border-b border-slate-200">
      <div className="max-w-[1360px] mx-auto">
        <h2 className="font-headline text-2xl font-bold">Top car care brands</h2>
        <p className="text-sm text-slate-500 mt-1">Fresheners, polishes, and detailing products from names shoppers ask for.</p>
        <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3">
          {BRANDS.map((brand) => (
            <Link
              key={brand.name}
              href={`/shop?q=${brand.q}`}
              className="rounded-2xl border border-slate-200 bg-slate-50 py-6 text-center font-headline font-bold hover:border-sky-400"
            >
              {brand.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HotCategories() {
  return (
    <section className="px-4 sm:px-8 py-10 bg-white border-b border-slate-200">
      <div className="max-w-[1360px] mx-auto">
        <h2 className="font-headline text-2xl font-bold">Hot selling categories</h2>
        <div className="mt-5 grid grid-cols-2 lg:grid-cols-5 gap-3">
          {HOT.map((item) => (
            <Link key={item.title} href={item.href} className="rounded-2xl border border-slate-200 p-4 hover:shadow-sm">
              <span className="material-symbols-outlined text-sky-600">{item.icon}</span>
              <p className="mt-2 font-bold">{item.title}</p>
              <p className="text-xs text-slate-500 mt-1">{item.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ModelCollections() {
  return (
    <section className="px-4 sm:px-8 py-10 bg-slate-50 border-b border-slate-200">
      <div className="max-w-[1360px] mx-auto">
        <h2 className="font-headline text-2xl font-bold">Accessories by model</h2>
        <p className="text-sm text-slate-500 mt-1">Open a filtered catalog for the cars customers search most.</p>
        <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {MODELS.map((model) => (
            <Link key={model.title} href={model.href} className="rounded-2xl bg-white border border-slate-200 p-4 font-bold hover:border-sky-400">
              {model.title}
              <span className="block text-xs font-semibold text-sky-700 mt-2">View accessories</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Marquee() {
  const line =
    "Heaven Autos ships car accessories across Pakistan  ·  Advance payment confirms the order  ·  PPF and detailing studio in Lahore  ·  ";
  const copies = [0, 1];
  return (
    <div className="overflow-hidden bg-[#b7db39] text-slate-950">
      <div className="heaven-marquee-track">
        {copies.map((copy) => (
          <p
            key={copy}
            className="heaven-marquee-line py-2.5 pr-0 text-sm font-bold whitespace-nowrap"
            aria-hidden={copy === 1 ? true : undefined}
          >
            {line.repeat(6)}
          </p>
        ))}
      </div>
    </div>
  );
}

export function WhyChoose() {
  return (
    <section className="px-4 sm:px-8 py-12 border-b border-slate-200">
      <div className="max-w-[1360px] mx-auto">
        <h2 className="font-headline text-2xl sm:text-3xl font-bold">Why choose Heaven Autos</h2>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {REASONS.map((reason) => (
            <article key={reason.title} className="rounded-2xl border border-slate-200 p-5">
              <span className="material-symbols-outlined text-sky-600">{reason.icon}</span>
              <h3 className="mt-3 font-bold">{reason.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{reason.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FuelPrices() {
  return (
    <section className="px-4 sm:px-8 py-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-[1360px] mx-auto">
        <h2 className="font-headline text-2xl font-bold">Petrol and diesel prices in Pakistan</h2>
        <p className="text-sm text-slate-500 mt-1">Official revision snapshot for 23 October 2026. Update this table after the next government announcement.</p>
        <table className="mt-5 w-full max-w-xl bg-white border border-slate-200 rounded-2xl overflow-hidden text-sm">
          <thead className="bg-slate-100 text-left">
            <tr>
              <th className="p-3">Type</th>
              <th className="p-3">Price per liter</th>
            </tr>
          </thead>
          <tbody>
            {FUEL.map(([type, price]) => (
              <tr key={type} className="border-t border-slate-100">
                <td className="p-3">{type}</td>
                <td className="p-3 font-bold">PKR {price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function VisitStrip() {
  return (
    <section className="px-4 sm:px-8 py-12">
      <div className="max-w-[1360px] mx-auto grid md:grid-cols-3 gap-4">
        <article className="rounded-2xl border border-slate-200 p-5">
          <h2 className="font-headline text-xl font-bold">Visit</h2>
          <p className="mt-2 text-sm text-slate-600">Montgomery Road and DHA Phase 5, Lahore</p>
          <p className="text-sm text-slate-600">Monday–Saturday, 10 AM – 10 PM</p>
        </article>
        <article className="rounded-2xl border border-slate-200 p-5">
          <h2 className="font-headline text-xl font-bold">Call or WhatsApp</h2>
          <a className="mt-2 block text-sm font-bold text-sky-700" href="tel:+923001234567">+92 300 1234567</a>
          <a className="text-sm font-bold text-[#25D366]" href="https://wa.me/923001234567">Chat on WhatsApp</a>
        </article>
        <article className="rounded-2xl border border-slate-200 p-5">
          <h2 className="font-headline text-xl font-bold">More</h2>
          <div className="mt-2 flex flex-col gap-1 text-sm font-bold text-sky-700">
            <Link href="/contact">Contact</Link>
            <Link href="/about">About</Link>
            <Link href="/shop">Shop all accessories</Link>
          </div>
        </article>
      </div>
    </section>
  );
}
