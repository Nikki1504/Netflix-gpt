import React from "react";
import { useSelector } from "react-redux";
import MediaList from "./MediaList";
import MediaShimmer from "./MediaShimmer";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const tvSeries = useSelector((store) => store.tv);
  if (!movies.nowPlayingMovies) return <MediaShimmer />;
  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-36 pl-3 md:pl-12 relative z-20 ">
        <MediaList title={"Now Playing"} medias={movies.nowPlayingMovies} />
        <MediaList title={"Popular Movies"} medias={movies.popularMovies} />
        <MediaList title={"Top Rated Movies"} medias={movies.topRatedMovies} />
        <MediaList title={"Upcoming Movies"} medias={movies.upcomingMovies} />
        <MediaList title={"Popular Series"} medias={tvSeries.popularShows} />
        <MediaList title={"Top Rated Series"} medias={tvSeries.topRatedShows} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
