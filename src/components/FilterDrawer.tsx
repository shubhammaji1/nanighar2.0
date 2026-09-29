import React from 'react';
import { X, SlidersHorizontal, RotateCcw, Check } from 'lucide-react';

interface FilterState {
  category: string;
  diet: 'all' | 'veg' | 'non-veg';
  maxPrice: number;
  selectedVariants: string[];
  selectedWeight: string;
}

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterState;
  onUpdateFilters: (newFilters: FilterState) => void;
  onResetFilters: () => void;
  totalFilteredCount: number;
}

const AVAILABLE_VARIANTS = [
  'With Chicken Kosha',
  'With Egg Kosha',
  'With Ice Cream',
  'With Omelette',
  'With Paneer',
  'With Sabji',
  'Without Ice Cream',
];

const WEIGHT_OPTIONS = ['All', '100gm', '150ml', '200ml', '500gm'];

export const FilterDrawer: React.FC<FilterDrawerProps> = ({
  isOpen,
  onClose,
  filters,
  onUpdateFilters,
  onResetFilters,
  totalFilteredCount,
}) => {
  if (!isOpen) return null;

  const toggleVariant = (variant: string) => {
    const exists = filters.selectedVariants.includes(variant);
    const newVariants = exists
      ? filters.selectedVariants.filter((v) => v !== variant)
      : [...filters.selectedVariants, variant];
    onUpdateFilters({ ...filters, selectedVariants: newVariants });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs flex justify-start animate-fade-in">
      {/* Drawer Container */}
      <div 
        className="w-full max-w-md bg-[#FDFBF7] h-full shadow-2xl flex flex-col justify-between border-r border-stone-200 animate-slide-right"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Drawer Header */}
        <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-5 h-5 text-[#A61C1C]" />
            <h3 className="text-lg font-bold font-serif-luxury text-stone-900">
              Filter Menu ({totalFilteredCount} dishes)
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-full transition-colors"
            aria-label="Close filters"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Filters Body */}
        <div className="p-6 overflow-y-auto space-y-7 flex-1">
          
          {/* 1. Diet Preference */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-stone-800 block mb-3">
              Dietary Preference
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'all', label: 'All Dishes' },
                { id: 'veg', label: 'Pure Veg', color: 'border-emerald-600 text-emerald-800' },
                { id: 'non-veg', label: 'Non-Veg', color: 'border-rose-700 text-rose-900' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => onUpdateFilters({ ...filters, diet: item.id as any })}
                  className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                    filters.diet === item.id
                      ? 'bg-[#1C1917] text-white border-stone-900 shadow-xs'
                      : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Price Range Slider */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-stone-800">
                Max Price
              </label>
              <span className="text-sm font-bold text-[#A61C1C] font-mono">
                Up to ₹{filters.maxPrice}
              </span>
            </div>
            <input
              type="range"
              min="49"
              max="249"
              step="10"
              value={filters.maxPrice}
              onChange={(e) =>
                onUpdateFilters({ ...filters, maxPrice: Number(e.target.value) })
              }
              className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#A61C1C]"
            />
            <div className="flex justify-between text-[11px] text-stone-400 mt-1 font-mono">
              <span>₹49</span>
              <span>₹149</span>
              <span>₹249</span>
            </div>
          </div>

          {/* 3. Meal Category */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-stone-800 block mb-3">
              Menu Category
            </label>
            <div className="flex flex-wrap gap-2">
              {['All', 'Lunch', 'Breakfast', 'Tea & Coffee', 'Evening Snacks', 'Chef Special', 'Desserts'].map(
                (cat) => (
                  <button
                    key={cat}
                    onClick={() => onUpdateFilters({ ...filters, category: cat })}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                      filters.category === cat
                        ? 'bg-[#A61C1C] text-white border-[#A61C1C]'
                        : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                    }`}
                  >
                    {cat}
                  </button>
                )
              )}
            </div>
          </div>

          {/* 4. Variants Customizer */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-stone-800 block mb-3">
              Available Customization / Variants
            </label>
            <div className="space-y-2">
              {AVAILABLE_VARIANTS.map((v) => {
                const isSelected = filters.selectedVariants.includes(v);
                return (
                  <label
                    key={v}
                    onClick={() => toggleVariant(v)}
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-stone-200 cursor-pointer hover:bg-stone-50 transition-colors"
                  >
                    <div
                      className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-[#A61C1C] border-[#A61C1C] text-white'
                          : 'border-stone-300 bg-white'
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3" />}
                    </div>
                    <span className="text-xs font-medium text-stone-700">{v}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* 5. Serving Portion / Weight */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-stone-800 block mb-3">
              Portion Size
            </label>
            <div className="flex flex-wrap gap-2">
              {WEIGHT_OPTIONS.map((w) => (
                <button
                  key={w}
                  onClick={() => onUpdateFilters({ ...filters, selectedWeight: w })}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                    filters.selectedWeight === w
                      ? 'bg-stone-900 text-white border-stone-900'
                      : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                  }`}
                >
                  {w}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Drawer Actions Footer */}
        <div className="p-4 border-t border-stone-200 bg-white flex items-center gap-3">
          <button
            onClick={onResetFilters}
            className="flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl border border-stone-300 text-stone-700 text-xs font-semibold hover:bg-stone-100 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>

          <button
            onClick={onClose}
            className="flex-1 py-3 px-4 rounded-xl bg-[#A61C1C] text-white text-xs font-semibold hover:bg-[#8A1515] transition-colors shadow-sm text-center"
          >
            Show {totalFilteredCount} Dishes
          </button>
        </div>

      </div>
    </div>
  );
};
