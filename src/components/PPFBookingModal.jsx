import { useState } from "react";
export const PPFBookingModal = ({ isOpen, onClose, defaultPackageTitle }) => {
  const [studio, setStudio] = useState("Lahore - DHA Phase 5 Studio");
  const [pkg, setPkg] = useState(
    defaultPackageTitle || "Full Body TPU Self-Healing PPF",
  );
  const [vehicle, setVehicle] = useState("Haval H6 Facelift");
  const [date, setDate] = useState("2026-10-12");
  const [timeSlot, setTimeSlot] = useState("11:00 AM – Morning Cleanroom Slot");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [booked, setBooked] = useState(false);
  if (!isOpen) return null;
  const handleBooking = (e) => {
    e.preventDefault();
    if (!name || !phone) {
      alert("Please fill out your Name and Phone Number");
      return;
    }
    setBooked(true);
  };
  const waBookingText = encodeURIComponent(
    `*NEW PPF & DETAILING STUDIO APPOINTMENT*\n` +
      `*Client:* ${name}\n` +
      `*Contact:* ${phone}\n` +
      `*Vehicle:* ${vehicle}\n` +
      `*Package:* ${pkg}\n` +
      `*Studio Location:* ${studio}\n` +
      `*Appointment Date:* ${date}\n` +
      `*Slot:* ${timeSlot}\n\nPlease confirm slot availability in the cleanroom bay.`,
  );
  const waBookingLink = `https://wa.me/923001234567?text=${waBookingText}`;
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-amber-500 text-[24px]">
              shield
            </span>
            <h3 className="font-headline text-lg font-bold text-slate-900">
              {booked
                ? "Studio Slot Reserved"
                : "Book Studio Installation / PPF Slot"}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {booked ? (
          <div className="p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined text-[36px]">
                verified
              </span>
            </div>
            <h3 className="font-headline text-2xl font-bold text-slate-950">
              Slot Request Recorded!
            </h3>
            <p className="text-xs text-slate-600 mt-1 max-w-sm mx-auto">
              Our Master Detailing Consultant in {studio.split(" - ")[0]} will
              inspect your vehicle intake and prepare the cleanroom bay.
            </p>

            <div className="my-5 p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs max-w-md mx-auto">
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-500">Service:</span>
                <span className="font-bold text-slate-900">{pkg}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-500">Vehicle:</span>
                <span className="font-bold text-slate-900">{vehicle}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-500">Studio:</span>
                <span className="font-bold text-slate-900">{studio}</span>
              </div>
              <div className="flex justify-between py-1 text-emerald-700 font-bold">
                <span>Date &amp; Slot:</span>
                <span>
                  {date} ({timeSlot.split(" – ")[0]})
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2 max-w-sm mx-auto">
              <a
                href={waBookingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-emerald-600 text-white py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-xs"
              >
                <span className="material-symbols-outlined text-[20px]">
                  chat
                </span>
                Confirm via WhatsApp Desk
              </a>
              <button
                type="button"
                onClick={onClose}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 py-2.5 rounded-xl text-xs font-bold"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleBooking} className="p-6 flex flex-col gap-3.5">
            <div>
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600 block mb-1">
                Studio Location *
              </label>
              <select
                value={studio}
                onChange={(e) => setStudio(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-sky-500 cursor-pointer"
              >
                <option value="Lahore - DHA Phase 5 Studio">
                  Lahore (DHA Phase 5 Cleanroom Center)
                </option>
                <option value="Lahore - Montgomery Road Flagship">
                  Lahore (Montgomery Road Flagship Workshop)
                </option>
                <option value="Multan - Cantt Officers Colony">
                  Multan (Cantt VIP Detailing Studio)
                </option>
                <option value="Karachi - Clifton Block 4 Studio">
                  Karachi (Clifton Certified PPF Studio)
                </option>
                <option value="Islamabad - Sector I-9 Cleanroom">
                  Islamabad (Sector I-9 High-Tech Studio)
                </option>
              </select>
            </div>

            <div>
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600 block mb-1">
                Selected Package *
              </label>
              <select
                value={pkg}
                onChange={(e) => setPkg(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-sky-500 cursor-pointer"
              >
                <option value="Full Body TPU Self-Healing PPF (10-Yr Warranty)">
                  Full Body TPU Self-Healing PPF (10-Year Warranty) - Rs.
                  99,999+
                </option>
                <option value="9H Ceramic Quartz Coating (3-Yr Gloss)">
                  Ceramic Coating 9H Diamond Gloss (3-Year Gloss) - Rs. 35,000
                </option>
                <option value="Interior Steam & Leather Restoration">
                  Interior Steam &amp; Deep Soil Restoration - Rs. 18,500
                </option>
                <option value="Front Clip PPF Protection (Bumper + Bonnet + Fenders)">
                  Front Clip PPF Protection Pack - Rs. 48,000
                </option>
              </select>
            </div>

            <div>
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600 block mb-1">
                Your Vehicle Model &amp; Year *
              </label>
              <input
                type="text"
                required
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                placeholder="e.g. Haval H6 HEV 2026 or Fortuner Legender"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600 block mb-1">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white"
                />
              </div>
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600 block mb-1">
                  Time Slot *
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-sky-500 cursor-pointer"
                >
                  <option value="10:30 AM – Morning Intake Slot">
                    10:30 AM – Morning Intake
                  </option>
                  <option value="02:30 PM – Afternoon Slot">
                    02:30 PM – Afternoon Slot
                  </option>
                  <option value="06:00 PM – Evening Express Slot">
                    06:00 PM – Evening Slot
                  </option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600 block mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Tariq Mehmood"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white"
                />
              </div>
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600 block mb-1">
                  WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 0300 1234567"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer mt-2"
            >
              <span className="material-symbols-outlined text-[20px]">
                calendar_month
              </span>
              Reserve Studio Slot
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
