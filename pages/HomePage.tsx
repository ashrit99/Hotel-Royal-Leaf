
import React from 'react';
import { ArrowRight, Star, Bed, Utensils, Users, CheckCircle, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AMENITIES, REVIEWS, BUSINESS_INFO } from '../constants';
// Import the Review type for the sub-component props
import { Review } from '../types';

const HomePage: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Redesigned Hero Section */}
      <section className="relative min-h-[90vh] lg:min-h-[85vh] flex items-center bg-slate-50 pt-20 pb-20 lg:pt-0 lg:pb-0">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-50/50 -skew-x-12 translate-x-1/2 z-0 hidden lg:block"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-200/50 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Content */}
            <div className="space-y-8 text-center lg:text-left animate-in fade-in slide-in-from-left duration-1000">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 border border-amber-200 rounded-full text-amber-700 text-[10px] md:text-xs font-bold uppercase tracking-widest shadow-sm">
                  <Star className="w-3 h-3 fill-amber-500" />
                  Premium Luxury in Bargarh
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight lg:leading-[1.1] text-slate-900">
                  Experience the <br />
                  <span className="text-amber-600 italic">Royal Art</span> of <br className="hidden lg:block" />
                  Hospitality
                </h1>
                <p className="text-base md:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light px-4 lg:px-0">
                  Just 500m from Bargarh Road Station. Discover newly renovated rooms, authentic multi-cuisine dining, and grand event spaces.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">
                <Link 
                  to="/booking" 
                  className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-bold text-center transition-all shadow-xl hover:shadow-slate-900/20 flex items-center justify-center gap-2 group"
                >
                  Book Your Stay
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/gallery" 
                  className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 px-8 py-4 rounded-full font-bold text-center transition-all shadow-sm"
                >
                  View Gallery
                </Link>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-6 pt-6 border-t border-slate-200">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <p className="font-bold text-slate-900 text-sm md:text-base">1,200+ Happy Guests</p>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <span className="text-slate-400 font-medium text-xs ml-1">4.8/5</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Boxed Image */}
            <div className="relative animate-in fade-in slide-in-from-bottom duration-1000 mt-8 lg:mt-0 px-4 md:px-12 lg:px-0">
              <div className="relative z-10 rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-4 lg:border-8 border-white group max-w-md mx-auto lg:max-w-none">
                <img 
                  src="https://lh3.googleusercontent.com/p/AF1QipPp7DBJK1ZDUQiBFYuA2cpuJ_RgvvLdnvlzvOC7=w1200-h1200-p-k-no" 
                  className="w-full aspect-square lg:aspect-square object-cover transition-transform duration-1000 group-hover:scale-105"
                  alt="Royal Palace Hotel Facade"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>

              {/* Decorative "Floaters" - Responsive adjustments */}
              <div className="absolute -top-4 -right-2 lg:-top-6 lg:-right-6 w-24 h-24 lg:w-32 lg:h-32 bg-amber-600 rounded-2xl lg:rounded-3xl -z-0 rotate-12 hidden md:block"></div>
              
              <div className="absolute -bottom-8 -left-2 md:-bottom-10 md:-left-4 lg:-left-10 bg-white p-4 lg:p-6 rounded-2xl shadow-2xl border border-slate-100 z-20 max-w-[160px] lg:max-w-[200px] animate-bounce-slow">
                <div className="flex items-center gap-2 mb-1 lg:mb-2">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-3 h-3 lg:w-4 lg:h-4" />
                  </div>
                  <span className="text-[8px] lg:text-[10px] font-bold uppercase text-slate-400">Verified Safety</span>
                </div>
                <p className="text-xs lg:text-sm font-bold text-slate-900 leading-tight">100% Sanitized & Safe Rooms</p>
              </div>

              <div className="absolute top-1/2 -right-4 lg:-right-12 transform -translate-y-1/2 bg-white/95 backdrop-blur-md p-4 lg:p-5 rounded-2xl lg:rounded-3xl shadow-2xl border border-white z-20 hidden lg:block">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-amber-600" />
                    <p className="text-[10px] font-bold text-slate-800 uppercase tracking-tighter">7 Min Walk From Station</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-amber-600" />
                    <p className="text-[10px] font-bold text-slate-800 uppercase tracking-tighter">Central Location</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1 px-4 md:px-12 lg:px-0">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://lh3.googleusercontent.com/p/AF1QipPQn7QAtUuYBajyMttsMWCSoPOOXJZHcCEnxOge=w800-h1000-p-k-no" 
                  alt="Royal Palace Interior" 
                  className="w-full h-auto" 
                />
              </div>
              <div className="absolute -bottom-6 -right-2 lg:-bottom-10 lg:-right-10 w-48 h-48 lg:w-64 lg:h-64 bg-amber-50 rounded-2xl -z-0 hidden md:block"></div>
            </div>
            <div className="space-y-8 order-1 lg:order-2 text-center lg:text-left">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
                  Modern Comfort Meets <br/><span className="text-amber-600">Heritage Excellence</span>
                </h2>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                  Located in the prime area of Bargarh, Royal Palace Hotel & Restro offers a unique blend of traditional hospitality and modern amenities.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {AMENITIES.map((amenity, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row items-center md:items-start gap-3 text-slate-700 font-medium group cursor-default">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors shrink-0">
                      {amenity.icon}
                    </div>
                    <span className="text-xs md:text-sm text-center md:text-left">{amenity.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4 px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">Our Premium Offerings</h2>
            <p className="text-slate-500 text-sm md:text-base">Everything you need for a memorable stay in Bargarh.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <ServiceCard 
              image="https://lh3.googleusercontent.com/p/AF1QipODx-snhtEy0U7Cjkybx3qhnHig5g65GAukhBEE=w400-h400-p-k-no"
              title="Luxury Rooms"
              description="Newly built premium AC rooms with modern aesthetics."
              link="/booking"
              linkText="Book a Room"
            />
            <ServiceCard 
              image="https://lh3.googleusercontent.com/p/AF1QipMOqdSc6GdauddKZ9zMrc6njfeyCToGa6E47uer=w400-h400-p-k-no"
              title="The Restro"
              description="A multi-cuisine journey featuring local delicacies."
              link="/services"
              linkText="View Menu"
              dark
            />
            <ServiceCard 
              image="https://lh3.googleusercontent.com/p/AF1QipPsRNQ2Qjy36IeVanjRPqf2HYw0l7cVXq4hshHJ=w400-h400-p-k-no"
              title="Banquet Hall"
              description="A grand venue for weddings and corporate meets."
              link="/booking"
              linkText="Reserve Venue"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8 text-center md:text-left">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">Voices of Our Guests</h2>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {REVIEWS.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 px-4">
        <div className="max-w-7xl mx-auto rounded-[2rem] lg:rounded-[3rem] bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute inset-0 z-0 opacity-20 bg-gradient-to-br from-amber-600 to-slate-900"></div>
          <div className="relative z-10 px-6 py-12 md:p-20 text-center space-y-8">
            <h2 className="text-3xl md:text-6xl font-serif font-bold max-w-4xl mx-auto leading-tight px-2">
              Ready to Experience the Best <br className="hidden md:block" /> Stay in Bargarh?
            </h2>
            <p className="text-slate-400 text-sm md:text-lg max-w-2xl mx-auto font-light px-4">
              Don't miss out on our special online booking rates. Our hospitality team is ready to welcome you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Link to="/booking" className="bg-amber-600 text-white px-8 py-4 rounded-full font-bold hover:bg-amber-700 transition-all shadow-xl shadow-amber-600/20">
                Book My Room Now
              </Link>
              <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-all">
                Contact Reservations
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Sub-components for cleaner code
interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
  dark?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, description, link, linkText, dark = false }) => (
  <div className={`group ${dark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'} p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border ${dark ? 'border-slate-800' : 'border-slate-100'} flex flex-col items-center text-center space-y-6`}>
    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform overflow-hidden shadow-lg ${dark ? 'bg-amber-600' : 'bg-slate-900'}`}>
      <img src={image} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt={title} />
    </div>
    <div className="space-y-3">
      <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
      <p className={`text-sm ${dark ? 'text-slate-400' : 'text-slate-500'}`}>{description}</p>
    </div>
    <Link to={link} className={`${dark ? 'text-amber-500' : 'text-slate-900'} font-bold text-sm underline-offset-4 hover:underline`}>{linkText}</Link>
  </div>
);

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
  <div className="bg-slate-50 p-6 lg:p-8 rounded-2xl border border-slate-100 space-y-6 hover:bg-white hover:shadow-2xl transition-all group">
    <div className="flex justify-between items-start">
      <div className="flex text-amber-500">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-3 h-3 md:w-4 md:h-4 ${i < review.rating ? 'fill-current' : ''}`} />
        ))}
      </div>
      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{review.date}</span>
    </div>
    <p className="text-slate-600 italic leading-relaxed font-serif text-base lg:text-lg">"{review.comment}"</p>
    <div className="pt-4 border-t border-slate-200 flex items-center gap-4">
      <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 font-bold group-hover:bg-amber-600 group-hover:text-white transition-colors text-sm">{review.author[0]}</div>
      <div className="text-left">
        <h4 className="font-bold text-slate-900 text-sm">{review.author}</h4>
        <p className="text-[10px] text-slate-500">{review.category}</p>
      </div>
    </div>
  </div>
);

export default HomePage;
