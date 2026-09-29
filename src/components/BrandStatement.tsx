import React from 'react';

export const BrandStatement: React.FC = () => {
  return (
    <section className="py-32 lg:py-44 bg-[#FBF8F3] border-t border-[#171412]/6 text-center">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        
        {/* Large Centered Headline (44-56px) */}
        <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-editorial font-normal text-[#171412] leading-[1.12] tracking-tight">
          Made with the warmth of home.
        </h2>

        {/* Small paragraph below (18-20px) */}
        <p className="mt-6 text-lg sm:text-xl text-[#171412]/70 font-light max-w-xl mx-auto leading-relaxed">
          Comforting Indian favourites, prepared with care and familiar flavours.
        </p>

      </div>
    </section>
  );
};
