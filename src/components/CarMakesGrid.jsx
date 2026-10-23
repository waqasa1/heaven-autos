export const CarMakesGrid = ({ onSelectMake, selectedMake }) => {
  const makes = [
    {
      id: "toyota",
      name: "Toyota",
      models: "Corolla, Revo, Fortuner",
      icon: "directions_car",
    },
    {
      id: "honda",
      name: "Honda",
      models: "Civic, City, HR-V",
      icon: "sports_motorsports",
    },
    {
      id: "suzuki",
      name: "Suzuki",
      models: "Alto, Cultus, Swift",
      icon: "commute",
    },
    {
      id: "haval",
      name: "Haval",
      models: "H6, Jolion, HEV",
      icon: "electric_car",
    },
    {
      id: "changan",
      name: "Changan",
      models: "Alsvin, Oshan X7",
      icon: "minor_crash",
    },
    { id: "kia", name: "KIA", models: "Sportage, Sorento", icon: "toys" },
    {
      id: "hyundai",
      name: "Hyundai",
      models: "Tucson, Elantra",
      icon: "shield",
    },
    {
      id: "byd",
      name: "BYD",
      models: "Atto 3, Seal, Shark",
      icon: "battery_charging_full",
    },
    { id: "mg", name: "MG", models: "HS, GT, ZS EV", icon: "speed" },
  ];
  return (
    <section className="py-12 px-4 sm:px-8 bg-white border-b border-slate-200">
      <div className="max-w-[1360px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-2">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-sky-600 font-bold">
              Direct Vehicle Compatibility
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-slate-900 mt-1 font-bold">
              Shop Accessories by Car Make
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Tailored precision parts, floor mats, covers, and lighting kits
              engineered for Pakistan&apos;s most popular models.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onSelectMake("")}
            className="flex items-center gap-1 text-xs sm:text-sm text-sky-600 font-bold hover:underline cursor-pointer self-start md:self-auto"
          >
            <span>Show All Vehicle Models</span>
            <span className="material-symbols-outlined text-[18px]">
              arrow_forward
            </span>
          </button>
        </div>

        {/* 9 Car Make Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-3">
          {makes.map((make) => {
            const isSelected = selectedMake === make.id;
            return (
              <button
                key={make.id}
                type="button"
                onClick={() => onSelectMake(make.id)}
                className={`group p-3 rounded-xl border text-center flex flex-col items-center justify-center gap-1 transition-all hover:-translate-y-0.5 cursor-pointer ${
                  isSelected
                    ? "bg-sky-50 border-sky-400 ring-2 ring-sky-400/20 shadow-sm"
                    : "bg-slate-50 hover:bg-white border-slate-200 shadow-xs hover:shadow-sm"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full border flex items-center justify-center transition-colors shadow-xs ${
                    isSelected
                      ? "bg-sky-600 text-white border-sky-600"
                      : "bg-white border-slate-200 group-hover:border-sky-500 text-slate-800"
                  }`}
                >
                  <span className="material-symbols-outlined text-[24px]">
                    {make.icon}
                  </span>
                </div>
                <span className="font-bold text-xs sm:text-sm text-slate-900 mt-1">
                  {make.name}
                </span>
                <span className="text-[10px] sm:text-[11px] text-slate-500 truncate max-w-full">
                  {make.models}
                </span>
                <span className="mt-0.5 text-[10px] text-sky-600 font-bold group-hover:underline">
                  {isSelected ? "Selected ✓" : "Explore →"}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
