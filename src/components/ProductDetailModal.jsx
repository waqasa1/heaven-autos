import { useState } from "react";
export const ProductDetailModal = ({
  product,
  onClose,
  onAddToCart,
  activeVehicle,
}) => {
  const [quantity, setQuantity] = useState(1);
  if (!product) return null;
  const waMessage = encodeURIComponent(
    `Hi Heaven Autos! I would like to order: ${product.name} (Quantity: ${quantity}, Total: Rs. ${(product.price * quantity).toLocaleString("en-PK")}). Please send payment details.`,
  );
  const waLink = `https://wa.me/923001234567?text=${waMessage}`;
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200 relative animate-scale-up max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Close */}
        <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center gap-2">
            <span className="bg-sky-100 text-sky-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
              SKU: {product.sku}
            </span>
            <span className="text-xs text-slate-500 font-medium">
              100% Genuine Aftermarket Part
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Media */}
          <div>
            <div className="relative rounded-xl overflow-hidden bg-slate-100 border border-slate-200 aspect-square">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-3 left-3 bg-rose-600 text-white text-xs px-2.5 py-0.5 rounded font-extrabold uppercase">
                -{product.discountPercent}% OFF
              </span>
              <span className="absolute top-3 right-3 bg-white/95 text-slate-900 text-xs px-2.5 py-0.5 rounded border border-slate-200 flex items-center gap-1 font-bold shadow-xs">
                <span className="material-symbols-outlined text-[15px] text-emerald-600">
                  verified
                </span>
                {product.fitmentBadge}
              </span>
            </div>

            {/* Quick Trust Badges */}
            <div className="grid grid-cols-2 gap-2 mt-3">
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-center">
                <span className="material-symbols-outlined text-sky-600 text-[20px]">
                  local_shipping
                </span>
                <p className="text-[11px] font-bold text-slate-800 mt-0.5">
                  48-Hour Dispatch
                </p>
                <p className="text-[10px] text-slate-500">TCS / Trax Courier</p>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-center">
                <span className="material-symbols-outlined text-emerald-600 text-[20px]">
                  published_with_changes
                </span>
                <p className="text-[11px] font-bold text-slate-800 mt-0.5">
                  7-Day Replacement
                </p>
                <p className="text-[10px] text-slate-500">Zero Risk Fitment</p>
              </div>
            </div>
          </div>

          {/* Product Details & Actions */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Vehicle Compatibility Banner */}
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-2.5 rounded-xl mb-3 flex items-center gap-2 text-xs">
                <span className="material-symbols-outlined text-emerald-600 text-[18px]">
                  check_circle
                </span>
                <span>
                  {activeVehicle
                    ? `Guaranteed direct fitment for your ${activeVehicle.make.toUpperCase()} (${activeVehicle.year})`
                    : "100% Fitment Guaranteed across supported Pakistani models"}
                </span>
              </div>

              <h2 className="font-headline text-lg sm:text-xl font-bold text-slate-950 leading-snug">
                {product.name}
              </h2>
              <p className="text-xs text-slate-500 mt-1">{product.subtitle}</p>

              {/* Price and Stock */}
              <div className="flex items-baseline gap-3 my-3">
                <span className="font-headline text-2xl font-extrabold text-slate-950">
                  Rs. {product.price.toLocaleString("en-PK")}
                </span>
                <span className="text-sm text-rose-600 line-through">
                  Rs. {product.originalPrice.toLocaleString("en-PK")}
                </span>
                <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded ml-auto">
                  In Stock ({product.stock} units)
                </span>
              </div>

              {/* Features List */}
              <div className="my-3 border-t border-slate-100 pt-3">
                <h4 className="text-xs uppercase font-bold text-slate-700 tracking-wider mb-2">
                  Key Specifications:
                </h4>
                <ul className="flex flex-col gap-1.5 text-xs text-slate-600">
                  {product.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="material-symbols-outlined text-emerald-600 text-[16px] shrink-0 mt-0.5">
                        check
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed mt-2">
                {product.description}
              </p>
            </div>

            {/* Actions */}
            <div className="mt-6 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold text-slate-700">
                  Quantity:
                </span>
                <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-2.5 py-1 text-slate-600 hover:bg-slate-200 text-sm font-bold"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 text-xs font-bold text-slate-900 bg-white">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-2.5 py-1 text-slate-600 hover:bg-slate-200 text-sm font-bold"
                  >
                    +
                  </button>
                </div>
                <span className="text-xs text-slate-500 ml-auto font-medium">
                  Subtotal: Rs.{" "}
                  {(product.price * quantity).toLocaleString("en-PK")}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    onAddToCart(product, quantity);
                    onClose();
                  }}
                  className="bg-slate-900 hover:bg-slate-800 text-white py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    shopping_cart
                  </span>
                  Add to Cart
                </button>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-emerald-600 text-white py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all shadow-xs text-center cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    chat
                  </span>
                  Buy on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
