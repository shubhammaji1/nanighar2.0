import React from 'react';
import { ArrowRight } from 'lucide-react';

export const BrandStorySection: React.FC = () => {
  return (
    <section id="brand-story" className="py-24 lg:py-36 bg-[#FBF8F3] border-t border-[#171412]/6">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: One beautiful photograph of authentic homestyle feast */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(23,20,18,0.08)] aspect-[4/5] bg-stone-100 group relative border border-stone-200/60">
              <img
                src="/images/9a6dd6_09107fed63264abab41b5b7a00d20557~mv2.jpg"
                alt="Nanighar authentic homestyle feast"
                className="w-full h-full object-cover editorial-img-hover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171412]/50 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 flex items-baseline justify-between text-white">
                <div className="font-editorial italic text-2xl drop-shadow-md">
                  “Ghar se dil tak”
                </div>
                <div className="text-[11px] uppercase font-mono tracking-widest text-white/80">
                  Pure Homestyle Joy
                </div>
              </div>
            </div>
          </div>

          {/* Right: Emotional Story Copy */}
          <div className="lg:col-span-6 lg:pl-6 flex flex-col justify-center space-y-7">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#9E1B1B] font-semibold block mb-3 font-mono">
                The Heritage
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-display font-normal text-[#171412] leading-[1.08] tracking-tight">
                Born from love for <br />
                <span className="font-editorial italic font-normal text-[#9E1B1B]">
                  grandmother's kitchen.
                </span>
              </h2>
            </div>

            {/* Short, poetic paragraph */}
            <p className="text-base sm:text-lg text-[#171412]/75 font-light leading-relaxed max-w-lg">
              Some recipes aren’t written down. They’re remembered through the patient crackle of mustard oil, the warmth of freshly rolled rotis, and the simple joy of sharing honest food. Nanighar brings the soul of generational home cooking to your table.
            </p>

            <div className="pt-2">
              <a
                href="tel:6289961646"
                className="inline-flex items-center gap-2 text-base font-editorial italic text-[#171412] hover:text-[#9E1B1B] transition-colors group pb-1 border-b border-[#171412]/30 hover:border-[#9E1B1B]"
              >
                <span className="text-lg">Our Story</span>
                <ArrowRight className="w-4 h-4 stroke-[1.5] group-hover:translate-x-1.5 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
