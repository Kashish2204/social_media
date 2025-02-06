
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Here, you would call your logout API or clear local storage
    localStorage.removeItem('authToken'); // Example if you're using localStorage
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Logging out...</h2>
        <button 
          onClick={handleLogout} 
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Logout Now
        </button>
      </div>
    </div>
  );
};

export default Logout;