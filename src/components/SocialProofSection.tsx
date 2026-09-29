import React from 'react';

export const SocialProofSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#F5EFEB]/50 border-t border-[#171412]/6">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
        
        {/* Shark Tank Subtle Foil Quote */}
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#9E1B1B] font-semibold block mb-8">
          National Recognition
        </span>

        <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-light text-[#171412] leading-[1.25] italic max-w-3xl mx-auto">
          “A celebration of authentic Indian homestyle cooking brought to modern life with unmatched hygiene and soul.”
        </blockquote>

        <div className="mt-8 flex flex-col items-center">
          <cite className="not-italic text-xs uppercase tracking-[0.2em] text-[#171412] font-semibold block">
            Shark Tank India • Season 4
          </cite>
          <span className="text-xs text-[#171412]/50 font-light mt-1">
            Featured D2C Culinary Innovation
          </span>
        </div>

        {/* Quiet Patron Note */}
        <div className="mt-16 pt-12 border-t border-[#171412]/8 max-w-xl mx-auto">
          <p className="text-sm sm:text-base text-[#171412]/70 font-light italic">
            “The Moha Egg Thali tastes exactly like what my mother used to pack in Kolkata. There is an unmistakable tenderness in every bite that commercial restaurants can never replicate.”
          </p>
          <span className="text-[11px] uppercase tracking-widest text-[#171412]/50 font-mono mt-3 block">
            — Dr. Anirban Roy, Salt Lake City
          </span>
        </div>

      </div>
    </section>
  );
};
