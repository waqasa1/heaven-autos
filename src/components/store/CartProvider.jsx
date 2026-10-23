"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(null);
const CART_KEY = "heaven-cart";
const WISH_KEY = "heaven-wishlist";

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [wishlistIds, setWishlistIds] = useState([]);
  const [ready, setReady] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(CART_KEY);
      const savedWish = localStorage.getItem(WISH_KEY);
      // Cart lives in localStorage, so it can only be read after mount.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (savedCart) setItems(JSON.parse(savedCart));
      if (savedWish) setWishlistIds(JSON.parse(savedWish));
    } catch {
      /* ignore corrupt local carts */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) localStorage.setItem(CART_KEY, JSON.stringify(items));
  }, [items, ready]);

  useEffect(() => {
    if (ready) localStorage.setItem(WISH_KEY, JSON.stringify(wishlistIds));
  }, [wishlistIds, ready]);

  const notify = (message) => {
    setToast(message);
    window.clearTimeout(notify.timer);
    notify.timer = window.setTimeout(() => setToast(null), 2800);
  };

  const value = {
      items,
      wishlistIds,
      count: items.reduce((sum, item) => sum + item.quantity, 0),
      addItem(product, quantity = 1, vehicle) {
        setItems((prev) => {
          const existing = prev.find((item) => item.product.id === product.id);
          if (existing) {
            return prev.map((item) =>
              item.product.id === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item,
            );
          }
          return [...prev, { product, quantity, selectedVehicle: vehicle }];
        });
        notify(`Added ${product.name.slice(0, 42)} to your cart`);
      },
      updateQuantity(productId, quantity) {
        setItems((prev) => {
          if (quantity <= 0) return prev.filter((item) => item.product.id !== productId);
          return prev.map((item) =>
            item.product.id === productId ? { ...item, quantity } : item,
          );
        });
      },
      removeItem(productId) {
        setItems((prev) => prev.filter((item) => item.product.id !== productId));
        notify("Item removed from cart");
      },
      clear() {
        setItems([]);
      },
      toggleWishlist(product) {
        setWishlistIds((prev) => {
          if (prev.includes(product.id)) {
            notify("Removed from wishlist");
            return prev.filter((id) => id !== product.id);
          }
          notify("Saved to wishlist");
          return [...prev, product.id];
        });
      },
      removeWishlist(id) {
        setWishlistIds((prev) => prev.filter((item) => item !== id));
      },
  };

  return (
    <CartContext.Provider value={value}>
      {children}
      {toast && (
        <div className="fixed bottom-6 right-6 z-[60] bg-slate-950 text-white px-5 py-3 rounded-xl shadow-2xl border border-slate-700 text-xs sm:text-sm font-bold">
          {toast}
        </div>
      )}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}
