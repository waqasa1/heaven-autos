"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { WishlistDrawer } from "@/components/WishlistDrawer";
import { PRODUCTS } from "@/data/mockData";
import { useCart } from "@/components/store/CartProvider";

export function StoreShell({ children, activeCategory = "" }) {
  const router = useRouter();
  const cart = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const [wishOpen, setWishOpen] = useState(false);

  const wishlistProducts = PRODUCTS.filter((product) =>
    cart.wishlistIds.includes(product.id),
  );

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col">
      <Header
        cartCount={cart.count}
        wishlistCount={cart.wishlistIds.length}
        activeVehicle={null}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSearchSubmit={(query) =>
          router.push(query ? `/shop?q=${encodeURIComponent(query)}` : "/shop")
        }
        onOpenVehicleModal={() => router.push("/shop")}
        onOpenCart={() => setCartOpen(true)}
        onOpenWishlist={() => setWishOpen(true)}
        onOpenTracking={() => router.push("/track-order")}
        onSelectCategory={(category) =>
          router.push(category && category !== "all" ? `/shop?category=${category}` : "/shop")
        }
        activeCategory={activeCategory}
      />
      <main className="w-full pt-28 bg-white min-h-screen flex-1">{children}</main>
      <Footer
        onSelectCarMake={(makeId) =>
          router.push(makeId ? `/shop?make=${makeId}` : "/shop")
        }
        onOpenTracking={() => router.push("/track-order")}
      />
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart.items}
        onUpdateQuantity={cart.updateQuantity}
        onRemoveItem={cart.removeItem}
        onProceedToCheckout={() => {
          setCartOpen(false);
          router.push("/checkout");
        }}
      />
      <WishlistDrawer
        isOpen={wishOpen}
        onClose={() => setWishOpen(false)}
        wishlistProducts={wishlistProducts}
        onRemoveFromWishlist={cart.removeWishlist}
        onAddToCart={(product) => cart.addItem(product, 1)}
      />
    </div>
  );
}
