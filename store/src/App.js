import React, { useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomeHeader from "./components/HomeHeader";
import InnerHeader from "./components/InnerHeader";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import CategoryPage from "./pages/CategoryPage";
import SearchPage from "./pages/SearchPage";
import CartPage from "./pages/CartPage";
import AccountPage from "./pages/AccountPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { CartProvider } from "./context/CartContext";
import { CartContext } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div className="font-sans bg-black text-white flex flex-col min-h-screen">
      {/* Conditional Header Rendering */}
      {isHome ? (
        <HomeHeader cartCount={cartItems.length} />
      ) : (
        <InnerHeader cartCount={cartItems.length} />
      )}

      <div className="pt-20 flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <ProductGrid addToCart={addToCart} />
                <ContactForm />
              </>
            }
          />
          <Route path="/search" element={<SearchPage addToCart={addToCart} />} />
          <Route
            path="/products/:category"
            element={<CategoryPage addToCart={addToCart} />}
          />
          <Route path="/contact" element={<ContactForm />} />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <CartPage
                  cartItems={cartItems}
                  removeFromCart={removeFromCart}
                />
              </ProtectedRoute>
            }
          />
          <Route path="/account" element={<AccountPage />} />
          
          {/* 404 Route */}
          <Route path="*" element={
            <div className="flex flex-col items-center justify-center h-full">
              <h1 className="text-4xl font-bold mb-4">404</h1>
              <p className="text-xl">Page not found</p>
            </div>
          } />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;