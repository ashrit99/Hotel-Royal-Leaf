
import React from 'react';
import { MapPin, Train, Landmark, Building2, Clock, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const AboutPage: React.FC = () => {
  return (
    <div className="py-20 space-y-24">
      {/* Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-in slide-in-from-left duration-700">
            <div className="space-y-4">
              <h1 className="text-5xl font-serif font-bold text-slate-900">About Royal Palace</h1>
              <div className="h-1.5 w-24 bg-amber-600 rounded-full"></div>
            </div>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Set on a vibrant side street in the heart of Bargarh, Royal Palace Hotel & Restro is a landmark of relaxed luxury. Known for its iconic glass facade, our property has recently undergone a major transformation to offer guests the most modern facilities in the region.
              </p>
              <p>
                We take pride in our prime location and our commitment to serving every guest with a "Home away from Home" feeling. Whether you're a solo traveler, here with family, or organizing a grand function, we provide the perfect backdrop for your needs.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-3">
                <Clock className="w-5 h-5 text-amber-600" />
                <span className="text-sm font-bold">24-Hr Service</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600" />
                <span className="text-sm font-bold">Newly Renovated</span>
              </div>
            </div>
          </div>
          <div className="relative animate-in slide-in-from-right duration-700">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://lh3.googleusercontent.com/p/AF1QipPp7DBJK1ZDUQiBFYuA2cpuJ_RgvvLdnvlzvOC7=w800-h800-p-k-no" 
                alt="Royal Palace Hotel Facade" 
                className="w-full h-auto" 
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[200px]">
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">Established</p>
              <p className="text-2xl font-bold text-slate-900 font-serif">A Legacy of Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Highlights */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-serif font-bold">Strategic Location</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Connected to the pulse of Bargarh, making your travel seamless.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4 p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Train className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Railway Station</h3>
              <p className="text-slate-400 text-sm">Just a 7-minute walk (500m) from Bargarh Road Train Station.</p>
            </div>
            <div className="text-center space-y-4 p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Landmark className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Spiritual Hubs</h3>
              <p className="text-slate-400 text-sm">2 km from the famous Kali Mandir Hindu temple.</p>
            </div>
            <div className="text-center space-y-4 p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Bargarh Fort</h3>
              <p className="text-slate-400 text-sm">4 km drive to explore the historical Bargarh Fort.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Direction Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          <div className="p-12 space-y-8">
            <h2 className="text-3xl font-serif font-bold text-slate-900">How to Find Us</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-amber-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-1">Official Address</h4>
                  <p className="text-slate-600">{BUSINESS_INFO.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-amber-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-1">Timing Guidelines</h4>
                  <p className="text-slate-600">Check-in: {BUSINESS_INFO.checkIn}</p>
                  <p className="text-slate-600">Check-out: {BUSINESS_INFO.checkOut}</p>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold inline-block hover:bg-slate-800 transition-all"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
          <div className="h-[400px] lg:h-auto bg-slate-200">
             <iframe 
                src={BUSINESS_INFO.googleMapsUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Google Maps Location"
              ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
