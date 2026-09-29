import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Search, 
  Phone, 
  Menu as MenuIcon, 
  X, 
  Sparkles,
  ChevronRight,
  Heart
} from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onSelectCategory: (cat: string) => void;
  activeCategory: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenSearch,
  onSelectCategory,
  activeCategory
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'All Dishes', category: 'All' },
    { label: 'Thalis & Lunch', category: 'Lunch' },
    { label: 'Breakfast', category: 'Breakfast' },
    { label: 'Tea & Coffee', category: 'Tea & Coffee' },
    { label: 'Evening Snacks', category: 'Evening Snacks' },
    { label: 'Chef Special', category: 'Chef Special' },
    { label: 'Desserts', category: 'Desserts' },
  ];

  return (
    <>
      {/* Top Subtle Announcement Bar */}
      <div className="bg-[#1C1917] text-[#F5EFEB] text-xs py-2 px-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-stone-300">
            <span className="inline-block w-2 h-2 rounded-full bg-[#A61C1C] animate-pulse"></span>
            <span className="font-medium tracking-wide">Freshly prepared • Authentic homestyle recipes • Delivered hot</span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-stone-400">
            <span className="text-stone-300 font-medium">Free delivery on orders above ₹299</span>
            <span className="text-stone-600">|</span>
            <a 
              href="tel:6289961646" 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D97706]" />
              <span>Call: <strong className="text-stone-200">62899 61646</strong></span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FDFBF7]/90 backdrop-blur-md shadow-sm border-b border-stone-200/60 py-3'
            : 'bg-[#FDFBF7] border-b border-stone-200/40 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Brand Logo & Shark Tank Pill */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a href="#" className="group flex items-center gap-2">
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1917] font-display">
                    nani<span className="text-[#A61C1C]">ghar</span>
                  </span>
                  <span className="text-[10px] text-[#A61C1C] font-semibold uppercase tracking-widest px-1 py-0.5 bg-[#A61C1C]/10 rounded">
                    kitchen
                  </span>
                </div>
                <span className="text-[11px] text-stone-500 font-serif italic tracking-wide -mt-1 group-hover:text-[#A61C1C] transition-colors">
                  ghar se dil tak
                </span>
              </div>
            </a>

            {/* Shark Tank Season 4 Trust Badge */}
            <div className="hidden sm:flex items-center gap-1.5 bg-gradient-to-r from-[#2A113E] to-[#160B24] text-white px-2.5 py-1 rounded-full text-[11px] font-medium shadow-sm border border-purple-400/30">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>As seen on <strong className="text-amber-300 font-semibold">Shark Tank India S4</strong></span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.slice(0, 5).map((link) => {
              const isActive = activeCategory === link.category;
              return (
                <button
                  key={link.category}
                  onClick={() => onSelectCategory(link.category)}
                  className={`px-3 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-[#1C1917] text-white shadow-xs'
                      : 'text-stone-700 hover:text-[#A61C1C] hover:bg-stone-100/70'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <button
              onClick={() => onSelectCategory('Chef Special')}
              className={`px-3 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                activeCategory === 'Chef Special'
                  ? 'bg-[#A61C1C] text-white'
                  : 'text-[#A61C1C] bg-[#A61C1C]/8 hover:bg-[#A61C1C]/15'
              }`}
            >
              <span>Chef's Pick</span>
            </button>
          </nav>

          {/* Action Icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Search */}
            <button
              onClick={onOpenSearch}
              className="p-2 sm:px-3 sm:py-2 text-stone-700 hover:text-[#A61C1C] hover:bg-stone-100 rounded-full flex items-center gap-2 text-sm transition-colors border border-transparent hover:border-stone-200"
              title="Search dishes"
              aria-label="Search dishes"
            >
              <Search className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-stone-600" />
              <span className="hidden md:inline text-xs text-stone-500 font-normal">Search dishes...</span>
            </button>

            {/* Helpline on Tablet */}
            <a
              href="tel:6289961646"
              className="hidden md:flex lg:hidden items-center gap-1.5 text-xs text-stone-700 font-medium px-2.5 py-1.5 bg-stone-100 rounded-full"
            >
              <Phone className="w-3.5 h-3.5 text-[#A61C1C]" />
              <span>62899 61646</span>
            </a>

            {/* Cart Drawer Trigger */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#A61C1C] text-white font-medium text-xs sm:text-sm shadow-sm hover:bg-[#8B1414] active:scale-95 transition-all duration-200"
              aria-label="View Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Cart</span>
              <span className="inline-flex items-center justify-center w-5 h-5 text-[11px] font-bold bg-white text-[#A61C1C] rounded-full">
                {cartCount}
              </span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[108px] bg-[#FDFBF7] border-b border-stone-200 shadow-xl px-4 py-6 transition-all duration-300 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-stone-200">
              <div className="flex items-center gap-2 bg-gradient-to-r from-[#2A113E] to-[#160B24] text-white px-3 py-1.5 rounded-full text-xs font-medium">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Shark Tank India Season 4 Featured</span>
              </div>
              <a
                href="tel:6289961646"
                className="flex items-center gap-1.5 text-xs text-[#A61C1C] font-semibold"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>62899 61646</span>
              </a>
            </div>

            <div className="mt-4 space-y-1">
              <div className="text-xs uppercase tracking-wider text-stone-400 font-semibold px-2 pb-2">
                Browse Menu
              </div>
              {navLinks.map((link) => (
                <button
                  key={link.category}
                  onClick={() => {
                    onSelectCategory(link.category);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-3 rounded-xl text-sm font-medium transition-colors ${
                    activeCategory === link.category
                      ? 'bg-[#1C1917] text-white'
                      : 'text-stone-800 hover:bg-stone-100'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </button>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-stone-200 flex flex-col gap-2">
              <button
                onClick={() => {
                  onOpenSearch();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 bg-stone-100 text-stone-800 rounded-xl font-medium text-sm"
              >
                <Search className="w-4 h-4" />
                <span>Search All 79 Dishes</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
