// constants/index.ts

import { PropertyProps } from "@/interfaces/index";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Modern Downtown Loft",
    rating: 4.9,
    address: {
      city: "San Francisco",
      country: "USA",
    },
    image: "/images/property-1.jpg",
    images: [
      "/images/property-1-1.jpg",
      "/images/property-1-2.jpg",
      "/images/property-1-3.jpg",
      "/images/property-1-4.jpg",
    ],
    description:
      "A beautifully designed loft in the heart of the city. Perfect for a solo traveler or a couple looking to explore the vibrant city life. Comes with a fully equipped kitchen and a stunning view of the skyline.",
    category: [
      "Wifi",
      "Kitchen",
      "Air conditioning",
      "Free parking",
      "Washing machine",
      "Pool",
    ],
    price: 150,
    host: {
      name: "Jane Doe",
      avatar: "/images/avatar-1.jpg",
    },
    reviews: [
      {
        id: 1,
        name: "Alex Smith",
        rating: 5,
        comment: "Amazing place! The view is breathtaking and the host was very welcoming.",
        avatar: "/images/avatar-2.jpg",
      },
      {
        id: 2,
        name: "Maria Garcia",
        rating: 4.8,
        comment: "Had a great stay. The loft is clean, modern, and in a perfect location. Highly recommend!",
        avatar: "/images/avatar-3.jpg",
      },
    ],
  },
  // Add another property for testing different routes
  {
    name: "Cozy Beachside Cottage",
    rating: 4.8,
    address: {
      city: "Malibu",
      country: "USA",
    },
    image: "/images/property-2.jpg",
    images: [
        "/images/property-2-1.jpg",
        "/images/property-2-2.jpg",
        "/images/property-2-3.jpg",
        "/images/property-2-4.jpg",
    ],
    description:
      "Escape to this charming cottage right on the beach. Wake up to the sound of waves and enjoy a coffee on your private patio. Ideal for a romantic getaway.",
    category: ["Wifi", "Beachfront", "Kitchen", "Pet friendly"],
    price: 250,
    host: {
      name: "John Fisher",
      avatar: "/images/avatar-4.jpg",
    },
    reviews: [
      {
        id: 1,
        name: "Chris Brown",
        rating: 5,
        comment: "An unforgettable experience. The cottage was perfect in every way.",
        avatar: "/images/avatar-5.jpg",
      },
    ],
  },
];