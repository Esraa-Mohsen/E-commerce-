import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#D0FAE5] text-center px-6">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
        alt="404 Not Found"
        className="w-48 h-48 mb-6"
      />
      <h1 className="text-4xl font-bold text-gray-700 mb-2">404 - Page Not Found</h1>
      <p className="text-gray-600 text-lg mb-6">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition duration-300"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;

