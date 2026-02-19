
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  price?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  category?: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  category: 'Hotel' | 'Restro' | 'Banquet' | 'Rooms';
  title: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  type: 'Room' | 'Table' | 'Banquet';
}
