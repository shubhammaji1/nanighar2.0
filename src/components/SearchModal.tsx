import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Star, Plus, ArrowRight } from 'lucide-react';
import { Product } from '../data/products';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
  onAddToCart,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filtered = query.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase()) ||
          (p.ingredients &&
            p.ingredients.some((i) =>
              i.toLowerCase().includes(query.toLowerCase())
            ))
      )
    : products.slice(0, 6);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-start justify-center pt-16 sm:pt-24 p-4 animate-fade-in">
      <div 
        className="relative bg-[#FDFBF7] rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center gap-3 bg-white">
          <Search className="w-5 h-5 text-stone-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search thalis, luchi, fish fry, kulhad chai, brownie..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-sm sm:text-base text-stone-900 placeholder:text-stone-400 bg-transparent focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-stone-400 hover:text-stone-700 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors ml-2"
          >
            ESC
          </button>
        </div>

        {/* Quick Filter suggestions */}
        <div className="px-5 py-2.5 bg-stone-50 border-b border-stone-200/60 flex items-center gap-2 overflow-x-auto text-xs text-stone-500">
          <span className="font-semibold text-stone-700 shrink-0">Try:</span>
          {['Moha Thali', 'Fish Fry', 'Luchi', 'Kulhad Chai', 'Brownie'].map((suggest) => (
            <button
              key={suggest}
              onClick={() => setQuery(suggest)}
              className="px-2.5 py-1 rounded-full bg-white border border-stone-200 hover:border-stone-400 text-stone-700 whitespace-nowrap"
            >
              {suggest}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="p-4 sm:p-5 max-h-[60vh] overflow-y-auto space-y-2.5">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-stone-500">
              <p className="text-sm">No dishes found matching "{query}"</p>
              <p className="text-xs text-stone-400 mt-1">
                Try searching for Thali, Omelette, Biryani, or Chai.
              </p>
            </div>
          ) : (
            filtered.map((item) => (
              <div
                key={item.id}
                className="p-3 rounded-2xl bg-white border border-stone-200/70 hover:border-stone-300 hover:shadow-sm transition-all flex items-center justify-between gap-3 group"
              >
                <div
                  onClick={() => {
                    onSelectProduct(item);
                    onClose();
                  }}
                  className="flex items-center gap-3.5 flex-1 min-w-0 cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-xl object-cover shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-stone-900 truncate group-hover:text-[#A61C1C] transition-colors">
                        {item.name}
                      </h4>
                      <span className="text-[10px] text-stone-500 bg-stone-100 px-1.5 py-0.5 rounded">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-xs text-stone-500 truncate mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-sm font-bold text-stone-900 font-mono">
                    ₹{item.price}
                  </span>
                  <button
                    onClick={() => onAddToCart(item)}
                    className="p-2 rounded-xl bg-[#A61C1C]/10 hover:bg-[#A61C1C] text-[#A61C1C] hover:text-white transition-colors"
                    title="Add to cart"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};
