import { requireAdmin } from "@/lib/auth/session";
import { handleApiError, jsonError, jsonSuccess } from "@/lib/api-response";
import { updateOrderStatus } from "@/lib/store";

const STATUSES = ["pending", "confirmed", "shipped", "delivered", "cancelled"];

export async function PATCH(request, { params }) {
  try {
    await requireAdmin();
    const { id } = await params;
    const body = await request.json();
    if (!STATUSES.includes(body.orderStatus)) return jsonError("Unknown status", 400);
    const order = updateOrderStatus(id, body.orderStatus);
    if (!order) return jsonError("Order not found", 404);
    return jsonSuccess({ order });
  } catch (error) {
    return handleApiError(error);
  }
}
