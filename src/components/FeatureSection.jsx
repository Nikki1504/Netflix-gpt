import React from "react";
import { FEATURES_DATA } from "../utils/data";

const FeaturesSection = () => {
  return (
    <section className="bg-black text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-20 py-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">
          More reasons to join
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES_DATA.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="relative overflow-hidden bg-gradient-to-br from-blue-950 to-red-950/40 rounded-2xl p-6 min-h-60 transition-transform duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-semibold mb-4 relative z-10">
                  {feature.title}
                </h3>
                <p className="text-neutral-300 font-semibold leading-relaxed relative z-10">
                  {feature.description}
                </p>
                <Icon className="absolute bottom-2 right-3 w-15 h-12  text-current opacity-20" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
