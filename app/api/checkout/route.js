import { getSession } from "@/lib/auth/session";
import { handleApiError, jsonError, jsonSuccess } from "@/lib/api-response";
import { createOrder } from "@/lib/store";

export async function POST(request) {
  try {
    const body = await request.json();
    const name = String(body.name || "").trim();
    const phone = String(body.phone || "").trim();
    const city = String(body.city || "").trim();
    const address = String(body.address || "").trim();
    const items = Array.isArray(body.items) ? body.items : [];

    if (!name || !phone || !address) {
      return jsonError("Name, phone, and address are required", 400);
    }
    if (!items.length) return jsonError("Your cart is empty", 400);

    const session = await getSession();
    const subtotal = items.reduce(
      (sum, item) => sum + Number(item.price) * Number(item.quantity),
      0,
    );
    const shippingFee = subtotal >= 5000 ? 0 : 299;
    const order = createOrder({
      userId: session?.userId || null,
      customer: { name, phone, city, address, notes: String(body.notes || "") },
      items: items.map((item) => ({
        productId: item.productId,
        name: item.name,
        price: Number(item.price),
        quantity: Number(item.quantity),
        image: item.image,
      })),
      paymentMethod: body.paymentMethod === "advance" ? "advance" : "cod",
      subtotal,
      shippingFee,
      total: subtotal + shippingFee,
    });

    return jsonSuccess({ order }, 201);
  } catch (error) {
    return handleApiError(error);
  }
}
