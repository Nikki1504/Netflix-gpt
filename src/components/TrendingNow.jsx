import React from "react";

const TrendingNow = () => {
  return (
    <div className="px-6 md:px-20 py-10">
      <h1 className="text-xl md:text-2xl font-semibold mb-4">Trending Now</h1>

      <div className="flex overflow-x-scroll gap-6 no-scrollbar">
        {Array(5)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="relative min-w-[160px] md:min-w-[200px]"
            >
              <img
                className="rounded-lg"
                src="https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
                alt="movie"
              />
              <span className="absolute bottom-2 left-2 text-5xl font-bold text-black/70">
                {index + 1}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TrendingNow;
