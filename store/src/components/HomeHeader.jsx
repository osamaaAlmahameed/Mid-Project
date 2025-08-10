import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import logo from '../assets/icon.png'; // Ensure this path is correct

const HomeHeader = ({ cartCount = 0 }) => { // Default value for cartCount
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useContext(AuthContext) || {}; // Fallback for undefined context

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query?.trim()) return; // Null check
    navigate(`/search?q=${encodeURIComponent(query)}`);
    setQuery('');
    window.scrollTo(0, 0);
  };

  // Fallback UI if critical data is missing
  if (!logo) {
    console.error('Logo image not found at ../assets/icon.png');
  }

  return (
    <header className="bg-[#0c0c1d] text-white shadow-md shadow-blue-600 fixed left-0 right-0 z-50">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo + Title - with error boundary */}
        <Link to="/" className="flex items-center gap-2">
          {logo ? (
            <img 
              src={logo} 
              alt="Store Logo" 
              className="w-8 h-8 object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDJDNi40NzcgMiAyIDYuNDc3IDIgMTJzNC40NzcgMTAgMTAgMTAgMTAtNC40NzcgMTAtMTBTMTcuNTIzIDIgMTIgMnptMCAyYzQuNDE4IDAgOCAzLjU4MiA4IDhzLTMuNTgyIDgtOCA4LTgtMy41ODItOC04IDMuNTgyLTggOC04eiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=';
              }}
            />
          ) : (
            <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
              <span className="text-xs">Logo</span>
            </div>
          )}
          <h1 className="text-2xl font-bold">Zestory</h1>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6">
          <a href="#Product" className="hover:underline">Products</a>
          <a href="#Contact" className="hover:underline">Contact</a>
        </nav>

        {/* Search and Auth Section */}
        <div className="flex items-center gap-4">
          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              type="text"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="px-3 py-1 rounded text-gray-800 w-40 sm:w-48 md:w-56"
            />
            <button 
              type="submit" 
              className="px-3 py-1 rounded bg-blue-600 hover:bg-blue-700 transition"
            >
              Search
            </button>
          </form>

          {/* Auth Section */}
          <div className="flex items-center gap-3 ml-2">
            {isAuthenticated ? (
              <>
                <span className="hidden sm:inline text-sm text-gray-300">
                  Hi, {user?.name || 'User'}
                </span>
                <button
                  onClick={logout}
                  className="text-sm hover:underline"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link 
                to="/account" 
                className="hover:underline text-sm"
              >
                Account
              </Link>
            )}

            <Link 
              to="/cart" 
              className="relative hover:underline flex items-center"
              aria-label="Shopping Cart"
            >
              <span className="mr-1">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;