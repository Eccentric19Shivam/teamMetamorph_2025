import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900/95 fixed w-full z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                src="/public/logo.png" 
                alt="Team Metamorph Logo" 
                className="h-10 w-auto"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#team" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</a>
                <a href="#events" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Events</a>
                <a href="#achievements" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Achievements</a>
                <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#team" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>
            <a href="#events" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Events</a>
            <a href="#achievements" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Achievements</a>
            <a href="#contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;