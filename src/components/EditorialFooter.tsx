import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const EditorialFooter: React.FC = () => {
  return (
    <footer className="bg-[#141210] text-[#EDE8E1] pt-28 pb-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Large Editorial Statement */}
        <div className="pb-20 border-b border-white/10">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#9E1B1B] font-semibold block mb-4">
            Nanighar Kitchens
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-normal text-white leading-[1.02] tracking-tight max-w-4xl">
            Good food, <br />
            <span className="font-editorial italic font-normal text-[#EDE8E1]/80">
              straight from our kitchen.
            </span>
          </h2>
        </div>

        {/* Spacious Footer Columns */}
        <div className="py-20 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-5 space-y-6">
            <div>
              <span className="text-3xl font-display text-white tracking-tight">nanighar</span>
              <p className="text-xs font-editorial italic text-stone-400 mt-1 tracking-wider">
                ghar se dil tak
              </p>
            </div>

            <p className="text-sm text-stone-400 font-light max-w-sm leading-relaxed">
              India's homestyle culinary collective connecting generational home chefs with patrons craving honest, comforting food.
            </p>

            <div className="pt-2 text-xs text-stone-500 font-mono">
              Direct Kitchen Helpline: <a href="tel:6289961646" className="text-stone-300 hover:text-white underline">+91 62899 61646</a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/50 font-semibold mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 text-xs uppercase tracking-[0.16em] text-stone-400 font-medium">
              <li><a href="#menu" className="hover:text-white transition-colors">Daily Menu</a></li>
              <li><a href="#our-story" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#heritage" className="hover:text-white transition-colors">Home Chefs</a></li>
              <li><a href="tel:6289961646" className="hover:text-white transition-colors">Catering</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shark Tank Feature</a></li>
            </ul>
          </div>

          {/* Col 3: Newsletter */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/50 font-semibold mb-6">
              The Kitchen Journal
            </h4>
            <p className="text-xs text-stone-400 font-light leading-relaxed">
              Receive weekly home-cooked specials, seasonal menus, and memories from our kitchen.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="pt-2 flex items-center border-b border-white/20 pb-2">
              <input
                type="email"
                placeholder="Your email address..."
                className="bg-transparent text-xs text-white placeholder:text-stone-600 focus:outline-none w-full"
              />
              <button
                type="submit"
                className="text-xs uppercase tracking-widest text-[#9E1B1B] hover:text-white transition-colors shrink-0 font-medium"
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
            <a href="#" className="hover:text-stone-300">Privacy Policy</a>
            <a href="#" className="hover:text-stone-300">Terms of Service</a>
            <a href="#" className="hover:text-stone-300">FSSAI Certified</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
