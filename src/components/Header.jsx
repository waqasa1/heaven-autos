"use client";

import { useState } from "react";
import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import { AccountLink } from "./store/AccountLink";
export const Header = ({
  cartCount,
  wishlistCount,
  activeVehicle,
  searchQuery,
  onSearchChange,
  onSearchSubmit,
  onOpenVehicleModal,
  onOpenCart,
  onOpenWishlist,
  onSelectCategory,
  activeCategory,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <div className="bg-slate-50 border-b border-slate-200 text-slate-950 py-1.5 px-4 sm:px-8">
        <div className="max-w-[1360px] mx-auto flex flex-col md:flex-row items-center justify-between text-xs font-normal">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-sky-600">
                local_shipping
              </span>
              Nationwide Express Delivery across Pakistan
            </span>
            <span className="hidden lg:inline text-slate-300">|</span>
            <span className="hidden lg:flex items-center gap-1.5 font-medium text-emerald-700">
              <span className="material-symbols-outlined text-[16px]">
                verified
              </span>
              Advance payment confirms every order
            </span>
          </div>
          <div className="flex items-center gap-6 mt-1 md:mt-0">
            <a
              className="flex items-center gap-1.5 text-[#25D366] hover:underline font-semibold"
              href="https://wa.me/923001234567?text=Hi%20Heaven%20Autos%20I%20need%20assistance%20with%20car%20accessories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[16px]">
                chat
              </span>
              Order via WhatsApp: +92 300 1234567
            </a>
            <div className="hidden sm:flex items-center gap-3">
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
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-[0_2px_10px_rgba(0,0,0,0.03)]">

      {/* Main Bar */}
      <div className="h-20 max-w-[1360px] mx-auto px-4 sm:px-8 flex items-center justify-between gap-4">
        {/* Logo & Vehicle Selector Trigger */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Link href="/" className="flex items-center group">
            <BrandLogo />
          </Link>

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
          <form
            className="relative w-full"
            onSubmit={(event) => {
              event.preventDefault();
              onSearchSubmit?.(searchQuery);
            }}
          >
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
          </form>
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
          <AccountLink />

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
          <nav className="flex w-full items-center justify-between py-3 text-sm font-semibold text-slate-950">
            <Link href="/" className="whitespace-nowrap hover:text-sky-600">
              Home
            </Link>
            <Link
              href="/shop-by-car"
              className="text-sky-600 font-extrabold whitespace-nowrap flex items-center gap-1 hover:text-sky-700"
            >
              <span className="material-symbols-outlined text-[16px]">
                garage
              </span>
              Shop by Car
            </Link>
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
              Exterior
            </button>
            <button
              onClick={() => onSelectCategory("shades-mats")}
              className={`whitespace-nowrap transition-colors cursor-pointer ${activeCategory === "shades-mats" ? "text-sky-600 font-bold" : "hover:text-sky-600"}`}
            >
              Interior
            </button>
            <button
              onClick={() => onSelectCategory("led-tech")}
              className={`whitespace-nowrap transition-colors cursor-pointer ${activeCategory === "led-tech" ? "text-sky-600 font-bold" : "hover:text-sky-600"}`}
            >
              Electronics
            </button>
            <button
              onClick={() => onSelectCategory("detailing")}
              className={`whitespace-nowrap transition-colors cursor-pointer ${activeCategory === "detailing" ? "text-sky-600 font-bold" : "hover:text-sky-600"}`}
            >
              Car Care
            </button>
            <Link
              href="/ppf"
              className="text-amber-600 hover:text-amber-700 transition-colors whitespace-nowrap font-bold"
            >
              Services
            </Link>
            <Link href="/contact" className="whitespace-nowrap hover:text-sky-600">
              Contact
            </Link>
            <Link href="/about" className="whitespace-nowrap hover:text-sky-600">
              About
            </Link>
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
            Interior
          </button>
          <button
            onClick={() => {
              onSelectCategory("led-tech");
              setMobileMenuOpen(false);
            }}
            className="text-left py-2 px-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded"
          >
            Electronics
          </button>
          <button
            onClick={() => {
              onSelectCategory("exterior");
              setMobileMenuOpen(false);
            }}
            className="text-left py-2 px-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded"
          >
            Exterior
          </button>
          <button
            onClick={() => {
              onSelectCategory("detailing");
              setMobileMenuOpen(false);
            }}
            className="text-left py-2 px-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded"
          >
            Car Care
          </button>
          <Link
            href="/ppf"
            onClick={() => setMobileMenuOpen(false)}
            className="text-left py-2 px-2 text-sm font-bold text-amber-600 hover:bg-amber-50 rounded"
          >
            Services
          </Link>
        </div>
      )}
    </header>
    </>
  );
};
