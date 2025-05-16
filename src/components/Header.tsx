
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-4 px-6 md:px-10 lg:px-20 relative z-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="font-bold text-2xl">MUSIC SHOW</span>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-white font-medium uppercase hover:text-purple-400">Home</a>
          <a href="#event" className="text-white font-medium uppercase hover:text-purple-400">Event</a>
          <a href="#artist" className="text-white font-medium uppercase hover:text-purple-400">Artist</a>
          <a href="#tickets" className="text-white font-medium uppercase hover:text-purple-400">Tickets</a>
        </nav>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-3 bg-black border-t border-gray-800 p-4">
          <a href="#" className="text-white font-medium uppercase">Home</a>
          <a href="#event" className="text-white font-medium uppercase">Event</a>
          <a href="#artist" className="text-white font-medium uppercase">Artist</a>
          <a href="#tickets" className="text-white font-medium uppercase">Tickets</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
