import React from "react";
import useTrendingNow from "../hooks/useTrendingNow";
import MediaList from "./MediaList";
import { useSelector } from "react-redux";

const TrendingNow = () => {
  useTrendingNow();
  const movies = useSelector((store) => store.movies);
  return (
    <section className="relative bg-black z-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-8 md:py-12">
        <MediaList
          title="Trending Now"
          medias={movies.trendingNowMovies}
          mode="home"
        />
      </div>
    </section>
  );
};

export default TrendingNow;
