import Link from "next/link";
import { StoreShell } from "@/components/layout/StoreShell";
import { ProductCard } from "@/components/catalog/ProductCard";
import {
  CATEGORIES,
  VEHICLE_DATABASE,
  categoryLabel,
  makeLabel,
  queryProducts,
} from "@/lib/catalog";
import { readShopParams, shopQuery } from "./params";

export async function generateMetadata({ searchParams }) {
  const params = readShopParams(await searchParams);
  const title = params.q
    ? `Search: ${params.q}`
    : params.category
      ? categoryLabel(params.category)
      : "Shop";
  return { title: `${title} — Heaven Autos` };
}

export default async function ShopPage({ searchParams }) {
  const params = readShopParams(await searchParams);
  const { products, total, pages, page } = queryProducts(params);
  const heading = params.q
    ? `Results for “${params.q}”`
    : params.make
      ? `${makeLabel(params.make)} accessories`
      : params.category
        ? categoryLabel(params.category)
        : "All accessories";

  return (
    <StoreShell activeCategory={params.category || "all"}>
      <section className="max-w-[1360px] mx-auto px-4 sm:px-8 pt-4 pb-8">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-sky-600">
          Catalog
        </p>
        <h1 className="font-headline text-3xl sm:text-4xl font-extrabold text-slate-950 mt-1">
          {heading}
        </h1>
        <p className="text-sm text-slate-500 mt-2">{total} products</p>

        <form method="get" action="/shop" className="mt-6 grid gap-3 md:grid-cols-5">
          <input
            name="q"
            defaultValue={params.q}
            placeholder="Search mats, lights, covers..."
            className="md:col-span-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm"
          />
          <select
            name="category"
            defaultValue={params.category}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm"
          >
            <option value="">All categories</option>
            {CATEGORIES.map((category) => (
              <option key={category.id} value={category.id}>
                {category.label}
              </option>
            ))}
          </select>
          <select
            name="make"
            defaultValue={params.make}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm"
          >
            <option value="">All makes</option>
            {Object.entries(VEHICLE_DATABASE).map(([id, make]) => (
              <option key={id} value={id}>
                {make.label}
              </option>
            ))}
          </select>
          <select
            name="sort"
            defaultValue={params.sort}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm"
          >
            <option value="featured">Featured</option>
            <option value="price_asc">Price: low to high</option>
            <option value="price_desc">Price: high to low</option>
            <option value="rating">Top rated</option>
          </select>
          {params.model ? <input type="hidden" name="model" value={params.model} /> : null}
          <button
            type="submit"
            className="md:col-span-5 justify-self-start bg-slate-900 text-white text-sm font-bold px-5 py-2.5 rounded-xl"
          >
            Apply filters
          </button>
        </form>

        {products.length === 0 ? (
          <p className="mt-10 text-sm text-slate-500">
            No accessories match these filters.{" "}
            <Link href="/shop" className="font-bold text-sky-700">
              Clear filters
            </Link>
          </p>
        ) : (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {pages > 1 && (
          <nav className="mt-8 flex items-center gap-2" aria-label="Pagination">
            {Array.from({ length: pages }, (_, index) => index + 1).map((number) => (
              <Link
                key={number}
                href={shopQuery(params, { page: number })}
                className={`w-9 h-9 rounded-lg text-sm font-bold flex items-center justify-center border ${
                  number === page
                    ? "bg-slate-900 text-white border-slate-900"
                    : "bg-white text-slate-700 border-slate-200"
                }`}
              >
                {number}
              </Link>
            ))}
          </nav>
        )}
      </section>
    </StoreShell>
  );
}
