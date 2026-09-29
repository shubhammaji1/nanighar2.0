import React from 'react';
import { Plus, Check } from 'lucide-react';
import { Product } from '../data/products';

interface EditorialSignaturesProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  cartItemIds: Record<string, number>;
}

export const EditorialSignatures: React.FC<EditorialSignaturesProps> = ({
  products,
  onAddToCart,
  cartItemIds,
}) => {
  const heroThali = products.find((p) => p.id === 'moha-egg-thali') || products[0];
  const fishFry = products.find((p) => p.id === 'kolkata-fish-fry') || products[1];
  const chickenKosha = products.find((p) => p.id === 'chicken-kosha-paratha-combo') || products[2];

  return (
    <section className="py-24 lg:py-36 bg-[#FBF8F3] border-t border-[#171412]/6">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#9E1B1B] font-semibold block mb-3">
            Nanighar Signatures
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-normal text-[#171412] leading-tight">
            The dishes our kitchen is known for.
          </h2>
          <p className="text-sm text-[#171412]/60 mt-3 font-light leading-relaxed">
            Time-honoured recipes prepared with unhurried patience, traditional spices, and the comfort of ghar ka khana.
          </p>
        </div>

        {/* Asymmetrical Magazine Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* ONE HUGE FEATURED DISH (Spans 7 columns) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-[#171412]/6 flex flex-col justify-between group shadow-[0_4px_25px_rgba(0,0,0,0.02)]">
            <div>
              {/* Massive 16:10 or 4:3 Image */}
              <div className="relative aspect-[16/11] rounded-xl overflow-hidden mb-8 bg-stone-100">
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
                  ₹{heroThali.price}
                </span>
              </div>

              <p className="text-sm sm:text-base text-[#171412]/70 font-light leading-relaxed max-w-xl">
                A comforting Bengali home celebration: fragrant steamed rice, slow-cooked egg curry (2 farm eggs) in dark onion-tomato gravy, homestyle moong dal, crispy jhuri alu bhaja, and handmade rotis.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#171412]/6 flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-[#171412]/50 font-mono">
                Freshly cooked to order
              </span>

              <button
                onClick={() => onAddToCart(heroThali)}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs uppercase tracking-[0.16em] font-medium transition-all ${
                  cartItemIds[heroThali.id]
                    ? 'bg-[#171412] text-white'
                    : 'bg-[#9E1B1B] text-white hover:bg-[#851616] active:scale-98 shadow-sm'
                }`}
              >
                {cartItemIds[heroThali.id] ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>In Cart ({cartItemIds[heroThali.id]})</span>
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

          {/* TWO COMPANION PRODUCTS STACKED (Spans 5 columns) */}
          <div className="lg:col-span-5 flex flex-col gap-8 justify-between">
            
            {/* Companion 1: Kolkata Fish Fry */}
            <div className="bg-white p-7 rounded-2xl border border-[#171412]/6 flex flex-col justify-between flex-1 group shadow-[0_4px_25px_rgba(0,0,0,0.02)]">
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
                    ₹{fishFry.price}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#171412]/60 font-light leading-relaxed">
                  Pure Bhetki fish fillet marinated in cilantro-garlic paste, crumb-fried golden, served with fiery Kasundi mustard.
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-[#171412]/6 flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider text-[#171412]/50 font-mono">
                  Calcutta Heritage
                </span>
                <button
                  onClick={() => onAddToCart(fishFry)}
                  className="px-5 py-2.5 rounded-full border border-[#171412]/20 hover:border-[#171412] text-xs uppercase tracking-widest text-[#171412] font-medium hover:bg-[#171412] hover:text-white transition-all"
                >
                  {cartItemIds[fishFry.id] ? `Added (${cartItemIds[fishFry.id]})` : '+ Add'}
                </button>
              </div>
            </div>

            {/* Companion 2: Chicken Kosha & Paratha */}
            <div className="bg-white p-7 rounded-2xl border border-[#171412]/6 flex flex-col justify-between flex-1 group shadow-[0_4px_25px_rgba(0,0,0,0.02)]">
              <div>
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-6 bg-stone-100">
                  <img
                    src={chickenKosha.image}
                    alt={chickenKosha.name}
                    className="w-full h-full object-cover editorial-img-hover"
                    loading="lazy"
                  />
                </div>

                <div className="flex items-baseline justify-between gap-2 mb-2">
                  <h4 className="text-2xl font-editorial font-normal text-[#171412]">
                    {chickenKosha.name}
                  </h4>
                  <span className="text-xl font-mono text-[#171412] font-medium shrink-0">
                    ₹{chickenKosha.price}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#171412]/60 font-light leading-relaxed">
                  Slow-simmered tender chicken in dark caramelized onion and whole garam masala gravy with 3 flaky tawa parathas.
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-[#171412]/6 flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider text-[#9E1B1B] font-mono">
                  Shark Tank Pick
                </span>
                <button
                  onClick={() => onAddToCart(chickenKosha)}
                  className="px-5 py-2.5 rounded-full border border-[#171412]/20 hover:border-[#171412] text-xs uppercase tracking-widest text-[#171412] font-medium hover:bg-[#171412] hover:text-white transition-all"
                >
                  {cartItemIds[chickenKosha.id] ? `Added (${cartItemIds[chickenKosha.id]})` : '+ Add'}
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
