import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AccountPage = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { register, login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    try {
      if (activeTab === 'register') {
        register(formData.name, formData.email, formData.password);
      } else {
        login(formData.email, formData.password);
      }
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="flex border-b border-gray-700">
          <button
            className={`flex-1 py-4 font-medium ${
              activeTab === 'login' 
                ? 'text-blue-400 border-b-2 border-blue-400' 
                : 'text-gray-400'
            }`}
            onClick={() => {
              setActiveTab('login');
              setError('');
            }}
          >
            Login
          </button>
          <button
            className={`flex-1 py-4 font-medium ${
              activeTab === 'register' 
                ? 'text-blue-400 border-b-2 border-blue-400' 
                : 'text-gray-400'
            }`}
            onClick={() => {
              setActiveTab('register');
              setError('');
            }}
          >
            Register
          </button>
        </div>

        <div className="p-6">
          {error && (
            <div className="mb-4 p-3 bg-red-900 text-red-100 rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {activeTab === 'register' && (
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded"
                  required
                />
              </div>
            )}
            
            <div>
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded"
                required
              />
            </div>
            
            <div>
              <input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded"
                required
                minLength="6"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition"
            >
              {activeTab === 'login' ? 'Sign In' : 'Create Account'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;