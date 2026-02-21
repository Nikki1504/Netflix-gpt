import React from "react";
import { Play, Info } from "lucide-react";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="w-screen aspect-video pt-[30%] md:pt-[20%] px-6 md:px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-xl mb-3 md:text-5xl font-semibold md:font-bold">
        {title}
      </h1>
      <p className="hidden md:inline-block py-3 text-lg w-1/4">
        {description?.slice(0, 180)}...
      </p>
      <div className="flex">
        <button className="bg-white text-black flex items-center gap-2 font-semibold py-2 px-4 md:px-10 rounded-md cursor-pointer hover:bg-white/80 transition">
          <Play size={20} fill="black" />
          <span>Play</span>
        </button>
        <button className="px-4 mx-2 flex items-center gap-2 bg-neutral-400/50 text-white font-semibold py-2 md:px-10 rounded-md cursor-pointer hover:bg-neutral-800/60 transition">
          <Info size={20} />
          <span>More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
