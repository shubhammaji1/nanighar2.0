import React from 'react';
import { X, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import { Product } from '../data/products';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface LuxuryCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onProceedToCheckout: () => void;
}

const FREE_DELIVERY_THRESHOLD = 299;

export const LuxuryCartDrawer: React.FC<LuxuryCartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
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
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs flex justify-end animate-editorial-fade">
      <div 
        className="w-full max-w-md bg-[#FBF8F3] h-full shadow-2xl flex flex-col justify-between border-l border-[#171412]/10"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-6 border-b border-[#171412]/8 flex items-center justify-between bg-white">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#9E1B1B] font-semibold block">
              Your Selection
            </span>
            <h3 className="text-xl font-editorial font-normal text-[#171412]">
              Order Basket ({items.reduce((acc, i) => acc + i.quantity, 0)})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#171412]/40 hover:text-[#171412] rounded-full transition-colors"
            aria-label="Close basket"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>

        {/* Free Delivery Bar */}
        <div className="px-6 py-4 bg-[#F5EFEB] border-b border-[#171412]/8">
          <div className="flex items-center justify-between text-xs text-[#171412]/70 mb-2">
            <span>
              {amountRemaining === 0 ? (
                <strong className="text-[#171412] font-medium">Free Delivery Unlocked</strong>
              ) : (
                <span>Add <strong>₹{amountRemaining}</strong> more for free delivery</span>
              )}
            </span>
            <span className="font-mono text-[11px]">{Math.round(deliveryProgress)}%</span>
          </div>
          <div className="w-full h-1.5 bg-[#171412]/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#9E1B1B] transition-all duration-500 rounded-full"
              style={{ width: `${deliveryProgress}%` }}
            />
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-stone-500">
              <p className="font-editorial text-2xl text-[#171412] italic">
                Your basket is empty
              </p>
              <p className="text-xs text-[#171412]/60 mt-2 max-w-xs font-light">
                Explore our daily homestyle menu and experience genuine home cooking.
              </p>
              <button
                onClick={onClose}
                className="mt-6 px-6 py-2.5 rounded-full bg-[#171412] text-white text-xs uppercase tracking-widest font-medium"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.product.id}
                className="p-4 rounded-xl bg-white border border-[#171412]/6 flex items-center gap-4"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-16 h-16 rounded-lg object-cover shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-1">
                    <h4 className="text-sm font-editorial font-normal text-[#171412] truncate text-base">
                      {item.product.name}
                    </h4>
                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="text-[#171412]/30 hover:text-[#9E1B1B] transition-colors p-1"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <span className="text-sm font-mono font-medium text-[#171412]">
                      ₹{item.product.price * item.quantity}
                    </span>

                    {/* Stepper */}
                    <div className="flex items-center border border-[#171412]/20 rounded-full overflow-hidden bg-stone-50">
                      <button
                        onClick={() =>
                          onUpdateQuantity(item.product.id, item.quantity - 1)
                        }
                        className="w-6 h-6 flex items-center justify-center text-[#171412]/70 hover:bg-stone-200"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-6 text-center text-xs font-mono font-medium text-[#171412]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          onUpdateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="w-6 h-6 flex items-center justify-center text-[#171412]/70 hover:bg-stone-200"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-[#171412]/8 bg-white space-y-4">
            <div className="space-y-2 text-xs text-[#171412]/70">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-mono text-[#171412]">₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery</span>
                <span className="font-mono">
                  {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}
                </span>
              </div>
              <div className="flex justify-between text-sm font-medium text-[#171412] pt-2 border-t border-stone-100">
                <span>Total</span>
                <span className="font-mono text-base text-[#9E1B1B]">₹{grandTotal}</span>
              </div>
            </div>

            <button
              onClick={onProceedToCheckout}
              className="w-full py-4 rounded-full bg-[#9E1B1B] text-white text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#851616] active:scale-98 transition-all flex items-center justify-center gap-2"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4 stroke-[1.5]" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
