import Link from "next/link";

export default function DashboardView({ bookings }) {
  return (
    <div className="space-y-4">
      {bookings.map((booking, index) => (
        <div key={index} className="bg-gray-900 rounded-xl p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold flex items-center">
                <span className="mr-2">{booking.destinationEmoji}</span>
                {booking.destination}
              </h3>
              <p className="text-gray-400">Booking #{booking.id}</p>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                booking.status === "confirmed"
                  ? "bg-green-900 text-green-300"
                  : booking.status === "completed"
                  ? "bg-blue-900 text-blue-300"
                  : "bg-yellow-900 text-yellow-300"
              }`}>
              {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-gray-400 text-sm">Departure</p>
              <p>{booking.departureDate}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Return</p>
              <p>{booking.returnDate}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Travelers</p>
              <p>
                {booking.passengers}{" "}
                {booking.passengers === 1 ? "person" : "people"}
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Class</p>
              <p>
                {booking.seatClass.charAt(0).toUpperCase() +
                  booking.seatClass.slice(1)}
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-gray-800">
            <div>
              <span className="text-gray-400 text-sm">Total Price</span>
              <p className="text-xl font-bold text-purple-400">
                ₿ {booking.totalPrice.toLocaleString()}
              </p>
            </div>
            <Link
              href={`/booking/${booking.id}`}
              className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm">
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
