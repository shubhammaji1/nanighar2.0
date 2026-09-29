import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FinalCTASectionProps {
  onExploreMenu: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onExploreMenu }) => {
  return (
    <section className="py-28 lg:py-40 bg-[#FBF8F3] border-t border-[#171412]/6 text-center relative overflow-hidden">
      {/* Subtle warm ambient food texture in background */}
      <div 
        className="absolute inset-0 opacity-[0.06] bg-center bg-cover pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: `url('/images/Basanti Pulao Combo.avif')` }}
      />
      <div className="absolute inset-0 bg-radial from-transparent via-[#FBF8F3]/60 to-[#FBF8F3] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Large Dramatic Headline */}
        <h2 className="text-5xl sm:text-6xl lg:text-[72px] font-display font-normal text-[#171412] leading-[1.04] tracking-tight">
          Bring home <br />
          <span className="font-editorial italic font-normal text-[#9E1B1B]">
            something delicious.
          </span>
        </h2>

        {/* Action Button */}
        <div className="mt-10 sm:mt-12">
          <button
            onClick={onExploreMenu}
            className="inline-flex items-center gap-3.5 px-9 py-4.5 rounded-full bg-[#9E1B1B] text-white text-xs sm:text-sm uppercase tracking-[0.2em] font-medium shadow-[0_10px_30px_rgba(158,27,27,0.3)] hover:bg-[#851616] active:scale-98 transition-all duration-300 group cursor-pointer"
          >
            <span>Explore the Menu</span>
            <ArrowRight className="w-4 h-4 stroke-[1.5] group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
