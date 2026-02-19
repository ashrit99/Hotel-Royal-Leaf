
import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, ChevronRight, CheckCircle2 } from 'lucide-react';
import { BookingFormData } from '../types';

const BookingForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '12:00',
    guests: 1,
    type: 'Room'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log('Booking submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-emerald-100 text-center space-y-6">
        <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10 text-emerald-600" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Booking Inquiry Sent!</h3>
          <p className="text-slate-600">We've received your request for a {formData.type.toLowerCase()}. Our team will call you at <span className="font-bold text-slate-900">{formData.phone}</span> shortly to confirm.</p>
        </div>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="text-amber-600 font-semibold hover:underline"
        >
          Make another booking
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 md:p-10 rounded-2xl shadow-xl border border-slate-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-slate-700 mb-2">Booking Type</label>
          <div className="flex gap-4">
            {(['Room', 'Table', 'Banquet'] as const).map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setFormData({ ...formData, type })}
                className={`flex-1 py-3 px-4 rounded-xl border-2 transition-all font-medium text-sm ${
                  formData.type === type 
                  ? 'border-amber-600 bg-amber-50 text-amber-700' 
                  : 'border-slate-100 hover:border-slate-200 text-slate-500'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Full Name</label>
          <div className="relative">
            <User className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
            <input
              required
              type="text"
              placeholder="John Doe"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Phone Number</label>
          <div className="relative">
            <Phone className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
            <input
              required
              type="tel"
              placeholder="+91 00000 00000"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Check-in Date</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
            <input
              required
              type="date"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Guests</label>
          <select
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
            value={formData.guests}
            onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
          >
            {[1, 2, 3, 4, 5, 10].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="w-full mt-8 bg-slate-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl"
      >
        Confirm Booking Request
        <ChevronRight className="w-5 h-5" />
      </button>
      
      <p className="text-xs text-center text-slate-400 mt-4">
        * Our team will confirm your booking within 15 minutes.
      </p>
    </form>
  );
};

export default BookingForm;
