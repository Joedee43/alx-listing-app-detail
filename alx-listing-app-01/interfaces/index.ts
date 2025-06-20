// interfaces/index.ts

export interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface PropertyProps {
  name: string;
  rating: number;
  address: {
    city: string;
    country: string;
  };
  image: string; // Main image
  images: string[]; // Additional images for the grid
  description: string;
  category: string[]; // Represents amenities
  price: number;
  reviews: Review[];
  host: {
    name: string;
    avatar: string;
  };
}