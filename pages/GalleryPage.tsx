
import React, { useState } from 'react';
import { GALLERY } from '../constants';
import { Maximize2, X } from 'lucide-react';

const GalleryPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Hotel', 'Rooms', 'Restro', 'Banquet'];

  const filteredGallery = filter === 'All' 
    ? GALLERY 
    : GALLERY.filter(item => item.category === filter);

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-serif font-bold text-slate-900">Visual Tour</h1>
          <p className="text-slate-500">Take a glimpse inside the Royal Palace experience.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                filter === cat 
                ? 'bg-slate-900 text-white shadow-lg' 
                : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-like Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGallery.map((item) => (
            <div key={item.id} className="group relative rounded-3xl overflow-hidden aspect-[4/3] shadow-md hover:shadow-2xl transition-all cursor-pointer">
              <img 
                src={item.url} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt={item.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                <span className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-2">{item.category}</span>
                <h4 className="text-white text-xl font-bold">{item.title}</h4>
              </div>
              <div className="absolute top-4 right-4 p-3 bg-white/20 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-5 h-5 text-white" />
              </div>
            </div>
          ))}
        </div>

        {filteredGallery.length === 0 && (
          <div className="text-center py-20 text-slate-400">
            No images found for this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
