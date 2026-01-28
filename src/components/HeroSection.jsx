import React from "react";
import { SIGN_IN_BG } from "../utils/constants";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative">
      <img
        className="h-screen w-screen object-cover"
        src={SIGN_IN_BG}
        alt="hero-bg"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 text-white flex flex-col justify-center items-center text-center px-10">
        <h1 className="text-3xl md:text-6xl font-extrabold">
          Unlimited movies, shows, and more
        </h1>
        <h2 className="text-lg md:text-2xl font-bold py-4">
          Starts at ₹149. Cancel anytime.
        </h2>
        <p className="text-sm md:text-base py-2">
          Ready to watch? Sign in to explore movies, TV shows, and more.
        </p>
        <Link to="/login">
          <button className="bg-red-600 px-6 py-4 rounded-md font-semibold cursor-pointer">
            Sign In →
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
