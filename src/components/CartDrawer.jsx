export const CartDrawer = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
}) => {
  if (!isOpen) return null;
  const FREE_SHIPPING_THRESHOLD = 5000;
  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );
  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;
  const shippingFee = items.length === 0 ? 0 : isFreeShipping ? 0 : 299;
  const total = subtotal + shippingFee;
  const progressPercent = Math.min(
    100,
    Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100),
  );
  const waCartMessage = encodeURIComponent(
    `Hi Heaven Autos! I would like to place an order for my cart:\n` +
      items
        .map(
          (item, idx) =>
            `${idx + 1}. ${item.product.name} (Qty: ${item.quantity}) - Rs. ${(item.product.price * item.quantity).toLocaleString("en-PK")}`,
        )
        .join("\n") +
      `\n\nTotal: Rs. ${total.toLocaleString("en-PK")}\nPlease confirm availability and share advance payment details.`,
  );
  const waCartLink = `https://wa.me/923001234567?text=${waCartMessage}`;
  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end">
      <div
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between animate-slide-left relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sky-600 text-[24px]">
              shopping_cart
            </span>
            <h3 className="font-headline text-lg font-bold text-slate-900">
              Your Shopping Cart (
              {items.reduce((acc, it) => acc + it.quantity, 0)})
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="bg-sky-50 p-3.5 border-b border-sky-100">
          <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-1.5">
            {isFreeShipping ? (
              <span className="text-emerald-700 flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">
                  verified
                </span>
                Free Nationwide Express Delivery Unlocked!
              </span>
            ) : (
              <span>
                Add{" "}
                <strong className="text-sky-700 font-extrabold">
                  Rs.{" "}
                  {(FREE_SHIPPING_THRESHOLD - subtotal).toLocaleString("en-PK")}
                </strong>{" "}
                more for Free Delivery
              </span>
            )}
            <span className="text-[11px] text-slate-500">
              {progressPercent}%
            </span>
          </div>
          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-sky-600 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Items List */}
        <div className="p-4 overflow-y-auto flex-1 flex flex-col gap-3">
          {items.length === 0 ? (
            <div className="text-center py-16 my-auto">
              <span className="material-symbols-outlined text-[54px] text-slate-300">
                production_quantity_limits
              </span>
              <p className="font-headline text-base font-bold text-slate-800 mt-2">
                Your cart is empty
              </p>
              <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                Explore our hot-selling car accessories and 7D/10D mats custom
                engineered for your vehicle.
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.product.id}
                className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex gap-3 items-center"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-16 h-16 rounded-lg object-cover border border-slate-200 bg-white shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-slate-900 truncate">
                    {item.product.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 font-medium">
                    Rs. {item.product.price.toLocaleString("en-PK")} each
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-slate-200 rounded-md bg-white">
                      <button
                        type="button"
                        onClick={() =>
                          onUpdateQuantity(item.product.id, item.quantity - 1)
                        }
                        className="px-2 py-0.5 text-xs text-slate-600 hover:bg-slate-100 font-bold"
                      >
                        -
                      </button>
                      <span className="px-2.5 py-0.5 text-xs font-bold text-slate-900">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          onUpdateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="px-2 py-0.5 text-xs text-slate-600 hover:bg-slate-100 font-bold"
                      >
                        +
                      </button>
                    </div>
                    <span className="text-xs font-bold text-slate-950">
                      Rs.{" "}
                      {(item.product.price * item.quantity).toLocaleString(
                        "en-PK",
                      )}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => onRemoveItem(item.product.id)}
                  className="text-slate-400 hover:text-rose-600 p-1"
                  title="Remove item"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    delete
                  </span>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer & Checkout Action */}
        {items.length > 0 && (
          <div className="p-4 border-t border-slate-200 bg-slate-50">
            {/* Advance payment notice */}
            <div className="p-2.5 bg-amber-50 border border-amber-200 rounded-xl mb-3 flex items-start gap-2 text-[11px] text-amber-900">
              <span className="material-symbols-outlined text-[16px] text-amber-600 shrink-0 mt-0.5">
                info
              </span>
              <span>
                <strong>Advance Token Policy:</strong> Rs. 500 advance payment
                via JazzCash/EasyPaisa/Bank required to reserve inventory &
                confirm courier dispatch. Balance on COD.
              </span>
            </div>

            <div className="flex flex-col gap-1.5 text-xs mb-3">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span className="font-semibold text-slate-900">
                  Rs. {subtotal.toLocaleString("en-PK")}
                </span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Nationwide Shipping</span>
                <span className="font-semibold text-slate-900">
                  {shippingFee === 0 ? (
                    <span className="text-emerald-600 font-bold">FREE</span>
                  ) : (
                    `Rs. ${shippingFee}`
                  )}
                </span>
              </div>
              <div className="flex justify-between text-sm font-bold text-slate-950 pt-2 border-t border-slate-200">
                <span>Estimated Total</span>
                <span className="font-headline text-base">
                  Rs. {total.toLocaleString("en-PK")}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={onProceedToCheckout}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">
                  local_shipping
                </span>
                Proceed to Checkout
              </button>
              <a
                href={waCartLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-emerald-600 text-white py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all text-center cursor-pointer shadow-xs"
              >
                <span className="material-symbols-outlined text-[18px]">
                  chat
                </span>
                Order via WhatsApp Desk
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
