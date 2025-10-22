"use client";
import React from "react";

const WorkProcess = () => {
  const steps = [
    {
      id: "01",
      title: "Research",
      img: "https://images.unsplash.com/photo-1522205408450-add114ad53fe",
      text: "We start by understanding client needs, audience, and goals.",
    },
    {
      id: "02",
      title: "Design",
      img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
      text: "Our creative team works to produce unique, modern designs.",
    },
    {
      id: "03",
      title: "Revision",
      img: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa",
      text: "Once satisfied with our designs, we share with the client and remain open to feedback.",
    },
    {
      id: "04",
      title: "Delivery",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      text: "We deliver high-quality final work ready to use or launch.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Our Work Process</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Do you want to get recognized? We have been providing a broad range of
          business logo design, branding, digital marketing and development
          services.
        </p>
      </div>

      {/* ✅ Full-width image grid with no rounded borders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
        {steps.map((step) => (
          <div
            key={step.id}
            className="relative group overflow-hidden cursor-pointer"
          >
            {/* ✅ Bigger Image, Edge-to-edge */}
            <img
              src={step.img}
              alt={step.title}
              className="w-full h-[450px] sm:h-[380px] md:h-[420px] lg:h-[460px] object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* ✅ Blue overlay hover effect */}
            <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-700/90 transition-all duration-500 flex flex-col items-center justify-center text-center p-6">
              <h3 className="text-5xl font-extrabold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {step.id}
              </h3>
              <h4 className="text-2xl font-semibold text-white mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {step.title}
              </h4>
              <p className="text-white mt-3 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-xs">
                {step.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkProcess;
