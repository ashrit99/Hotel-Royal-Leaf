
import React from 'react';
import { Wifi, Wind, Car, Clock, Coffee, ShieldCheck, MapPin, Phone, MessageCircle } from 'lucide-react';
import { Service, Review, GalleryItem } from './types';

export const BUSINESS_INFO = {
  name: "Royal Palace Hotel & Restro",
  logoUrl: "https://i.ibb.co/35Hzt3mT/Screenshot-2026-02-19-085934.png",
  address: "Railway Station, Trinath Nagar, Near, Bargarh, Odisha 768028",
  phone: "087639 39039",
  whatsapp: "+918763939039",
  email: "contact@royalpalacebargarh.com",
  checkIn: "2:00 PM",
  checkOut: "12:00 PM",
  googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.8385312384263!2d83.6253401!3d21.3323048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2139b46e812519%3A0x7940b2b80a13364c!2sRoyal%20Palace%20Hotel!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
};

export const AMENITIES = [
  { icon: <Wifi className="w-5 h-5" />, label: "Free Wi-Fi" },
  { icon: <Wind className="w-5 h-5" />, label: "Air Conditioning" },
  { icon: <Car className="w-5 h-5" />, label: "Free Parking" },
  { icon: <Clock className="w-5 h-5" />, label: "24-hr Front Desk" },
  { icon: <Coffee className="w-5 h-5" />, label: "Room Service" },
  { icon: <ShieldCheck className="w-5 h-5" />, label: "Child Friendly" }
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Luxury Rooms',
    description: 'Newly renovated rooms with modern amenities and comfort.',
    icon: 'Bed',
    price: 'Starting ₹1,999/night'
  },
  {
    id: '2',
    title: 'The Restro',
    description: 'Exquisite multi-cuisine dining experience in the heart of Bargarh.',
    icon: 'Utensils',
    price: 'Average ₹400/person'
  },
  {
    id: '3',
    title: 'Royal Banquet Hall',
    description: 'Perfect for family functions, weddings, and business events.',
    icon: 'Users',
    price: '₹10,000 Advance'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Sashwati Das',
    rating: 5,
    comment: 'We stayed there for 5 days. The overall experience is very good. All rooms are newly built and renovation is undergoing. Very modern and comfortable.',
    date: '6 months ago',
    category: 'Holiday | Family'
  },
  {
    id: 'r2',
    author: 'KD',
    rating: 5,
    comment: 'Good to see like this in this prime location. Very well staff behavior as well as tasty foods. Also near by Bargarh Railway station.',
    date: '6 months ago',
    category: 'Family'
  },
  {
    id: 'r3',
    author: 'Rajesh Patel',
    rating: 3,
    comment: 'Hotel is going through a makeover. Solo travelers can stay but families should check status of renovation before booking.',
    date: '6 months ago',
    category: 'Holiday | Family'
  }
];

export const GALLERY: GalleryItem[] = [
  { 
    id: 'g0', 
    url: 'https://lh3.googleusercontent.com/p/AF1QipPp7DBJK1ZDUQiBFYuA2cpuJ_RgvvLdnvlzvOC7=w750-h606-p-k-no', 
    category: 'Hotel', 
    title: 'Royal Palace Facade' 
  },
  { 
    id: 'g1', 
    url: 'https://lh3.googleusercontent.com/p/AF1QipPsRNQ2Qjy36IeVanjRPqf2HYw0l7cVXq4hshHJ=w750-h606-p-k-no', 
    category: 'Hotel', 
    title: 'Lobby Entrance & Exterior' 
  },
  { 
    id: 'g2', 
    url: 'https://lh3.googleusercontent.com/p/AF1QipPQn7QAtUuYBajyMttsMWCSoPOOXJZHcCEnxOge=w750-h1235-p-k-no', 
    category: 'Rooms', 
    title: 'Modern Deluxe Interior' 
  },
  { 
    id: 'g3', 
    url: 'https://lh3.googleusercontent.com/p/AF1QipMOqdSc6GdauddKZ9zMrc6njfeyCToGa6E47uer=w750-h606-p-k-no', 
    category: 'Restro', 
    title: 'Dining & Restaurant Area' 
  },
  { 
    id: 'g4', 
    url: 'https://lh3.googleusercontent.com/p/AF1QipODx-snhtEy0U7Cjkybx3qhnHig5g65GAukhBEE=w750-h813-p-k-no', 
    category: 'Rooms', 
    title: 'Premium Room Amenities' 
  }
];
