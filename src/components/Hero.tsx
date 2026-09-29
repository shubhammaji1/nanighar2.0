import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Heart, Utensils, Star, Flame } from 'lucide-react';

interface HeroProps {
  onExploreMenu: () => void;
  onExploreThalis: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onExploreThalis }) => {
  return (
    <section className="relative overflow-hidden bg-[#FDFBF7] pt-6 pb-16 lg:pt-12 lg:pb-24">
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-amber-100/40 via-red-100/25 to-stone-100/0 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Story & Conversion CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            
            {/* Shark Tank Season 4 Highlight Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-950 via-indigo-950 to-stone-900 text-white text-xs font-medium w-fit mb-6 shadow-sm border border-purple-500/30">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span className="text-amber-300 font-semibold tracking-wide">SHARK TANK INDIA SEASON 4</span>
              <span className="text-stone-300 font-light">• Powered by 100+ Home Chefs</span>
            </div>

            {/* Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C1917] tracking-tight leading-[1.12] font-display">
              Food that feels <br />
              <span className="italic font-serif-luxury font-normal text-[#A61C1C]">
                like home.
              </span>
            </h1>

            {/* Evocative Subtext */}
            <p className="mt-5 text-base sm:text-lg text-stone-600 max-w-xl font-normal leading-relaxed">
              Authentic, comforting Indian flavours slow-cooked by real mothers and home chefs. No commercial shortcuts, no synthetic preservatives — just pure nostalgia from our kitchen to your table.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onExploreMenu}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#A61C1C] text-white font-medium text-sm sm:text-base shadow-md shadow-red-950/15 hover:bg-[#8A1515] active:scale-98 transition-all duration-200 group"
              >
                <span>Explore Today's Menu</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreThalis}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-stone-100 text-stone-800 font-medium text-sm sm:text-base border border-stone-200/80 hover:bg-stone-200/70 hover:border-stone-300 transition-colors"
              >
                <Utensils className="w-4 h-4 text-[#D97706]" />
                <span>View Homestyle Thalis</span>
              </button>
            </div>

            {/* Trust Proof Metrics */}
            <div className="mt-10 pt-8 border-t border-stone-200/70 grid grid-cols-3 gap-4">
              <div>
                <div className="flex items-center gap-1 text-[#1C1917]">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="text-lg font-bold">4.9 / 5</span>
                </div>
                <p className="text-xs text-stone-500 mt-0.5">12,000+ Happy Foodies</p>
              </div>

              <div>
                <div className="flex items-center gap-1 text-[#1C1917]">
                  <Flame className="w-4 h-4 text-[#A61C1C]" />
                  <span className="text-lg font-bold">100% Fresh</span>
                </div>
                <p className="text-xs text-stone-500 mt-0.5">Cooked upon ordering</p>
              </div>

              <div>
                <div className="flex items-center gap-1 text-[#1C1917]">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span className="text-lg font-bold">Home Chefs</span>
                </div>
                <p className="text-xs text-stone-500 mt-0.5">FSSAI Certified Kitchens</p>
              </div>
            </div>

          </div>

          {/* Right Column: High-End Food Visual Showcase */}
          <div className="lg:col-span-6 relative">
            
            {/* Main Hero Visual Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-stone-900/10 border-4 border-white bg-stone-100">
              <img
                src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=85"
                alt="Nanighar Signature Moha Royal Thali"
                className="w-full h-[400px] sm:h-[480px] lg:h-[520px] object-cover hover:scale-103 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Floating Live Badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-medium text-stone-800 flex items-center gap-2 shadow-md">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Kitchens Live & Steaming</span>
              </div>

              {/* Dish Spotlight Overlay on Hero */}
              <div className="absolute bottom-6 inset-x-6 text-white flex items-end justify-between">
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold bg-[#A61C1C] text-white uppercase tracking-wider mb-2">
                    Chef's Daily Special
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif-luxury leading-tight text-white">
                    Moha Royal Egg & Fish Thali
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-sm line-clamp-2">
                    Steamed Gobindobhog rice, velvety mustard curry, dal, and golden crispy alu bhaja.
                  </p>
                </div>

                <div className="bg-white text-stone-900 rounded-2xl p-3 text-center shadow-lg min-w-[80px]">
                  <span className="text-[10px] text-stone-500 block uppercase font-medium">Starts at</span>
                  <span className="text-xl font-bold text-[#A61C1C]">₹149</span>
                </div>
              </div>
            </div>

            {/* Overlapping Floating Tasting Card */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-[#FDFBF7] p-3.5 rounded-2xl shadow-xl border border-stone-200/80 items-center gap-3.5 max-w-xs animate-fade-in">
              <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=200&q=80"
                  alt="Earthen Kulhad Chai"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-stone-900">Artisanal Kulhad Chai</h4>
                <p className="text-[11px] text-stone-500">Brewed with ginger & elaichi • ₹49</p>
              </div>
            </div>

            {/* Shark Tank Stamp on Desktop */}
            <div className="hidden md:flex absolute -top-4 -right-4 bg-gradient-to-br from-amber-400 to-amber-600 text-stone-950 p-3 rounded-full shadow-lg items-center justify-center font-bold text-xs uppercase tracking-tighter w-20 h-20 text-center leading-none rotate-12 border-2 border-white">
              Shark Tank S4
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
