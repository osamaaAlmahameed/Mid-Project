import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const SearchPage = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase())
        );
        setProducts(filtered);
      });
  }, [query]);

  const handleAdd = (product) => {
    const confirmAdd = window.confirm(`Do you want to add "${product.title}" to your cart?`);
    if (confirmAdd) {
      addToCart(product);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Search Results for "{query}"</h1>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[#11112a] p-4 rounded-lg shadow-lg flex flex-col"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-48 object-contain mb-4 bg-white rounded"
              />
              <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
              <p className="mb-4">${product.price.toFixed(2)}</p>
              <button
                onClick={() => handleAdd(product)}
                className="bg-blue-600 hover:bg-blue-800 py-2 px-4 rounded mt-auto"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
