// app/layout.js - Root layout
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stellar Voyages - Space Travel Booking",
  description:
    "Book your next adventure to space stations, lunar hotels, and beyond!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
