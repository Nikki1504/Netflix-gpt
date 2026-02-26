import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import TrendingNow from "./TrendingNow";
import FeaturesSection from "./FeatureSection";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="bg-black">
      <Header />
      <HeroSection />
      <TrendingNow />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Home;
