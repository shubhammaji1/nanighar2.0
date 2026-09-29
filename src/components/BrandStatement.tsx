import React from 'react';

export const BrandStatement: React.FC = () => {
  return (
    <section id="brand-statement" className="py-24 lg:py-36 bg-[#FBF8F3] border-t border-[#171412]/6 text-center">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        
        {/* Large Centered Headline (44-56px) */}
        <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-editorial font-normal text-[#171412] leading-[1.12] tracking-tight">
          Made with the warmth of home.
        </h2>

        {/* Supporting text */}
        <p className="mt-5 text-base sm:text-lg text-[#171412]/70 font-light max-w-lg mx-auto leading-relaxed">
          Comforting Indian favourites, prepared with care and served fresh.
        </p>

      </div>
    </section>
  );
};
