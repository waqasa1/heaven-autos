export const WishlistDrawer = ({
  isOpen,
  onClose,
  wishlistProducts,
  onRemoveFromWishlist,
  onAddToCart,
}) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end">
      <div
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between animate-slide-left relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-rose-600 text-[24px]">
              favorite
            </span>
            <h3 className="font-headline text-lg font-bold text-slate-900">
              Saved Wishlist ({wishlistProducts.length})
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

        <div className="p-4 overflow-y-auto flex-1 flex flex-col gap-3">
          {wishlistProducts.length === 0 ? (
            <div className="text-center py-16 my-auto">
              <span className="material-symbols-outlined text-[54px] text-slate-300">
                favorite_border
              </span>
              <p className="font-headline text-base font-bold text-slate-800 mt-2">
                No items in your wishlist
              </p>
              <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                Click the heart icon on any product to save it for your next car
                upgrade.
              </p>
            </div>
          ) : (
            wishlistProducts.map((product) => (
              <div
                key={product.id}
                className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex gap-3 items-center"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 rounded-lg object-cover border border-slate-200 bg-white shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-slate-900 truncate">
                    {product.name}
                  </h4>
                  <p className="text-xs font-bold text-slate-950 mt-1">
                    Rs. {product.price.toLocaleString("en-PK")}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      onAddToCart(product);
                      onRemoveFromWishlist(product.id);
                    }}
                    className="mt-2 text-[11px] font-bold text-sky-600 hover:text-sky-800 flex items-center gap-1 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[14px]">
                      shopping_cart
                    </span>
                    Move to Cart
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => onRemoveFromWishlist(product.id)}
                  className="text-slate-400 hover:text-rose-600 p-1 cursor-pointer"
                  title="Remove from wishlist"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    delete
                  </span>
                </button>
              </div>
            ))
          )}
        </div>

        <div className="p-4 border-t border-slate-200 bg-slate-50">
          <button
            type="button"
            onClick={onClose}
            className="w-full bg-slate-900 hover:bg-slate-800 text-white py-2.5 rounded-xl text-xs font-bold cursor-pointer"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};
