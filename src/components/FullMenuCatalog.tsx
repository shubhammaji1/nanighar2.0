import React from 'react';
import { Search, ArrowUpDown, Plus, Minus, Check } from 'lucide-react';
import { Product, CATEGORIES } from '../data/products';

interface FullMenuCatalogProps {
  products: Product[];
  activeCategory: string;
  onSelectCategory: (cat: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  sortBy: string;
  onSortChange: (sort: any) => void;
  onAddToCart: (product: Product) => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  cartItemIds: Record<string, number>;
}

export const FullMenuCatalog: React.FC<FullMenuCatalogProps> = ({
  products,
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  onAddToCart,
  onUpdateQuantity,
  cartItemIds,
}) => {
  return (
    <section id="menu" className="py-24 lg:py-36 bg-[#FBF8F3] border-t border-[#171412]/6">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#9E1B1B] font-semibold block mb-3">
            The Daily Menu
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-normal text-[#171412] leading-[1.08] tracking-tight">
            What's cooking <br />
            <span className="font-editorial italic font-normal text-[#9E1B1B]">
              today?
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#171412]/65 mt-4 font-light max-w-lg leading-relaxed">
            Freshly prepared homestyle portions, slow-simmered in domestic kitchens with cold-pressed oils and hand-ground spices.
          </p>
        </div>

        {/* Minimal Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-[#171412]/8 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.16em] font-medium transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-[#171412] text-white shadow-xs'
                    : 'text-[#171412]/70 hover:text-[#171412] hover:bg-stone-200/50'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Minimal Search & Sort Row */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-14">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-[#171412]/40 absolute left-4 top-1/2 -translate-y-1/2 stroke-[1.5]" />
            <input
              type="text"
              placeholder="Search dishes or ingredients..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-full bg-white border border-[#171412]/10 text-xs text-[#171412] placeholder:text-[#171412]/40 focus:outline-none focus:border-[#9E1B1B] transition-colors shadow-xs"
            />
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center bg-white border border-[#171412]/10 rounded-full px-4 py-2.5 text-xs text-[#171412]/80 shadow-xs">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#171412]/50 mr-2 stroke-[1.5]" />
              <select
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value)}
                className="bg-transparent focus:outline-none font-medium text-xs uppercase tracking-wider cursor-pointer"
              >
                <option value="recommended">Recommended</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Spacious 3-Column Luxury Product Grid */}
        {products.length === 0 ? (
          <div className="py-20 text-center bg-white rounded-3xl border border-[#171412]/6 p-8">
            <p className="text-base font-editorial text-lg text-[#171412]">No dishes found matching your selection.</p>
            <p className="text-xs text-[#171412]/50 mt-1 font-light">Try searching for Thali, Omelette, or Fish Fry.</p>
            <button
              onClick={() => {
                onSelectCategory('All');
                onSearchChange('');
              }}
              className="mt-6 px-6 py-2.5 rounded-full bg-[#171412] text-white text-xs uppercase tracking-widest font-medium"
            >
              Show All Dishes
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
            {products.map((product) => {
              const qtyInCart = cartItemIds[product.id] || 0;
              return (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-[#171412]/6 flex flex-col justify-between group shadow-[0_4px_25px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_35px_rgba(0,0,0,0.05)] transition-all duration-300"
                >
                  <div>
                    {/* 70% Food Image Area with subtle rounded corners */}
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-stone-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover editorial-img-hover"
                        loading="lazy"
                      />
                    </div>

                    {/* Minimal Product Meta */}
                    <div className="flex items-baseline justify-between gap-3 mb-2">
                      <h3 className="text-2xl font-editorial font-normal text-[#171412] leading-snug group-hover:text-[#9E1B1B] transition-colors">
                        {product.name}
                      </h3>
                      <span className="text-lg font-mono text-[#171412] font-medium shrink-0">
                        ₹{product.price}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#171412]/60 font-light leading-relaxed line-clamp-2 min-h-[36px]">
                      {product.description}
                    </p>
                  </div>

                  {/* Minimal Interaction: Stepper or + Add */}
                  <div className="mt-8 pt-5 border-t border-[#171412]/6 flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-wider text-[#171412]/40 font-mono">
                      {product.category}
                    </span>

                    {qtyInCart > 0 ? (
                      <div className="flex items-center border border-[#171412] rounded-full overflow-hidden bg-[#171412] text-white">
                        <button
                          onClick={() => onUpdateQuantity(product.id, qtyInCart - 1)}
                          className="w-7 h-7 flex items-center justify-center hover:bg-white/20 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-mono font-bold">
                          {qtyInCart}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(product.id, qtyInCart + 1)}
                          className="w-7 h-7 flex items-center justify-center hover:bg-white/20 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => onAddToCart(product)}
                        className="px-5 py-2 rounded-full border border-[#171412]/20 hover:border-[#171412] text-xs uppercase tracking-[0.16em] text-[#171412] font-medium hover:bg-[#171412] hover:text-white transition-all"
                      >
                        + Add
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
