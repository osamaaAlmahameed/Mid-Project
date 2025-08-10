// src/pages/Registration.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Registration() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.password) {
      setError("Please fill all fields");
      return;
    }
    if (formData.password !== formData.password_confirmation) {
      setError("Passwords do not match");
      return;
    }

    // Simulate saving user (replace with real API)
    localStorage.setItem("user", JSON.stringify(formData));
    alert("Registration successful!");
    navigate("/"); // Redirect to homepage
  };

  return (
    <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div>
        <a href="/">
          <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
            Logo
          </h3>
        </a>
      </div>
      <div className="w-full px-6 py-8 mt-6 overflow-hidden bg-gray-800/80 shadow-2xl sm:max-w-md sm:rounded-xl border border-gray-700 backdrop-blur-md">
        {error && <p className="mb-4 text-red-400">{error}</p>}

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
              className="mt-1 w-full rounded-md border border-gray-600 bg-gray-900 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none px-3 py-2 transition"
            />
          </div>

          {/* Email */}
          <div className="mt-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              className="mt-1 w-full rounded-md border border-gray-600 bg-gray-900 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500 px-3 py-2 transition"
            />
          </div>

          {/* Password */}
          <div className="mt-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={formData.password}
              className="mt-1 w-full rounded-md border border-gray-600 bg-gray-900 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500 px-3 py-2 transition"
            />
          </div>

          {/* Confirm Password */}
          <div className="mt-4">
            <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-300">
              Confirm Password
            </label>
            <input
              type="password"
              name="password_confirmation"
              onChange={handleChange}
              value={formData.password_confirmation}
              className="mt-1 w-full rounded-md border border-gray-600 bg-gray-900 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500 px-3 py-2 transition"
            />
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between mt-6">
            <a className="text-sm text-purple-400 hover:text-purple-300 transition" href="/login">
              Already registered?
            </a>
            <button
              type="submit"
              className="px-5 py-2 text-sm font-semibold tracking-wide uppercase rounded-md bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 hover:from-purple-500 hover:to-pink-400 transition duration-300 shadow-lg hover:shadow-pink-500/50"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
