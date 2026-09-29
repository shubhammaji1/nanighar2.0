import React from 'react';

export const HeritageStory: React.FC = () => {
  return (
    <section id="heritage" className="py-24 lg:py-36 bg-[#FBF8F3] border-t border-[#171412]/6">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Emotional Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#9E1B1B] font-semibold block mb-4">
              Our Lineage
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-normal text-[#171412] leading-[1.08] tracking-tight">
              Born from love for <br />
              <span className="font-editorial italic font-normal text-[#9E1B1B]">
                grandmother's kitchen.
              </span>
            </h2>

            <div className="mt-8 space-y-6 text-[#171412]/75 font-light leading-relaxed max-w-xl">
              <p className="text-xl sm:text-2xl font-editorial italic text-[#171412]">
                “Some recipes aren’t written down. They’re remembered — through the aroma of roasted cumin, the crackle of mustard seeds, and the warmth of a plate handed to you with love.”
              </p>

              <p className="text-sm sm:text-base">
                Nanighar was created to honour this quiet culinary devotion. We empower a collective of over 100 passionate home makers and home chefs across Kolkata, cooking authentic meals in their domestic kitchens using age-old family masalas and unhurried patience.
              </p>

              <p className="text-sm sm:text-base">
                When you order from Nanighar, you are not ordering from an anonymous factory. You are welcoming the care of a real mother’s kitchen into your home.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-[#171412]/8 grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs uppercase tracking-[0.16em] text-[#171412]/60 font-mono">
              <div>
                <strong className="block text-2xl font-editorial text-[#171412] font-normal normal-case">
                  100+
                </strong>
                <span>Home Makers</span>
              </div>
              <div>
                <strong className="block text-2xl font-editorial text-[#171412] font-normal normal-case">
                  0%
                </strong>
                <span>Preservatives</span>
              </div>
              <div>
                <strong className="block text-2xl font-editorial text-[#171412] font-normal normal-case">
                  100%
                </strong>
                <span>Fresh To Order</span>
              </div>
            </div>
          </div>

          {/* Right: Evocative Kitchen Visual */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(23,20,18,0.1)] aspect-[3/4] bg-stone-100 group">
              <img
                src="https://images.unsplash.com/photo-1507048821117-657942f128f1?auto=format&fit=crop&w=1200&q=85"
                alt="Nanighar grandmother kitchen tradition"
                className="w-full h-full object-cover editorial-img-hover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171412]/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 text-white text-xs font-editorial italic text-lg">
                “Ghar se dil tak”
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
