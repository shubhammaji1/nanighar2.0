import React, { useState, useMemo } from 'react';
import { MinimalHeader } from './components/MinimalHeader';
import { HeroHome } from './components/HeroHome';
import { BrandStatement } from './components/BrandStatement';
import { SignaturesSection } from './components/SignaturesSection';
import { BrandStorySection } from './components/BrandStorySection';
import { FinalCTASection } from './components/FinalCTASection';
import { FooterSection } from './components/FooterSection';
import { MenuPage } from './components/MenuPage';
import { LuxuryCartDrawer, CartItem } from './components/LuxuryCartDrawer';
import { SearchModal } from './components/SearchModal';
import { CheckoutModal } from './components/CheckoutModal';
import { PRODUCTS, Product } from './data/products';
import { ArrowRight } from 'lucide-react';

export const App: React.FC = () => {
  // Navigation View: 'home' or 'menu'
  const [currentView, setCurrentView] = useState<'home' | 'menu'>('home');

  // Menu filtering & search
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'recommended' | 'price-asc' | 'price-desc' | 'rating'>('recommended');

  // Modals & Drawers
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);

  // Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: PRODUCTS[0], // Moha Egg Thali
      quantity: 1,
    }
  ]);

  // Cart operations
  const handleAddToCart = (product: Product, quantity = 1) => {
    setCartItems((prev) => {
      const idx = prev.findIndex((item) => item.product.id === product.id);
      if (idx > -1) {
        const next = [...prev];
        next[idx] = { ...next[idx], quantity: next[idx].quantity + quantity };
        return next;
      }
      return [...prev, { product, quantity }];
    });
    setCartDrawerOpen(true);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const cartItemIdsMap = useMemo(() => {
    const map: Record<string, number> = {};
    cartItems.forEach((i) => {
      map[i.product.id] = i.quantity;
    });
    return map;
  }, [cartItems]);

  const totalCartCount = useMemo(() => {
    return cartItems.reduce((acc, i) => acc + i.quantity, 0);
  }, [cartItems]);

  const totalCartSubtotal = useMemo(() => {
    return cartItems.reduce((acc, i) => acc + i.product.price * i.quantity, 0);
  }, [cartItems]);

  // Filtered products for full catalog
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      if (activeCategory !== 'All' && p.category !== activeCategory) {
        return false;
      }
      if (
        searchQuery &&
        !p.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !p.description.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return (b.reviewsCount || 0) - (a.reviewsCount || 0);
    });
  }, [activeCategory, searchQuery, sortBy]);

  const navigateToMenu = (category?: string) => {
    if (category) setActiveCategory(category);
    setCurrentView('menu');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FBF8F3] text-[#171412] flex flex-col font-ui selection:bg-[#9E1B1B]/15 selection:text-[#9E1B1B]">
      
      {/* 1. Header */}
      <MinimalHeader
        cartCount={totalCartCount}
        currentView={currentView}
        onNavigate={(view) => {
          if (view === 'menu') navigateToMenu();
          else navigateToHome();
        }}
        onOpenCart={() => setCartDrawerOpen(true)}
        onOpenSearch={() => setSearchModalOpen(true)}
      />

      <main className="flex-1">
        {currentView === 'home' ? (
          <>
            {/* 2. Cinematic Hero */}
            <HeroHome onExploreMenu={() => navigateToMenu()} />

            {/* 3. Short Brand Statement */}
            <BrandStatement />

            {/* 4. Signature Dishes (1 large + 2 supporting) */}
            <SignaturesSection
              products={PRODUCTS}
              onAddToCart={handleAddToCart}
              onExploreFullMenu={() => navigateToMenu()}
              cartItemIds={cartItemIdsMap}
            />

            {/* 5. One Brand Story Section */}
            <BrandStorySection />

            {/* 6. Final CTA */}
            <FinalCTASection onExploreMenu={() => navigateToMenu()} />
          </>
        ) : (
          /* Separate /menu Page */
          <MenuPage
            products={filteredProducts}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            sortBy={sortBy}
            onSortChange={setSortBy}
            onAddToCart={handleAddToCart}
            onUpdateQuantity={handleUpdateQuantity}
            cartItemIds={cartItemIdsMap}
            onReturnHome={navigateToHome}
          />
        )}
      </main>

      {/* 7. Footer */}
      <FooterSection
        onNavigateMenu={() => navigateToMenu()}
        onNavigateStory={() => {
          if (currentView !== 'home') setCurrentView('home');
          setTimeout(() => {
            document.getElementById('brand-story')?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }}
      />

      {/* Mobile Sticky Bottom Cart Summary */}
      {totalCartCount > 0 && (
        <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#171412] text-white px-6 py-4.5 border-t border-white/10 flex items-center justify-between shadow-2xl">
          <div>
            <span className="text-xs uppercase tracking-widest text-stone-300 block">
              {totalCartCount} {totalCartCount === 1 ? 'dish' : 'dishes'} in order
            </span>
            <span className="font-mono text-base font-medium text-white">
              ₹{totalCartSubtotal}
            </span>
          </div>

          <button
            onClick={() => setCartDrawerOpen(true)}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#9E1B1B] text-white text-xs uppercase tracking-widest font-semibold"
          >
            <span>View Basket</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Luxury Cart Drawer */}
      <LuxuryCartDrawer
        isOpen={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={() => {
          setCartDrawerOpen(false);
          setCheckoutModalOpen(true);
        }}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        products={PRODUCTS}
        onSelectProduct={(p) => {
          handleAddToCart(p);
          setSearchModalOpen(false);
        }}
        onAddToCart={handleAddToCart}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={checkoutModalOpen}
        onClose={() => setCheckoutModalOpen(false)}
        items={cartItems}
        onOrderSuccess={() => {
          setCartItems([]);
          setCheckoutModalOpen(false);
        }}
      />

    </div>
  );
};

export default App;
