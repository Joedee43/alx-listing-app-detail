// components/property/PropertyDetail.tsx

import { PropertyProps } from "@/interfaces/index";
import React, { useState } from "react";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({
  property,
}) => {
  const [activeTab, setActiveTab] = useState("offers");

  return (
    <div className="container mx-auto p-4 md:p-6">
      {/* Header: Name, Rating, Location */}
      <h1 className="text-4xl font-bold">{property.name}</h1>
      <div className="flex items-center space-x-4 mt-2 text-lg">
        <span className="text-yellow-500 font-semibold">★ {property.rating}</span>
        <span>·</span>
        <span className="underline cursor-pointer">{property.reviews.length} reviews</span>
        <span>·</span>
        <span className="underline cursor-pointer">
          {property.address.city}, {property.address.country}
        </span>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-4 grid-rows-2 gap-2 mt-6 h-96 rounded-2xl overflow-hidden">
        <div className="col-span-2 row-span-2">
            <img src={property.image} alt={property.name} className="w-full h-full object-cover cursor-pointer hover:brightness-90 transition"/>
        </div>
        {property.images.slice(0, 4).map((img, index) => (
             <div key={index} className="w-full h-full">
                <img src={img} alt={`${property.name} extra ${index + 1}`} className="w-full h-full object-cover cursor-pointer hover:brightness-90 transition"/>
             </div>
        ))}
      </div>

      {/* Main Content & Booking Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-8">
        <div className="lg:col-span-2">
          {/* Tabs Navigation */}
          <div className="border-b">
            <nav className="flex space-x-8">
              <button onClick={() => setActiveTab("offers")} className={`py-4 px-1 text-lg font-semibold ${activeTab === "offers" ? "border-b-2 border-gray-900 text-gray-900" : "text-gray-500"}`}>
                What we offer
              </button>
              <button onClick={() => setActiveTab("reviews")} className={`py-4 px-1 text-lg font-semibold ${activeTab === "reviews" ? "border-b-2 border-gray-900 text-gray-900" : "text-gray-500"}`}>
                Reviews
              </button>
              <button onClick={() => setActiveTab("host")} className={`py-4 px-1 text-lg font-semibold ${activeTab === "host" ? "border-b-2 border-gray-900 text-gray-900" : "text-gray-500"}`}>
                About Host
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="mt-6">
            {activeTab === 'offers' && (
                <div>
                    <h2 className="text-2xl font-semibold">Description</h2>
                    <p className="mt-4 text-gray-700">{property.description}</p>
                    <h2 className="text-2xl font-semibold mt-8">What this place offers</h2>
                    <ul className="grid grid-cols-2 gap-4 mt-4">
                        {property.category.map((amenity, index) => (
                        <li key={index} className="text-lg text-gray-800">✓ {amenity}</li>
                        ))}
                    </ul>
                </div>
            )}

            {activeTab === 'reviews' && <ReviewSection reviews={property.reviews} />}
            
            {activeTab === 'host' && (
                <div className="flex items-center space-x-4">
                    <img src={property.host.avatar} alt={property.host.name} className="w-20 h-20 rounded-full object-cover"/>
                    <div>
                        <h3 className="text-2xl font-bold">Hosted by {property.host.name}</h3>
                        <p className="text-gray-500">Superhost · 2 years hosting</p>
                    </div>
                </div>
            )}
          </div>
        </div>

        {/* Booking Section */}
        <div className="lg:col-span-1">
          <BookingSection price={property.price} />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;