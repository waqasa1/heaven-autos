import { requireAdmin } from "@/lib/auth/session";
import { handleApiError, jsonSuccess } from "@/lib/api-response";
import { catalogProducts } from "@/lib/catalog";
import { listOrders, listUsers } from "@/lib/store";

export async function GET() {
  try {
    await requireAdmin();
    const orders = listOrders();
    const revenue = orders
      .filter((order) => order.orderStatus !== "cancelled")
      .reduce((sum, order) => sum + order.total, 0);
    return jsonSuccess({
      metrics: {
        totalOrders: orders.length,
        revenue,
        pendingOrders: orders.filter((order) => order.orderStatus === "pending").length,
        customers: listUsers().filter((user) => user.role === "customer").length,
        products: catalogProducts().length,
      },
      recentOrders: orders.slice(0, 6),
      lowStock: catalogProducts()
        .filter((product) => product.stock <= 12)
        .map((product) => ({
          name: product.name,
          sku: product.sku,
          stock: product.stock,
        })),
    });
  } catch (error) {
    return handleApiError(error);
  }
}
