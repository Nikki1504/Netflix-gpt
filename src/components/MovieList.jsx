import React from "react";
import MediaCard from "./MediaCard";

const MovieList = ({ title, medias }) => {
  //   console.log(movies);
  return (
    <div className="px-4">
      <h1 className="text-lg md:text-3xl py-3 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {medias?.map((media) => (
            <MediaCard key={media.id} posterPath={media.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
