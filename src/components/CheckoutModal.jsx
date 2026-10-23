import { useState } from "react";
export const CheckoutModal = ({ isOpen, onClose, items, onOrderCompleted }) => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("Lahore");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [generatedOrderId, setGeneratedOrderId] = useState("");
  if (!isOpen) return null;
  const FREE_SHIPPING_THRESHOLD = 5000;
  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );
  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;
  const shippingFee = items.length === 0 ? 0 : isFreeShipping ? 0 : 299;
  const total = subtotal + shippingFee;
  const handleSubmitOrder = (e) => {
    e.preventDefault();
    if (!fullName || !phoneNumber || !address) {
      alert("Please fill out your Name, Phone Number, and Delivery Address!");
      return;
    }
    const orderId = `HA-${Math.floor(10000 + Math.random() * 90000)}`;
    setGeneratedOrderId(orderId);
    setOrderConfirmed(true);
  };
  const waOrderText = encodeURIComponent(
    `*NEW HEAVEN AUTOS ORDER CONFIRMATION*\n` +
      `*Order ID:* ${generatedOrderId}\n` +
      `*Customer:* ${fullName}\n` +
      `*Phone:* ${phoneNumber}\n` +
      `*City:* ${city}\n` +
      `*Address:* ${address}\n\n` +
      `*Items Ordered:*\n` +
      items
        .map(
          (it, idx) =>
            `${idx + 1}. ${it.product.name} (x${it.quantity}) - Rs. ${(it.product.price * it.quantity).toLocaleString("en-PK")}`,
        )
        .join("\n") +
      `\n\n*Total Payable:* Rs. ${total.toLocaleString("en-PK")}\n` +
      `*Payment Method:* ${paymentMethod === "cod" ? "COD + Rs. 500 Advance Token" : "Full Advance Bank"}\n` +
      `*Notes:* ${notes || "None"}\n\nPlease share JazzCash/EasyPaisa or Bank account for advance payment verification.`,
  );
  const waOrderLink = `https://wa.me/923001234567?text=${waOrderText}`;
  const pakistaniCities = [
    "Lahore",
    "Karachi",
    "Islamabad",
    "Rawalpindi",
    "Multan",
    "Faisalabad",
    "Peshawar",
    "Quetta",
    "Sialkot",
    "Gujranwala",
    "Hyderabad",
    "Sargodha",
    "Bahawalpur",
    "Abbottabad",
    "Gujrat",
    "Rahim Yar Khan",
    "Mirpur AJK",
    "Sukkur",
    "Mardan",
    "Sheikhupura",
  ];
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className="bg-white rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl border border-slate-200 relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sky-600 text-[24px]">
              verified_user
            </span>
            <h3 className="font-headline text-lg font-bold text-slate-900">
              {orderConfirmed
                ? "Order Received Successfully"
                : "Express Delivery Checkout"}
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

        {orderConfirmed ? (
          /* Confirmation Screen */
          <div className="p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined text-[36px]">
                check_circle
              </span>
            </div>
            <h3 className="font-headline text-2xl font-bold text-slate-950">
              Thank You, {fullName}!
            </h3>
            <p className="text-xs text-slate-600 mt-1 max-w-sm mx-auto">
              Your order has been registered in our central warehouse management
              system.
            </p>

            <div className="my-5 p-4 rounded-xl bg-slate-50 border border-slate-200 text-left max-w-md mx-auto text-xs">
              <div className="flex justify-between py-1 border-b border-slate-200 font-bold">
                <span className="text-slate-500">Tracking Reference:</span>
                <span className="text-sky-700 font-headline text-sm">
                  {generatedOrderId}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-500">Destination:</span>
                <span className="text-slate-900 font-semibold">
                  {city}, Pakistan
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-500">Total Payable:</span>
                <span className="text-slate-900 font-bold">
                  Rs. {total.toLocaleString("en-PK")}
                </span>
              </div>
              <div className="flex justify-between py-1 text-emerald-700 font-bold">
                <span>Advance Token Required:</span>
                <span>Rs. 500 (via JazzCash / EasyPaisa)</span>
              </div>
            </div>

            <p className="text-xs text-slate-500 mb-6 max-w-sm mx-auto">
              Please click the WhatsApp button below to instantly transmit your
              order confirmation to our dispatch desk for 48-hour shipment
              priority.
            </p>

            <div className="flex flex-col gap-2 max-w-sm mx-auto">
              <a
                href={waOrderLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onOrderCompleted()}
                className="w-full bg-[#25D366] hover:bg-emerald-600 text-white py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">
                  chat
                </span>
                Confirm Order on WhatsApp
              </a>
              <button
                type="button"
                onClick={() => {
                  onOrderCompleted();
                  onClose();
                }}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 py-2.5 rounded-xl text-xs font-bold"
              >
                Done / Back to Store
              </button>
            </div>
          </div>
        ) : (
          /* Checkout Form */
          <form
            onSubmit={handleSubmitOrder}
            className="p-6 flex flex-col gap-4"
          >
            {/* Advance payment notice */}
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-2.5 text-xs text-amber-900">
              <span className="material-symbols-outlined text-[18px] text-amber-600 shrink-0 mt-0.5">
                verified
              </span>
              <div>
                <strong className="block font-bold">
                  Advance Token Required for Dispatch:
                </strong>
                Due to parcel volumetric size, Rs. 500 advance payment via
                JazzCash, EasyPaisa, or Online Bank Transfer is required to
                confirm dispatch. Balance is paid upon Cash on Delivery.
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600 block mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Waqas Anwar"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white"
                />
              </div>
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600 block mb-1">
                  WhatsApp / Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="e.g. 0300 1234567"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600 block mb-1">
                Destination City *
              </label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-sky-500 cursor-pointer"
              >
                {pakistaniCities.map((c) => (
                  <option key={c} value={c}>
                    {c} (48-72h Delivery)
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600 block mb-1">
                Complete Street / House Address *
              </label>
              <textarea
                required
                rows={2}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="House #, Street #, Sector / Colony, Landmark"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white"
              />
            </div>

            {/* Payment Method Selector */}
            <div>
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600 block mb-1.5">
                Payment Option
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <label
                  className={`p-3 rounded-xl border flex items-center gap-2 cursor-pointer transition-all ${
                    paymentMethod === "cod"
                      ? "bg-sky-50 border-sky-400 text-sky-950 ring-1 ring-sky-400/20"
                      : "bg-slate-50 border-slate-200 text-slate-700"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                    className="text-sky-600 focus:ring-sky-500"
                  />
                  <div className="text-left text-xs">
                    <p className="font-bold">Cash on Delivery</p>
                    <p className="text-[10px] text-slate-500">
                      Rs. 500 Token Advance
                    </p>
                  </div>
                </label>

                <label
                  className={`p-3 rounded-xl border flex items-center gap-2 cursor-pointer transition-all ${
                    paymentMethod === "full-advance"
                      ? "bg-sky-50 border-sky-400 text-sky-950 ring-1 ring-sky-400/20"
                      : "bg-slate-50 border-slate-200 text-slate-700"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "full-advance"}
                    onChange={() => setPaymentMethod("full-advance")}
                    className="text-sky-600 focus:ring-sky-500"
                  />
                  <div className="text-left text-xs">
                    <p className="font-bold">Full Online Bank Transfer</p>
                    <p className="text-[10px] text-emerald-600 font-semibold">
                      Priority Fast Dispatch
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* Order Brief Summary */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
              <div className="flex justify-between text-slate-600 mb-1">
                <span>Items Subtotal ({items.length} items):</span>
                <span>Rs. {subtotal.toLocaleString("en-PK")}</span>
              </div>
              <div className="flex justify-between text-slate-600 mb-1">
                <span>Delivery Charges:</span>
                <span>
                  {shippingFee === 0 ? (
                    <strong className="text-emerald-600 font-bold">FREE</strong>
                  ) : (
                    `Rs. ${shippingFee}`
                  )}
                </span>
              </div>
              <div className="flex justify-between text-slate-900 font-bold pt-1 border-t border-slate-200 text-sm">
                <span>Total Amount:</span>
                <span className="font-headline text-base">
                  Rs. {total.toLocaleString("en-PK")}
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer mt-1"
            >
              <span className="material-symbols-outlined text-[20px]">
                check
              </span>
              Confirm &amp; Place Order
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
