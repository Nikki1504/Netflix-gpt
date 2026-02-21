import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MediaCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 md:w-44 pr-3">
      <img
        className="rounded-md"
        alt="movie-poster"
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};

export default MediaCard;
