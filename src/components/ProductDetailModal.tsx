import React, { useState } from 'react';
import { X, Star, Plus, Minus, ShoppingBag, ShieldCheck, Flame, Clock, Heart, Sparkles, Check } from 'lucide-react';
import { Product } from '../data/products';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number, variant?: string) => void;
  onBuyNow: (product: Product, quantity: number, variant?: string) => void;
  allProducts: Product[];
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onBuyNow,
  allProducts
}) => {
  if (!product) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState<string>(
    product.variants ? product.variants[0] : ''
  );
  const [addedPairings, setAddedPairings] = useState<string[]>([]);

  // Complementary pairings
  const pairings = allProducts
    .filter((p) => p.id !== product.id && (p.category === 'Chai & Beverages' || p.category === 'Desserts' || p.category === 'Chops & Cutlets'))
    .slice(0, 2);

  const handlePairingToggle = (pairingProduct: Product) => {
    if (addedPairings.includes(pairingProduct.id)) {
      setAddedPairings((prev) => prev.filter((id) => id !== pairingProduct.id));
    } else {
      setAddedPairings((prev) => [...prev, pairingProduct.id]);
      onAddToCart(pairingProduct, 1);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div 
        className="relative bg-[#FDFBF7] rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-stone-200 animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md text-stone-700 hover:text-stone-950 hover:bg-white flex items-center justify-center shadow-md transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          
          {/* Left Column: Food Imagery */}
          <div className="md:col-span-6 bg-stone-100 relative min-h-[320px] md:min-h-[480px]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 flex flex-col gap-1.5">
              {product.tag && (
                <span className="bg-[#A61C1C] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                  {product.tag}
                </span>
              )}
              <span className="bg-white/90 backdrop-blur-md text-stone-800 text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                <Flame className="w-3.5 h-3.5 text-amber-500" />
                <span>{product.calories || 'Freshly Prepared'}</span>
              </span>
            </div>

            {/* Diet indicator */}
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm border border-stone-200">
              <span className={`w-2.5 h-2.5 rounded-full ${product.diet === 'veg' ? 'bg-emerald-600' : 'bg-rose-600'}`} />
              <span className="text-xs font-semibold capitalize text-stone-800">{product.diet} Dish</span>
            </div>
          </div>

          {/* Right Column: Detailed Specifications */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-stone-500 mb-1">
                <span>{product.category}</span>
                <span>•</span>
                <span className="flex items-center text-stone-800 font-semibold">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 mr-1" />
                  {product.rating} ({product.reviewsCount} reviews)
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {product.prepTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-stone-900 leading-tight">
                {product.name}
              </h2>

              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-2xl sm:text-3xl font-bold text-stone-900 font-sans-clean">
                  ₹{product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-stone-400 line-through">
                    ₹{product.originalPrice}
                  </span>
                )}
                <span className="text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md font-semibold">
                  Inclusive of all taxes
                </span>
              </div>

              <p className="text-sm text-stone-600 mt-4 leading-relaxed font-light">
                {product.description}
              </p>

              {/* Variant Selector */}
              {product.variants && product.variants.length > 0 && (
                <div className="mt-5">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-700 block mb-2">
                    Select Preparation / Variant
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.map((v) => (
                      <button
                        key={v}
                        onClick={() => setSelectedVariant(v)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                          selectedVariant === v
                            ? 'bg-[#1C1917] text-white shadow-xs'
                            : 'bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-200/80'
                        }`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Ingredients & Prep notes */}
              {product.ingredients && product.ingredients.length > 0 && (
                <div className="mt-5 pt-4 border-t border-stone-200">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                    Homestyle Kitchen Ingredients
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {product.ingredients.map((ing) => (
                      <span key={ing} className="text-xs bg-stone-100 text-stone-700 px-2.5 py-1 rounded-md">
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* "Pairs Well With" Section */}
              {pairings.length > 0 && (
                <div className="mt-6 pt-4 border-t border-stone-200">
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#A61C1C] mb-2.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Make it a Meal (Add Pairings)</span>
                  </div>
                  <div className="space-y-2">
                    {pairings.map((pair) => (
                      <div
                        key={pair.id}
                        className="flex items-center justify-between p-2 rounded-xl bg-white border border-stone-200/80 text-xs"
                      >
                        <div className="flex items-center gap-2.5">
                          <img
                            src={pair.image}
                            alt={pair.name}
                            className="w-10 h-10 rounded-lg object-cover"
                          />
                          <div>
                            <span className="font-semibold text-stone-900 block truncate max-w-[150px] sm:max-w-[200px]">
                              {pair.name}
                            </span>
                            <span className="text-stone-500 font-mono">₹{pair.price}</span>
                          </div>
                        </div>

                        <button
                          onClick={() => handlePairingToggle(pair)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                            addedPairings.includes(pair.id)
                              ? 'bg-emerald-700 text-white'
                              : 'bg-stone-100 text-stone-800 hover:bg-stone-200'
                          }`}
                        >
                          {addedPairings.includes(pair.id) ? 'Added' : '+ Add'}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Actions: Stepper + Add to Cart + Buy Now */}
            <div className="mt-8 pt-4 border-t border-stone-200 space-y-3">
              <div className="flex items-center gap-4">
                {/* Stepper */}
                <div className="flex items-center border border-stone-300 rounded-xl overflow-hidden bg-white shadow-xs">
                  <button
                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                    className="w-10 h-10 flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-10 text-center text-sm font-bold text-stone-900 font-mono">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="w-10 h-10 flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Primary Add CTA */}
                <button
                  onClick={() => {
                    onAddToCart(product, quantity, selectedVariant);
                    onClose();
                  }}
                  className="flex-1 py-3.5 px-6 rounded-xl bg-[#A61C1C] text-white font-semibold text-sm shadow-md hover:bg-[#8A1515] active:scale-98 transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Cart (₹{product.price * quantity})</span>
                </button>
              </div>

              <button
                onClick={() => {
                  onBuyNow(product, quantity, selectedVariant);
                  onClose();
                }}
                className="w-full py-3 rounded-xl bg-stone-900 text-white font-semibold text-xs uppercase tracking-wider hover:bg-stone-800 transition-colors"
              >
                Instant Checkout
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
