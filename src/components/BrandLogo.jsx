export const BrandLogo = ({ className = "", size = "md" }) => {
  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-9 h-9",
    lg: "w-11 h-11",
  };
  const textSizes = {
    sm: "text-base",
    md: "text-lg sm:text-xl",
    lg: "text-2xl",
  };
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Automotive Crest Emblem */}
      <div
        className={`${iconSizes[size]} rounded-xl bg-gradient-to-br from-slate-950 via-slate-900 to-sky-900 border border-slate-700/60 shadow-xs flex items-center justify-center p-1.5 relative overflow-hidden group-hover:scale-105 transition-transform duration-200 shrink-0`}
      >
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 via-transparent to-lime-400/20 pointer-events-none" />

        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
        >
          {/* Outer Shield Hexagon */}
          <path
            d="M20 2.5L34.5 10.5V26.5L20 37.5L5.5 26.5V10.5L20 2.5Z"
            stroke="url(#shield-gradient)"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Aerodynamic Speed Wing / Turbo Car Silhouette */}
          <path
            d="M10 22C14 20.5 17 19.5 20 19.5C23 19.5 26 20.5 30 22C26.5 17 23.5 14 20 14C16.5 14 13.5 17 10 22Z"
            fill="url(#accent-gradient)"
          />
          <path
            d="M7 26C12 24.5 16 23.8 20 23.8C24 23.8 28 24.5 33 26C29 27.8 24.5 29 20 29C15.5 29 11 27.8 7 26Z"
            fill="#38bdf8"
          />
          {/* Central Apex Diamond / Star */}
          <polygon points="20,7 22,12 20,14 18,12" fill="#b7db39" />
          <defs>
            <linearGradient
              id="shield-gradient"
              x1="5"
              y1="3"
              x2="35"
              y2="37"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#38bdf8" />
              <stop offset="0.5" stopColor="#0284c7" />
              <stop offset="1" stopColor="#b7db39" />
            </linearGradient>
            <linearGradient
              id="accent-gradient"
              x1="10"
              y1="14"
              x2="30"
              y2="22"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ffffff" />
              <stop offset="1" stopColor="#93c5fd" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center">
        <div
          className={`font-headline font-black ${textSizes[size]} tracking-tight leading-none text-slate-950 flex items-center`}
        >
          <span>HEAVEN</span>
          <span className="text-sky-600 ml-1">AUTOS</span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#b7db39] ml-1 mb-1"></span>
        </div>
        <span className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-slate-400 leading-tight mt-0.5">
          Pakistan&apos;s #1 Car Hub
        </span>
      </div>
    </div>
  );
};
