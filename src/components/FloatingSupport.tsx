import React, { useState } from 'react';
import { MessageCircle, Phone, X, Sparkles } from 'lucide-react';

export const FloatingSupport: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Expanded Quick Support Menu */}
      {isOpen && (
        <div className="mb-3 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-stone-200/90 w-72 animate-fade-in text-stone-900">
          <div className="flex items-center justify-between pb-2 border-b border-stone-100 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold font-serif-luxury text-stone-900">
                Nanighar Concierge
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-stone-400 hover:text-stone-700 p-0.5"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-stone-600 mb-3 leading-relaxed">
            Need catering for a family event, custom spices, or order status? We are always here.
          </p>

          <div className="space-y-2">
            <a
              href="tel:6289961646"
              className="flex items-center gap-2.5 p-2 rounded-xl bg-stone-50 hover:bg-stone-100 text-xs font-semibold text-stone-800 transition-colors"
            >
              <div className="w-7 h-7 rounded-full bg-[#A61C1C]/10 text-[#A61C1C] flex items-center justify-center">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="block leading-tight">Call Kitchen Support</span>
                <span className="text-[10px] text-stone-500 font-mono">62899 61646</span>
              </div>
            </a>

            <a
              href="https://wa.me/916289961646"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-xs font-semibold text-emerald-900 transition-colors"
            >
              <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                <MessageCircle className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="block leading-tight">Chat on WhatsApp</span>
                <span className="text-[10px] text-emerald-700">Instant response</span>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* Floating Pill Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-13 h-13 rounded-full bg-[#1C1917] text-white shadow-xl hover:bg-[#A61C1C] active:scale-95 transition-all duration-300 flex items-center justify-center border-2 border-stone-100 relative group"
        aria-label="Kitchen Support"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <>
            <MessageCircle className="w-6 h-6 text-amber-300 group-hover:text-white" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white" />
          </>
        )}
      </button>
    </div>
  );
};
