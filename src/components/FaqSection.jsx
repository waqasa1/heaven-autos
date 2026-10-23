import { useState } from "react";
import { FAQS, DIRECTORY_TAGS } from "../data/mockData";
export const FaqSection = ({ onTagClick }) => {
  const [openFaq, setOpenFaq] = useState("faq-1");
  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };
  return (
    <section className="py-16 px-4 sm:px-8 bg-white border-b border-slate-200">
      <div className="max-w-[1360px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[11px] uppercase tracking-widest text-sky-600 font-bold">
            Automotive Knowledge Base &amp; Purchasing Guide
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-slate-950 mt-1 font-bold">
            Frequently Asked Questions &amp; Fitment Standards
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
            Understand why precision-engineered car accessories protect your
            vehicle&apos;s resale value and driver comfort compared to generic local
            market duplicates.
          </p>
        </div>

        {/* FAQ Accordions Stack */}
        <div className="max-w-4xl mx-auto flex flex-col gap-3">
          {FAQS.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span className="font-headline text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <span className="material-symbols-outlined text-slate-400 text-[24px] shrink-0 transition-transform duration-200">
                    {isOpen ? "expand_less" : "expand_more"}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* SEO Transactional Directory Cloud */}
        <div className="mt-14 bg-slate-50 border border-slate-200 p-6 md:p-8 rounded-2xl shadow-xs">
          <h3 className="font-headline text-base font-bold text-slate-900 mb-1">
            Popular Automotive Accessories &amp; Spare Parts Directory in
            Pakistan
          </h3>
          <p className="text-xs text-slate-500 mb-4">
            Click any verified vehicle search query below to explore matching
            accessories:
          </p>
          <div className="flex flex-wrap gap-2 text-xs text-slate-600">
            {DIRECTORY_TAGS.map((tag, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => onTagClick(tag)}
                className="bg-white border border-slate-200 px-3 py-1.5 rounded-lg hover:border-sky-500 hover:text-sky-600 transition-colors shadow-xs cursor-pointer text-left"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
