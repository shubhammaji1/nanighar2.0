import React from 'react';
import { Plus, Check, Star, Sparkles, Flame, Clock } from 'lucide-react';
import { Product } from '../data/products';

interface SignatureBentoProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onOpenQuickView: (product: Product) => void;
  cartItemIds: Record<string, number>;
}

export const SignatureBento: React.FC<SignatureBentoProps> = ({
  products,
  onAddToCart,
  onOpenQuickView,
  cartItemIds
}) => {
  const heroDish = products.find((p) => p.id === 'moha-egg-thali') || products[0];
  const fishFry = products.find((p) => p.id === 'kolkata-fish-fry') || products[1];
  const chickenKosha = products.find((p) => p.id === 'chicken-kosha-paratha-combo') || products[2];
  const dessert = products.find((p) => p.id === 'hot-brownie-ice-cream') || products[3];

  return (
    <section className="py-14 lg:py-20 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#A61C1C]/10 text-[#A61C1C] text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mastered Recipes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-stone-900">
            Nanighar Signatures
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-2 font-normal">
            Handcrafted with age-old family masalas, fresh local produce, and the comforting soul of Bengal.
          </p>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* 1. Large Hero Dish (Spans 7 cols on Desktop) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="relative rounded-2xl overflow-hidden mb-6 aspect-[16/10] bg-stone-100">
              <img
                src={heroDish.image}
                alt={heroDish.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-[#A61C1C] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                  {heroDish.tag || 'SIGNATURE'}
                </span>
                <span className="bg-white/90 backdrop-blur-md text-stone-800 text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
                  <Flame className="w-3 h-3 text-[#A61C1C]" />
                  <span>Most Ordered</span>
                </span>
              </div>

              {/* Diet Dot */}
              <div className="absolute top-4 right-4 bg-white/90 p-1.5 rounded-md shadow-xs">
                <span className="block w-2.5 h-2.5 rounded-full bg-rose-600" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between gap-4 mb-2">
                <h3 
                  onClick={() => onOpenQuickView(heroDish)}
                  className="text-2xl font-bold font-serif-luxury text-stone-900 group-hover:text-[#A61C1C] transition-colors cursor-pointer"
                >
                  {heroDish.name}
                </h3>
                <div className="text-2xl font-bold text-[#A61C1C] font-sans-clean shrink-0">
                  ₹{heroDish.price}
                </div>
              </div>

              <p className="text-stone-600 text-sm leading-relaxed mb-6 font-light">
                {heroDish.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                <div className="flex items-center gap-4 text-xs text-stone-500">
                  <span className="flex items-center gap-1 font-medium text-stone-700">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    {heroDish.rating} ({heroDish.reviewsCount} reviews)
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {heroDish.prepTime}
                  </span>
                </div>

                <button
                  onClick={() => onAddToCart(heroDish)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    cartItemIds[heroDish.id]
                      ? 'bg-emerald-700 text-white'
                      : 'bg-[#A61C1C] text-white hover:bg-[#8A1515] active:scale-95 shadow-sm'
                  }`}
                >
                  {cartItemIds[heroDish.id] ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Added ({cartItemIds[heroDish.id]})</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add to Cart</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column Bento (Spans 5 cols on Desktop) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* 2. Fish Fry Card */}
            <div className="bg-white rounded-3xl p-5 border border-stone-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex items-center gap-4 group">
              <div className="w-28 sm:w-36 h-28 sm:h-32 rounded-2xl overflow-hidden shrink-0 bg-stone-100">
                <img
                  src={fishFry.image}
                  alt={fishFry.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#A61C1C] bg-[#A61C1C]/10 px-2 py-0.5 rounded">
                    Heritage Starter
                  </span>
                </div>
                <h4 
                  onClick={() => onOpenQuickView(fishFry)}
                  className="text-base sm:text-lg font-bold font-serif-luxury text-stone-900 truncate group-hover:text-[#A61C1C] cursor-pointer"
                >
                  {fishFry.name}
                </h4>
                <p className="text-xs text-stone-500 line-clamp-1 mt-0.5 font-light">
                  Crisp crumbed fillet with Kasundi mustard.
                </p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-base font-bold text-stone-900">₹{fishFry.price}</span>
                  <button
                    onClick={() => onAddToCart(fishFry)}
                    className="p-2 rounded-full bg-stone-100 hover:bg-[#A61C1C] hover:text-white transition-colors text-stone-700"
                    title="Add to cart"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* 3. Chicken Kosha Combo Card */}
            <div className="bg-white rounded-3xl p-5 border border-stone-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex items-center gap-4 group">
              <div className="w-28 sm:w-36 h-28 sm:h-32 rounded-2xl overflow-hidden shrink-0 bg-stone-100">
                <img
                  src={chickenKosha.image}
                  alt={chickenKosha.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-purple-700 bg-purple-100 px-2 py-0.5 rounded">
                    Shark Tank Pick
                  </span>
                </div>
                <h4 
                  onClick={() => onOpenQuickView(chickenKosha)}
                  className="text-base sm:text-lg font-bold font-serif-luxury text-stone-900 truncate group-hover:text-[#A61C1C] cursor-pointer"
                >
                  {chickenKosha.name}
                </h4>
                <p className="text-xs text-stone-500 line-clamp-1 mt-0.5 font-light">
                  Slow-simmered chicken with 3 flaky parathas.
                </p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-base font-bold text-stone-900">₹{chickenKosha.price}</span>
                  <button
                    onClick={() => onAddToCart(chickenKosha)}
                    className="p-2 rounded-full bg-stone-100 hover:bg-[#A61C1C] hover:text-white transition-colors text-stone-700"
                    title="Add to cart"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* 4. Warm Brownie Dessert Highlight */}
            <div className="bg-gradient-to-r from-[#241B19] to-[#14100E] text-white rounded-3xl p-5 shadow-md flex items-center gap-4">
              <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0">
                <img
                  src={dessert.image}
                  alt={dessert.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] uppercase tracking-wider text-amber-300 font-semibold">
                  Sweet Finishing Touch
                </span>
                <h4 className="text-sm sm:text-base font-bold font-serif-luxury truncate text-white">
                  {dessert.name}
                </h4>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm font-bold text-amber-200">₹{dessert.price}</span>
                  <button
                    onClick={() => onAddToCart(dessert)}
                    className="px-3.5 py-1.5 rounded-full bg-white text-stone-900 text-xs font-semibold hover:bg-amber-100 transition-colors"
                  >
                    + Add to Meal
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
