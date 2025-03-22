// lib/data.js - Mock data for the space travel app

// Destinations data
export const destinations = [
  {
    id: "iss",
    name: "International Space Station",
    emoji: "🛰️",
    description:
      "Experience zero gravity in Earth's orbit at the International Space Station.",
    distance: "1",
    travelTime: "2 hours",
  },
  {
    id: "moon",
    name: "Lunar Colony",
    emoji: "🌕",
    description: "Visit humanity's first permanent settlement on the Moon.",
    distance: "1.3",
    travelTime: "3 days",
  },
  {
    id: "mars",
    name: "Mars Base Alpha",
    emoji: "🔴",
    description:
      "Explore the red planet and witness the beginnings of terraforming.",
    distance: "12.5",
    travelTime: "3 months",
  },
  {
    id: "venus",
    name: "Venus Cloud City",
    emoji: "☁️",
    description:
      "Float above the acidic atmosphere in our luxury cloud platform.",
    distance: "6.2",
    travelTime: "2 months",
  },
  {
    id: "europa",
    name: "Europa Research Station",
    emoji: "❄️",
    description:
      "Discover the mysteries beneath the icy surface of Jupiter's moon.",
    distance: "33.6",
    travelTime: "6 months",
  },
  {
    id: "titan",
    name: "Titan Methane Lakes",
    emoji: "🌊",
    description: "Sail on the liquid methane lakes of Saturn's largest moon.",
    distance: "70.8",
    travelTime: "9 months",
  },
];

// Seat classes
export const seatClasses = [
  {
    id: "economy",
    name: "Economy",
    description: "Standard space travel with essential amenities.",
    priceMultiplier: 1,
    features: ["Basic life support", "Standard meals", "Shared viewing area"],
  },
  {
    id: "business",
    name: "Business",
    description:
      "Enhanced comfort with extra features for space professionals.",
    priceMultiplier: 2.5,
    features: [
      "Enhanced life support",
      "Gourmet meals",
      "Private viewing pod",
      "Work communication suite",
    ],
  },
  {
    id: "first",
    name: "First Class",
    description:
      "Luxury space travel with personalized service and premium amenities.",
    priceMultiplier: 5,
    features: [
      "Premium life support",
      "Chef-prepared meals",
      "Private observation deck",
      "Personal concierge",
      "Space walk priority",
    ],
  },
];

// Accommodations
export const accommodations = [
  {
    id: "iss-standard",
    name: "ISS Visitor Quarters",
    type: "Space Station",
    destinationId: "iss",
    description:
      "Standard accommodations aboard the International Space Station.",
    pricePerNight: 5000,
    rating: 4,
    amenities: ["Sleeping pod", "Entertainment system", "Earth view window"],
    emoji: "🛌",
  },
  {
    id: "iss-premium",
    name: "ISS Observation Suite",
    type: "Space Station",
    destinationId: "iss",
    description: "Premium accommodations with panoramic Earth views.",
    pricePerNight: 12000,
    rating: 5,
    amenities: [
      "Luxury sleeping quarters",
      "Premium food service",
      "Panoramic Earth viewing deck",
      "Private communication system",
    ],
    emoji: "🔭",
  },
  {
    id: "lunar-base",
    name: "Lunar Base Habitat",
    type: "Moon Base",
    destinationId: "moon",
    description: "Standard living quarters in our lunar colony.",
    pricePerNight: 8000,
    rating: 3,
    amenities: ["Gravity simulation", "Lunar excursion access", "Basic meals"],
    emoji: "🏠",
  },
  {
    id: "lunar-dome",
    name: "Lunar Luxury Dome",
    type: "Moon Resort",
    destinationId: "moon",
    description:
      "Luxury accommodations with Earth views and crater-side location.",
    pricePerNight: 20000,
    rating: 5,
    amenities: [
      "Private dome",
      "Regolith spa treatment",
      "Gourmet dining",
      "Priority rover access",
    ],
    emoji: "🏙️",
  },
  {
    id: "mars-habitat",
    name: "Mars Pioneer Quarters",
    type: "Mars Base",
    destinationId: "mars",
    description: "Functional accommodations for the adventurous Mars explorer.",
    pricePerNight: 12000,
    rating: 3,
    amenities: [
      "Mars-adapted life support",
      "Excursion suit access",
      "Research lab access",
    ],
    emoji: "🏕️",
  },
  {
    id: "mars-dome",
    name: "Olympus Mons Resort",
    type: "Mars Luxury",
    destinationId: "mars",
    description: "Luxury accommodations with stunning views of Olympus Mons.",
    pricePerNight: 35000,
    rating: 5,
    amenities: [
      "Private sealed habitat",
      "Martian spa treatments",
      "Gourmet synthesized cuisine",
      "Private expedition team",
    ],
    emoji: "🌋",
  },
  {
    id: "venus-pod",
    name: "Venus Floating Pod",
    type: "Cloud Platform",
    destinationId: "venus",
    description: "Standard accommodation in the Venus cloud city.",
    pricePerNight: 18000,
    rating: 4,
    amenities: [
      "Cloud viewing windows",
      "Heat shield technology",
      "Atmospheric sampling equipment",
    ],
    emoji: "💨",
  },
  {
    id: "europa-lab",
    name: "Europa Research Quarters",
    type: "Research Station",
    destinationId: "europa",
    description:
      "Scientific quarters in the Europa subsurface research station.",
    pricePerNight: 25000,
    rating: 3,
    amenities: [
      "Ice cavern access",
      "Research equipment",
      "Subsurface viewing ports",
    ],
    emoji: "🧪",
  },
  {
    id: "titan-barge",
    name: "Titan Methane Barge",
    type: "Floating Habitat",
    destinationId: "titan",
    description: "Floating accommodation on the methane seas of Titan.",
    pricePerNight: 40000,
    rating: 4,
    amenities: [
      "Methane lake tours",
      "Extreme cold protection",
      "Submarine exploration",
    ],
    emoji: "⛵",
  },
];

