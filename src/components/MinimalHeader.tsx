import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu as MenuIcon, X } from 'lucide-react';

interface MinimalHeaderProps {
  cartCount: number;
  currentView: 'home' | 'menu';
  onNavigate: (view: 'home' | 'menu') => void;
  onOpenCart: () => void;
  onOpenSearch: () => void;
}

export const MinimalHeader: React.FC<MinimalHeaderProps> = ({
  cartCount,
  currentView,
  onNavigate,
  onOpenCart,
  onOpenSearch,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          isScrolled || currentView === 'menu'
            ? 'bg-[#FBF8F3]/95 backdrop-blur-md border-b border-[#171412]/5 py-4 sm:py-5 shadow-[0_2px_24px_rgba(0,0,0,0.02)]'
            : 'bg-transparent py-6 sm:py-8'
        }`}
      >
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14 flex items-center justify-between">
          
          {/* Left: Official Brand Logo & Shark Tank Pill */}
          <div className="flex items-center gap-5 sm:gap-6">
            <button 
              onClick={() => onNavigate('home')} 
              className="flex items-center gap-3 text-left group focus:outline-none cursor-pointer"
              aria-label="Nanighar Home"
            >
              <img
                src="/images/Nanighar-Logo.png"
                alt="Nanighar — Ghar Se Dil Tak"
                className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-102"
              />
            </button>

            {/* Subtle Shark Tank Badge */}
            <div className="hidden lg:flex items-center gap-2 pl-5 border-l border-stone-300/70">
              <img
                src="/images/Season 4.png"
                alt="As Seen on Shark Tank India Season 4"
                className="h-6 w-auto object-contain rounded-2xs opacity-85 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          {/* Center: Navigation Links (15-16px, readable and confident) */}
          <nav className="hidden md:flex items-center gap-10 lg:gap-12">
            <button
              onClick={() => onNavigate('menu')}
              className={`text-sm lg:text-[15px] tracking-wide transition-colors font-medium cursor-pointer ${
                currentView === 'menu'
                  ? 'text-[#9E1B1B] font-semibold'
                  : 'text-[#171412]/80 hover:text-[#9E1B1B]'
              }`}
            >
              The Menu
            </button>
            <button
              onClick={() => {
                onNavigate('home');
                setTimeout(() => {
                  document.getElementById('brand-story')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="text-sm lg:text-[15px] tracking-wide text-[#171412]/80 hover:text-[#9E1B1B] transition-colors font-medium cursor-pointer"
            >
              Our Story
            </button>
            <a
              href="tel:6289961646"
              className="text-sm lg:text-[15px] tracking-wide text-[#171412]/80 hover:text-[#9E1B1B] transition-colors font-medium cursor-pointer"
            >
              Catering
            </a>
            <a
              href="tel:6289961646"
              className="text-sm lg:text-[15px] tracking-wide text-[#171412]/80 hover:text-[#9E1B1B] transition-colors font-medium cursor-pointer"
            >
              Contact
            </a>
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-5 sm:gap-7">
            <button
              onClick={onOpenSearch}
              className="text-[#171412] hover:text-[#9E1B1B] transition-colors p-1.5 cursor-pointer"
              aria-label="Search dishes"
            >
              <Search className="w-5 h-5 stroke-[1.5]" />
            </button>

            <button
              onClick={onOpenCart}
              className="flex items-center gap-2 text-[#171412] hover:text-[#9E1B1B] transition-colors group p-1.5 cursor-pointer"
              aria-label="View Cart"
            >
              <span className="text-sm font-medium tracking-wide hidden sm:inline">
                Cart
              </span>
              <div className="relative">
                <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2.5 w-4 h-4 rounded-full bg-[#9E1B1B] text-white text-[10px] font-mono flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </div>
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#171412] p-1.5 ml-1 cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-[74px] bg-[#FBF8F3] border-b border-[#171412]/10 px-8 py-8 shadow-2xl flex flex-col gap-6 animate-editorial-fade">
            <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
              <img
                src="/images/Season 4.png"
                alt="Shark Tank India S4"
                className="h-6 w-auto object-contain rounded-2xs"
              />
              <span className="text-xs uppercase tracking-widest text-[#171412]/70 font-mono">
                Shark Tank India Season 4
              </span>
            </div>

            <button
              onClick={() => {
                onNavigate('menu');
                setMobileMenuOpen(false);
              }}
              className="text-left text-xl font-editorial font-medium text-[#171412]"
            >
              The Menu
            </button>
            <button
              onClick={() => {
                onNavigate('home');
                setMobileMenuOpen(false);
                setTimeout(() => {
                  document.getElementById('brand-story')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="text-left text-xl font-editorial font-medium text-[#171412]"
            >
              Our Story
            </button>
            <a
              href="tel:6289961646"
              className="text-left text-xl font-editorial font-medium text-[#171412]"
            >
              Catering & Events
            </a>
            <a
              href="tel:6289961646"
              className="text-xs uppercase tracking-widest text-[#9E1B1B] font-semibold pt-4 border-t border-stone-200"
            >
              Direct Kitchen: +91 62899 61646
            </a>
          </div>
        )}
      </header>
    </>
  );
};
