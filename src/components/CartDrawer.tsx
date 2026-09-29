import React from 'react';
import { X, Plus, Minus, Trash2, ArrowRight, ShoppingBag, Sparkles, Truck } from 'lucide-react';
import { Product } from '../data/products';

export interface CartItem {
  product: Product;
  quantity: number;
  variant?: string;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onProceedToCheckout: () => void;
  onAddUpsell: (product: Product) => void;
  upsellProducts: Product[];
}

const FREE_DELIVERY_THRESHOLD = 299;

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  onAddUpsell,
  upsellProducts,
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const amountRemaining = Math.max(0, FREE_DELIVERY_THRESHOLD - subtotal);
  const deliveryProgress = Math.min(100, (subtotal / FREE_DELIVERY_THRESHOLD) * 100);
  const deliveryFee = subtotal >= FREE_DELIVERY_THRESHOLD || subtotal === 0 ? 0 : 35;
  const grandTotal = subtotal + deliveryFee;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-fade-in">
      <div 
        className="w-full max-w-md bg-[#FDFBF7] h-full shadow-2xl flex flex-col justify-between border-l border-stone-200 animate-slide-left"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Drawer Header */}
        <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#A61C1C]" />
            <h3 className="text-lg font-bold font-serif-luxury text-stone-900">
              Your Order ({items.reduce((acc, i) => acc + i.quantity, 0)} items)
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Delivery Tracker Bar */}
        <div className="bg-[#FAF7F2] p-3.5 border-b border-stone-200/80">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <div className="flex items-center gap-1.5 font-medium text-stone-800">
              <Truck className="w-3.5 h-3.5 text-[#A61C1C]" />
              {amountRemaining === 0 ? (
                <span className="text-emerald-700 font-semibold">🎉 You unlocked FREE Delivery!</span>
              ) : (
                <span>Add <strong>₹{amountRemaining}</strong> more for <strong>FREE Delivery</strong></span>
              )}
            </div>
            <span className="text-[11px] font-mono text-stone-500 font-medium">{Math.round(deliveryProgress)}%</span>
          </div>

          <div className="w-full h-2 bg-stone-200 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-500 rounded-full ${
                amountRemaining === 0 ? 'bg-emerald-600' : 'bg-[#A61C1C]'
              }`}
              style={{ width: `${deliveryProgress}%` }}
            />
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-stone-500">
              <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mb-4 text-stone-400">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-serif-luxury font-bold text-stone-800">
                Your basket is empty
              </h4>
              <p className="text-xs text-stone-500 mt-1 max-w-xs">
                Explore our homestyle thalis, fresh tea & snacks to add comforting meals to your order.
              </p>
              <button
                onClick={onClose}
                className="mt-6 px-6 py-2.5 rounded-full bg-[#A61C1C] text-white text-xs font-semibold hover:bg-[#8A1515] transition-colors"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <>
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="bg-white p-3.5 rounded-2xl border border-stone-200/80 shadow-xs flex items-center gap-3.5 group"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 rounded-xl object-cover shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-1">
                      <h4 className="text-xs sm:text-sm font-bold text-stone-900 truncate">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-stone-300 hover:text-rose-600 transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {item.variant && (
                      <span className="text-[11px] text-stone-500 font-medium block">
                        {item.variant}
                      </span>
                    )}

                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm font-bold text-stone-900 font-mono">
                        ₹{item.product.price * item.quantity}
                      </span>

                      {/* Stepper */}
                      <div className="flex items-center border border-stone-200 rounded-lg overflow-hidden bg-stone-50">
                        <button
                          onClick={() =>
                            onUpdateQuantity(item.product.id, item.quantity - 1)
                          }
                          className="w-6 h-6 flex items-center justify-center text-stone-600 hover:bg-stone-200"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-stone-900 font-mono">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            onUpdateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="w-6 h-6 flex items-center justify-center text-stone-600 hover:bg-stone-200"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Upsell Carousel */}
              {upsellProducts.length > 0 && (
                <div className="pt-4 border-t border-stone-200">
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#A61C1C] mb-2.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Complete your meal (Quick Add)</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {upsellProducts.slice(0, 2).map((upsell) => (
                      <div
                        key={upsell.id}
                        className="p-2.5 rounded-xl bg-white border border-stone-200/80 flex flex-col justify-between"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <img
                            src={upsell.image}
                            alt={upsell.name}
                            className="w-8 h-8 rounded-lg object-cover"
                          />
                          <div className="min-w-0">
                            <span className="text-[11px] font-semibold text-stone-900 truncate block">
                              {upsell.name}
                            </span>
                            <span className="text-[10px] text-stone-500 font-mono">
                              ₹{upsell.price}
                            </span>
                          </div>
                        </div>

                        <button
                          onClick={() => onAddUpsell(upsell)}
                          className="w-full py-1 text-[11px] font-semibold bg-stone-100 hover:bg-[#A61C1C] hover:text-white rounded-lg transition-colors"
                        >
                          + Add
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Drawer Order Summary & Checkout Trigger */}
        {items.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-stone-200 bg-white space-y-3">
            <div className="space-y-1.5 text-xs text-stone-600">
              <div className="flex justify-between">
                <span>Items Subtotal</span>
                <span className="font-mono text-stone-900 font-semibold">₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span className="font-mono font-semibold">
                  {deliveryFee === 0 ? (
                    <span className="text-emerald-700 font-bold uppercase text-[10px]">FREE</span>
                  ) : (
                    `₹${deliveryFee}`
                  )}
                </span>
              </div>
              <div className="flex justify-between text-sm font-bold text-stone-900 pt-2 border-t border-stone-100">
                <span>Total to Pay</span>
                <span className="text-base text-[#A61C1C] font-mono">₹{grandTotal}</span>
              </div>
            </div>

            <button
              onClick={onProceedToCheckout}
              className="w-full py-3.5 px-4 rounded-xl bg-[#A61C1C] text-white font-semibold text-sm hover:bg-[#8A1515] active:scale-98 transition-all flex items-center justify-between shadow-md"
            >
              <span>Proceed to Checkout</span>
              <div className="flex items-center gap-1 font-mono">
                <span>₹{grandTotal}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
