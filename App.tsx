
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Phone, MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import BookingPage from './pages/BookingPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import { BUSINESS_INFO } from './constants';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />

        {/* Sticky Call-to-Actions for Mobile */}
        <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
          <a 
            href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace('+', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-emerald-600 transition-all hover:scale-110"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-7 h-7" />
          </a>
          <a 
            href={`tel:${BUSINESS_INFO.phone}`}
            className="w-14 h-14 bg-amber-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-amber-700 transition-all hover:scale-110"
            title="Call Us Now"
          >
            <Phone className="w-7 h-7" />
          </a>
        </div>
      </div>
    </Router>
  );
};

export default App;
