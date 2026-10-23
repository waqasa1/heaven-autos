import { BrandLogo } from "./BrandLogo";
export const Footer = ({ onSelectCarMake, onOpenTracking }) => {
  return (
    <footer className="w-full bg-white text-slate-900 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center">
              <BrandLogo size="md" />
            </div>
            <p className="text-slate-500 text-xs sm:text-sm max-w-sm leading-relaxed">
              Pakistan&apos;s premier destination for genuine car accessories, custom
              interior crafting, high-output LED lighting systems, and certified
              Paint Protection Film (PPF) studio services.
            </p>
            <div className="flex flex-col gap-1.5 text-xs text-slate-600">
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-sky-600">
                  location_on
                </span>
                Flagship Studio: Montgomery Road &amp; DHA Phase 5, Lahore,
                Pakistan
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#25D366]">
                  call
                </span>
                Helpline / WhatsApp: +92 300 1234567
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-sky-600">
                  mail
                </span>
                Support: orders@heavenautos.pk
              </p>
            </div>
          </div>

          {/* Column 2: Shop by Car */}
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-wider text-slate-900 font-extrabold font-headline">
              Shop by Car
            </p>
            <ul className="flex flex-col gap-1.5 text-xs text-slate-500">
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCarMake("toyota")}
                  className="hover:text-sky-600 transition-colors text-left"
                >
                  Toyota (Prado, Fortuner, Corolla, Yaris)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCarMake("honda")}
                  className="hover:text-sky-600 transition-colors text-left"
                >
                  Honda (Civic, City, BR-V, HR-V)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCarMake("suzuki")}
                  className="hover:text-sky-600 transition-colors text-left"
                >
                  Suzuki (Alto, Swift, Cultus, WagonR)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCarMake("haval")}
                  className="hover:text-sky-600 transition-colors text-left"
                >
                  Haval (H6, Jolion)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCarMake("changan")}
                  className="hover:text-sky-600 transition-colors text-left"
                >
                  Changan (Alsvin, Oshan X7)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCarMake("kia")}
                  className="hover:text-sky-600 transition-colors text-left"
                >
                  KIA (Sportage, Sorento, Picanto)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCarMake("hyundai")}
                  className="hover:text-sky-600 transition-colors text-left"
                >
                  Hyundai (Tucson, Elantra, Sonata)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Care */}
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-wider text-slate-900 font-extrabold font-headline">
              Customer Care
            </p>
            <ul className="flex flex-col gap-1.5 text-xs text-slate-500">
              <li>
                <a
                  href="#featured-products"
                  className="hover:text-sky-600 transition-colors"
                >
                  100% Fitment Guarantee
                </a>
              </li>
              <li>
                <a
                  href="#featured-products"
                  className="hover:text-sky-600 transition-colors"
                >
                  Warranty &amp; Replacement Policy
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenTracking}
                  className="hover:text-sky-600 transition-colors text-left"
                >
                  Nationwide Courier Tracking
                </button>
              </li>
              <li>
                <a
                  href="#ppf-studio"
                  className="hover:text-sky-600 transition-colors"
                >
                  Installation Centers &amp; Branches
                </a>
              </li>
              <li>
                <span className="hover:text-sky-600 transition-colors">
                  Cash on Delivery &amp; Advance Token Policy
                </span>
              </li>
              <li>
                <a
                  href="https://wa.me/923001234567?text=Corporate%20Inquiry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-600 transition-colors"
                >
                  Corporate &amp; Wholesale Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Payment & Assurances */}
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-wider text-slate-900 font-extrabold font-headline">
              Payment &amp; Assurances
            </p>
            <div className="flex flex-col gap-2 text-xs text-slate-700">
              <p className="flex items-center gap-2 font-medium">
                <span className="material-symbols-outlined text-[18px] text-emerald-600">
                  verified_user
                </span>
                7-Day Replacement Guarantee
              </p>
              <p className="flex items-center gap-2 font-medium">
                <span className="material-symbols-outlined text-[18px] text-amber-500">
                  payments
                </span>
                COD Nationwide / JazzCash / EasyPaisa
              </p>
              <p className="flex items-center gap-2 font-medium">
                <span className="material-symbols-outlined text-[18px] text-sky-600">
                  lock
                </span>
                256-bit Encrypted Checkout
              </p>
            </div>
            <div className="mt-2 flex flex-col gap-1 text-xs">
              <span className="text-[11px] text-slate-400 uppercase font-bold tracking-wider">
                Studio Hours
              </span>
              <span className="text-slate-800">
                Monday – Saturday: 10:00 AM – 10:00 PM
              </span>
              <span className="text-slate-800">
                Sunday: 02:00 PM – 09:00 PM
              </span>
            </div>
          </div>
        </div>

        {/* Spares Keyword Strip */}
        <div className="pt-4 pb-6 border-t border-slate-200">
          <p className="text-[11px] text-slate-900 uppercase tracking-wider mb-2 font-bold font-headline">
            Popular Vehicle Accessories &amp; Spares:
          </p>
          <div className="flex flex-wrap gap-2 text-xs text-slate-500">
            <span className="hover:text-sky-600 transition-colors cursor-pointer">
              Toyota Prado Body Kits
            </span>
            •
            <span className="hover:text-sky-600 transition-colors cursor-pointer">
              Honda Civic RS Spoilers
            </span>
            •
            <span className="hover:text-sky-600 transition-colors cursor-pointer">
              Suzuki Alto 9D Floor Mats
            </span>
            •
            <span className="hover:text-sky-600 transition-colors cursor-pointer">
              Haval H6 PPF Wrap
            </span>
            •
            <span className="hover:text-sky-600 transition-colors cursor-pointer">
              Android IPS Panels
            </span>
            •
            <span className="hover:text-sky-600 transition-colors cursor-pointer">
              Bi-LED Projector Fog Lamps
            </span>
            •
            <span className="hover:text-sky-600 transition-colors cursor-pointer">
              Ceramic Coating Pakistan
            </span>
            •
            <span className="hover:text-sky-600 transition-colors cursor-pointer">
              Changan Alsvin Trunk Mats
            </span>
            •
            <span className="hover:text-sky-600 transition-colors cursor-pointer">
              KIA Sportage Footsteps
            </span>
          </div>
        </div>

        {/* Bottom Rights */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 border-t border-slate-200">
          <p>
            © 2025 Heaven Autos Pakistan. All rights reserved. Precision Fitment
            Engineering.
          </p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-900 transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-slate-900 transition-colors cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:text-slate-900 transition-colors cursor-pointer">
              Branch Locator
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
