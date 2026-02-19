
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate email notification
    console.log('Sending message:', formState);
  };

  return (
    <div className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-serif font-bold text-slate-900">Get in Touch</h1>
          <p className="text-slate-500 max-w-xl mx-auto">Have questions? We're here to help you 24/7.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">Contact Details</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs uppercase text-slate-400 mb-1">Call Us</h5>
                    <p className="text-slate-900 font-medium">{BUSINESS_INFO.phone}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs uppercase text-slate-400 mb-1">Email Us</h5>
                    <p className="text-slate-900 font-medium">{BUSINESS_INFO.email}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs uppercase text-slate-400 mb-1">Visit Us</h5>
                    <p className="text-slate-900 font-medium leading-tight">{BUSINESS_INFO.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-3xl text-white space-y-6 shadow-2xl">
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-amber-500" />
                <h3 className="text-xl font-bold">24/7 Availability</h3>
              </div>
              <p className="text-slate-400 text-sm">Our front desk and security team are available around the clock to assist you with any inquiries or emergencies.</p>
              <div className="pt-4 border-t border-white/10 flex gap-4">
                <a 
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex-1 bg-amber-600 text-white py-3 rounded-xl font-bold text-center text-sm shadow-lg shadow-amber-600/20"
                >
                  Call Help Desk
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-white p-12 rounded-3xl shadow-xl border border-emerald-100 text-center space-y-6">
                <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-600">Thank you for contacting Royal Palace. Our support team will respond to your email shortly.</p>
                </div>
                <button onClick={() => setSubmitted(false)} className="text-amber-600 font-bold hover:underline">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100 space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Send an Inquiry</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Your Name</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all"
                      value={formState.name}
                      onChange={e => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Email Address</label>
                    <input 
                      required 
                      type="email" 
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all"
                      value={formState.email}
                      onChange={e => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Your Message</label>
                  <textarea 
                    required 
                    rows={6} 
                    placeholder="How can we help you today?"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all resize-none"
                    value={formState.message}
                    onChange={e => setFormState({...formState, message: e.target.value})}
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-xl"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Map Integration */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-4 h-[500px]">
           <iframe 
              src={BUSINESS_INFO.googleMapsUrl}
              width="100%" 
              height="100%" 
              className="rounded-2xl"
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Royal Palace Location Map"
            ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
