"use client";

import React from "react";

const StatsSection: React.FC = () => {
  const stats = [
    { number: "500+", label: "happy customers" },
    { number: "180+", label: "experienced designers" },
    { number: "10+", label: "years in the industry" },
    { number: "400+", label: "websites designed" },
    { number: "600+", label: "logos designed" },
  ];

  return (
    <section className="bg-black text-white py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-10 md:gap-16">
        
        {/* Left Heading */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Hitting <br /> New Records
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="flex flex-wrap justify-center md:justify-center gap-8 sm:gap-10 flex-1">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center min-w-[120px] sm:min-w-[140px]"
            >
              <h3 className="text-3xl sm:text-4xl font-extrabold">
                {stat.number}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 mt-1 capitalize">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center md:justify-end">
          <button className="px-6 sm:px-8 py-3 border border-white rounded-full hover:bg-blue hover:text-blue transition font-medium text-sm sm:text-base">
            GET STARTED NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
