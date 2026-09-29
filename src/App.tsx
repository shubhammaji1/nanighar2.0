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

  // Cart state (empty by default, slides up when items are added)
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

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

      {/* Floating Bottom Basket Bar (slides up smoothly when items are added) */}
      <div 
        className={`fixed bottom-5 inset-x-4 sm:inset-x-auto sm:right-8 z-40 flex justify-center pointer-events-none transition-all duration-500 ease-out transform ${
          totalCartCount > 0 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-20 opacity-0 pointer-events-none'
        }`}
      >
        <button
          onClick={() => setCartDrawerOpen(true)}
          className="pointer-events-auto flex items-center justify-between gap-6 px-6 py-3.5 sm:py-4 rounded-full bg-[#171412] text-white shadow-[0_16px_36px_rgba(0,0,0,0.35)] border border-white/15 hover:bg-[#221F1D] active:scale-98 transition-all cursor-pointer w-full max-w-sm"
        >
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-mono tracking-wider text-stone-200">
              {totalCartCount} {totalCartCount === 1 ? 'item' : 'items'} · ₹{totalCartSubtotal}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] font-semibold text-[#E25C5C] hover:text-white transition-colors">
            <span>View Basket</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </button>
      </div>

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
