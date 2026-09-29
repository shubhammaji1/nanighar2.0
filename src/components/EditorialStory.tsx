import React from 'react';

export const EditorialStory: React.FC = () => {
  return (
    <section id="our-story" className="py-24 lg:py-36 bg-[#FBF8F3] border-t border-[#171412]/6">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Top Minimal Lead */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#9E1B1B] font-semibold block mb-4">
            Philosophy
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal font-editorial text-[#171412] leading-[1.08] tracking-tight">
            Made the way home should taste.
          </h2>
        </div>

        {/* Editorial 2-Column Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Atmospheric Culinary Portrait */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_15px_45px_rgba(23,20,18,0.08)] aspect-[4/5] bg-stone-100 group">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=85"
                alt="Slow cooking in domestic kitchen"
                className="w-full h-full object-cover editorial-img-hover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171412]/30 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 text-white text-xs font-light tracking-wide">
                Freshly grounded whole spices • Pure cold-pressed oils
              </div>
            </div>
          </div>

          {/* Right: Unhurried, Emotional Prose */}
          <div className="lg:col-span-6 lg:pl-6 flex flex-col justify-center space-y-8">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-editorial text-[#171412] leading-[1.25] font-light">
              “From slow-cooked curries to crispy evening favourites, Nanighar brings the warmth of home to your table.”
            </p>

            <div className="space-y-5 text-sm sm:text-base text-[#171412]/70 font-light leading-relaxed max-w-lg">
              <p>
                In a world of factory cloud-kitchens and artificial shortcuts, we went back to where real flavour lives — the homes of mothers, grandmothers, and culinary artisans.
              </p>
              <p>
                Every thali, cutlet, and cup of chai is made fresh to order. No industrial bases. No re-heated pots. Just patient, authentic homestyle recipes that feed both the body and the soul.
              </p>
            </div>

            <div className="pt-4 flex items-center gap-8 text-xs uppercase tracking-[0.16em] text-[#171412]/50 font-medium">
              <span>Zero Preservatives</span>
              <span>•</span>
              <span>Pure Ghee & Mustard</span>
              <span>•</span>
              <span>Kolkata Heritage</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
