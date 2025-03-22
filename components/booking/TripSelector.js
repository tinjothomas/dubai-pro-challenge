"use client";

import { useState } from "react";

export default function TripSelector({
  destinations,
  seatClasses,
  initialValues,
  onSubmit,
}) {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNumberChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: parseInt(value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  // Calculate min date (2 months from now for space travel)
  const getMinDate = () => {
    const date = new Date();
    date.setMonth(date.getMonth() + 2);
    return date.toISOString().split("T")[0];
  };

  // Calculate max date (2 years from now)
  const getMaxDate = () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() + 2);
    return date.toISOString().split("T")[0];
  };

  return (
    <div className="max-w-xl mx-auto bg-gray-900 p-8 rounded-xl">
      <h2 className="text-2xl font-bold mb-6">Select Your Trip</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-400 mb-2" htmlFor="destination">
            Destination
          </label>
          <select
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            required
            className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2 text-white">
            <option value="">Select a destination</option>
            {destinations.map((destination) => (
              <option key={destination.id} value={destination.id}>
                {destination.name} ({destination.distance} light-minutes)
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-400 mb-2" htmlFor="departureDate">
            Departure Date
          </label>
          <input
            type="date"
            id="departureDate"
            name="departureDate"
            value={formData.departureDate}
            onChange={handleChange}
            min={getMinDate()}
            max={getMaxDate()}
            required
            className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2 text-white"
          />
          <p className="text-sm text-gray-500 mt-1">
            Space travels require booking at least 2 months in advance
          </p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-400 mb-2" htmlFor="returnDate">
            Return Date
          </label>
          <input
            type="date"
            id="returnDate"
            name="returnDate"
            value={formData.returnDate}
            onChange={handleChange}
            min={formData.departureDate || getMinDate()}
            max={getMaxDate()}
            required
            className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2 text-white"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-400 mb-2" htmlFor="passengers">
            Number of Passengers
          </label>
          <input
            type="number"
            id="passengers"
            name="passengers"
            value={formData.passengers}
            onChange={handleNumberChange}
            min="1"
            max="8"
            required
            className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2 text-white"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-400 mb-2">Seat Class</label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {seatClasses.map((seatClass) => (
              <div
                key={seatClass.id}
                onClick={() =>
                  setFormData((prev) => ({ ...prev, seatClass: seatClass.id }))
                }
                className={`
                  border rounded-lg p-4 cursor-pointer transition-all
                  ${
                    formData.seatClass === seatClass.id
                      ? "border-purple-500 bg-purple-900 bg-opacity-20"
                      : "border-gray-700 hover:border-gray-500"
                  }
                `}>
                <div className="font-bold mb-1">{seatClass.name}</div>
                <div className="text-sm text-gray-400">
                  {seatClass.description}
                </div>
                <div className="mt-2 text-purple-400 font-bold">
                  {seatClass.priceMultiplier}x base fare
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded">
          Continue to Accommodations
        </button>
      </form>
    </div>
  );
}
