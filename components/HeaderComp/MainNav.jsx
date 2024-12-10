"use client"
import React, { useState } from "react";

const MainNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-black border-b-4 border-[#DC3545] py-6">
      <div className="flex justify-between items-center max-w-5xl w-full mx-auto px-4">
        {/* Logo */}
        <img
          className="w-[150px] h-[60px] md:w-[200px] md:h-[90px] lg:hidden"
          src="/gamebd-logo-transparent.png"
          alt="gamebd-logo.png"
        />

        {/* Menu Links */}
        <div className="hidden lg:flex gap-7">
          {["Home", "Leaderboard", "Buy Coin", "How to Play", "Help", "Contact", "Login"].map((link, index) => (
            <div key={index} className="text-white font-bold text-base uppercase cursor-pointer">
              {link}
            </div>
          ))}
        </div>

        {/* Hamburger Menu Button (Mobile/Tablet Only) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18m-9 6h9" />
          </svg>
        </button>
      </div>

      {/* Mobile/Tablet Dropdown Menu */}
      <div
        className={`lg:hidden bg-black text-white overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-screen py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-start justify-start gap-4 lg:px-0 px-10">
          {["Home", "Leaderboard", "Buy Coin", "How to Play", "Help", "Contact", "Login"].map((link, index) => (
            <div
              key={index}
              className="text-white  text-start font-bold text-base uppercase cursor-pointer"
            >
              {link}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainNav;
