"use client";
import React, { useState } from "react";
// import Portfolio from "../components/Portfolio";/  // ✅ Yehi use hoga
import ContactForm from "../components/Home-form";
import AnimatedContact from "../components/Home-contact";
import Footer from "../components/Home-footer";
// import StatsSection from "../components/HomeHitting";
import Slider from "react-slick";
import Portfolio from "../components/Home-work";
import StatsSection from "../components/Home-2package";
// import Portfolio from "../components/Home-video-animtion";

const HeroSection: React.FC = () => {
 return (
  <>
    {/* ---------- HERO SECTION ---------- */}
    <section
      className="relative w-full h-[600px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('/iamge/pricing-page-banner (1).jpg')", // ✅ Make sure folder is /image not /iamge
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0"></div>

      {/* Content */}
      <div className="relative  text-center backdrop rounded-xl shadow-lg px-2 py-2  ">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl mt-18 font-extrabold text-white ">
          <span className="bg-gradient-to-r from-white via-white to-white bg-clip-text  text-transparent">
            CREATING BRAND<br />
            FOCUSED CREATIVE<br />
            SOLUTIONS
          </span>
        </h1>

        {/* ✅ Image below heading */}
        <div className="mt-6 flex justify-center">
          <img
            src="/iamge/pricing-page-banner-img.webp" // ✅ Replace with your image name
            alt="Hero Under Image"
            className="w-240 h-auto"
          />
        </div>
      </div>
    </section>
      <div>
       
        <Portfolio/>

        <StatsSection/>
        <ContactForm />
        <AnimatedContact />
        <Footer />
      </div>
  </>
    
    
  );
};
export default HeroSection;
