import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORY_CARDS } from '../data/products';

interface CategoryShowcaseProps {
  onSelectCategory: (category: string) => void;
  activeCategory: string;
}

export const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({
  onSelectCategory,
  activeCategory
}) => {
  return (
    <section className="py-12 lg:py-16 bg-[#F7F3EB]/50 border-y border-stone-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs uppercase font-semibold tracking-widest text-[#A61C1C]">
              Every Cravings Curated
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-stone-900 mt-1">
              Shop by Mood & Meal
            </h2>
          </div>
          <p className="text-sm text-stone-600 max-w-md">
            From sunrise luchis to late-night sweet cravings, freshly prepared and dispatched straight from our verified kitchens.
          </p>
        </div>

        {/* Visual Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {CATEGORY_CARDS.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`group text-left relative rounded-2xl overflow-hidden p-3.5 flex flex-col justify-between h-[210px] transition-all duration-300 ${
                  isSelected
                    ? 'ring-2 ring-[#A61C1C] shadow-lg scale-[1.02]'
                    : 'hover:shadow-md hover:-translate-y-1 bg-white border border-stone-200/70'
                }`}
              >
                {/* Background Image Container with Gradient Overlay */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
                </div>

                {/* Top Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20">
                    {cat.badge}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="relative z-10 text-white">
                  <h3 className="font-semibold text-sm sm:text-base leading-tight font-sans-clean drop-shadow-sm">
                    {cat.title}
                  </h3>
                  <p className="text-[11px] text-stone-200 mt-1 line-clamp-2 leading-relaxed opacity-90 font-light">
                    {cat.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
