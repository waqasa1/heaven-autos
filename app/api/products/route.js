import { jsonSuccess } from "@/lib/api-response";
import { queryProducts } from "@/lib/catalog";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const result = queryProducts({
    page: Number(searchParams.get("page") || 1),
    category: searchParams.get("category") || "",
    make: searchParams.get("make") || "",
    model: searchParams.get("model") || "",
    q: searchParams.get("q") || "",
    sort: searchParams.get("sort") || "featured",
  });
  return jsonSuccess(result);
}
