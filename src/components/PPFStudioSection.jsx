import { PPF_PACKAGES } from "../data/mockData";
export const PPFStudioSection = ({ onOpenBookingModal }) => {
  return (
    <section
      className="pt-4 pb-12 px-4 sm:px-8 bg-white border-b border-slate-200"
      id="ppf-studio"
    >
      <div className="max-w-[1360px] mx-auto">
        {/* Studio Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200 text-slate-900 px-3 py-1 rounded-md text-[11px] uppercase font-bold tracking-widest mb-3">
              <span className="material-symbols-outlined text-[16px] text-sky-600">
                verified
              </span>
              Professional Studio Services
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Certified PPF &amp; Precision Detailing Studio
            </h2>
            <p className="text-slate-950 font-normal text-sm sm:text-base mt-2.5 leading-relaxed">
              Protect your multi-million rupee investment against rock chips,
              harsh desert UV radiation, and acidic rain. Installed in dust-free
              specialized cleanrooms in Lahore and Multan by factory-certified
              applicators.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              className="bg-[#25D366] hover:bg-emerald-600 text-white px-6 py-3 rounded-xl text-xs sm:text-sm uppercase tracking-wider font-bold flex items-center justify-center gap-2 shadow-xs transition-transform hover:-translate-y-0.5"
              href="https://wa.me/923001234567?text=Hi%20Heaven%20Autos%20I%20want%20a%20custom%20PPF%20Quote%20and%20studio%20slot%20booking"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[20px]">
                chat
              </span>
              Book Slot via WhatsApp
            </a>
            <button
              type="button"
              onClick={() => onOpenBookingModal()}
              className="bg-slate-50 hover:bg-slate-100 text-slate-900 border border-slate-200 px-6 py-3 rounded-xl text-xs sm:text-sm uppercase tracking-wider font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px] text-sky-600">
                calendar_month
              </span>
              Book Online Slot
            </button>
          </div>
        </div>

        {/* Studio Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
          {/* Service 1: Full Body TPU Self-Healing PPF */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between group hover:bg-white hover:shadow-md transition-all">
            <div>
              <div className="relative h-52 sm:h-56 w-full rounded-xl overflow-hidden bg-white mb-4 border border-slate-200">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  alt="Certified PPF technician carefully applying clear thermoplastic polyurethane self healing film onto front fender"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5qhN1vij_7UwpOrd0kMi0UdSzscahzT5ZekiCN5urWagosLD-AXB66iJuNhM3LrHMipsPfbAzMxv-NqT7urBZE9xngv5Dcpm2HgR_xgXqEPW4cgXro6pKkAvUrW98-Jlwgb6VWKHdR_2gp4YncILxos0ITmCM7FcOmGGUjT6GzgyxNKEfU0m5l0rwM2SiRmPExNukjuSvU0W9K9WdNGnlpTBLT7I6z2nDje4-i6Kn"
                />
                <span className="absolute top-3 left-3 bg-slate-900 text-white text-[10px] px-2.5 py-0.5 rounded font-bold uppercase tracking-wider">
                  10-Year Warranty
                </span>
              </div>
              <h3 className="font-headline text-lg sm:text-xl text-slate-900 font-bold">
                Full Body TPU Self-Healing PPF
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">
                Optical clarity 8.5mil TPU membrane. Instant scratch recovery
                under warm sunlight, extreme stone-chip protection, and ultra
                hydrophobic top-coat.
              </p>
              <ul className="mt-4 flex flex-col gap-1.5 text-xs text-slate-700">
                <li className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-emerald-600 text-[18px]">
                    check
                  </span>
                  10-Year Anti-Yellowing Warranty
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-emerald-600 text-[18px]">
                    check
                  </span>
                  Computer Pre-Cut Software Pattern
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-emerald-600 text-[18px]">
                    check
                  </span>
                  Zero Paint Blade Trimming Risk
                </li>
              </ul>
            </div>
            <div className="pt-5 mt-4 border-t border-slate-200">
              <div className="flex items-baseline justify-between mb-3">
                <span className="text-xs text-slate-500 font-semibold">
                  Studio Packages From
                </span>
                <span className="font-headline text-2xl font-extrabold text-slate-950">
                  Rs. 99,999
                </span>
              </div>
              <button
                type="button"
                onClick={() =>
                  onOpenBookingModal("Full Body TPU Self-Healing PPF")
                }
                className="w-full bg-[#b7db39] hover:bg-[#a3c72b] text-slate-950 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1 transition-colors shadow-xs cursor-pointer"
              >
                <span>Book PPF Slot</span>
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>

          {/* Service 2: 9H Ceramic Quartz Coating */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between group hover:bg-white hover:shadow-md transition-all">
            <div>
              <div className="relative h-52 sm:h-56 w-full rounded-xl overflow-hidden bg-white mb-4 border border-slate-200">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  alt="Mirror glossy car bonnet reflecting neon lights after 9H ceramic coating application"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4_vlafKH_gwz1TTgF4WMkcIzaK9g5hq4pkBaGzPoc9Ip3kIX-b0Ud5GOkPM6pAU6kajLbEcywibWHwpEkpjOVvh3oty_Id2E9uzBCJxWmFTNGkwx8i0LtWqGUeZ-ErwsaGUCxxYZwN-EfLuT9yugOz9aOZtmEw4h402UG7qXJwLZlVx86gSgAEIhKvxsmVbbS1B6PS3A4O4y-Z222NJKSyvd13WFolkXadEDAdvdZ"
                />
                <span className="absolute top-3 left-3 bg-sky-600 text-white text-[10px] px-2.5 py-0.5 rounded font-bold uppercase tracking-wider">
                  3-Year Gloss
                </span>
              </div>
              <h3 className="font-headline text-lg sm:text-xl text-slate-900 font-bold">
                Ceramic Coating 9H Diamond Gloss
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">
                Multi-layer SiO2 nanotech formula penetrating clearcoat pores
                for permanent deep liquid shine, UV resistance, and effortless
                wash routine.
              </p>
              <ul className="mt-4 flex flex-col gap-1.5 text-xs text-slate-700">
                <li className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-emerald-600 text-[18px]">
                    check
                  </span>
                  3-Stage Paint Swirl Correction Included
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-emerald-600 text-[18px]">
                    check
                  </span>
                  Hydrophobic 110-Degree Water Contact Angle
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-emerald-600 text-[18px]">
                    check
                  </span>
                  Wheels &amp; Glass Nanocoating Included
                </li>
              </ul>
            </div>
            <div className="pt-5 mt-4 border-t border-slate-200">
              <div className="flex items-baseline justify-between mb-3">
                <span className="text-xs text-slate-500 font-semibold">
                  Sedan / SUV From
                </span>
                <span className="font-headline text-2xl font-extrabold text-slate-950">
                  Rs. 35,000
                </span>
              </div>
              <button
                type="button"
                onClick={() => onOpenBookingModal("9H Ceramic Quartz Coating")}
                className="w-full bg-white border border-slate-200 text-slate-900 hover:bg-slate-100 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1 transition-colors shadow-xs cursor-pointer"
              >
                <span>Book Ceramic Detailing</span>
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>

          {/* Service 3: Interior Steam Detailing & Leather Restoration */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between group hover:bg-white hover:shadow-md transition-all">
            <div>
              <div className="relative h-52 sm:h-56 w-full rounded-xl overflow-hidden bg-white mb-4 border border-slate-200">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  alt="High temperature steam cleaning wand lifting dirt from perforated car leather seats"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCreamPPlPuPrSXKfJuILAnCglysV7mmGM_wn4y2IfJ50JivwJkgeYwemPNx8r1Ykb21THxXo2UD6v7AtSUSzS0My1daIgT0hES6wNfknOSnhgB7qo7q5aPHOksidEtDrmP4IAxC7GIzdwiz8_5Z6yMg57nSKndaIcv24Z-nbyf84lGpCz2eCW677az6Ty0y_dhli_TQatsj7X-L4bdRYGTM96oLwkQzzkbKQYQarug"
                />
                <span className="absolute top-3 left-3 bg-emerald-600 text-white text-[10px] px-2.5 py-0.5 rounded font-bold uppercase tracking-wider">
                  100% Sanitized
                </span>
              </div>
              <h3 className="font-headline text-lg sm:text-xl text-slate-900 font-bold">
                Interior Steam &amp; Leather Restoration
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">
                Complete cabin extraction, roof lining hygiene, 140°C thermal
                steam eradication of bacteria and allergens, followed by matte
                leather nourishing.
              </p>
              <ul className="mt-4 flex flex-col gap-1.5 text-xs text-slate-700">
                <li className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-emerald-600 text-[18px]">
                    check
                  </span>
                  Zero Chemical Smell / 100% Organic Steam
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-emerald-600 text-[18px]">
                    check
                  </span>
                  Full Seat &amp; Carpet Deep Soil Extraction
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-emerald-600 text-[18px]">
                    check
                  </span>
                  Dashboard Matte Conditioning Anti-Crack
                </li>
              </ul>
            </div>
            <div className="pt-5 mt-4 border-t border-slate-200">
              <div className="flex items-baseline justify-between mb-3">
                <span className="text-xs text-slate-500 font-semibold">
                  Full Interior Spa From
                </span>
                <span className="font-headline text-2xl font-extrabold text-slate-950">
                  Rs. 18,500
                </span>
              </div>
              <button
                type="button"
                onClick={() =>
                  onOpenBookingModal("Interior Steam & Leather Restoration")
                }
                className="w-full bg-white border border-slate-200 text-slate-900 hover:bg-slate-100 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1 transition-colors shadow-xs cursor-pointer"
              >
                <span>Book Interior Detailing</span>
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Specific PPF Vehicle Package Matrix */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 gap-2 border-b border-slate-200 mb-6">
            <div>
              <span className="text-[11px] text-sky-600 uppercase font-bold tracking-wider">
                Instant PPF Pricing
              </span>
              <h3 className="font-headline text-lg md:text-xl text-slate-900 font-bold">
                Pre-Configured PPF Packages for New Vehicle Releases
              </h3>
            </div>
            <p className="text-xs text-slate-500">
              Includes full body wrapping, paint correction prep, and 10-year
              warranty certificate.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PPF_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white border border-slate-200 p-5 rounded-xl flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
              >
                <div>
                  <span className="text-[11px] text-sky-600 font-semibold">
                    {pkg.category}
                  </span>
                  <h4 className="font-headline text-base text-slate-900 font-bold mt-1 leading-snug">
                    {pkg.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {pkg.description}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-200">
                  <p className="font-headline text-xl font-extrabold text-slate-950">
                    Rs. {pkg.price.toLocaleString("en-PK")}
                  </p>
                  <a
                    className="mt-2 block w-full bg-[#25D366] text-center text-white py-2 rounded-lg text-xs font-bold hover:bg-emerald-600 transition-colors shadow-xs"
                    href={`https://wa.me/923001234567?text=Order%20PPF%20Package%20for%20${encodeURIComponent(pkg.title)}%20(Rs.%20${pkg.price.toLocaleString("en-PK")})`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Order via WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
