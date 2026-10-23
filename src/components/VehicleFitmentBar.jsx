import { useState } from "react";
import { VEHICLE_DATABASE } from "../data/mockData";
export const VehicleFitmentBar = ({
  activeVehicle,
  onApplyVehicleFilter,
  matchingCount,
}) => {
  const [selectedMake, setSelectedMake] = useState(activeVehicle?.make || "");
  const [selectedModel, setSelectedModel] = useState(
    activeVehicle?.model || "",
  );
  const [selectedYear, setSelectedYear] = useState(
    activeVehicle?.year || "2022-2026",
  );
  const [toastVisible, setToastVisible] = useState(!!activeVehicle);
  const availableModels =
    selectedMake && VEHICLE_DATABASE[selectedMake]
      ? VEHICLE_DATABASE[selectedMake].models
      : [];
  const handleMakeChange = (e) => {
    const make = e.target.value;
    setSelectedMake(make);
    setSelectedModel("");
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!selectedMake || !selectedModel) {
      alert("Please choose both a Car Make and Model to verify exact fitment!");
      return;
    }
    const filter = {
      make: selectedMake,
      model: selectedModel,
      year: selectedYear,
    };
    onApplyVehicleFilter(filter);
    setToastVisible(true);
    const el = document.getElementById("featured-products");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleReset = () => {
    setSelectedMake("");
    setSelectedModel("");
    setSelectedYear("2022-2026");
    setToastVisible(false);
    onApplyVehicleFilter(null);
  };
  const selectedModelName =
    availableModels.find((m) => m.id === selectedModel)?.name || selectedModel;
  return (
    <section className="py-8 px-4 sm:px-8 bg-slate-50 border-b border-slate-200">
      <div className="max-w-[1360px] mx-auto">
        <div className="bg-white text-slate-900 rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-5 border-b border-slate-200 mb-6">
            <div className="flex items-center gap-4">
              <span className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 flex items-center justify-center shadow-xs">
                <span className="material-symbols-outlined text-[26px] text-sky-600">
                  garage
                </span>
              </span>
              <div>
                <h2 className="text-xl md:text-2xl font-bold font-headline text-slate-900">
                  Find Guaranteed Fitment for Your Car
                </h2>
                <p className="text-xs md:text-sm text-slate-500 mt-0.5">
                  Select make, model, and year to instantly reveal matching
                  floor mats, shades, body kits, and electronic panels.
                </p>
              </div>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full text-xs font-bold self-start md:self-auto">
              <span className="material-symbols-outlined text-[16px] text-emerald-600">
                check_circle
              </span>
              {activeVehicle
                ? "Active Fitment Filter On"
                : "Active Fitment Scanner"}
            </div>
          </div>

          <form
            onSubmit={handleFormSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {/* Step 1: Make */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] uppercase tracking-wider text-slate-500 font-bold">
                1. Select Car Make
              </label>
              <div className="relative">
                <select
                  value={selectedMake}
                  onChange={handleMakeChange}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm font-semibold py-2.5 px-3.5 rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 cursor-pointer"
                >
                  <option value="">-- Choose Make --</option>
                  <option value="toyota">
                    Toyota (Corolla, Yaris, Fortuner, Revo)
                  </option>
                  <option value="honda">Honda (Civic, City, BR-V, HR-V)</option>
                  <option value="suzuki">
                    Suzuki (Alto, Cultus, Swift, WagonR)
                  </option>
                  <option value="haval">Haval (H6, Jolion, H6 Facelift)</option>
                  <option value="changan">
                    Changan (Alsvin, Oshan X7, Karvaan)
                  </option>
                  <option value="kia">
                    KIA (Sportage, Sorento, Picanto, Stonic)
                  </option>
                  <option value="hyundai">
                    Hyundai (Tucson, Elantra, Sonata)
                  </option>
                  <option value="byd">BYD (Atto 3, Seal, Shark)</option>
                  <option value="mg">MG (HS, ZS EV, GT)</option>
                </select>
                <span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
                  expand_more
                </span>
              </div>
            </div>

            {/* Step 2: Model */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] uppercase tracking-wider text-slate-500 font-bold">
                2. Select Model
              </label>
              <div className="relative">
                <select
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  disabled={!selectedMake}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm font-semibold py-2.5 px-3.5 rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <option value="">
                    {selectedMake
                      ? "-- Select Model --"
                      : "-- Choose Make First --"}
                  </option>
                  {availableModels.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.name}
                    </option>
                  ))}
                </select>
                <span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
                  expand_more
                </span>
              </div>
            </div>

            {/* Step 3: Generation / Year */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] uppercase tracking-wider text-slate-500 font-bold">
                3. Model Year
              </label>
              <div className="relative">
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm font-semibold py-2.5 px-3.5 rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 cursor-pointer"
                >
                  <option value="2025-2026">
                    2025 – 2026 (Latest Facelift)
                  </option>
                  <option value="2022-2024">2022 – 2024 (Current Gen)</option>
                  <option value="2018-2021">2018 – 2021</option>
                  <option value="2014-2017">2014 – 2017</option>
                  <option value="all-gen">All Generations Compatible</option>
                </select>
                <span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
                  expand_more
                </span>
              </div>
            </div>

            {/* Step 4: Submit Button */}
            <div className="flex flex-col justify-end">
              <button
                type="submit"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white py-2.5 px-4 rounded-xl text-sm uppercase tracking-wider flex items-center justify-center gap-2 font-bold transition-all shadow-sm cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">
                  manage_search
                </span>
                <span>Find Matching Parts</span>
              </button>
            </div>
          </form>

          {/* Live Fitment Notification Banner / Toast */}
          {toastVisible && activeVehicle && (
            <div className="mt-4 p-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-fade-in">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold">
                <span className="material-symbols-outlined text-[20px] text-emerald-600">
                  verified
                </span>
                <span>
                  Exact Fitment Confirmed: Showing {matchingCount} precision
                  items calibrated for{" "}
                  <strong className="text-emerald-950 font-bold uppercase">
                    {activeVehicle.make} {selectedModelName} (
                    {activeVehicle.year})
                  </strong>
                </span>
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="text-xs font-bold text-slate-700 hover:text-rose-600 transition-colors uppercase tracking-wider px-2 py-1 rounded bg-white border border-emerald-200"
              >
                Reset Filter ✕
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
