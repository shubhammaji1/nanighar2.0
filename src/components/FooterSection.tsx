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
    <footer className="bg-[#141210] text-[#EDE8E1] pt-32 pb-20 border-t border-white/5">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Large Statement */}
        <div className="pb-24 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#9E1B1B] font-semibold block mb-4 font-mono">
              Nanighar Kitchens
            </span>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display font-normal text-white leading-[1.02] tracking-tight max-w-3xl">
              Good food, <br />
              <span className="font-editorial italic font-normal text-[#EDE8E1]/85">
                straight from our kitchen.
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-2xl w-fit">
            <img
              src="/images/Season 4.png"
              alt="Shark Tank India S4"
              className="h-8 w-auto object-contain rounded-2xs"
            />
            <div className="text-left">
              <div className="text-xs font-semibold text-white tracking-wide">Shark Tank India</div>
              <div className="text-[10px] text-stone-400 font-mono uppercase tracking-wider">Season 4 Featured Brand</div>
            </div>
          </div>
        </div>

        {/* Spacious Columns */}
        <div className="py-24 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2.5 rounded-xl inline-block shadow-sm">
                <img
                  src="/images/Nanighar-Logo.png"
                  alt="Nanighar"
                  className="h-9 w-auto object-contain"
                />
              </div>
            </div>

            <p className="text-sm sm:text-base text-stone-400 font-light max-w-sm leading-relaxed">
              India’s homestyle culinary brand connecting passionate home makers with patrons craving honest, comforting flavours. Ghar se dil tak.
            </p>

            <div className="pt-2 text-xs sm:text-sm text-stone-400 font-mono">
              Direct Kitchen Helpline: <a href="tel:6289961646" className="text-stone-200 hover:text-white underline">+91 62899 61646</a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/50 font-semibold mb-6">
              Navigation
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm uppercase tracking-[0.16em] text-stone-400 font-medium">
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
                  Catering & Bulk
                </a>
              </li>
              <li>
                <a href="tel:6289961646" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/50 font-semibold mb-6">
              The Kitchen Journal
            </h4>
            <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
              Receive weekly home-cooked specials, seasonal menus, and memories from our kitchen.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="pt-3 flex items-center border-b border-white/20 pb-2">
              <input
                type="email"
                placeholder="Your email address..."
                className="bg-transparent text-xs sm:text-sm text-white placeholder:text-stone-600 focus:outline-none w-full"
              />
              <button
                type="submit"
                className="text-xs uppercase tracking-widest text-[#9E1B1B] hover:text-white transition-colors shrink-0 font-medium ml-2 cursor-pointer"
              >
                Join
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Minimal Copyright */}
        <div className="pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 font-light gap-4">
          <p>© 2026 Nanighar. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-stone-300">Privacy</a>
            <a href="#" className="hover:text-stone-300">Terms</a>
            {/* <span className="text-stone-600">|</span> */}
            {/* <div className="flex items-center gap-2 text-stone-400">
              <span className="text-[11px]">Powered by</span>
              <img
                src="/images/Logo White.png"
                alt="SIMPACT Digital"
                className="h-3.5 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div> */}
          </div>
        </div>

      </div>
    </footer>
  );
};
