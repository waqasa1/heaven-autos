export const HeroSection = ({ onShopNowClick, onPpfClick }) => {
  return (
    <div className="w-full flex flex-col">
      {/* Top Highlight Notice Bar */}
      <section className="bg-slate-50 border-y border-slate-200 text-slate-900 py-2 px-4 sm:px-8">
        <div className="max-w-[1360px] mx-auto flex flex-col md:flex-row items-center justify-between text-xs sm:text-sm gap-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-amber-500">
              bolt
            </span>
            <span className="font-bold uppercase tracking-wider text-xs text-slate-900">
              VIP EXPRESS:
            </span>
            <span className="text-slate-600">
              Karachi, Lahore, Islamabad &amp; Multan Guaranteed 48-Hour
              Delivery Available
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-600">
            <span className="hidden sm:inline">
              Need Fitment Advice? Talk to Auto Engineers
            </span>
            <a
              className="text-[#25D366] font-bold flex items-center gap-1 hover:underline"
              href="https://wa.me/923001234567?text=Hi%20Heaven%20Autos%20I%20need%20vehicle%20fitment%20guidance"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[16px]">
                support_agent
              </span>
              Live WhatsApp Desk
            </a>
          </div>
        </div>
      </section>

      {/* Light Asad Autos Style Hero Section */}
      <section className="relative bg-white text-slate-900 overflow-hidden pt-8 pb-12 border-b border-slate-200">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Copy & Asad Style CTA */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="border border-slate-200 bg-slate-50 text-slate-900 px-3 py-1 rounded-full text-xs font-bold tracking-wide flex items-center gap-1.5 shadow-xs">
                  <span className="material-symbols-outlined text-[15px] text-emerald-600">
                    verified
                  </span>
                  Pakistan&apos;s #1 Car Accessories Hub
                </span>
              </div>
              <h1 className="font-headline text-[38px] sm:text-[46px] md:text-[54px] lg:text-[56px] font-extrabold text-slate-950 tracking-tight leading-[1.08] mb-4">
                Premium Car Accessories in Pakistan
              </h1>
              <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                Heaven Autos offers quality car accessories in Pakistan,
                including floor mats, seat covers, Android panels, and LED
                lights, along with expert car detailing and Paint Protection
                Film (PPF) services.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={onShopNowClick}
                  className="inline-flex items-center justify-center bg-[#b7db39] hover:bg-[#a3c72b] text-slate-950 px-8 py-3.5 rounded-xl font-bold text-base transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
                >
                  Shop Now
                </button>
                <button
                  type="button"
                  onClick={onPpfClick}
                  className="inline-flex items-center justify-center bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-6 py-3.5 rounded-xl font-bold text-base transition-colors gap-2 cursor-pointer shadow-xs"
                >
                  <span className="material-symbols-outlined text-[18px] text-sky-600">
                    shield
                  </span>
                  Detailing &amp; PPF
                </button>
              </div>
            </div>

            {/* Right Column: Hero Visual with QuikSlide & White Porsche */}
            <div className="lg:col-span-7 flex justify-center items-center">
              <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200 bg-[#fafafa] p-2 sm:p-3 shadow-sm hover:shadow-md transition-shadow">
                <img
                  alt="Premium Car Accessories in Pakistan featuring white sports car and QuikSlide snap magnetic window sunshade accessory"
                  className="w-full h-auto object-contain rounded-xl"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmINwAln6oWf63JoEk7WNw7PH_tmg08IwMRDy8q6XnsvND_5uJb-cLOFaM3KlPhav7IZ_FKHwbBZ7Asp-DH57riStuotP_klAOtXpJ1VnxN88K5VCpLRKDCyZ7YGZ11cZZtrjBk3t0wJGPWJpQoElx-zNn6zb8mOleLmOMxRJM7ZGAQjn4FOw-R2OOqJnPdSY0miI0vEYenPrbfLXSu3ywnjXTENfcPKwVmIZPTYY4"
                />
              </div>
            </div>
          </div>

          {/* Trust Stats Bar */}
          <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-2 border-r last:border-r-0 border-slate-200">
              <p className="font-headline text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950">
                1,000,000+
              </p>
              <p className="text-slate-500 font-semibold text-xs sm:text-sm mt-1">
                Happy Customers
              </p>
            </div>
            <div className="p-2 md:border-r border-slate-200">
              <p className="font-headline text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950">
                5,000+
              </p>
              <p className="text-slate-500 font-semibold text-xs sm:text-sm mt-1">
                Products Available
              </p>
            </div>
            <div className="p-2 border-r last:border-r-0 border-slate-200">
              <p className="font-headline text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950">
                15+
              </p>
              <p className="text-slate-500 font-semibold text-xs sm:text-sm mt-1">
                Years in Business
              </p>
            </div>
            <div className="p-2">
              <p className="font-headline text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950">
                100%
              </p>
              <p className="text-slate-500 font-semibold text-xs sm:text-sm mt-1">
                Nationwide Delivery
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
