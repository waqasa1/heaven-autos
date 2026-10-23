import { REVIEWS } from "../data/mockData";
export const ReviewsSection = () => {
  return (
    <section className="py-16 px-4 sm:px-8 bg-slate-50 border-b border-slate-200">
      <div className="max-w-[1360px] mx-auto">
        {/* Proof Counters Bar */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-xs mb-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-2">
            <p className="font-headline text-2xl sm:text-3xl font-extrabold text-slate-950">
              50,000+
            </p>
            <p className="text-xs uppercase tracking-wider text-sky-600 font-bold mt-1">
              Satisfied Car Owners
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Across all 4 Provinces &amp; AJK
            </p>
          </div>
          <div className="p-2">
            <p className="font-headline text-2xl sm:text-3xl font-extrabold text-slate-950">
              4,500+
            </p>
            <p className="text-xs uppercase tracking-wider text-emerald-600 font-bold mt-1">
              Exact-Fit Accessories
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Laser Scanned for 2014-2026 Models
            </p>
          </div>
          <div className="p-2">
            <p className="font-headline text-2xl sm:text-3xl font-extrabold text-slate-950">
              100%
            </p>
            <p className="text-xs uppercase tracking-wider text-slate-900 font-bold mt-1">
              Nationwide Coverage
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Karachi, Lahore, Islamabad, Multan
            </p>
          </div>
          <div className="p-2">
            <p className="font-headline text-2xl sm:text-3xl font-extrabold text-slate-950">
              4.9 / 5.0
            </p>
            <p className="text-xs uppercase tracking-wider text-rose-600 font-bold mt-1">
              Customer Satisfaction
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Over 3,200 Google &amp; Social Reviews
            </p>
          </div>
        </div>

        {/* Testimonials Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-[11px] uppercase tracking-widest text-sky-600 font-bold">
            Verified Buyer Reviews
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-slate-950 mt-1 font-bold">
            What Our Customers Say
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Authentic experiences from automobile enthusiasts across Pakistan.
          </p>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3 gap-2">
                  <div className="flex text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-[18px]"
                      >
                        star
                      </span>
                    ))}
                  </div>
                  <span className="bg-slate-50 border border-slate-200 text-slate-800 text-[10px] px-2 py-0.5 rounded font-bold truncate max-w-[150px]">
                    {review.carModel}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                  &quot;{review.content}&quot;
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 text-slate-800 font-bold flex items-center justify-center font-headline text-sm shrink-0">
                  {review.avatarLetter}
                </div>
                <div className="truncate">
                  <p className="font-headline text-sm font-bold text-slate-900 truncate">
                    {review.author}
                  </p>
                  <p className="text-[11px] text-slate-500 truncate">
                    {review.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
