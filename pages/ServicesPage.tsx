
import React from 'react';
import { Bed, Utensils, Users, Info, ArrowRight, ShieldCheck, Clock, Wifi } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, BUSINESS_INFO, GALLERY } from '../constants';

const ServicesPage: React.FC = () => {
  // Map specific service IDs to real image URLs from our gallery
  const getServiceImage = (id: string) => {
    switch (id) {
      case '1': return 'https://lh3.googleusercontent.com/p/AF1QipPQn7QAtUuYBajyMttsMWCSoPOOXJZHcCEnxOge=w800-h600-p-k-no'; // Rooms
      case '2': return 'https://lh3.googleusercontent.com/p/AF1QipMOqdSc6GdauddKZ9zMrc6njfeyCToGa6E47uer=w800-h600-p-k-no'; // Restro
      case '3': return 'https://lh3.googleusercontent.com/p/AF1QipPsRNQ2Qjy36IeVanjRPqf2HYw0l7cVXq4hshHJ=w800-h600-p-k-no'; // Banquet/Entrance
      default: return 'https://lh3.googleusercontent.com/p/AF1QipPp7DBJK1ZDUQiBFYuA2cpuJ_RgvvLdnvlzvOC7=w800-h600-p-k-no';
    }
  };

  return (
    <div className="py-20 bg-slate-50 space-y-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h1 className="text-5xl font-serif font-bold text-slate-900">Our Services & Facilities</h1>
        <p className="text-slate-500 max-w-2xl mx-auto">Explore the range of high-end hospitality services we offer at Royal Palace.</p>
      </section>

      {/* Main Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-slate-100 flex flex-col group">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={getServiceImage(service.id)} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  alt={service.title} 
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-slate-900 shadow-lg">
                  {service.price}
                </div>
              </div>
              <div className="p-8 space-y-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-serif font-bold text-slate-900">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-grow">{service.description}</p>
                <div className="pt-6 border-t border-slate-50">
                  <Link 
                    to="/booking" 
                    className="flex items-center gap-2 text-amber-600 font-bold hover:gap-4 transition-all"
                  >
                    Inquire Now <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Amenities Detail */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-4xl font-serif font-bold text-slate-900">Designed for your Comfort</h2>
                <p className="text-slate-600">We provide all essential amenities to make your stay effortless.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 shrink-0">
                    <Wifi className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">High-Speed Wi-Fi</h4>
                    <p className="text-xs text-slate-500">Free unlimited internet for all our guests.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Secure Environment</h4>
                    <p className="text-xs text-slate-500">24/7 CCTV and professional security personnel.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">24/7 Front Desk</h4>
                    <p className="text-xs text-slate-500">Check-in assistance and guest services anytime.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 shrink-0">
                    <Utensils className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Full Service Dining</h4>
                    <p className="text-xs text-slate-500">Room service and on-site restaurant facilities.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl rotate-2">
                <img 
                  src="https://lh3.googleusercontent.com/p/AF1QipODx-snhtEy0U7Cjkybx3qhnHig5g65GAukhBEE=w800-h1000-p-k-no" 
                  alt="Comfort & Amenities" 
                />
              </div>
              <div className="absolute top-1/2 -right-10 transform -translate-y-1/2 p-8 bg-slate-900 text-white rounded-3xl shadow-2xl max-w-[240px] hidden md:block">
                <p className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-2">Notice</p>
                <p className="text-sm italic font-serif">"Our Banquet Hall booking requires a ₹10,000 advance to confirm your dates."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Room Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
         <div className="bg-slate-900 rounded-3xl p-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-serif font-bold text-white">Room Pricing</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-4 border-b border-white/10">
                    <span className="text-slate-400">Standard Non-AC Room</span>
                    <span className="text-amber-500 font-bold">₹1,499</span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b border-white/10">
                    <span className="text-slate-400">Deluxe AC Room</span>
                    <span className="text-amber-500 font-bold">₹1,999</span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b border-white/10">
                    <span className="text-slate-400">Premium Suite</span>
                    <span className="text-amber-500 font-bold">₹2,999</span>
                  </div>
                </div>
                <p className="text-slate-500 text-xs italic">* All prices are per night and exclude GST. Group booking discounts available.</p>
              </div>
              <div className="bg-white/5 rounded-3xl p-8 border border-white/10 text-center space-y-6">
                 <h3 className="text-2xl font-bold text-white">Need a Quote?</h3>
                 <p className="text-slate-400 text-sm">Planning a banquet event or corporate stay? Contact our sales team for custom pricing.</p>
                 <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-block bg-amber-600 text-white px-10 py-4 rounded-full font-bold hover:bg-amber-700 transition-all">
                   Call +91 87639 39039
                 </a>
              </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default ServicesPage;
