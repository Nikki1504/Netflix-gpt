import React from "react";
import { SIGN_IN_BG } from "../utils/constants";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-black">
      <img
        className="w-full h-screen object-cover"
        src={SIGN_IN_BG}
        alt="hero-bg"
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 text-white flex flex-col justify-center items-center text-center px-6 md:px-20">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold md:max-w-2xl xl:max-w-3xl">
          Unlimited movies, shows, and more
        </h1>
        <h2 className="text-lg md:text-2xl md:max-w-2xl font-bold py-4">
          Starts at ₹149. Cancel anytime.
        </h2>
        <p className="text-sm md:text-base py-2 max-w-xl">
          Ready to watch? Sign in to explore movies, TV shows, and more.
        </p>
        <Link to="/login">
          <button className="bg-red-600 mt-3 text-xl px-6 py-3 md:px-8 md:py-4 rounded-md font-semibold cursor-pointer hover:bg-red-700 transition">
            Sign In →
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
