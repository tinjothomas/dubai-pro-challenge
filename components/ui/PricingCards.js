import Link from "next/link";

export default function PricingCards() {
  const packages = [
    {
      name: "Orbital Explorer",
      price: "₿ 25,000",
      features: [
        "3-day Earth orbit experience",
        "Economy class seating",
        "Basic space food package",
        "One spacewalk experience",
        "Digital photography package",
      ],
      highlighted: false,
    },
    {
      name: "Lunar Vacation",
      price: "₿ 75,000",
      features: [
        "7-day Moon visit",
        "Business class travel",
        "Lunar rover excursion",
        "Luxury crater-view accommodation",
        "Gourmet space cuisine",
        "Personalized space suit",
      ],
      highlighted: true,
    },
    {
      name: "Mars Expedition",
      price: "₿ 250,000",
      features: [
        "30-day Mars journey",
        "First-class spacecraft suite",
        "Red Planet exploration package",
        "Olympus Mons hiking expedition",
        "Exclusive Mars colony experience",
        "Full medical & fitness support",
      ],
      highlighted: false,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {packages.map((pkg, index) => (
        <div
          key={index}
          className={`
            rounded-xl overflow-hidden
            ${
              pkg.highlighted
                ? "bg-gradient-to-b from-purple-900 to-gray-900 border border-purple-500"
                : "bg-gray-900"
            }
          `}>
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
            <div className="text-3xl font-bold mb-6 text-purple-400">
              {pkg.price}
            </div>

            <ul className="mb-8 space-y-3">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-purple-400 mr-2 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/booking"
              className={`
              block w-full py-3 px-4 rounded font-bold text-center
              ${
                pkg.highlighted
                  ? "bg-purple-600 hover:bg-purple-700 text-white"
                  : "bg-gray-800 hover:bg-gray-700 text-white"
              }
            `}>
              Book Package
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
