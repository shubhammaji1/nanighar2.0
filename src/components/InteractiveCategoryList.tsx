import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface InteractiveCategoryListProps {
  onSelectCategory: (category: string) => void;
}

const CATEGORIES_DATA = [
  {
    num: '01',
    id: 'Breakfast',
    title: 'Breakfast',
    caption: 'Golden puffed luchis, spiced alur dum & homestyle beaten poha',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1200&q=85',
    highlight: 'Served Warm Daily'
  },
  {
    num: '02',
    id: 'Lunch',
    title: 'Lunch & Thalis',
    caption: 'Wholesome Moha thalis with Gobindobhog rice, rich egg kosha & crispy bhaja',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=85',
    highlight: '7 Signature Thalis'
  },
  {
    num: '03',
    id: 'Tea & Coffee',
    title: 'Tea & Coffee',
    caption: 'Steaming ginger-elaichi kulhad chai, Darjeeling green tea & cold brews',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=85',
    highlight: 'Clay Earthen Cups'
  },
  {
    num: '04',
    id: 'Evening Snacks',
    title: 'Evening Snacks',
    caption: 'Crumb-fried Kolkata Bhetki fish fry, Calcutta egg devil & paneer pakodas',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=85',
    highlight: 'Kasundi Mustard Accompaniment'
  },
  {
    num: '05',
    id: 'Chef Special',
    title: 'Chef Special',
    caption: 'Slow-simmered chicken kosha, rich curries & multi-course weekend treats',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1200&q=85',
    highlight: 'Shark Tank Featured Pick'
  },
  {
    num: '06',
    id: 'Desserts',
    title: 'Desserts',
    caption: 'Warm gooey Belgian chocolate brownies with melting vanilla cream & thickshakes',
    image: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=1200&q=85',
    highlight: 'Sweet Nostalgia'
  }
];

export const InteractiveCategoryList: React.FC<InteractiveCategoryListProps> = ({
  onSelectCategory,
}) => {
  const [activeIndex, setActiveIndex] = useState(1); // Default to Lunch

  const currentCategory = CATEGORIES_DATA[activeIndex];

  return (
    <section className="py-24 lg:py-36 bg-[#F5EFEB]/40 border-t border-[#171412]/6">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-8 border-b border-[#171412]/10 gap-4">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#9E1B1B] font-semibold block mb-2">
              Explore Nanighar
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-normal text-[#171412]">
              The Kitchen Repertoire
            </h2>
          </div>
          <span className="text-xs uppercase tracking-[0.16em] text-[#171412]/50 font-mono">
            06 Curated Offerings
          </span>
        </div>

        {/* 2-Column Editorial Interactive Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Numbered Editorial Category List */}
          <div className="lg:col-span-6 space-y-1">
            {CATEGORIES_DATA.map((cat, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={cat.id}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`group py-5 sm:py-6 px-4 rounded-xl cursor-pointer transition-all duration-300 flex items-center justify-between border-b ${
                    isActive
                      ? 'border-[#9E1B1B] bg-white shadow-xs pl-6'
                      : 'border-[#171412]/6 hover:border-[#171412]/20 hover:pl-6'
                  }`}
                >
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span className="font-mono text-xs sm:text-sm text-[#171412]/40 font-light">
                      {cat.num}
                    </span>
                    <div>
                      <h3
                        className={`text-2xl sm:text-3xl lg:text-4xl font-editorial transition-colors ${
                          isActive
                            ? 'text-[#9E1B1B] font-normal italic'
                            : 'text-[#171412] group-hover:text-[#9E1B1B]'
                        }`}
                      >
                        {cat.title}
                      </h3>
                      {isActive && (
                        <p className="text-xs text-[#171412]/60 mt-1 max-w-sm hidden sm:block font-light">
                          {cat.caption}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <ArrowUpRight
                      className={`w-5 h-5 stroke-[1.5] transition-transform ${
                        isActive
                          ? 'text-[#9E1B1B] translate-x-0.5 -translate-y-0.5'
                          : 'text-[#171412]/20 group-hover:text-[#171412]'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Dynamic High-Res Food Reveal Viewport */}
          <div className="lg:col-span-6 h-[420px] sm:h-[500px] lg:h-[580px] relative">
            <div className="w-full h-full rounded-2xl lg:rounded-3xl overflow-hidden shadow-[0_15px_50px_rgba(23,20,18,0.1)] relative bg-stone-100">
              <img
                key={currentCategory.id}
                src={currentCategory.image}
                alt={currentCategory.title}
                className="w-full h-full object-cover transition-opacity duration-700 ease-out animate-editorial-fade"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171412]/60 via-[#171412]/10 to-transparent pointer-events-none" />

              {/* Minimal Overlay info */}
              <div className="absolute bottom-8 left-8 right-8 text-white flex items-end justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/70 block mb-1">
                    {currentCategory.highlight}
                  </span>
                  <h4 className="font-editorial text-2xl sm:text-3xl font-normal text-white">
                    {currentCategory.title}
                  </h4>
                  <p className="text-xs text-white/80 mt-1 max-w-sm font-light hidden sm:block">
                    {currentCategory.caption}
                  </p>
                </div>

                <button
                  onClick={() => onSelectCategory(currentCategory.id)}
                  className="px-5 py-2.5 rounded-full bg-white text-[#171412] text-xs uppercase tracking-widest font-semibold hover:bg-stone-100 transition-colors shadow-sm"
                >
                  View Menu
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
