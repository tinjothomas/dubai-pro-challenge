// app/page.js - Homepage
import Link from "next/link";
import Navigation from "../components/ui/Navigation";
import PricingCards from "../components/ui/PricingCards";
import { destinations } from "../lib/data";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            STELLAR VOYAGES
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Your journey beyond Earth begins here
          </p>
          <Link
            href="/booking"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all">
            Book Your Trip
          </Link>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Popular Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.slice(0, 3).map((destination) => (
              <div
                key={destination.id}
                className="bg-gray-900 rounded-xl overflow-hidden">
                <div className="h-48 bg-gray-800 flex items-center justify-center">
                  <span className="text-6xl">{destination.emoji}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
                  <p className="text-gray-400 mb-4">
                    {destination.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-purple-400 font-bold">
                      {destination.distance} light-minutes
                    </span>
                    <Link
                      href={`/booking?destination=${destination.id}`}
                      className="text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">
                      Explore
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Travel Packages
          </h2>
          <PricingCards />
        </section>
      </main>

      <footer className="bg-gray-900 py-8 text-center text-gray-400">
        <p>© 2025 Stellar Voyages. All rights reserved.</p>
      </footer>
    </div>
  );
}
