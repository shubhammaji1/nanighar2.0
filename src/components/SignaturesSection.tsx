import React, { useRef, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Plus, Check } from 'lucide-react';
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Top 6 Signatures
  const signatures = [
    products.find((p) => p.id === 'moha-egg-thali'),
    products.find((p) => p.id === 'gondhoraj-fish-fry'),
    products.find((p) => p.id === 'basanti-pulao-combo'),
    products.find((p) => p.id === 'mini-mutton-thali'),
    products.find((p) => p.id === 'bhog-er-khichdi'),
    products.find((p) => p.id === 'luchi-cholar-dal-combo'),
  ].filter(Boolean) as Product[];

  const fallbackSignatures = signatures.length >= 6 ? signatures : products.slice(0, 6);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const cardWidth = scrollRef.current.children[0]?.clientWidth || clientWidth;
    const index = Math.round(scrollLeft / (cardWidth + 24));
    setActiveIndex(Math.min(Math.max(index, 0), fallbackSignatures.length - 1));
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.children[0]?.clientWidth || 360;
    scrollRef.current.scrollTo({
      left: index * (cardWidth + 24),
      behavior: 'smooth',
    });
  };

  const handlePrev = () => {
    scrollToIndex(Math.max(activeIndex - 1, 0));
  };

  const handleNext = () => {
    scrollToIndex(Math.min(activeIndex + 1, fallbackSignatures.length - 1));
  };

  return (
    <section id="signatures" className="py-24 lg:py-36 bg-[#F5EFEB]/40 border-t border-[#171412]/6 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header with Carousel Pagination Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#9E1B1B] font-semibold block mb-2 font-mono">
              Nanighar Signatures
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-editorial font-normal uppercase tracking-wider text-[#171412]">
              Our favourites worth coming back for.
            </h2>
          </div>

          {/* Carousel Navigation Controls */}
          <div className="flex items-center gap-4 self-start sm:self-auto">
            {/* Index Counter e.g. 1 / 6 */}
            <div className="text-xs uppercase font-mono font-medium tracking-widest text-[#171412]/70 bg-white/80 px-3.5 py-1.5 rounded-full border border-stone-200/80 shadow-2xs">
              <span className="text-[#171412] font-semibold">{activeIndex + 1}</span>
              <span className="text-[#171412]/40 mx-1">/</span>
              <span>{fallbackSignatures.length}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                disabled={activeIndex === 0}
                className="p-2.5 rounded-full border border-[#171412]/15 bg-white text-[#171412] hover:bg-[#171412] hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer shadow-2xs"
                aria-label="Previous signature"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                disabled={activeIndex === fallbackSignatures.length - 1}
                className="p-2.5 rounded-full border border-[#171412]/15 bg-white text-[#171412] hover:bg-[#171412] hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer shadow-2xs"
                aria-label="Next signature"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* HORIZONTAL DISCOVERY CAROUSEL */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 sm:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-6 pt-2 -mx-4 px-4 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12"
        >
          {fallbackSignatures.map((dish) => {
            const inCart = cartItemIds[dish.id] || 0;
            return (
              <div
                key={dish.id}
                className="w-[84vw] sm:w-[440px] md:w-[480px] lg:w-[500px] shrink-0 snap-start bg-white p-6 sm:p-8 rounded-[20px] sm:rounded-3xl border border-[#171412]/8 shadow-[0_8px_30px_rgba(23,20,18,0.02)] flex flex-col justify-between group"
              >
                <div>
                  {/* Large Food Image: 70% of Visual Attention */}
                  <div className="relative aspect-[16/11] rounded-2xl overflow-hidden mb-6 bg-stone-100 border border-stone-200/40">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      loading="lazy"
                    />
                  </div>

                  {/* Kicker */}
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#9E1B1B] font-mono font-medium block mb-2">
                    Nanighar Signature
                  </span>

                  {/* Name & Price */}
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <h3 className="text-2xl sm:text-[26px] font-editorial font-normal text-[#171412] leading-snug">
                      {dish.name}
                    </h3>
                    <span className="text-xl sm:text-2xl font-mono text-[#171412] font-semibold shrink-0">
                      ₹{dish.price}
                    </span>
                  </div>

                  {/* Short Description */}
                  <p className="text-sm text-[#171412]/70 font-light leading-relaxed mb-6 line-clamp-2">
                    {dish.description}
                  </p>
                </div>

                {/* Card Action */}
                <button
                  onClick={() => onAddToCart(dish)}
                  className={`w-full py-3.5 px-6 rounded-full text-xs uppercase tracking-[0.18em] font-medium transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                    inCart > 0
                      ? 'bg-[#171412] text-white'
                      : 'bg-[#9E1B1B] text-white hover:bg-[#851616] active:scale-98 shadow-sm'
                  }`}
                >
                  {inCart > 0 ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>In Basket ({inCart})</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" />
                      <span>Add to Cart</span>
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* Mobile Swipe Cue */}
        <div className="sm:hidden text-center mt-3 text-xs uppercase font-mono tracking-widest text-[#171412]/40">
          ← Swipe to explore signatures →
        </div>

        {/* Bottom Full Menu Link */}
        <div className="mt-14 sm:mt-16 text-center">
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
