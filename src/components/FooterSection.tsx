import React from 'react';

interface FooterSectionProps {
  onNavigateMenu: () => void;
  onNavigateStory: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  onNavigateMenu,
  onNavigateStory,
}) => {
  return (
    <footer className="bg-[#141210] text-[#EDE8E1] pt-20 pb-16 border-t border-white/5">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* BRAND STATEMENT & SHARK TANK PILL */}
        <div className="pb-12 lg:pb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#9E1B1B] font-semibold block mb-3 font-mono">
              Nanighar
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-normal text-white leading-[1.08] tracking-tight max-w-xl">
              Good food, <br />
              <span className="font-editorial italic font-normal text-stone-300">
                straight from our kitchen.
              </span>
            </h2>
          </div>

          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit">
            <img
              src="/images/Season 4.png"
              alt="Shark Tank India S4"
              className="h-6 w-auto object-contain rounded-2xs"
            />
            <div className="text-left">
              <span className="text-xs font-medium text-white block">Shark Tank India</span>
              <span className="text-[10px] text-stone-400 font-mono uppercase tracking-wider block">Season 4 Featured Brand</span>
            </div>
          </div>
        </div>

        {/* SECTION DIVIDER */}
        <div className="border-t border-white/10" />

        {/* 3 CLEAN COLUMNS: NAVIGATION / GET IN TOUCH / KITCHEN JOURNAL */}
        <div className="py-12 lg:py-16 grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14">
          
          {/* NAVIGATION */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-white/50 font-mono font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm tracking-wide text-stone-300 font-normal">
              <li>
                <button onClick={onNavigateMenu} className="hover:text-white transition-colors cursor-pointer">
                  The Menu
                </button>
              </li>
              <li>
                <button onClick={onNavigateStory} className="hover:text-white transition-colors cursor-pointer">
                  Our Story
                </button>
              </li>
              <li>
                <a href="tel:6289961646" className="hover:text-white transition-colors">
                  Catering & Bulk Orders
                </a>
              </li>
              <li>
                <a href="tel:6289961646" className="hover:text-white transition-colors">
                  Contact Kitchen
                </a>
              </li>
            </ul>
          </div>

          {/* GET IN TOUCH */}
          <div className="md:col-span-4 space-y-4 border-t md:border-t-0 border-white/10 pt-8 md:pt-0">
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-white/50 font-mono font-semibold mb-4">
              Get in Touch
            </h4>
            <div className="space-y-3 text-sm text-stone-300 font-light">
              <div>
                <a href="tel:6289961646" className="text-stone-200 hover:text-white font-mono transition-colors">
                  +91 62899 61646
                </a>
              </div>
              <div>
                <a href="mailto:care@nanighar.com" className="text-stone-200 hover:text-white transition-colors">
                  care@nanighar.com
                </a>
              </div>
              <div className="text-xs text-stone-400 font-mono">
                Serving Kolkata • Fresh Daily
              </div>
            </div>
          </div>

          {/* THE KITCHEN JOURNAL */}
          <div className="md:col-span-4 space-y-4 border-t md:border-t-0 border-white/10 pt-8 md:pt-0">
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-white/50 font-mono font-semibold mb-4">
              The Kitchen Journal
            </h4>
            <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
              Good food, stories & recipes straight from our home chefs.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="pt-2 flex items-center border-b border-white/20 pb-2">
              <input
                type="email"
                placeholder="Your email address..."
                className="bg-transparent text-xs sm:text-sm text-white placeholder:text-stone-500 focus:outline-none w-full"
              />
              <button
                type="submit"
                className="text-xs uppercase tracking-widest text-[#E25C5C] hover:text-white transition-colors shrink-0 font-medium ml-2 cursor-pointer font-mono"
              >
                Join
              </button>
            </form>
          </div>

        </div>

        {/* BOTTOM MINIMAL COPYRIGHT */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 font-light gap-4">
          <p>© 2026 Nanighar. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-stone-300">Privacy Policy</a>
            <a href="#" className="hover:text-stone-300">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
