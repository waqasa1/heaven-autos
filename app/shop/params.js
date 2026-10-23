export function readShopParams(searchParams = {}) {
  return {
    category: searchParams.category || "",
    make: searchParams.make || "",
    model: searchParams.model || "",
    q: searchParams.q || "",
    sort: searchParams.sort || "featured",
    page: Math.max(1, parseInt(searchParams.page || "1", 10) || 1),
  };
}

export function shopQuery(params, overrides = {}) {
  const next = { ...params, ...overrides };
  const query = new URLSearchParams();
  if (next.q) query.set("q", next.q);
  if (next.category) query.set("category", next.category);
  if (next.make) query.set("make", next.make);
  if (next.model) query.set("model", next.model);
  if (next.sort && next.sort !== "featured") query.set("sort", next.sort);
  if (next.page && next.page > 1) query.set("page", String(next.page));
  const value = query.toString();
  return value ? `/shop?${value}` : "/shop";
}
