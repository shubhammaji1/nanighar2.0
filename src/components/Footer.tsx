import React from 'react';
import { Phone, Mail, MapPin, Sparkles, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#141210] text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter & Brand Promise */}
        <div className="pb-12 border-b border-stone-800/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <span className="text-xs uppercase font-semibold tracking-widest text-[#D97706]">
              From Mother's Hands To Your Dining Table
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-white mt-1">
              Good food, straight to your inbox.
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 mt-2 max-w-lg font-light">
              Receive seasonal Bengali specials, festive menus, and heartwarming stories of our verified home chefs across Kolkata.
            </p>
          </div>

          <div className="lg:col-span-5">
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email address..."
                className="flex-1 px-4 py-3 rounded-xl bg-stone-900 border border-stone-700 text-xs text-white placeholder:text-stone-500 focus:outline-none focus:border-[#A61C1C]"
              />
              <button
                type="submit"
                className="px-5 py-3 rounded-xl bg-[#A61C1C] text-white text-xs font-semibold hover:bg-[#8A1515] transition-colors shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          
          {/* Brand Info */}
          <div className="col-span-2">
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold tracking-tight text-white font-display">
                  nani<span className="text-[#A61C1C]">ghar</span>
                </span>
                <span className="text-[10px] text-[#A61C1C] font-semibold uppercase tracking-widest px-1.5 py-0.5 bg-[#A61C1C]/20 rounded">
                  kitchen
                </span>
              </div>
              <span className="text-xs text-stone-400 font-serif italic tracking-wider mt-0.5">
                ghar se dil tak
              </span>
            </div>

            <p className="text-xs text-stone-400 mt-4 leading-relaxed max-w-sm font-light">
              India's premier homestyle food platform connecting passionate home chefs with food lovers craving pure, unadulterated homely comfort.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 bg-purple-950/80 border border-purple-500/30 text-white px-3 py-1.5 rounded-full text-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Shark Tank India Season 4 Featured</span>
            </div>
          </div>

          {/* Menu Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Explore Menu
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400 font-light">
              <li><a href="#menu" className="hover:text-white transition-colors">Bengali Moha Thalis</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Breakfast & Luchis</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Kolkata Fish Fry & Snacks</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Kulhad Chai & Brews</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Chef's Signature Combos</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Desserts & Brownies</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Nanighar Story
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400 font-light">
              <li><a href="#" className="hover:text-white transition-colors">About Our Home Chefs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hygiene Standards & FSSAI</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shark Tank Journey</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Corporate & Party Catering</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Join as a Home Chef</a></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Direct Kitchen Support
            </h4>
            <ul className="space-y-3 text-xs text-stone-400 font-light">
              <li className="flex items-center gap-2 text-stone-200 font-mono">
                <Phone className="w-3.5 h-3.5 text-[#D97706]" />
                <a href="tel:6289961646" className="hover:underline">62899 61646</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D97706]" />
                <a href="mailto:support@nanighar.com" className="hover:underline">support@nanighar.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D97706] shrink-0 mt-0.5" />
                <span>Kolkata, West Bengal, India</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© 2026 Nanighar Food Technologies Pvt Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-stone-300">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-stone-300">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-stone-300">FSSAI License</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
