// pages/index.tsx

import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { PropertyProps } from "@/interfaces/index";
import Head from "next/head";
import Link from "next/link";

export default function HomePage() {
  const properties: PropertyProps[] = PROPERTYLISTINGSAMPLE;

  // Function to create a URL-friendly slug from the property name
  const createSlug = (name: string) => name.replace(/\s+/g, '-');

  return (
    <>
      <Head>
        <title>Find Your Next Stay</title>
        <meta name="description" content="Browse our exclusive list of properties." />
      </Head>
      <main className="container mx-auto p-4 md:p-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Properties</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {properties.map((property) => (
            <Link key={property.name} href={`/property/${createSlug(property.name)}`}>
              <div className="group cursor-pointer border rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                <div className="overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold truncate">{property.name}</h3>
                  <p className="text-sm text-gray-600">
                    {property.address.city}, {property.address.country}
                  </p>
                  <div className="flex justify-between items-center mt-3">
                    <p className="text-lg font-semibold">${property.price}/night</p>
                    <span className="text-yellow-500 font-semibold">★ {property.rating}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}