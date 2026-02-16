import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MediaCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 md:w-48 pr-2">
      <img
        className="rounded-md"
        alt="movie-poster"
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};

export default MediaCard;
