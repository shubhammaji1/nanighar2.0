import React from 'react';
import { ArrowRight, Plus, Check } from 'lucide-react';
import { Product } from '../data/products';

interface SignaturesSectionProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onExploreFullMenu: () => void;
  cartItemIds: Record<string, number>;
}

export const SignaturesSection: React.FC<SignaturesSectionProps> = ({
  products,
  onAddToCart,
  onExploreFullMenu,
  cartItemIds,
}) => {
  const heroThali = products.find((p) => p.id === 'moha-egg-thali') || products[0];
  const fishFry = products.find((p) => p.id === 'gondhoraj-fish-fry') || products[1];
  const pulaoCombo = products.find((p) => p.id === 'basanti-pulao-combo') || products[2];

  return (
    <section className="py-28 lg:py-40 bg-[#F5EFEB]/40 border-t border-[#171412]/6">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Section Header */}
        <div className="mb-16 lg:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-[#9E1B1B] font-semibold block mb-2 font-mono">
            Kitchen Favourites
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-editorial font-normal uppercase tracking-wider text-[#171412]">
            Nanighar Signatures
          </h2>
          <p className="text-base sm:text-lg text-[#171412]/70 mt-2 font-light">
            A few favourites worth coming home for.
          </p>
        </div>

        {/* Asymmetrical Editorial Composition: 1 Huge Featured + 2 Stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* ONE LARGE FEATURED PRODUCT (Spans 7 cols, visually dominates) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-[#171412]/8 flex flex-col justify-between group shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
            <div>
              {/* Massive Food Image */}
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden mb-8 bg-stone-100">
                <img
                  src={heroThali.image}
                  alt={heroThali.name}
                  className="w-full h-full object-cover editorial-img-hover"
                  loading="lazy"
                />
              </div>

              <div className="flex items-baseline justify-between gap-4 mb-3">
                <h3 className="text-3xl sm:text-4xl font-editorial font-normal text-[#171412]">
                  {heroThali.name}
                </h3>
                <span className="text-2xl font-mono text-[#171412] font-medium shrink-0">
                  ₹{heroThali.price}.00
                </span>
              </div>

              <p className="text-base text-[#171412]/70 font-light leading-relaxed max-w-xl">
                {heroThali.description}
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-[#171412]/8 flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-[#171412]/50 font-mono">
                Freshly prepared to order
              </span>

              <button
                onClick={() => onAddToCart(heroThali)}
                className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.18em] font-medium transition-all cursor-pointer ${
                  cartItemIds[heroThali.id]
                    ? 'bg-[#171412] text-white'
                    : 'bg-[#9E1B1B] text-white hover:bg-[#851616] active:scale-98 shadow-sm'
                }`}
              >
                {cartItemIds[heroThali.id] ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>In Cart ({cartItemIds[heroThali.id]})</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* TWO COMPANION PRODUCTS STACKED (Spans 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8 justify-between">
            
            {/* Product 2: Gondhoraj Fish Fry */}
            <div className="bg-white p-7 sm:p-8 rounded-3xl border border-[#171412]/8 flex flex-col justify-between flex-1 group shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
              <div>
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-6 bg-stone-100">
                  <img
                    src={fishFry.image}
                    alt={fishFry.name}
                    className="w-full h-full object-cover editorial-img-hover"
                    loading="lazy"
                  />
                </div>

                <div className="flex items-baseline justify-between gap-2 mb-2">
                  <h4 className="text-2xl font-editorial font-normal text-[#171412]">
                    {fishFry.name}
                  </h4>
                  <span className="text-xl font-mono text-[#171412] font-medium shrink-0">
                    ₹{fishFry.price}.00
                  </span>
                </div>

                <p className="text-sm text-[#171412]/65 font-light leading-relaxed line-clamp-2">
                  {fishFry.description}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-[#171412]/8 flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-[#171412]/50 font-mono">
                  Kolkata Heritage
                </span>
                <button
                  onClick={() => onAddToCart(fishFry)}
                  className="px-6 py-2.5 rounded-full border border-[#171412]/20 hover:border-[#171412] text-xs uppercase tracking-widest text-[#171412] font-medium hover:bg-[#171412] hover:text-white transition-all cursor-pointer"
                >
                  {cartItemIds[fishFry.id] ? `Added (${cartItemIds[fishFry.id]})` : '+ Add'}
                </button>
              </div>
            </div>

            {/* Product 3: Basanti Pulao Combo */}
            <div className="bg-white p-7 sm:p-8 rounded-3xl border border-[#171412]/8 flex flex-col justify-between flex-1 group shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
              <div>
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-6 bg-stone-100">
                  <img
                    src={pulaoCombo.image}
                    alt={pulaoCombo.name}
                    className="w-full h-full object-cover editorial-img-hover"
                    loading="lazy"
                  />
                </div>

                <div className="flex items-baseline justify-between gap-2 mb-2">
                  <h4 className="text-2xl font-editorial font-normal text-[#171412]">
                    {pulaoCombo.name}
                  </h4>
                  <span className="text-xl font-mono text-[#171412] font-medium shrink-0">
                    ₹{pulaoCombo.price}.00
                  </span>
                </div>

                <p className="text-sm text-[#171412]/65 font-light leading-relaxed line-clamp-2">
                  {pulaoCombo.description}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-[#171412]/8 flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-[#9E1B1B] font-mono">
                  Shark Tank Pick
                </span>
                <button
                  onClick={() => onAddToCart(pulaoCombo)}
                  className="px-6 py-2.5 rounded-full border border-[#171412]/20 hover:border-[#171412] text-xs uppercase tracking-widest text-[#171412] font-medium hover:bg-[#171412] hover:text-white transition-all cursor-pointer"
                >
                  {cartItemIds[pulaoCombo.id] ? `Added (${cartItemIds[pulaoCombo.id]})` : '+ Add'}
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Editorial Link */}
        <div className="mt-16 text-center">
          <button
            onClick={onExploreFullMenu}
            className="inline-flex items-center gap-2 text-base font-editorial italic text-[#171412] hover:text-[#9E1B1B] transition-colors group pb-1 border-b border-[#171412]/30 hover:border-[#9E1B1B] cursor-pointer"
          >
            <span className="text-lg">Explore the Full 79-Dish Menu</span>
            <ArrowRight className="w-4 h-4 stroke-[1.5] group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
