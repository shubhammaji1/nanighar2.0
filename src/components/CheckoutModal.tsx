import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Clock, MapPin, Phone, CreditCard, Banknote, Sparkles, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CartItem } from './CartDrawer';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderSuccess: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderSuccess,
}) => {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('62899 61646');
  const [address, setAddress] = useState('Salt Lake, Sector V, Kolkata');
  const [deliverySlot, setDeliverySlot] = useState('Express (30-40 mins)');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'cod' | 'card'>('upi');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const subtotal = items.reduce((acc, i) => acc + i.product.price * i.quantity, 0);
  const deliveryFee = subtotal >= 299 ? 0 : 35;
  const grandTotal = subtotal + deliveryFee;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Fire celebration confetti!
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    setTimeout(() => {
      onOrderSuccess();
    }, 4500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
      <div 
        className="relative bg-[#FDFBF7] rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#A61C1C]" />
            <h3 className="text-xl font-bold font-serif-luxury text-stone-900">
              {isSubmitted ? 'Order Confirmed!' : 'Express Checkout'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-8 sm:p-12 text-center flex flex-col items-center">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 animate-bounce">
              <CheckCircle className="w-10 h-10" />
            </div>
            <span className="text-xs uppercase font-bold tracking-widest text-[#A61C1C]">
              Freshly Cooking in Kitchen
            </span>
            <h2 className="text-3xl font-bold font-serif-luxury text-stone-900 mt-2">
              Dhonyobad! Your meal is on the way.
            </h2>
            <p className="text-sm text-stone-600 mt-2 max-w-md">
              Order ID: <strong className="font-mono text-stone-900">#NG-84920</strong> has been sent to our verified home chef. Estimated delivery time: <strong>35 minutes</strong>.
            </p>

            <div className="mt-8 p-4 rounded-2xl bg-white border border-stone-200 w-full max-w-sm text-left text-xs space-y-2">
              <div className="flex justify-between text-stone-600">
                <span>Deliver to:</span>
                <span className="font-semibold text-stone-900">{address}</span>
              </div>
              <div className="flex justify-between text-stone-600">
                <span>Contact:</span>
                <span className="font-semibold text-stone-900">{phone}</span>
              </div>
              <div className="flex justify-between text-stone-600">
                <span>Amount:</span>
                <span className="font-semibold text-stone-900 font-mono">₹{grandTotal} ({paymentMethod.toUpperCase()})</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="mt-8 px-8 py-3 rounded-full bg-[#A61C1C] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#8A1515] transition-colors"
            >
              Back to Home
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 md:grid-cols-12 max-h-[80vh] overflow-y-auto">
            {/* Left: Shipping & Payment details */}
            <div className="md:col-span-7 p-6 sm:p-7 space-y-5 border-r border-stone-200">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800 mb-3 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#A61C1C]" />
                  <span>1. Delivery Address</span>
                </h4>
                <div className="space-y-3">
                  <div>
                    <label className="text-[11px] text-stone-600 block mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sourav Mukherjee"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-1 focus:ring-[#A61C1C] bg-white"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-stone-600 block mb-1">Phone Number (For Delivery Rider)</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-1 focus:ring-[#A61C1C] bg-white font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-stone-600 block mb-1">Delivery Address & Landmark</label>
                    <textarea
                      required
                      rows={2}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-1 focus:ring-[#A61C1C] bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Delivery Speed */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800 mb-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#A61C1C]" />
                  <span>2. Delivery Slot</span>
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {['Express (30-40 mins)', 'Schedule for Dinner'].map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setDeliverySlot(slot)}
                      className={`p-2.5 rounded-xl border text-left transition-colors ${
                        deliverySlot === slot
                          ? 'border-[#A61C1C] bg-[#A61C1C]/5 font-semibold text-[#A61C1C]'
                          : 'border-stone-200 bg-white text-stone-700'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Payment Methods */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800 mb-2 flex items-center gap-1.5">
                  <CreditCard className="w-3.5 h-3.5 text-[#A61C1C]" />
                  <span>3. Payment Mode</span>
                </h4>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'upi', label: 'GooglePay / UPI', icon: Sparkles },
                    { id: 'cod', label: 'Cash On Delivery', icon: Banknote },
                    { id: 'card', label: 'Cards / NetBanking', icon: CreditCard },
                  ].map((p) => {
                    const Icon = p.icon;
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setPaymentMethod(p.id as any)}
                        className={`p-2.5 rounded-xl border text-center flex flex-col items-center gap-1 transition-colors ${
                          paymentMethod === p.id
                            ? 'border-[#A61C1C] bg-[#A61C1C]/5 font-bold text-[#A61C1C]'
                            : 'border-stone-200 bg-white text-stone-600'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="text-[10px]">{p.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right: Sticky Order Summary */}
            <div className="md:col-span-5 p-6 bg-[#FAF7F2] flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800 mb-3">
                  Order Summary ({items.length} dishes)
                </h4>

                <div className="space-y-2.5 max-h-48 overflow-y-auto pr-1">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex justify-between items-center text-xs">
                      <div className="min-w-0 pr-2">
                        <span className="font-semibold text-stone-800 block truncate">
                          {item.product.name}
                        </span>
                        <span className="text-stone-500 font-mono text-[10px]">
                          Qty: {item.quantity}
                        </span>
                      </div>
                      <span className="font-mono text-stone-800 font-semibold shrink-0">
                        ₹{item.product.price * item.quantity}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-stone-200 space-y-1.5 text-xs text-stone-600">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-mono font-semibold text-stone-900">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery</span>
                    <span className="font-mono font-semibold">
                      {deliveryFee === 0 ? (
                        <span className="text-emerald-700 font-bold uppercase text-[10px]">FREE</span>
                      ) : (
                        `₹${deliveryFee}`
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-stone-900 pt-2 border-t border-stone-200">
                    <span>Total Amount</span>
                    <span className="text-[#A61C1C] font-mono text-base">₹{grandTotal}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#A61C1C] text-white font-semibold text-sm hover:bg-[#8A1515] active:scale-98 transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Place Order • ₹{grandTotal}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-500 mt-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>100% Safe & Contactless Delivery</span>
                </div>
              </div>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
