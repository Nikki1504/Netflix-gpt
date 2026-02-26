import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MediaCard = ({ posterPath, mode = "browse" }) => {
  if (!posterPath) return null;
  const baseStyle =
    "flex-shrink-0 transition-transform duration-300 hover:scale-110 hover:z-20";

  const sizeStyle =
    mode === "home" ? "w-1/2 sm:w-[48%] md:w-[20%]" : "w-36 md:w-44";
  return (
    <div className={`${baseStyle} ${sizeStyle}`}>
      <img
        className="rounded-md w-full"
        alt="movie-poster"
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};

export default MediaCard;
