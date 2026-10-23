import { requireAdmin } from "@/lib/auth/session";
import { handleApiError, jsonSuccess } from "@/lib/api-response";
import { listOrders } from "@/lib/store";

export async function GET() {
  try {
    await requireAdmin();
    return jsonSuccess({ orders: listOrders() });
  } catch (error) {
    return handleApiError(error);
  }
}
