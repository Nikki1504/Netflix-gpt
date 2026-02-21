import React from "react";

const MediaShimmer = () => {
  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-36 pl-3 md:pl-12 relative z-20">
        {[1, 2, 3, 4, 5, 6].map((section) => (
          <div key={section} className="px-4 mb-8">
            <div className="h-8 w-56 bg-neutral-700 animate-pulse rounded mb-4"></div>

            <div className="flex overflow-x-hidden">
              <div className="flex">
                {[...Array(20)].map((_, index) => (
                  <div key={index} className="w-36 md:w-44 pr-3">
                    <div className="h-52 bg-neutral-700 animate-pulse rounded-md"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaShimmer;
