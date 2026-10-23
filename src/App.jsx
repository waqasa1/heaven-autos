"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { VehicleFitmentBar } from "./components/VehicleFitmentBar";
import { TrustRibbon } from "./components/TrustRibbon";
import { CarMakesGrid } from "./components/CarMakesGrid";
import { ProductSection } from "./components/ProductSection";
import { PPFStudioSection } from "./components/PPFStudioSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { FaqSection } from "./components/FaqSection";
import { Footer } from "./components/Footer";
import {
  BrandRow,
  FuelPrices,
  HotCategories,
  Marquee,
  ModelCollections,
  VisitStrip,
  WhyChoose,
} from "./components/home/StorefrontSections";
import { ProductDetailModal } from "./components/ProductDetailModal";
import { CartDrawer } from "./components/CartDrawer";
import { CheckoutModal } from "./components/CheckoutModal";
import { PPFBookingModal } from "./components/PPFBookingModal";
import { OrderTrackingModal } from "./components/OrderTrackingModal";
import { WishlistDrawer } from "./components/WishlistDrawer";
import { PRODUCTS, VEHICLE_DATABASE } from "./data/mockData";
import { useCart } from "./components/store/CartProvider";
export default function App() {
  const router = useRouter();
  const cart = useCart();
  const [activeVehicle, setActiveVehicle] = useState({
    make: "suzuki",
    model: "alto",
    year: "2022-2026",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedCarMake, setSelectedCarMake] = useState("");
  // Modals and Drawers
  const [isVehicleModalOpen, setIsVehicleModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isTrackingOpen, setIsTrackingOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingPackageTitle, setBookingPackageTitle] = useState("");
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  // Quick feedback toast
  const [toastMessage, setToastMessage] = useState(null);
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };
  // Filter products based on search, activeCategory, and activeVehicle
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Category filter
      if (activeCategory !== "all" && p.category !== activeCategory) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = p.name.toLowerCase().includes(q);
        const matchDesc = p.description.toLowerCase().includes(q);
        const matchSubtitle = p.subtitle.toLowerCase().includes(q);
        const matchSku = p.sku.toLowerCase().includes(q);
        if (!matchName && !matchDesc && !matchSubtitle && !matchSku) {
          return false;
        }
      }
      // Selected make filter (from CarMakesGrid)
      if (selectedCarMake) {
        const matchesMake =
          p.compatibleMakes.includes("all") ||
          p.compatibleMakes.includes(selectedCarMake);
        if (!matchesMake) return false;
      }
      // Active vehicle filter
      if (activeVehicle) {
        const matchesMake =
          p.compatibleMakes.includes("all") ||
          p.compatibleMakes.includes(activeVehicle.make);
        const matchesModel =
          p.compatibleModels.includes("all") ||
          p.compatibleModels.includes(activeVehicle.model);
        if (!matchesMake || !matchesModel) return false;
      }
      return true;
    });
  }, [activeCategory, searchQuery, selectedCarMake, activeVehicle]);
  // Wishlist products
  const wishlistProducts = useMemo(() => {
    return PRODUCTS.filter((p) => cart.wishlistIds.includes(p.id));
  }, [cart.wishlistIds]);
  const handleAddToCart = (product, quantity = 1) => {
    cart.addItem(product, quantity, activeVehicle || undefined);
  };
  const handleToggleWishlist = (product) => {
    cart.toggleWishlist(product);
  };
  const handleSelectCategory = (cat) => {
    router.push(cat && cat !== "all" ? `/shop?category=${cat}` : "/shop");
  };
  const handleSelectMake = (makeId) => {
    router.push(makeId ? `/shop?make=${makeId}` : "/shop");
  };
  const handleTagClick = (tag) => {
    router.push(`/shop?q=${encodeURIComponent(tag)}`);
  };
  // Studio booking open
  const handleOpenBooking = (pkgTitle) => {
    setBookingPackageTitle(pkgTitle || "");
    setIsBookingOpen(true);
  };
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-950 text-white px-5 py-3 rounded-xl shadow-2xl border border-slate-700 flex items-center gap-3 text-xs sm:text-sm font-bold animate-bounce-once">
          <span className="material-symbols-outlined text-emerald-400 text-[20px]">
            check_circle
          </span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Navigation Header */}
      <Header
        cartCount={cart.count}
        wishlistCount={cart.wishlistIds.length}
        activeVehicle={activeVehicle}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSearchSubmit={(query) =>
          router.push(query ? `/shop?q=${encodeURIComponent(query)}` : "/shop")
        }
        onOpenVehicleModal={() => setIsVehicleModalOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenTracking={() => router.push("/track-order")}
        onSelectCategory={handleSelectCategory}
        activeCategory={activeCategory}
      />

      {/* Main Content (padded for fixed header) */}
      <main className="w-full bg-white min-h-screen flex-1">
        {/* Hero Section */}
        <HeroSection
          onShopNowClick={() => router.push("/shop")}
          onPpfClick={() => {
            const el = document.getElementById("ppf-studio");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        />

        <BrandRow />
        <Marquee />

        {/* Vehicle Fitment Bar */}
        <VehicleFitmentBar
          activeVehicle={activeVehicle}
          onApplyVehicleFilter={(filter) => {
            if (!filter) {
              router.push("/shop");
              return;
            }
            const params = new URLSearchParams();
            if (filter.make) params.set("make", filter.make);
            if (filter.model) params.set("model", filter.model);
            router.push(`/shop?${params.toString()}`);
          }}
          matchingCount={filteredProducts.length}
        />

        {/* Canonical Automotive Trust Ribbon */}
        <TrustRibbon />

        {/* Shop by Car Make Grid */}
        <CarMakesGrid
          onSelectMake={handleSelectMake}
          selectedMake={selectedCarMake || activeVehicle?.make}
        />

        {/* Hot-Selling Products Showcase */}
        <ProductSection
          products={filteredProducts}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          activeVehicle={activeVehicle}
          onAddToCart={handleAddToCart}
          onOpenQuickView={setQuickViewProduct}
          onToggleWishlist={handleToggleWishlist}
          wishlistIds={cart.wishlistIds}
        />

        <HotCategories />
        <ModelCollections />

        {/* PPF & Detailing Studio Section */}
        <PPFStudioSection onOpenBookingModal={handleOpenBooking} />

        <WhyChoose />

        {/* Real Customer Proof & Testimonials */}
        <ReviewsSection />
        <FuelPrices />

        {/* FAQ & Technical Buying Guide */}
        <FaqSection onTagClick={handleTagClick} />
        <VisitStrip />
      </main>

      {/* Global Footer */}
      <Footer
        onSelectCarMake={handleSelectMake}
        onOpenTracking={() => router.push("/track-order")}
      />

      {/* Quick View Modal */}
      <ProductDetailModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        activeVehicle={activeVehicle}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart.items}
        onUpdateQuantity={cart.updateQuantity}
        onRemoveItem={cart.removeItem}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          router.push("/checkout");
        }}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cart.items}
        onOrderCompleted={() => {
          cart.clear();
          showToast(
            "Order confirmed! Our dispatch officer will contact you shortly.",
          );
        }}
      />

      {/* PPF Studio Slot Booking Modal */}
      <PPFBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        defaultPackageTitle={bookingPackageTitle}
      />

      {/* Order Tracking Modal */}
      <OrderTrackingModal
        isOpen={isTrackingOpen}
        onClose={() => setIsTrackingOpen(false)}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistProducts={wishlistProducts}
        onRemoveFromWishlist={(id) => cart.removeWishlist(id)}
        onAddToCart={handleAddToCart}
      />

      {/* Vehicle Quick Selection Modal */}
      {isVehicleModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setIsVehicleModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 relative animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sky-600 text-[24px]">
                  garage
                </span>
                <h3 className="font-headline text-lg font-bold text-slate-900">
                  Select Your Vehicle
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsVehicleModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-slate-200 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">
                  close
                </span>
              </button>
            </div>

            <p className="text-xs text-slate-500 mb-4">
              Pick your car make and model to guarantee 100% precision fitment
              for floor mats, shades, and accessories:
            </p>

            <div className="grid grid-cols-3 gap-2 mb-4">
              {Object.entries(VEHICLE_DATABASE).map(([key, item]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => {
                    setActiveVehicle({
                      make: key,
                      model: item.models[0].id,
                      year: "2022-2026",
                    });
                    setSelectedCarMake(key);
                    setIsVehicleModalOpen(false);
                    showToast(`Selected ${item.label}`);
                  }}
                  className={`p-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                    activeVehicle?.make === key
                      ? "bg-sky-600 text-white border-sky-600 shadow-xs"
                      : "bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {activeVehicle && (
              <button
                type="button"
                onClick={() => {
                  setActiveVehicle(null);
                  setSelectedCarMake("");
                  setIsVehicleModalOpen(false);
                  showToast("Vehicle filter cleared");
                }}
                className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors cursor-pointer"
              >
                Clear Vehicle Filter (Show All Models)
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
  function handleRemoveCartItem(productId) {
    cart.removeItem(productId);
  }
}
