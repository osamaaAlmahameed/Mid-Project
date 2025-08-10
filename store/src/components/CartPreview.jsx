
import React from 'react';

const CartPreview = ({ cartItems }) => {
  return (
    <div className="mt-12 max-w-6xl mx-auto px-6 text-white">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-[#1f1f2e] p-4 rounded border border-[#505DD4]"
            >
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-300">Quantity: {item.quantity}</p>
              </div>
              <span className="text-lg font-bold">${item.price}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPreview;
