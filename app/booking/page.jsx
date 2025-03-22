"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter } from "next/navigation";
import Navigation from "../../components/ui/Navigation";
import TripSelector from "../../components/booking/TripSelector";
import AccommodationList from "../../components/booking/AccommodationList";
import { destinations, accommodations, seatClasses } from "../../lib/data";

// This component will safely use the useSearchParams hook
function BookingContent() {
  // Import useSearchParams inside the component that's wrapped in Suspense
  const { useSearchParams } = require("next/navigation");
  const searchParams = useSearchParams();
  const router = useRouter();
  const preselectedDestination = searchParams.get("destination");

  const [booking, setBooking] = useState({
    destination: preselectedDestination || "",
    departureDate: "",
    returnDate: "",
    passengers: 1,
    seatClass: "economy",
    accommodation: "",
  });

  const [step, setStep] = useState(1);
  const [filteredAccommodations, setFilteredAccommodations] = useState([]);

  useEffect(() => {
    if (booking.destination) {
      setFilteredAccommodations(
        accommodations.filter(
          (acc) => acc.destinationId === booking.destination
        )
      );
    }
  }, [booking.destination]);

  const handleTripSelection = (tripData) => {
    setBooking({ ...booking, ...tripData });
    setStep(2);
  };

  const handleAccommodationSelection = (accommodationId) => {
    setBooking({ ...booking, accommodation: accommodationId });
    setStep(3);
  };

  const completeBooking = () => {
    // In a real app, we would send this to the API
    console.log("Booking completed:", booking);

    // Navigate to dashboard
    router.push("/dashboard");
  };

  return (
    <>
      <div className="flex justify-center mb-8">
        <div className="flex items-center">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              step >= 1 ? "bg-purple-600" : "bg-gray-700"
            }`}>
            1
          </div>
          <div
            className={`w-20 h-1 ${
              step >= 2 ? "bg-purple-600" : "bg-gray-700"
            }`}></div>
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              step >= 2 ? "bg-purple-600" : "bg-gray-700"
            }`}>
            2
          </div>
          <div
            className={`w-20 h-1 ${
              step >= 3 ? "bg-purple-600" : "bg-gray-700"
            }`}></div>
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              step >= 3 ? "bg-purple-600" : "bg-gray-700"
            }`}>
            3
          </div>
        </div>
      </div>

      {step === 1 && (
        <TripSelector
          destinations={destinations}
          seatClasses={seatClasses}
          initialValues={booking}
          onSubmit={handleTripSelection}
        />
      )}

      {step === 2 && (
        <AccommodationList
          accommodations={filteredAccommodations}
          onSelect={handleAccommodationSelection}
        />
      )}

      {step === 3 && (
        <div className="max-w-xl mx-auto bg-gray-900 p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-6">Review and Confirm</h2>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Trip Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-400">Destination</p>
                <p>
                  {destinations.find((d) => d.id === booking.destination)?.name}
                </p>
              </div>
              <div>
                <p className="text-gray-400">Departure</p>
                <p>{booking.departureDate}</p>
              </div>
              <div>
                <p className="text-gray-400">Return</p>
                <p>{booking.returnDate}</p>
              </div>
              <div>
                <p className="text-gray-400">Travelers</p>
                <p>{booking.passengers}</p>
              </div>
              <div>
                <p className="text-gray-400">Seat Class</p>
                <p>
                  {seatClasses.find((s) => s.id === booking.seatClass)?.name}
                </p>
              </div>
              <div>
                <p className="text-gray-400">Accommodation</p>
                <p>
                  {
                    accommodations.find((a) => a.id === booking.accommodation)
                      ?.name
                  }
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-2">Price Breakdown</h3>
            <div className="border-t border-gray-700 pt-4">
              <div className="flex justify-between mb-2">
                <span>Base fare (per person)</span>
                <span>₿ 25,000</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>
                  Seat class (
                  {seatClasses.find((s) => s.id === booking.seatClass)?.name})
                </span>
                <span>
                  ₿{" "}
                  {seatClasses.find((s) => s.id === booking.seatClass)
                    ?.priceMultiplier * 10000}
                </span>
              </div>
              <div className="flex justify-between mb-2">
                <span>
                  Accommodation (
                  {
                    accommodations.find((a) => a.id === booking.accommodation)
                      ?.name
                  }
                  )
                </span>
                <span>
                  ₿{" "}
                  {accommodations.find((a) => a.id === booking.accommodation)
                    ?.pricePerNight * 5}
                </span>
              </div>
              <div className="flex justify-between font-bold text-xl mt-4 pt-4 border-t border-gray-700">
                <span>Total</span>
                <span>
                  ₿{" "}
                  {25000 +
                    seatClasses.find((s) => s.id === booking.seatClass)
                      ?.priceMultiplier *
                      10000 +
                    accommodations.find((a) => a.id === booking.accommodation)
                      ?.pricePerNight *
                      5}
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => setStep(2)}
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded">
              Back
            </button>
            <button
              onClick={completeBooking}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded">
              Complete Booking
            </button>
          </div>
        </div>
      )}
    </>
  );
}

// Loading component to show during suspense
function BookingLoading() {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
    </div>
  );
}

// Main page component with suspense
export default function BookingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Book Your Space Adventure
        </h1>

        <Suspense fallback={<BookingLoading />}>
          <BookingContent />
        </Suspense>
      </main>
    </div>
  );
}
