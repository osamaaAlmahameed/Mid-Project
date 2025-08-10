
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/icon.png';

export default function InnerHeader(){
  const navigate = useNavigate();
  return (
    <header className="bg-[#0c0c1d] text-white shadow-md fixed left-0 right-0 z-50 shadow-md shadow-blue-500">
      <div className="flex justify-between items-center px-6 py-3 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-8 h-8 object-contain" />
            <span className="font-bold">Zestory</span>
          </Link>
        </div>

        <nav className="flex gap-4 ">
          <button onClick={() => navigate(-1)} className="px-4 rounded py-1 bg-blue-500 hover:bg-blue-800 transition">Back</button>
        </nav>
      </div>
    </header>
  );
}
