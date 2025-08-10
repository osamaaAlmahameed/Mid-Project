import React, { useState } from "react";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-8 animate-fadeIn">
        {/* Logo / Title */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white tracking-wide">Welcome Back</h1>
          <p className="text-sm text-gray-300 mt-2">Login to continue your journey</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg bg-white/5 text-white border border-white/20 focus:border-blue-400 focus:ring focus:ring-blue-500/30 outline-none transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg bg-white/5 text-white border border-white/20 focus:border-blue-400 focus:ring focus:ring-blue-500/30 outline-none transition"
              required
            />
          </div>

          {/* Remember Me + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-gray-300">
              <input type="checkbox" className="mr-2 accent-blue-500" />
              Remember me
            </label>
            <button type="button" className="text-blue-400 hover:underline">
              Forgot password?
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg shadow-blue-500/30 font-semibold transition-all duration-300 transform hover:scale-[1.02]"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-white/20"></div>
          <span className="px-4 text-gray-400 text-sm">or</span>
          <div className="flex-1 h-px bg-white/20"></div>
        </div>

        {/* Social Login */}
        <div className="flex gap-4">
          <button className="flex-1 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg border border-white/20 transition">
            Google
          </button>
          <button className="flex-1 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg border border-white/20 transition">
            Facebook
          </button>
        </div>

        {/* Sign Up */}
        <p className="text-center text-gray-300 text-sm mt-6">
          Don’t have an account?{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
