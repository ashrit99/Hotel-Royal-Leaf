
import React from 'react';
import { ArrowRight, Star, Bed, Utensils, Users, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AMENITIES, REVIEWS, BUSINESS_INFO } from '../constants';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/p/AF1QipPp7DBJK1ZDUQiBFYuA2cpuJ_RgvvLdnvlzvOC7=w1200-h800-p-k-no" 
            className="w-full h-full object-cover brightness-50"
            alt="Royal Palace Hotel Facade"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white space-y-8">
          <div className="max-w-3xl space-y-4 animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-600/30 border border-amber-600/50 rounded-full text-amber-400 text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
              <Star className="w-3 h-3 fill-amber-400" />
              Most Preferred in Bargarh
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
              Experience the Art of <span className="text-amber-400 italic">Hospitality</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl font-light">
              Located just 7 minutes from Bargarh Road Station. Modern rooms, exquisite dining, and royal banquets await your arrival.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="/booking" 
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-bold text-center transition-all shadow-xl hover:shadow-amber-600/20 flex items-center justify-center gap-2"
              >
                Book Your Stay
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/services" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-center transition-all"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Amenities Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://lh3.googleusercontent.com/p/AF1QipPQn7QAtUuYBajyMttsMWCSoPOOXJZHcCEnxOge=w800-h1000-p-k-no" 
                  alt="Royal Palace Interior" 
                  className="w-full h-auto" 
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-amber-50 rounded-2xl -z-0"></div>
              <div className="absolute -top-6 -left-6 bg-amber-600 text-white p-6 rounded-2xl shadow-xl animate-bounce-slow">
                <p className="text-3xl font-bold">3.9/5</p>
                <p className="text-xs font-semibold uppercase opacity-80">Google Rating</p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
                  Modern Comfort Meets <br/><span className="text-amber-600">Heritage Excellence</span>
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Located in the prime area of Bargarh, Royal Palace Hotel & Restro offers a unique blend of traditional hospitality and modern amenities. Whether you are here for a business trip, family function, or a weekend getaway, we ensure your stay is royal in every sense.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {AMENITIES.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center text-amber-600">
                      {amenity.icon}
                    </div>
                    {amenity.label}
                  </div>
                ))}
              </div>
              <Link to="/about" className="inline-flex items-center gap-2 text-amber-600 font-bold hover:gap-4 transition-all uppercase text-xs tracking-widest">
                Learn More About Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-serif font-bold text-slate-900">Our Premium Offerings</h2>
            <p className="text-slate-500">Everything you need for a memorable stay in Bargarh.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col items-center text-center space-y-6">
              <div className="w-16 h-16 bg-slate-900 text-amber-400 rounded-2xl flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform overflow-hidden">
                <img src="https://lh3.googleusercontent.com/p/AF1QipODx-snhtEy0U7Cjkybx3qhnHig5g65GAukhBEE=w200-h200-p-k-no" className="w-full h-full object-cover" alt="Room" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-slate-900">Luxury Rooms</h3>
                <p className="text-slate-500 text-sm">Newly built premium AC rooms with modern aesthetics and top-tier comfort.</p>
              </div>
              <Link to="/booking" className="text-slate-900 font-bold text-sm underline-offset-4 hover:underline">Book a Room</Link>
            </div>

            <div className="group bg-slate-900 p-8 rounded-3xl shadow-2xl hover:scale-105 transition-all flex flex-col items-center text-center space-y-6">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-2xl flex items-center justify-center -rotate-3 group-hover:rotate-0 transition-transform overflow-hidden">
                 <img src="https://lh3.googleusercontent.com/p/AF1QipMOqdSc6GdauddKZ9zMrc6njfeyCToGa6E47uer=w200-h200-p-k-no" className="w-full h-full object-cover" alt="Restro" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-white">The Restro</h3>
                <p className="text-slate-400 text-sm">A multi-cuisine culinary journey featuring local delicacies and international favorites.</p>
              </div>
              <Link to="/services" className="text-amber-500 font-bold text-sm underline-offset-4 hover:underline">View Menu</Link>
            </div>

            <div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col items-center text-center space-y-6">
              <div className="w-16 h-16 bg-slate-900 text-amber-400 rounded-2xl flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform overflow-hidden">
                 <img src="https://lh3.googleusercontent.com/p/AF1QipPsRNQ2Qjy36IeVanjRPqf2HYw0l7cVXq4hshHJ=w200-h200-p-k-no" className="w-full h-full object-cover" alt="Banquet" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-slate-900">Banquet Hall</h3>
                <p className="text-slate-500 text-sm">A grand venue for your most precious moments, from weddings to corporate meets.</p>
              </div>
              <Link to="/booking" className="text-slate-900 font-bold text-sm underline-offset-4 hover:underline">Reserve Venue</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-serif font-bold text-slate-900">Voices of Our Guests</h2>
              <p className="text-slate-500">Real feedback from travelers visiting Royal Palace.</p>
            </div>
            <div className="flex items-center gap-4 bg-slate-50 px-6 py-3 rounded-2xl border border-slate-100">
              <div className="text-3xl font-bold text-slate-900">3.9</div>
              <div className="h-10 w-[1px] bg-slate-200"></div>
              <div>
                <div className="flex text-amber-500">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4" />
                </div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">946 Google Reviews</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review) => (
              <div key={review.id} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 space-y-6 hover:bg-white hover:shadow-xl transition-all">
                <div className="flex justify-between items-start">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-current' : ''}`} />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{review.date}</span>
                </div>
                <p className="text-slate-600 italic leading-relaxed font-serif text-lg">"{review.comment}"</p>
                <div className="pt-4 border-t border-slate-200 flex items-center gap-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 font-bold">{review.author[0]}</div>
                  <div>
                    <h4 className="font-bold text-slate-900">{review.author}</h4>
                    <p className="text-xs text-slate-500">{review.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto rounded-3xl bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute inset-0 z-0 opacity-20 bg-gradient-to-br from-amber-600 to-slate-900"></div>
          <div className="relative z-10 px-8 py-16 md:p-20 text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-serif font-bold max-w-4xl mx-auto leading-tight">
              Ready to Experience the Best <br className="hidden md:block" /> Stay in Bargarh?
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">
              Don't miss out on our special online booking rates. Our hospitality team is ready to welcome you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/booking" className="bg-amber-600 text-white px-10 py-4 rounded-full font-bold hover:bg-amber-700 transition-all shadow-xl shadow-amber-600/20">
                Book My Room Now
              </Link>
              <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white text-slate-900 px-10 py-4 rounded-full font-bold hover:bg-slate-100 transition-all">
                Contact Reservations
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
