import React from 'react';
import { ArrowRight } from 'lucide-react';

interface EditorialHeroProps {
  onExploreMenu: () => void;
}

export const EditorialHero: React.FC<EditorialHeroProps> = ({ onExploreMenu }) => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-24 lg:pt-28 pb-16 overflow-hidden bg-[#FBF8F3]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[75vh]">
          
          {/* Left Column: Monolithic Editorial Typography */}
          <div className="lg:col-span-5 flex flex-col justify-center z-10 lg:pr-4">
            
            {/* Subtle Brand Origin Accent */}
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#171412]/60 font-semibold mb-6 block">
              Homestyle Kitchen • Kolkata
            </span>

            {/* Giant Monolithic Headline: 72px - 100px */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[84px] xl:text-[96px] font-normal text-[#171412] leading-[0.98] tracking-tight font-display">
              Food that <br />
              feels <span className="font-editorial italic font-normal text-[#9E1B1B]">like home.</span>
            </h1>

            {/* Single Short Paragraph */}
            <p className="mt-8 text-base sm:text-lg text-[#171412]/70 max-w-md font-light leading-relaxed">
              Authentic Indian comfort food, made with care and served with the warmth of home.
            </p>

            {/* ONE Primary CTA */}
            <div className="mt-10">
              <button
                onClick={onExploreMenu}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#9E1B1B] text-white text-xs uppercase tracking-[0.18em] font-medium shadow-sm hover:bg-[#851616] active:scale-98 transition-all duration-300 group"
              >
                <span>Explore the Menu</span>
                <ArrowRight className="w-4 h-4 stroke-[1.5] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Quiet Shark Tank Mention (Subtle caption, zero gaudy boxes) */}
            <div className="mt-14 pt-8 border-t border-[#171412]/8 flex items-center gap-4 text-xs text-[#171412]/50 font-light">
              <span>As seen on Shark Tank India, Season 4</span>
              <span>•</span>
              <span>100% Home Chefs</span>
            </div>

          </div>

          {/* Right Column: One Enormous Cinematic Food Photograph */}
          <div className="lg:col-span-7 relative h-[420px] sm:h-[540px] lg:h-[700px] w-full">
            <div className="w-full h-full rounded-2xl lg:rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(23,20,18,0.12)] relative bg-stone-100 group">
              <img
                src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1600&q=85"
                alt="Nanighar Bengali Royal Homestyle Thali"
                className="w-full h-full object-cover editorial-img-hover"
                loading="eager"
              />
              {/* Subtle filmic warmth vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#171412]/40 via-transparent to-transparent pointer-events-none" />

              {/* Minimal caption in bottom corner */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white pointer-events-none">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/70 block">
                    Heritage Recipe
                  </span>
                  <p className="font-editorial text-lg sm:text-xl italic font-normal text-white/95">
                    Moha Royal Egg & Fish Thali
                  </p>
                </div>
                <span className="text-xs uppercase tracking-widest text-white/80 font-mono">
                  From ₹149
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
