"use client";

import React from "react";
import Slider from "react-slick";
import "animate.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StatsSection from "../components/Home-2package";
import WorkProcess from "../components/Home-process";
import Awards from "../components/Home-awards";
import Features from "../components/Home-digital";
import ContactForm from "../components/Home-form";
import Testimonials from "../components/Home-testimonial";
import AnimatedContact from "../components/Home-contact";
import Footer from "../components/Home-footer";

// ---------------- HERO WITH CARDS ----------------
const HeroWithCards: React.FC = () => {
  const cards = [
    { title: "", text: ".", img: "/iamge/exper-img-1.webp", position: "top" },
    { title: "", text: ".", img: "/iamge/exper-img-2.webp", position: "center" },
    {
      title: "Experienced Award-Winning Certified Company Where We Are Today",
      text: "Bloops Design was founded in 2010. Today, we have a huge portfolio of logo, website and branding projects.",
      position: "bottom",
      button: true,
    },
  ];

  const coreValues = [
    {
      title: "Service",
      description:
        "Our team is committed to fundamentals of ethics, we are equally stringent in upholding aesthetic values. From the classics to the kitsch, we respect artistic creation, not expressions of moral ambiguity. In no time you’ll find out how we work less like a hired agency and more like your very own creative team.",
      image: "/iamge/service-img-3 (1).webp",
    },
    {
      title: "Quality",
      description:
        "We bind the influence of forward-thinking and trendsetting in the digital space to craft high-quality, vibrant and bespoke brand experiences that empower our clients with a potent, competitive edge..",
      image: "/iamge/service-img-2 (1).webp",
    },
    {
      title: "Team Work",
      description:
        "Bloops Design drives digital sales and illustrates relatable moments of your brand by communicating your brand’s voice through stimulating content. We redefined your brand identity with superior visuals like graphic design, web solutions, imagery, and video production.",
      image: "/iamge/service-img-1.webp",
    },
  ];

  const stats = [
    { number: "500+", label: "happy customers" },
    { number: "180+", label: "experienced designers" },
    { number: "10+", label: "years in the industry" },
    { number: "400+", label: "website designed" },
    { number: "600+", label: "logo designed" },
  ];

  return (
    <div className="flex flex-col">
      {/* ✅ Hero Section */}
      <div
        className="relative bg-cover bg-center min-h-170 flex items-center justify-center "
        style={{
          backgroundImage: "url('/iamge/about-bannar.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b"></div>

        <div className="relative text-center max-w-3xl animate__animated animate__fadeInUp z-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            WE ARE MORE THAN JUST <br /> AN AVERAGE BRAND AGENCY
          </h1>
          <p className="mt-4 text-lg text-black font-bold">
            We develop a strong brand identity that connects <br />
            with your audience!
          </p>
          <button className="mt-6 bg-black text-white px-6 py-2 rounded-full shadow hover:bg-gray-200 hover:text-black transition font-semibold">
            Read More
          </button>
        </div>
      </div>

      {/* ✅ Cards */}
      <div className="bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto grid text-black md:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-lg overflow-hidden text-black transform transition duration-500 hover:scale-105 hover:shadow-2xl animate__animated animate__fadeInUp"
            >
              {card.img && (
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-80 object-cover"
                />
              )}
              <div
                className={`absolute text-white p-4 w-full ${
                  card.position === "top"
                    ? "top-4 text-center"
                    : card.position === "center"
                    ? "top-1/2 transform -translate-y-1/2 text-center"
                    : "bottom-4 text-center"
                }`}
              >
                <h3 className="text-xl text-black font-bold drop-shadow-lg">
                  {card.title}
                </h3>
                <p className="text-sm mt-2 text-black drop-shadow-md">{card.text}</p>
                {card.button && (
                  <button className="mt-4 px-6 py-2 border-2 border-green-400 text-green-500 font-semibold rounded-full hover:bg-green-400 hover:text-white transition">
                    Let’s Get Started
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Core Values */}
      <section className="bg-pink-50 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Our Core Values</h2>
        </div>
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 text-center"
            >
              <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full shadow-md">
                <img
                  src={value.image}
                  alt={value.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {value.title}
              </h3>
              <p className="mt-3 text-gray-600 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
     <StatsSection/>
     <WorkProcess/>
     <Awards/>
     <Features/>
     <Testimonials/>
     <ContactForm/>
     <AnimatedContact/>
     <Footer/>
    </div>
    
  );
};

export default HeroWithCards;
