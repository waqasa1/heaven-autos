import Link from "next/link";

export const ProductSection = ({
  products,
  activeCategory,
  onSelectCategory,
  activeVehicle,
  onAddToCart,
  onOpenQuickView,
  onToggleWishlist,
  wishlistIds,
}) => {
  return (
    <section
      className="py-12 px-4 sm:px-8 bg-slate-50 border-b border-slate-200"
      id="featured-products"
    >
      <div className="max-w-[1360px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 mb-1">
              <span className="text-[11px] uppercase tracking-widest text-rose-600 font-bold">
                Top Verified Purchases
              </span>
              {activeVehicle && (
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                  Filtered for {activeVehicle.make} {activeVehicle.model}
                </span>
              )}
            </div>
            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-slate-900 font-bold">
              Hot-Selling Precision Accessories
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Exact specifications matched to Pakistan&apos;s climate, road
              conditions, and popular automotive platforms.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1 bg-white border border-slate-200 p-1 rounded-xl shadow-xs self-start md:self-auto">
            <button
              type="button"
              onClick={() => onSelectCategory("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeCategory === "all"
                  ? "bg-slate-900 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              All Featured ({products.length})
            </button>
            <button
              type="button"
              onClick={() => onSelectCategory("shades-mats")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeCategory === "shades-mats"
                  ? "bg-slate-900 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              Sun Shades &amp; Mats
            </button>
            <button
              type="button"
              onClick={() => onSelectCategory("led-tech")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeCategory === "led-tech"
                  ? "bg-slate-900 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              LED &amp; Tech
            </button>
            <button
              type="button"
              onClick={() => onSelectCategory("exterior")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeCategory === "exterior"
                  ? "bg-slate-900 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              Exterior Kits
            </button>
            <button
              type="button"
              onClick={() => onSelectCategory("detailing")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeCategory === "detailing"
                  ? "bg-slate-900 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              Car Care
            </button>
          </div>
        </div>

        {/* Product Cards Bento Grid */}
        {products.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center my-6">
            <span className="material-symbols-outlined text-[48px] text-slate-300">
              search_off
            </span>
            <h3 className="text-lg font-bold text-slate-800 mt-2">
              No matching accessories found
            </h3>
            <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
              We couldn&apos;t find products matching your current vehicle filter or
              search query. Try clearing the filter to see universal
              accessories.
            </p>
            <button
              type="button"
              onClick={() => onSelectCategory("all")}
              className="mt-4 px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-xl"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => {
              const isWishlisted = wishlistIds.includes(product.id);
              const waMessage = encodeURIComponent(
                `Hi Heaven Autos! I would like to order: ${product.name} (Rs. ${product.price.toLocaleString("en-PK")}). Please guide me on shipping and advance payment.`,
              );
              const waLink = `https://wa.me/923001234567?text=${waMessage}`;
              const isVehicleMatch =
                !activeVehicle ||
                product.compatibleMakes.includes("all") ||
                product.compatibleMakes.includes(activeVehicle.make);
              return (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all p-4 flex flex-col justify-between group"
                >
                  <div>
                    {/* Image Container with Badges */}
                    <div className="relative h-60 sm:h-64 w-full rounded-xl overflow-hidden bg-slate-50 mb-4 border border-slate-200 cursor-pointer">
                      <img
                        src={product.image}
                        alt={product.name}
                        onClick={() => onOpenQuickView(product)}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />

                      {/* Discount Tag */}
                      <span className="absolute top-3 left-3 bg-rose-600 text-white text-[11px] px-2 py-0.5 rounded font-extrabold uppercase shadow-xs">
                        -{product.discountPercent}% OFF
                      </span>

                      {/* Fitment Tag */}
                      <span className="absolute top-3 right-3 bg-white/95 text-slate-900 text-[11px] px-2 py-0.5 rounded border border-slate-200 flex items-center gap-1 font-semibold shadow-xs">
                        <span className="material-symbols-outlined text-[14px] text-emerald-600">
                          verified
                        </span>
                        {product.fitmentBadge}
                      </span>

                      {/* Wishlist Heart Toggle */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleWishlist(product);
                        }}
                        className={`absolute bottom-3 right-3 w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                          isWishlisted
                            ? "bg-rose-50 border-rose-300 text-rose-600 shadow-xs"
                            : "bg-white/90 hover:bg-white border-slate-200 text-slate-600"
                        }`}
                        title="Add to Wishlist"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          {isWishlisted ? "favorite" : "favorite_border"}
                        </span>
                      </button>

                      {/* Quick View Overlay Button */}
                      <button
                        type="button"
                        onClick={() => onOpenQuickView(product)}
                        className="absolute bottom-3 left-3 bg-slate-900/85 hover:bg-slate-900 text-white text-[11px] font-bold px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"
                      >
                        <span className="material-symbols-outlined text-[14px]">
                          visibility
                        </span>
                        Quick View
                      </button>
                    </div>

                    {/* Compatibility Text */}
                    <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                      <span
                        className={`material-symbols-outlined text-[16px] ${isVehicleMatch ? "text-emerald-600" : "text-amber-500"}`}
                      >
                        check_circle
                      </span>
                      <span className="truncate">
                        {activeVehicle
                          ? `Fits your ${activeVehicle.make.toUpperCase()} (${activeVehicle.year})`
                          : "Fits Suzuki Alto / Civic / Corolla Cross"}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-headline text-base font-bold text-slate-900 mt-1.5 line-clamp-2 leading-snug">
                      <Link
                        href={`/products/${product.id.replace(/^prod-/, "")}`}
                        className="hover:text-sky-600"
                      >
                        {product.name}
                      </Link>
                    </h3>

                    {/* Ratings */}
                    <div className="flex items-center gap-1.5 mt-1.5 text-amber-500">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className="material-symbols-outlined text-[16px]"
                          >
                            star
                          </span>
                        ))}
                      </div>
                      <span className="text-slate-500 text-xs">
                        ({product.reviewCount} Verified Reviews)
                      </span>
                    </div>
                  </div>

                  {/* Pricing and Actions Bar */}
                  <div className="pt-4 mt-3 border-t border-slate-200">
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="font-headline text-xl text-slate-950 font-bold">
                        Rs. {product.price.toLocaleString("en-PK")}
                      </span>
                      <span className="text-xs text-rose-600 line-through">
                        Rs. {product.originalPrice.toLocaleString("en-PK")}
                      </span>
                      <span className="text-[11px] text-slate-500 ml-auto font-medium">
                        {product.warranty}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => onAddToCart(product)}
                        className="w-full bg-slate-900 hover:bg-slate-800 text-white py-2 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1 shadow-xs cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[16px]">
                          shopping_cart
                        </span>
                        Add to Cart
                      </button>
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-[#25D366] hover:bg-emerald-600 text-white py-2 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1 text-center shadow-xs cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[16px]">
                          chat
                        </span>
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
