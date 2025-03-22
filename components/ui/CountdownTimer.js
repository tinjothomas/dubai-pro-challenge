"use client";

import { useState, useEffect } from "react";

export default function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timeComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timeComponents.push(
      <div key={interval} className="text-center">
        <div className="text-3xl font-bold mb-1">{timeLeft[interval]}</div>
        <div className="text-xs text-gray-400 uppercase">{interval}</div>
      </div>
    );
  });

  return (
    <div className="bg-gray-800 rounded-lg p-4 mt-2">
      <p className="text-sm text-gray-400 mb-3">Launch Countdown</p>
      <div className="flex justify-between items-center">
        {timeComponents.length ? (
          timeComponents
        ) : (
          <p className="text-center">Launched!</p>
        )}
      </div>
    </div>
  );
}
