import React from 'react';
import { Search, ArrowUpDown, ArrowLeft, Plus, Minus, Sparkles } from 'lucide-react';
import { Product, CATEGORIES } from '../data/products';

interface MenuPageProps {
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
  onReturnHome: () => void;
}

export const MenuPage: React.FC<MenuPageProps> = ({
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
  onReturnHome,
}) => {
  return (
    <div className="pt-32 pb-36 min-h-screen bg-[#FBF8F3]">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Back navigation */}
        <button
          onClick={onReturnHome}
          className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-widest text-[#171412]/60 hover:text-[#9E1B1B] transition-colors mb-8 group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 stroke-[1.5] group-hover:-translate-x-1 transition-transform" />
          <span>Return to Home</span>
        </button>

        {/* Page Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#9E1B1B] font-semibold font-mono">
              The Daily Menu
            </span>
            <span className="text-xs font-mono text-stone-500 bg-stone-200/60 px-2.5 py-0.5 rounded-full">
              79 Authentic Dishes
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-normal text-[#171412] leading-[1.02] tracking-tight">
            What's cooking <br />
            <span className="font-editorial italic font-normal text-[#9E1B1B]">
              today?
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#171412]/70 mt-4 font-light leading-relaxed">
            From our hearty Moha and Mini Thalis to authentic Kolkata chops, street chowmein, artisanal Darjeeling teas, and decadent desserts.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-[#171412]/8 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.16em] font-medium transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#171412] text-white shadow-xs'
                    : 'text-[#171412]/70 hover:text-[#171412] hover:bg-stone-200/60 bg-white/60'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search & Sort Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-16">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-[#171412]/40 absolute left-4 top-1/2 -translate-y-1/2 stroke-[1.5]" />
            <input
              type="text"
              placeholder="Search 79 dishes (e.g. Moha Thali, Fish Fry, Poha, Chai)..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-[#171412]/10 text-xs sm:text-sm text-[#171412] placeholder:text-[#171412]/40 focus:outline-none focus:border-[#9E1B1B] transition-colors shadow-xs"
            />
          </div>

          <div className="flex items-center bg-white border border-[#171412]/10 rounded-full px-5 py-3 text-xs sm:text-sm text-[#171412]/80 shadow-xs">
            <ArrowUpDown className="w-4 h-4 text-[#171412]/50 mr-2.5 stroke-[1.5]" />
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="bg-transparent focus:outline-none font-medium uppercase tracking-wider text-xs cursor-pointer"
            >
              <option value="recommended">Recommended</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Spacious 3-Column Luxury Product Grid */}
        {products.length === 0 ? (
          <div className="py-24 text-center bg-white rounded-3xl border border-[#171412]/6 p-8">
            <p className="font-editorial text-2xl text-[#171412]">No dishes found matching your search.</p>
            <button
              onClick={() => {
                onSelectCategory('All');
                onSearchChange('');
              }}
              className="mt-6 px-8 py-3 rounded-full bg-[#171412] text-white text-xs uppercase tracking-widest font-medium cursor-pointer"
            >
              Show All 79 Dishes
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {products.map((product) => {
              const qtyInCart = cartItemIds[product.id] || 0;
              return (
                <div
                  key={product.id}
                  className="bg-white rounded-3xl p-7 border border-[#171412]/6 flex flex-col justify-between group shadow-[0_4px_25px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-300"
                >
                  <div>
                    {/* Food Image Area */}
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-stone-100 border border-stone-200/40">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover editorial-img-hover"
                        loading="lazy"
                      />

                      {/* Veg / Non-Veg Indicator */}
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs p-1.5 rounded-md shadow-xs">
                        <div
                          className={`w-3.5 h-3.5 border flex items-center justify-center ${
                            product.diet === 'veg'
                              ? 'border-emerald-600'
                              : 'border-red-600'
                          }`}
                        >
                          <div
                            className={`w-2 h-2 rounded-full ${
                              product.diet === 'veg'
                                ? 'bg-emerald-600'
                                : 'bg-red-600'
                            }`}
                          />
                        </div>
                      </div>

                      {/* Tag Badge */}
                      {product.tag && (
                        <div className="absolute top-3 right-3 bg-[#171412]/85 backdrop-blur-xs text-white px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider">
                          {product.tag}
                        </div>
                      )}
                    </div>

                    <div className="flex items-baseline justify-between gap-3 mb-2">
                      <h3 className="text-2xl font-editorial font-normal text-[#171412] leading-snug group-hover:text-[#9E1B1B] transition-colors">
                        {product.name}
                      </h3>
                      <span className="text-xl font-mono text-[#171412] font-semibold shrink-0">
                        ₹{product.price}.00
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#171412]/65 font-light leading-relaxed line-clamp-2 min-h-[38px]">
                      {product.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-5 border-t border-[#171412]/6 flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-wider text-[#171412]/40 font-mono">
                      #{product.itemNumber} • {product.category}
                    </span>

                    {qtyInCart > 0 ? (
                      <div className="flex items-center border border-[#171412] rounded-full overflow-hidden bg-[#171412] text-white">
                        <button
                          onClick={() => onUpdateQuantity(product.id, qtyInCart - 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-7 text-center text-xs font-mono font-bold">
                          {qtyInCart}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(product.id, qtyInCart + 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => onAddToCart(product)}
                        className="px-6 py-2.5 rounded-full border border-[#171412]/20 hover:border-[#171412] text-xs uppercase tracking-[0.16em] text-[#171412] font-medium hover:bg-[#171412] hover:text-white transition-all cursor-pointer"
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
    </div>
  );
};
