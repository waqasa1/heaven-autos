import { PRODUCTS, VEHICLE_DATABASE } from "@/data/mockData";

export const PAGE_SIZE = 4;

export const CATEGORIES = [
  { id: "shades-mats", label: "Interior (Mats & Sun Shades)" },
  { id: "exterior", label: "Exterior (Bodykits & Visors)" },
  { id: "led-tech", label: "Electronics & Bi-LED Lights" },
  { id: "detailing", label: "Car Care & Chemicals" },
];

const CATALOG_CATEGORIES = new Set(CATEGORIES.map((category) => category.id));

export function productSlug(product) {
  return product.slug || String(product.id).replace(/^prod-/, "");
}

export function catalogProducts() {
  return PRODUCTS.filter((product) => CATALOG_CATEGORIES.has(product.category)).map(
    (product) => ({ ...product, slug: productSlug(product) }),
  );
}

export function getProductBySlug(slug) {
  return catalogProducts().find((product) => product.slug === slug) || null;
}

export function queryProducts({
  page = 1,
  category = "",
  make = "",
  model = "",
  q = "",
  sort = "featured",
} = {}) {
  let list = catalogProducts();

  if (category) list = list.filter((product) => product.category === category);
  if (make) {
    list = list.filter(
      (product) =>
        product.compatibleMakes.includes("all") ||
        product.compatibleMakes.includes(make),
    );
  }
  if (model) {
    list = list.filter(
      (product) =>
        product.compatibleModels.includes("all") ||
        product.compatibleModels.includes(model),
    );
  }
  if (q) {
    const needle = q.toLowerCase();
    list = list.filter((product) =>
      [product.name, product.subtitle, product.description, product.sku]
        .join(" ")
        .toLowerCase()
        .includes(needle),
    );
  }

  if (sort === "price_asc") list = [...list].sort((a, b) => a.price - b.price);
  else if (sort === "price_desc") list = [...list].sort((a, b) => b.price - a.price);
  else if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);

  const total = list.length;
  const pages = Math.max(1, Math.ceil(total / PAGE_SIZE) || 1);
  const safePage = Math.min(Math.max(1, page), pages);
  const start = (safePage - 1) * PAGE_SIZE;

  return {
    products: list.slice(start, start + PAGE_SIZE),
    total,
    pages,
    page: safePage,
  };
}

export function categoryLabel(id) {
  return CATEGORIES.find((category) => category.id === id)?.label || "All products";
}

export function makeLabel(id) {
  return VEHICLE_DATABASE[id]?.label || id;
}

export { VEHICLE_DATABASE };
