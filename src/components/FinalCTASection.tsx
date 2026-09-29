import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FinalCTASectionProps {
  onExploreMenu: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onExploreMenu }) => {
  return (
    <section className="py-36 lg:py-48 bg-[#FBF8F3] border-t border-[#171412]/6 text-center relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Large Typography (52-68px) */}
        <h2 className="text-5xl sm:text-6xl lg:text-[68px] font-display font-normal text-[#171412] leading-[1.05] tracking-tight">
          Bring home <br />
          <span className="font-editorial italic font-normal text-[#9E1B1B]">
            something delicious.
          </span>
        </h2>

        {/* Minimal Button */}
        <div className="mt-12">
          <button
            onClick={onExploreMenu}
            className="inline-flex items-center gap-3.5 px-10 py-5 rounded-full bg-[#9E1B1B] text-white text-xs sm:text-sm uppercase tracking-[0.2em] font-medium shadow-sm hover:bg-[#851616] active:scale-98 transition-all duration-300 group"
          >
            <span>Explore the Menu</span>
            <ArrowRight className="w-4 h-4 stroke-[1.5] group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
