
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 overflow-hidden rounded-xl border border-white/10 shadow-lg">
                <img 
                  src={BUSINESS_INFO.logoUrl} 
                  alt="Royal Palace Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-serif font-bold text-white tracking-tight uppercase">Royal Palace</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              A relaxed hotel with a glass facade, perfectly located near Bargarh Road train station. Experience luxury and fine dining in the heart of Odisha.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-amber-600 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-amber-600 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-amber-600 transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-bold tracking-wider uppercase text-xs">Quick Navigation</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-amber-500 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-amber-500 transition-colors">Our Services</Link></li>
              <li><Link to="/booking" className="hover:text-amber-500 transition-colors">Book a Stay</Link></li>
              <li><Link to="/gallery" className="hover:text-amber-500 transition-colors">Photo Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-amber-500 transition-colors">Contact & Support</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-white font-bold tracking-wider uppercase text-xs">Reach Us</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-600 shrink-0" />
                <p>{BUSINESS_INFO.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-600" />
                <p>{BUSINESS_INFO.phone}</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-600" />
                <p>{BUSINESS_INFO.email}</p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-6">
            <h4 className="text-white font-bold tracking-wider uppercase text-xs">Front Desk Hours</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-slate-800">
                <span>Check-in</span>
                <span className="text-white font-medium">{BUSINESS_INFO.checkIn}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-800">
                <span>Check-out</span>
                <span className="text-white font-medium">{BUSINESS_INFO.checkOut}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span>Services</span>
                <span className="text-amber-500 font-bold uppercase text-[10px]">24 Hours Open</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Royal Palace Hotel & Restro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
