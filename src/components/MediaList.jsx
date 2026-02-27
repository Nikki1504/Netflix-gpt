import React from "react";
import MediaCard from "./MediaCard";

const MediaList = ({ title, medias, mode = "browse" }) => {
  return (
    <div className="px-4 md:px-12 py-5">
      <h1 className="text-lg font-bold md:text-3xl py-3 text-white">{title}</h1>
      <div className="overflow-x-auto scroll-smooth">
        <div className="flex gap-3">
          {medias?.map((media) => (
            <MediaCard
              key={media.id}
              posterPath={media.poster_path}
              mode={mode}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaList;
