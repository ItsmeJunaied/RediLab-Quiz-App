"use client";
import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const targetDate = new Date("2024-12-31T23:59:59");
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Calculate the time remaining
  function calculateTimeLeft() {
    const difference = new Date(targetDate) - new Date();
    return {
      days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24)),
      minutes: Math.max(0, Math.floor((difference / 1000 / 60) % 60)),
      seconds: Math.max(0, Math.floor((difference / 1000) % 60)),
    };
  }

  // Update the timer every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const calculatePercentage = (value, max) => (value / max) * 100;

  return (
    <div className="flex space-x-6 justify-center items-center">
      {[
        { label: "Days", value: timeLeft.days, max: 30 },
        { label: "Hours", value: timeLeft.hours, max: 24 },
        { label: "Minutes", value: timeLeft.minutes, max: 60 },
        { label: "Seconds", value: timeLeft.seconds, max: 60 },
      ].map((unit, index) => (
        <div key={index} className="flex flex-col items-center">
          <div
            className="relative w-12 h-12 rounded-full flex justify-center items-center"
            style={{
              background: `conic-gradient(#f472b6 ${calculatePercentage(
                unit.value,
                unit.max
              )}%, #fde4e4 0%)`,
            }}
          >
            <div className="absolute w-10 h-10 bg-white rounded-full flex justify-center items-center">
              <span className="text-pink-500 text-lg font-semibold">
                {unit.value}
              </span>
            </div>
          </div>
          <p className="mt-2 text-pink-500 text-sm font-medium">{unit.label}</p>

        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
