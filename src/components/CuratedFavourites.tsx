import React from 'react';
import { Plus, Check } from 'lucide-react';
import { Product } from '../data/products';

interface CuratedFavouritesProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  cartItemIds: Record<string, number>;
}

export const CuratedFavourites: React.FC<CuratedFavouritesProps> = ({
  products,
  onAddToCart,
  cartItemIds,
}) => {
  const favourites = [
    products.find((p) => p.id === 'luchi-alur-dum') || products[0],
    products.find((p) => p.id === 'kulhad-masala-chai') || products[1],
    products.find((p) => p.id === 'hot-brownie-ice-cream') || products[2],
  ];

  return (
    <section className="py-24 lg:py-36 bg-[#F5EFEB]/30 border-t border-[#171412]/6">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#9E1B1B] font-semibold block mb-3">
              Daily Comforts
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-normal text-[#171412]">
              More Kitchen Favourites
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#171412]/60 max-w-sm font-light">
            Simple pleasures prepared with pure ingredients, served fresh at any hour of the day.
          </p>
        </div>

        {/* Spacious 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {favourites.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl p-6 border border-[#171412]/6 flex flex-col justify-between group shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
            >
              <div>
                {/* 70% Food Image Dominance */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-stone-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover editorial-img-hover"
                    loading="lazy"
                  />
                </div>

                <div className="flex items-baseline justify-between gap-2 mb-2">
                  <h3 className="text-2xl font-editorial font-normal text-[#171412] leading-snug">
                    {product.name}
                  </h3>
                  <span className="text-lg font-mono text-[#171412] font-medium shrink-0">
                    ₹{product.price}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#171412]/60 font-light leading-relaxed line-clamp-2">
                  {product.description}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-[#171412]/6 flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider text-[#171412]/40 font-mono">
                  {product.category}
                </span>

                <button
                  onClick={() => onAddToCart(product)}
                  className={`px-5 py-2 rounded-full text-xs uppercase tracking-[0.16em] font-medium transition-all ${
                    cartItemIds[product.id]
                      ? 'bg-[#171412] text-white'
                      : 'border border-[#171412]/20 hover:border-[#171412] text-[#171412] hover:bg-[#171412] hover:text-white'
                  }`}
                >
                  {cartItemIds[product.id] ? (
                    <span className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5" />
                      <span>Added</span>
                    </span>
                  ) : (
                    <span>+ Add</span>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
