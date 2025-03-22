"use client";

export default function AccommodationList({ accommodations, onSelect }) {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Select Your Accommodation</h2>

      {accommodations.length === 0 ? (
        <div className="text-center py-12 bg-gray-900 rounded-xl">
          <p>
            Please select a destination first to view available accommodations.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {accommodations.map((accommodation) => (
            <div
              key={accommodation.id}
              className="bg-gray-900 rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition-all border border-gray-800 hover:border-purple-500"
              onClick={() => onSelect(accommodation.id)}>
              <div className="h-48 bg-gray-800 flex items-center justify-center">
                <span className="text-4xl">{accommodation.emoji}</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{accommodation.name}</h3>
                  <span className="bg-gray-800 px-2 py-1 rounded text-sm">
                    {accommodation.type}
                  </span>
                </div>
                <p className="text-gray-400 mb-4">
                  {accommodation.description}
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-purple-400 font-bold">
                      ₿ {accommodation.pricePerNight}
                    </span>
                    <span className="text-gray-500 text-sm"> / night</span>
                  </div>
                  <div className="flex items-center">
                    {Array.from({ length: accommodation.rating }).map(
                      (_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      )
                    )}
                  </div>
                </div>

                <ul className="mt-4 pt-4 border-t border-gray-800">
                  {accommodation.amenities.slice(0, 3).map((amenity, i) => (
                    <li
                      key={i}
                      className="flex items-center text-sm text-gray-400 mb-1">
                      <svg
                        className="w-4 h-4 text-purple-400 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"></path>
                      </svg>
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
