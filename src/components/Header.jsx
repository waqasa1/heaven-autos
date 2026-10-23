import { useState } from "react";
import { BrandLogo } from "./BrandLogo";
export const Header = ({
  cartCount,
  wishlistCount,
  activeVehicle,
  searchQuery,
  onSearchChange,
  onOpenVehicleModal,
  onOpenCart,
  onOpenWishlist,
  onOpenTracking,
  onSelectCategory,
  activeCategory,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
      {/* Top Banner Bar */}
      <div className="bg-slate-50 border-b border-slate-200 text-slate-600 py-1.5 px-4 sm:px-8">
        <div className="max-w-[1360px] mx-auto flex flex-col md:flex-row items-center justify-between text-xs font-medium">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-900 font-medium">
              <span className="material-symbols-outlined text-[16px] text-sky-600">
                local_shipping
              </span>
              Nationwide Express Delivery across Pakistan
            </span>
            <span className="hidden lg:inline text-slate-300">|</span>
            <span className="hidden lg:flex items-center gap-1.5 text-emerald-600 font-semibold">
              <span className="material-symbols-outlined text-[16px]">
                verified
              </span>
              100% Genuine Fitment Guaranteed
            </span>
          </div>
          <div className="flex items-center gap-6 mt-1 md:mt-0">
            <a
              className="flex items-center gap-1.5 text-[#25D366] hover:underline font-bold"
              href="https://wa.me/923001234567?text=Hi%20Heaven%20Autos%20I%20need%20assistance%20with%20car%20accessories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[16px]">
                chat
              </span>
              Order via WhatsApp: +92 300 1234567
            </a>
            <div className="hidden sm:flex items-center gap-3 text-slate-500">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[15px]">
                  schedule
                </span>
                Mon - Sat: 10:00 AM - 10:00 PM
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="h-20 max-w-[1360px] mx-auto px-4 sm:px-8 flex items-center justify-between gap-4">
        {/* Logo & Vehicle Selector Trigger */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a href="#" className="flex items-center group">
            <BrandLogo />
          </a>

          {/* Vehicle Selector Badge / Trigger */}
          <button
            onClick={onOpenVehicleModal}
            className={`hidden xl:flex items-center gap-3 py-1.5 px-3.5 rounded-xl border transition-all ${
              activeVehicle
                ? "bg-sky-50 border-sky-300 text-sky-950 shadow-sm"
                : "bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800"
            }`}
            type="button"
          >
            <span className="material-symbols-outlined text-sky-600 text-[22px]">
              directions_car
            </span>
            <div className="text-left">
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider leading-none">
                {activeVehicle ? "FILTERED VEHICLE" : "YOUR VEHICLE"}
              </p>
              <p className="text-xs text-slate-900 font-bold truncate max-w-[170px]">
                {activeVehicle
                  ? `${activeVehicle.make.toUpperCase()} - ${activeVehicle.model.toUpperCase()}`
                  : "Select Car: Make / Model / Year"}
              </p>
            </div>
            <span className="material-symbols-outlined text-slate-400 text-[18px]">
              {activeVehicle ? "edit" : "expand_more"}
            </span>
          </button>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-xl mx-2">
          <div className="relative w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search LED lights, 7D mats, body kits, ceramic coating, sun shades..."
              className="w-full bg-slate-50 text-slate-900 placeholder:text-slate-400 py-2.5 pl-4 pr-10 rounded-xl text-sm border border-slate-200 focus:outline-none focus:bg-white focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 transition-all"
            />
            {searchQuery ? (
              <button
                type="button"
                onClick={() => onSearchChange("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
              >
                <span className="material-symbols-outlined text-[18px]">
                  close
                </span>
              </button>
            ) : (
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                <span className="material-symbols-outlined text-[20px]">
                  search
                </span>
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          <a
            className="hidden lg:flex items-center gap-1.5 bg-[#25D366] hover:bg-emerald-600 text-white px-3.5 py-2 rounded-xl text-xs font-bold shadow-sm transition-colors"
            href="https://wa.me/923001234567?text=Hi%20Heaven%20Autos%20I%20want%20to%20inquire%20about%20car%20accessories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-[18px]">
              support_agent
            </span>
            WhatsApp Support
          </a>

          {/* Mobile Vehicle Selector Icon Button */}
          <button
            onClick={onOpenVehicleModal}
            className="xl:hidden p-2 text-slate-700 hover:text-slate-900 border border-slate-200 rounded-xl bg-slate-50 flex items-center justify-center"
            title="Choose vehicle"
          >
            <span className="material-symbols-outlined text-[22px] text-sky-600">
              directions_car
            </span>
          </button>

          {/* Wishlist Button */}
          <button
            onClick={onOpenWishlist}
            className="relative p-2 text-slate-700 hover:text-slate-900 transition-colors flex items-center justify-center border border-slate-200 rounded-xl bg-slate-50 hover:bg-slate-100"
            title="Wishlist"
          >
            <span className="material-symbols-outlined text-[22px]">
              favorite
            </span>
            <span className="absolute -top-1 -right-1 bg-slate-200 text-slate-900 text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              {wishlistCount}
            </span>
          </button>

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            className="relative p-2 text-slate-700 hover:text-slate-900 transition-colors flex items-center justify-center border border-slate-200 rounded-xl bg-slate-50 hover:bg-slate-100"
            title="Shopping Cart"
          >
            <span className="material-symbols-outlined text-[22px]">
              shopping_cart
            </span>
            <span className="absolute -top-1 -right-1 bg-slate-900 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              {cartCount}
            </span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-slate-900 border border-slate-200 rounded-xl bg-slate-50"
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Search input when visible */}
      <div className="md:hidden px-4 pb-2">
        <div className="relative w-full">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search lights, mats, body kits, covers..."
            className="w-full bg-slate-50 text-slate-900 placeholder:text-slate-400 py-2 pl-3.5 pr-8 rounded-lg text-xs border border-slate-200 focus:outline-none focus:bg-white"
          />
          <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
            <span className="material-symbols-outlined text-[16px]">
              search
            </span>
          </span>
        </div>
      </div>

      {/* Desktop Categories Sub-Navigation */}
      <div className="bg-white border-t border-slate-200 px-4 sm:px-8 hidden md:block">
        <div className="max-w-[1360px] mx-auto">
          <nav className="flex items-center gap-6 overflow-x-auto py-2 text-xs font-bold text-slate-700">
            <button
              onClick={onOpenVehicleModal}
              className="text-sky-600 font-extrabold whitespace-nowrap flex items-center gap-1 hover:text-sky-700 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">
                garage
              </span>
              Shop by Car
            </button>
            <button
              onClick={() => onSelectCategory("all")}
              className={`whitespace-nowrap transition-colors cursor-pointer ${activeCategory === "all" ? "text-sky-600 font-bold" : "hover:text-sky-600"}`}
            >
              All Products
            </button>
            <button
              onClick={() => onSelectCategory("exterior")}
              className={`whitespace-nowrap transition-colors cursor-pointer ${activeCategory === "exterior" ? "text-sky-600 font-bold" : "hover:text-sky-600"}`}
            >
              Exterior (Bodykits &amp; Visors)
            </button>
            <button
              onClick={() => onSelectCategory("shades-mats")}
              className={`whitespace-nowrap transition-colors cursor-pointer ${activeCategory === "shades-mats" ? "text-sky-600 font-bold" : "hover:text-sky-600"}`}
            >
              Interior (7D/10D Mats &amp; Sun Shades)
            </button>
            <button
              onClick={() => onSelectCategory("led-tech")}
              className={`whitespace-nowrap transition-colors cursor-pointer ${activeCategory === "led-tech" ? "text-sky-600 font-bold" : "hover:text-sky-600"}`}
            >
              Electronics &amp; Bi-LED Lights
            </button>
            <button
              onClick={() => onSelectCategory("detailing")}
              className={`whitespace-nowrap transition-colors cursor-pointer ${activeCategory === "detailing" ? "text-sky-600 font-bold" : "hover:text-sky-600"}`}
            >
              Car Care &amp; Chemicals
            </button>
            <a
              href="#ppf-studio"
              className="text-amber-600 hover:text-amber-700 transition-colors whitespace-nowrap flex items-center gap-1 font-bold"
            >
              <span className="material-symbols-outlined text-[16px]">
                shield
              </span>
              Services (PPF &amp; Detailing)
            </a>
            <button
              onClick={onOpenTracking}
              className="text-slate-600 hover:text-sky-600 transition-colors whitespace-nowrap ml-auto font-medium flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[16px]">
                local_shipping
              </span>
              Track Your Order
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 py-3 flex flex-col gap-2 shadow-lg">
          <button
            onClick={() => {
              onOpenVehicleModal();
              setMobileMenuOpen(false);
            }}
            className="flex items-center gap-2 p-2 rounded-lg bg-sky-50 text-sky-700 font-bold text-sm text-left"
          >
            <span className="material-symbols-outlined text-[18px]">
              garage
            </span>
            Select Your Car (Fitment Finder)
          </button>
          <button
            onClick={() => {
              onSelectCategory("all");
              setMobileMenuOpen(false);
            }}
            className="text-left py-2 px-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded"
          >
            All Products
          </button>
          <button
            onClick={() => {
              onSelectCategory("shades-mats");
              setMobileMenuOpen(false);
            }}
            className="text-left py-2 px-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded"
          >
            Sun Shades &amp; 10D Floor Mats
          </button>
          <button
            onClick={() => {
              onSelectCategory("led-tech");
              setMobileMenuOpen(false);
            }}
            className="text-left py-2 px-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded"
          >
            Bi-LED Projectors &amp; Android Panels
          </button>
          <button
            onClick={() => {
              onSelectCategory("exterior");
              setMobileMenuOpen(false);
            }}
            className="text-left py-2 px-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded"
          >
            Exterior Bodykits &amp; Visors
          </button>
          <button
            onClick={() => {
              onSelectCategory("detailing");
              setMobileMenuOpen(false);
            }}
            className="text-left py-2 px-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded"
          >
            Car Care &amp; Microfiber Covers
          </button>
          <a
            href="#ppf-studio"
            onClick={() => setMobileMenuOpen(false)}
            className="text-left py-2 px-2 text-sm font-bold text-amber-600 hover:bg-amber-50 rounded flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">
              shield
            </span>
            PPF &amp; Detailing Studio
          </a>
          <button
            onClick={() => {
              onOpenTracking();
              setMobileMenuOpen(false);
            }}
            className="text-left py-2 px-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded flex items-center gap-2 border-t border-slate-100 mt-1 pt-2"
          >
            <span className="material-symbols-outlined text-[18px] text-sky-600">
              local_shipping
            </span>
            Track Your Order
          </button>
        </div>
      )}
    </header>
  );
};
