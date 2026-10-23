import { jsonError, jsonSuccess } from "@/lib/api-response";
import { findOrder, listOrders } from "@/lib/store";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = (searchParams.get("q") || "").trim();
  if (!query) return jsonError("Enter an order number or phone number", 400);

  const byNumber = findOrder(query);
  if (byNumber) return jsonSuccess({ orders: [byNumber] });

  const phone = query.replace(/\s/g, "");
  const orders = listOrders().filter((order) =>
    order.customer.phone.replace(/\s/g, "").includes(phone),
  );
  if (!orders.length) return jsonError("No order found for that reference", 404);
  return jsonSuccess({ orders });
}
