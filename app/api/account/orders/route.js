import { requireAuth } from "@/lib/auth/session";
import { handleApiError, jsonSuccess } from "@/lib/api-response";
import { listOrders } from "@/lib/store";

export async function GET() {
  try {
    const session = await requireAuth();
    const orders = listOrders().filter((order) => order.userId === session.userId);
    return jsonSuccess({ orders });
  } catch (error) {
    return handleApiError(error);
  }
}
