import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import {
  addGptMovieResult,
  clearGptResults,
  setLoading,
} from "../utils/Store/Slice/gptSlice";

const GptSearchBar = () => {
  const langkey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS,
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    if (!searchText.current.value) {
      dispatch(clearGptResults());
      return;
    }
    const gptQuery =
      "Act as a Movie Recommendation System and suggest some movies for the query : " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma separated like this example result given ahead: Sholay, Don, Lakshya, Golmaal, Dhurandhar.";

    try {
      dispatch(setLoading(true));

      const response = await fetch("/gpt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: gptQuery }),
      });

      const data = await response.json();

      const gptMovies = data.reply.split(",");
      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

      const tmdbResults = await Promise.all(promiseArray);

      dispatch(
        addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }),
      );
    } catch (error) {
      console.error("Error:", error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-neutral-900 grid grid-cols-12 rounded-full"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 bg-gray-300 col-span-9 rounded-l-full"
          placeholder={lang[langkey].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 m-4 col-span-3 bg-emerald-950/70 text-white font-bold rounded-r-full"
          onClick={handleGptSearchClick}
        >
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
