import React from "react";

const GptShimmer = () => {
  return (
    <div className="p-4 m-4 bg-black/80">
      {[1, 2, 3].map((section) => (
        <div key={section} className="mb-6">
          <div className="h-6 w-48 bg-neutral-600 animate-pulse mb-4 rounded"></div>

          <div className="flex space-x-3 overflow-hidden">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="w-36 md:w-44 h-52 bg-neutral-600 animate-pulse rounded-md"
              ></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GptShimmer;
