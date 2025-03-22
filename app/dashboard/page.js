"use client";

import { useState } from "react";
import Navigation from "../../components/ui/Navigation";
import DashboardView from "../../components/ui/DashboardView";
import CountdownTimer from "../../components/ui/CountdownTimer";
import { userBookings, travelTips } from "../../lib/data";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("upcoming");

  // Filter bookings based on active tab
  const filteredBookings =
    activeTab === "upcoming"
      ? userBookings.filter(
          (booking) => new Date(booking.departureDate) > new Date()
        )
      : userBookings.filter(
          (booking) => new Date(booking.departureDate) <= new Date()
        );

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <main className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Traveler Dashboard</h1>
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`px-4 py-2 rounded ${
                activeTab === "upcoming" ? "bg-purple-600" : "bg-gray-700"
              }`}>
              Upcoming Trips
            </button>
            <button
              onClick={() => setActiveTab("past")}
              className={`px-4 py-2 rounded ${
                activeTab === "past" ? "bg-purple-600" : "bg-gray-700"
              }`}>
              Past Trips
            </button>
          </div>
        </div>

        {filteredBookings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                {activeTab === "upcoming"
                  ? "Your Upcoming Adventures"
                  : "Your Past Journeys"}
              </h2>
              <DashboardView bookings={filteredBookings} />
            </div>

            {activeTab === "upcoming" && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Next Launch</h2>
                <div className="bg-gray-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {filteredBookings[0]?.destination} Mission
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Departing on {filteredBookings[0]?.departureDate}
                  </p>
                  <CountdownTimer
                    targetDate={
                      filteredBookings[0]?.departureDate || new Date()
                    }
                  />

                  <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4">AI Travel Tips</h3>
                    <div className="space-y-4">
                      {travelTips
                        .filter(
                          (tip) =>
                            tip.destinationId ===
                            filteredBookings[0]?.destinationId
                        )
                        .slice(0, 3)
                        .map((tip, index) => (
                          <div
                            key={index}
                            className="bg-gray-800 p-4 rounded-lg">
                            <p className="text-purple-400 font-semibold mb-1">
                              {tip.title}
                            </p>
                            <p className="text-sm text-gray-300">
                              {tip.content}
                            </p>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "past" && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Travel Memories</h2>
                <div className="bg-gray-900 rounded-xl p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {filteredBookings.slice(0, 4).map((booking, index) => (
                      <div
                        key={index}
                        className="bg-gray-800 rounded-lg aspect-square flex items-center justify-center">
                        <span className="text-4xl">
                          {booking.destinationEmoji}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-center mt-4 text-gray-400">
                    You've visited{" "}
                    {new Set(filteredBookings.map((b) => b.destinationId)).size}{" "}
                    celestial destinations!
                  </p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-4">No trips found</h2>
            <p className="text-gray-400 mb-8">
              You don't have any {activeTab} trips yet.
            </p>
            <a
              href="/booking"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full">
              Book Your First Adventure
            </a>
          </div>
        )}
      </main>
    </div>
  );
}
