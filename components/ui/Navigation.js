import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-gray-900 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-purple-400">
          Stellar Voyages
        </Link>

        <div className="flex space-x-6">
          <Link href="/" className="text-white hover:text-purple-400">
            Home
          </Link>
          <Link href="/booking" className="text-white hover:text-purple-400">
            Book a Trip
          </Link>
          <Link href="/dashboard" className="text-white hover:text-purple-400">
            Dashboard
          </Link>
        </div>

        <div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}
