import React, { useState } from 'react';
import { Plus, Minus, Check, Star, Eye } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  quantityInCart: number;
  onAddToCart: (product: Product, quantity?: number) => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onOpenQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  quantityInCart,
  onAddToCart,
  onUpdateQuantity,
  onOpenQuickView,
}) => {
  const [localQty, setLocalQty] = useState(1);

  const handleIncrement = () => {
    if (quantityInCart > 0) {
      onUpdateQuantity(product.id, quantityInCart + 1);
    } else {
      setLocalQty((prev) => prev + 1);
    }
  };

  const handleDecrement = () => {
    if (quantityInCart > 0) {
      onUpdateQuantity(product.id, quantityInCart - 1);
    } else {
      setLocalQty((prev) => Math.max(1, prev - 1));
    }
  };

  const handleAdd = () => {
    onAddToCart(product, localQty);
  };

  return (
    <div className="group relative bg-white rounded-2xl p-3 sm:p-4 border border-stone-200/70 hover:border-stone-300 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
      
      {/* Top Image Container */}
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 mb-3.5">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Floating Quick View Button on Hover */}
        <button
          onClick={() => onOpenQuickView(product)}
          className="absolute inset-0 m-auto w-10 h-10 bg-white/90 backdrop-blur-md text-stone-800 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg hover:scale-110 active:scale-95"
          title="Quick View"
          aria-label={`Quick view ${product.name}`}
        >
          <Eye className="w-4 h-4 text-stone-700" />
        </button>

        {/* Tag Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 items-start">
          {product.tag && (
            <span
              className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-xs ${
                product.tag === 'BESTSELLER'
                  ? 'bg-amber-500 text-stone-950 font-extrabold'
                  : product.tag === "CHEF'S PICK"
                  ? 'bg-[#A61C1C] text-white'
                  : 'bg-purple-900 text-white'
              }`}
            >
              {product.tag}
            </span>
          )}
        </div>

        {/* Veg / Non-Veg Icon */}
        <div className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-md p-1 rounded-sm shadow-xs border border-stone-200">
          <div
            className={`w-3 h-3 flex items-center justify-center border ${
              product.diet === 'veg' ? 'border-emerald-600' : 'border-rose-700'
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                product.diet === 'veg' ? 'bg-emerald-600' : 'bg-rose-700'
              }`}
            />
          </div>
        </div>

        {/* Weight Pill if available */}
        {product.weights && product.weights[0] && (
          <div className="absolute bottom-2 left-2 bg-stone-900/70 backdrop-blur-sm text-stone-200 text-[10px] px-2 py-0.5 rounded-md font-mono">
            {product.weights[0]}
          </div>
        )}
      </div>

      {/* Product Content Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* Rating and Reviews */}
          <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1">
            <span className="flex items-center text-stone-800 font-semibold text-[11px]">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400 mr-0.5" />
              {product.rating}
            </span>
            <span className="text-stone-300">•</span>
            <span className="text-[11px] text-stone-400">({product.reviewsCount})</span>
            {product.prepTime && (
              <>
                <span className="text-stone-300">•</span>
                <span className="text-[11px] text-stone-400">{product.prepTime}</span>
              </>
            )}
          </div>

          {/* Dish Name */}
          <h3
            onClick={() => onOpenQuickView(product)}
            className="text-base sm:text-lg font-bold font-serif-luxury text-stone-900 group-hover:text-[#A61C1C] transition-colors cursor-pointer leading-snug line-clamp-1"
          >
            {product.name}
          </h3>

          {/* One-Line Evocative Description */}
          <p className="text-xs text-stone-500 mt-1 line-clamp-2 leading-relaxed font-light min-h-[32px]">
            {product.description}
          </p>
        </div>

        {/* Pricing & Interactive Actions */}
        <div className="mt-4 pt-3 border-t border-stone-100 flex flex-col gap-2.5">
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg sm:text-xl font-bold text-stone-900 font-sans-clean">
                ₹{product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-stone-400 line-through">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>

            {/* Stepper control */}
            <div className="flex items-center border border-stone-200 rounded-lg overflow-hidden bg-stone-50/80">
              <button
                onClick={handleDecrement}
                className="w-7 h-7 flex items-center justify-center text-stone-600 hover:text-stone-900 hover:bg-stone-200 transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus className="w-3 h-3" />
              </button>
              <span className="w-7 text-center text-xs font-semibold text-stone-900 font-mono">
                {quantityInCart > 0 ? quantityInCart : localQty}
              </span>
              <button
                onClick={handleIncrement}
                className="w-7 h-7 flex items-center justify-center text-stone-600 hover:text-stone-900 hover:bg-stone-200 transition-colors"
                aria-label="Increase quantity"
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAdd}
            className={`w-full py-2.5 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-200 ${
              quantityInCart > 0
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'bg-[#A61C1C] text-white hover:bg-[#8A1515] active:scale-98 shadow-sm shadow-red-950/10'
            }`}
          >
            {quantityInCart > 0 ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>In Cart ({quantityInCart})</span>
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
  );
};
