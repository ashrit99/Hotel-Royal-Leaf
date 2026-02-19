import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { BUSINESS_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center shrink-0">
            <Link to="/" className="flex items-center gap-2 md:gap-3 group">
              <div className="w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-xl border border-slate-100 shadow-sm group-hover:shadow-md transition-all">
                <img 
                  src={BUSINESS_INFO.logoUrl} 
                  alt="Royal Palace Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base md:text-xl font-serif font-bold tracking-tight text-slate-900 leading-none">ROYAL PALACE</span>
                <span className="text-[8px] md:text-xs font-semibold text-amber-600 tracking-widest uppercase">Hotel & Restro</span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-amber-600 ${
                  isActive(link.path) ? 'text-amber-600' : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/booking"
              className="bg-slate-900 text-white px-5 lg:px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 animate-in slide-in-from-top duration-300 absolute w-full left-0 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 text-base font-medium rounded-md transition-all ${
                  isActive(link.path) ? 'bg-amber-50 text-amber-600' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-3 pt-4">
              <Link
                to="/booking"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-slate-900 text-white px-6 py-4 rounded-xl font-bold shadow-md hover:bg-slate-800"
              >
                Book My Stay
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;