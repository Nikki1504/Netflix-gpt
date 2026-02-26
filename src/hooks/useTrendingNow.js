import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTrendingNowMovies } from "../utils/Store/Slice/moviesSlice";

const useTrendingNow = () => {
  const dispatch = useDispatch();
  const trendingMovies = useSelector((store) => store.movies.popularMovies);

  const getTrendingNow = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/week?page=1",
      API_OPTIONS,
    );
    const json = await data.json();
    const topmovies = json.results.slice(0, 10);
    dispatch(addTrendingNowMovies(topmovies));
  };

  useEffect(() => {
    !trendingMovies && getTrendingNow();
  }, []);
};

export default useTrendingNow;
