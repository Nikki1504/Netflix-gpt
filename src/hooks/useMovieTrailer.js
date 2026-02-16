import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/Store/Slice/moviesSlice";

const useMovieTrailer = (movie_id) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movie_id +
        "/videos?language=en-US",
      API_OPTIONS,
    );
    const json = await data.json();

    const officialTrailer = json.results.find(
      (video) => video.type === "Trailer" && video.name === "Official Trailer",
    );
    const fallbackTrailer = json.results.find(
      (video) => video.type === "Trailer",
    );
    const trailer = officialTrailer || fallbackTrailer;

    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    !trailerVideo && getMovieVideos();
  }, []);
};

export default useMovieTrailer;
