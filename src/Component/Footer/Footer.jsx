import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#F0FDF4] text-gray-700 py-6 mt-10 shadow-inner fixed bottom-0 right-0 left-0">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left side - Copyright */}
        <div className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} FreshCart. All rights reserved.
        </div>

        {/* Right side - Links */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-green-600">Privacy Policy</a>
          <a href="#" className="hover:text-green-600">Terms of Service</a>
          <a href="#" className="hover:text-green-600">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}

