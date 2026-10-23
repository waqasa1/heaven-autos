export const TrustRibbon = () => {
  return (
    <section className="bg-white py-6 px-4 sm:px-8 border-b border-slate-200">
      <div className="max-w-[1360px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center gap-4 hover:border-sky-300 transition-colors">
          <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-sky-600 shadow-sm shrink-0">
            <span className="material-symbols-outlined text-[28px]">
              local_shipping
            </span>
          </div>
          <div>
            <p className="font-bold text-sm text-slate-900 font-headline">
              Nationwide Express
            </p>
            <p className="text-xs text-slate-500">
              48-72h Tracked Courier in All Cities
            </p>
          </div>
        </div>

        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center gap-4 hover:border-emerald-300 transition-colors">
          <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-emerald-600 shadow-sm shrink-0">
            <span className="material-symbols-outlined text-[28px]">
              verified
            </span>
          </div>
          <div>
            <p className="font-bold text-sm text-slate-900 font-headline">
              100% Fitment Guarantee
            </p>
            <p className="text-xs text-slate-500">
              Precision 3D Laser-Scanned Parts
            </p>
          </div>
        </div>

        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center gap-4 hover:border-amber-300 transition-colors">
          <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-amber-500 shadow-sm shrink-0">
            <span className="material-symbols-outlined text-[28px]">
              shield
            </span>
          </div>
          <div>
            <p className="font-bold text-sm text-slate-900 font-headline">
              Warranty Backed
            </p>
            <p className="text-xs text-slate-500">
              7-Day Replacement &amp; Fit Assurances
            </p>
          </div>
        </div>

        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center gap-4 hover:border-slate-400 transition-colors">
          <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-900 shadow-sm shrink-0">
            <span className="material-symbols-outlined text-[28px]">
              handyman
            </span>
          </div>
          <div>
            <p className="font-bold text-sm text-slate-900 font-headline">
              Studio Installation
            </p>
            <p className="text-xs text-slate-500">
              Certified Mechanics in Lahore &amp; Multan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
