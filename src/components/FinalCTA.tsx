import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FinalCTAProps {
  onExploreMenu: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onExploreMenu }) => {
  return (
    <section className="py-28 lg:py-40 bg-[#FBF8F3] border-t border-[#171412]/6 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
        
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#9E1B1B] font-semibold block mb-4">
          Fresh From Our Kitchen
        </span>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-normal text-[#171412] leading-[1.08] tracking-tight">
          Bring home something <br />
          <span className="font-editorial italic font-normal text-[#9E1B1B]">
            delicious.
          </span>
        </h2>

        <p className="text-base sm:text-lg text-[#171412]/65 max-w-md mx-auto mt-6 font-light leading-relaxed">
          Order for lunch, an evening snack, or tonight's family dinner. Prepared with care upon ordering.
        </p>

        <div className="mt-10">
          <button
            onClick={onExploreMenu}
            className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-[#9E1B1B] text-white text-xs uppercase tracking-[0.18em] font-medium shadow-sm hover:bg-[#851616] active:scale-98 transition-all duration-300 group"
          >
            <span>Explore the Menu</span>
            <ArrowRight className="w-4 h-4 stroke-[1.5] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
