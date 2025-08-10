import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import emailjs from "@emailjs/browser";

function CartPage() {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [isSending, setIsSending] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const handleConfirmOrder = async () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    setIsSending(true);

    // Format the product list
    const productList = cartItems
      .map(
        (item, index) =>
          `${index + 1}- ${item.title} | Price: $${item.price} | Quantity: ${
            item.quantity
          }`
      )
      .join("\n");

    // Get user location
    let locationInfo = "Unknown";
    try {
      const res = await fetch("https://ipapi.co/json/");
      const data = await res.json();
      locationInfo = `${data.city}, ${data.country_name}`;
    } catch (error) {
      console.error("Could not get location:", error);
    }

    const templateParams = {
      cart_details: productList,
      total_price: cartItems
        .reduce((total, item) => total + item.price * item.quantity, 0)
        .toFixed(2),
      location: locationInfo,
    };

    emailjs
      .send(
        "service_k85ojuo", //  Service ID
        "template_alq8tfi", //  Template ID
        templateParams,
        "RvXcvqi_HUrJFCcLi" //  Public Key
      )
      .then(() => {
        setIsSending(false);
        setMessageSent(true);
        alert("Order details sent ");
      })
      .catch((error) => {
        setIsSending(false);
        console.error("Error sending email:", error);
        alert("Failed to send order ");
      });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center bg-gray-800 p-4 rounded-lg"
              >
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 text-lg font-semibold">
            Total: $
            {cartItems
              .reduce((total, item) => total + item.price * item.quantity, 0)
              .toFixed(2)}
          </div>

          <button
            onClick={handleConfirmOrder}
            disabled={isSending}
            className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg"
          >
            {isSending ? "Sending..." : "Confirm Order"}
          </button>

          {messageSent && (
            <p className="mt-3 text-green-400"> Order sent successfully</p>
          )}
        </>
      )}
    </div>
  );
}

export default CartPage;
