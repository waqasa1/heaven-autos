import { useState } from "react";
export const OrderTrackingModal = ({ isOpen, onClose }) => {
  const [trackingInput, setTrackingInput] = useState("HA-82914");
  const [searched, setSearched] = useState(true);
  if (!isOpen) return null;
  const handleSearch = (e) => {
    e.preventDefault();
    if (!trackingInput.trim()) return;
    setSearched(true);
  };
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sky-600 text-[24px]">
              local_shipping
            </span>
            <h3 className="font-headline text-lg font-bold text-slate-900">
              Nationwide Courier Tracking Desk
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

        <div className="p-6">
          <form onSubmit={handleSearch} className="flex gap-2 mb-6">
            <input
              type="text"
              value={trackingInput}
              onChange={(e) => setTrackingInput(e.target.value)}
              placeholder="Enter Order ID (e.g. HA-82914) or Phone"
              className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white"
            />
            <button
              type="submit"
              className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-xs cursor-pointer"
            >
              Track
            </button>
          </form>

          {searched && (
            <div>
              {/* Order Metadata Box */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mb-6 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-200 font-bold">
                  <span className="text-slate-500">Order Reference:</span>
                  <span className="text-sky-700 font-headline">
                    {trackingInput.toUpperCase()}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Courier Partner:</span>
                  <span className="text-slate-900 font-semibold">
                    TCS Express Overnight
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Consignment Number:</span>
                  <span className="text-slate-900 font-mono">77189420914</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Destination:</span>
                  <span className="text-slate-900">
                    Gulshan-e-Iqbal, Karachi
                  </span>
                </div>
                <div className="flex justify-between py-1 text-emerald-700 font-bold">
                  <span>Status:</span>
                  <span>Out for Doorstep Delivery Today</span>
                </div>
              </div>

              {/* Courier Milestones Stepper */}
              <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                {/* Step 1 */}
                <div className="relative">
                  <span className="absolute -left-[27px] top-0.5 w-4 h-4 rounded-full bg-emerald-600 ring-4 ring-emerald-100 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  </span>
                  <div className="text-xs">
                    <p className="font-bold text-slate-900">
                      Order Confirmed &amp; Token Verified
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Lahore Central Hub • Rs. 500 JazzCash Verified
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative">
                  <span className="absolute -left-[27px] top-0.5 w-4 h-4 rounded-full bg-emerald-600 ring-4 ring-emerald-100 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  </span>
                  <div className="text-xs">
                    <p className="font-bold text-slate-900">
                      Package Dispatched from Warehouse
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Handed over to TCS Express Flight Manifest
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative">
                  <span className="absolute -left-[27px] top-0.5 w-4 h-4 rounded-full bg-emerald-600 ring-4 ring-emerald-100 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  </span>
                  <div className="text-xs">
                    <p className="font-bold text-slate-900">
                      Arrived at Destination City Hub
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Karachi Airport Logistics Center
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="relative">
                  <span className="absolute -left-[27px] top-0.5 w-4 h-4 rounded-full bg-sky-600 ring-4 ring-sky-100 animate-pulse flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  </span>
                  <div className="text-xs">
                    <p className="font-bold text-sky-700">
                      Out for Doorstep Delivery
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Courier Rider assigned • Expected before 06:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200 flex justify-between items-center text-xs">
                <span className="text-slate-500">Need courier expedite?</span>
                <a
                  href={`https://wa.me/923001234567?text=Track%20Urgent%20Order%20${trackingInput}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] font-bold flex items-center gap-1 hover:underline"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    chat
                  </span>
                  WhatsApp Helpline
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
