import Link from "next/link";
import { StoreShell } from "@/components/layout/StoreShell";

export const metadata = {
  title: "About — Heaven Autos",
  description: "Heaven Autos sells exact-fit car accessories and studio PPF in Pakistan. We do not buy or sell cars.",
};

export default function AboutPage() {
  return (
    <StoreShell>
      <article className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-sky-600">About</p>
        <h1 className="font-headline text-4xl font-extrabold mt-2">A car accessories shop, not a showroom</h1>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Heaven Autos sells floor mats, sun shades, lighting, Android panels, covers, and car-care chemicals, and books paint protection film and detailing at the Lahore studio. We do not buy, sell, or trade vehicles.
        </p>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Fitment is model-specific for Toyota, Honda, Suzuki, Haval, Changan, Kia, Hyundai, MG, and BYD. Orders ship nationwide after an advance token confirms the booking. Studio work is installed in Lahore.
        </p>
        <Link href="/contact" className="inline-block mt-6 font-bold text-sky-700">Contact the studio</Link>
      </article>
    </StoreShell>
  );
}