// Mock user bookings
export const userBookings = [
  {
    id: "BK12345",
    destinationId: "moon",
    destination: "Lunar Colony",
    destinationEmoji: "🌕",
    departureDate: "2025-06-15",
    returnDate: "2025-06-22",
    passengers: 2,
    seatClass: "business",
    accommodation: "lunar-dome",
    status: "confirmed",
    totalPrice: 175000,
  },
  {
    id: "BK54321",
    destinationId: "iss",
    destination: "International Space Station",
    destinationEmoji: "🛰️",
    departureDate: "2025-09-03",
    returnDate: "2025-09-06",
    passengers: 1,
    seatClass: "economy",
    accommodation: "iss-standard",
    status: "confirmed",
    totalPrice: 50000,
  },
  {
    id: "BK98765",
    destinationId: "mars",
    destination: "Mars Base Alpha",
    destinationEmoji: "🔴",
    departureDate: "2024-11-15",
    returnDate: "2025-01-15",
    passengers: 2,
    seatClass: "first",
    accommodation: "mars-dome",
    status: "completed",
    totalPrice: 450000,
  },
];

// AI travel tips
export const travelTips = [
  {
    destinationId: "iss",
    title: "Zero Gravity Adaptation",
    content:
      "Take your time adapting to zero gravity. Move slowly, use handrails, and avoid sudden movements for the first 24 hours.",
  },
  {
    destinationId: "iss",
    title: "Space Photography Tips",
    content:
      "For the best Earth photos, use the cupola module during orbital night, then wait for sunrise. Set your camera to burst mode to capture the perfect moment.",
  },
  {
    destinationId: "iss",
    title: "Stay Hydrated",
    content:
      "Dehydration occurs more quickly in space. Drink water regularly even if you dont feel thirsty.",
  },
  {
    destinationId: "moon",
    title: "Lunar Gravity Adjustment",
    content:
      "The Moons gravity is 1/6 of Earths. Take smaller steps and be careful with your movements to avoid unintended jumps.",
  },
  {
    destinationId: "moon",
    title: "Temperature Management",
    content:
      "Lunar day/night temperature variance is extreme. Always check the habitat schedule before planning excursions.",
  },
  {
    destinationId: "moon",
    title: "Dust Protection",
    content:
      "Lunar dust is extremely abrasive. Always use the airlocks cleaning protocols when returning from surface excursions.",
  },
  {
    destinationId: "mars",
    title: "Radiation Safety",
    content:
      "Mars has limited magnetic protection from solar radiation. Always monitor your exposure time and wear your personal dosimeter.",
  },
  {
    destinationId: "mars",
    title: "Dust Storm Preparation",
    content:
      "If the weather system indicates a dust storm, return to base immediately. Visibility can drop to zero within minutes.",
  },
  {
    destinationId: "mars",
    title: "Communications Delay",
    content:
      "Remember theres a 4-20 minute communication delay with Earth depending on orbital positions. Plan video calls accordingly.",
  },
];

// Utils for booking calculations
export const calculateTripPrice = (
  destination,
  seatClass,
  accommodation,
  passengers,
  nights
) => {
  const basePrice = 25000; // Base price per person
  const seatClassMultiplier =
    seatClasses.find((s) => s.id === seatClass)?.priceMultiplier || 1;
  const accommodationPrice =
    accommodations.find((a) => a.id === accommodation)?.pricePerNight || 0;

  return (
    basePrice * seatClassMultiplier * passengers + accommodationPrice * nights
  );
};
