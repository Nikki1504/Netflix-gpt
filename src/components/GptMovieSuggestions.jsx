import React from "react";
import { useSelector } from "react-redux";
import MediaList from "./MediaList";
import GptShimmer from "./GptShimmer";

const GptMovieSuggestions = () => {
  const { movieNames, movieResults, isLoading } = useSelector(
    (store) => store.gpt,
  );
  if (isLoading) return <GptShimmer />;
  if (!movieNames) return null;
  return (
    <div className="p-4 m-4 bg-black/80 text-white">
      <div>
        {movieNames.map((movieName, index) => (
          <MediaList
            key={movieName}
            title={movieName}
            medias={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
