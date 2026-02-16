import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const tvSeries = useSelector((store) => store.tv);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="mt-0 md:-mt-36 pl-3 md:pl-12 relative z-20 ">
          <MovieList title={"Now Playing"} medias={movies.nowPlayingMovies} />
          <MovieList title={"Popular Movies"} medias={movies.popularMovies} />
          <MovieList
            title={"Top Rated Movies"}
            medias={movies.topRatedMovies}
          />
          <MovieList title={"Upcoming Movies"} medias={movies.upcomingMovies} />
          <MovieList title={"Popular Series"} medias={tvSeries.popularShows} />
          <MovieList
            title={"Top Rated Series"}
            medias={tvSeries.topRatedShows}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
