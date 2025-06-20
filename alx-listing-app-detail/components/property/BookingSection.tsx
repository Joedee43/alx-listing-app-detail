// components/property/BookingSection.tsx

import React, { useState, useMemo } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkInDate, setCheckInDate] = useState<string>("");
  const [checkOutDate, setCheckOutDate] = useState<string>("");

  const numberOfNights = useMemo(() => {
    if (!checkInDate || !checkOutDate) return 0;
    const start = new Date(checkInDate);
    const end = new Date(checkOutDate);
    if (start >= end) return 0;
    const diffTime = Math.abs(end.getTime() - start.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }, [checkInDate, checkOutDate]);

  const totalCost = useMemo(() => {
    return price * numberOfNights;
  }, [price, numberOfNights]);

  return (
    <div className="bg-white p-6 shadow-lg rounded-xl border border-gray-200 sticky top-24">
      <h3 className="text-2xl font-semibold">
        ${price.toLocaleString()} <span className="text-base font-normal">/ night</span>
      </h3>
      <div className="mt-4 grid grid-cols-2 gap-2 border rounded-lg p-2">
        <div>
          <label htmlFor="check-in" className="block text-xs font-bold text-gray-700">CHECK-IN</label>
          <input
            id="check-in"
            type="date"
            className="border-none p-1 w-full mt-1 focus:ring-0"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
          />
        </div>
        <div className="border-l">
          <label htmlFor="check-out" className="block text-xs font-bold text-gray-700 pl-2">CHECK-OUT</label>
          <input
            id="check-out"
            type="date"
            className="border-none p-1 w-full mt-1 focus:ring-0"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
          />
        </div>
      </div>

      {numberOfNights > 0 && (
        <div className="mt-6 space-y-4">
          <div className="flex justify-between items-center text-gray-700">
            <span>
              ${price.toLocaleString()} x {numberOfNights} nights
            </span>
            <span>${totalCost.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center font-bold text-lg border-t pt-4">
            <span>Total payment:</span>
            <span>${totalCost.toLocaleString()}</span>
          </div>
        </div>
      )}

      <button className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 disabled:bg-gray-400" disabled={numberOfNights <= 0}>
        Reserve now
      </button>
      {numberOfNights <= 0 && <p className="text-center text-sm text-gray-500 mt-2">Select dates to see the price</p>}
    </div>
  );
};

export default BookingSection;