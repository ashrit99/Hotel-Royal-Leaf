
import React from 'react';
import BookingForm from '../components/BookingForm';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const BookingPage: React.FC = () => {
  return (
    <div className="py-20 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Header & Info */}
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-4">
              <h1 className="text-5xl font-serif font-bold text-slate-900 leading-tight">Secure Your <br/><span className="text-amber-600">Royal Stay</span></h1>
              <p className="text-slate-600 text-lg">Quickly book your room, restaurant table, or banquet hall via our online portal.</p>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-amber-600 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Immediate Confirmation</h4>
                  <p className="text-sm text-slate-500">Call {BUSINESS_INFO.phone} for instant bookings.</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-emerald-600 shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">WhatsApp Assistance</h4>
                  <p className="text-sm text-slate-500">Fast replies for availability checks via text.</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-slate-900 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Prime Location</h4>
                  <p className="text-sm text-slate-500">Conveniently located at Trinath Nagar, Bargarh.</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-amber-600 text-white rounded-3xl space-y-4 shadow-xl shadow-amber-600/20">
              <h3 className="text-xl font-bold">Emergency Contact</h3>
              <p className="text-sm opacity-90">Need urgent assistance or late-night check-in?</p>
              <a href={`tel:${BUSINESS_INFO.phone}`} className="text-2xl font-bold flex items-center gap-2 hover:underline">
                <Phone className="w-6 h-6" /> {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
