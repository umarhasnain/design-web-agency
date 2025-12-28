'use client';

import React, { useState, useEffect, CSSProperties } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const slides = [
  '/iamge/slider-img-1.webp',
  '/iamge/slider-img-2.webp',
  '/iamge/slider-img-3.webp',
  '/iamge/slider-img-4.webp',
];

const Slider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const texts = [
    "GROW YOUR BRAND WITH US",
    "BUILD A STRONG IDENTITY",
    "CONNECT WITH YOUR AUDIENCE",
  ];

  /* AOS INIT */
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  /* IMAGE SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  /* TEXT SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex(prev => (prev + 1) % texts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrent(prev => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent(prev => (prev - 1 + slides.length) % slides.length);

  /* ================= STYLES ================= */

  const container: CSSProperties = {
    minHeight: '100vh',
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#000',

    /* 🔥 MAIN FIX */
    paddingTop: '140px', // header height space
    boxSizing: 'border-box',
  };

  const arrowStyle: CSSProperties = {
    fontSize: '40px',
    color: '#fff',
    cursor: 'pointer',
    padding: '20px',
    zIndex: 5,
    userSelect: 'none',
    position: 'absolute',
    top: '55%',
    transform: 'translateY(-50%)',
  };

  const imageWrapper: CSSProperties = {
    position: 'relative',
    width: '100%',
    maxWidth: '900px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
  };

  const laptopImageStyle: CSSProperties = {
    width: '60%',
    height: 'auto',
    zIndex: 1,
  };

  const screenImageStyle: CSSProperties = {
    position: 'absolute',
    top: '6%',
    left: '12%',
    width: '76%',
    height: '78%',
    objectFit: 'contain',
    borderRadius: '6px',
    zIndex: 2,
  };

  const textWrapper: CSSProperties = {
    marginTop: '25px',
    textAlign: 'center',
    color: '#fff',
    minHeight: '90px',
  };

  const headingStyle: CSSProperties = {
    fontSize: '32px',
    fontWeight: 'bold',
    transition: 'opacity 0.5s ease-in-out',
  };

  const subTextStyle: CSSProperties = {
    fontSize: '16px',
    marginTop: '10px',
    color: '#ddd',
  };

  const buttonStyle: CSSProperties = {
    marginTop: '18px',
    padding: '12px 26px',
    fontSize: '15px',
    fontWeight: 'bold',
    backgroundColor: '#5e0e9a',
    color: '#fff',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
  };

  return (
    <section className='mt-[-130px] py-6' style={container}>
      {/* LEFT ARROW */}
      <div onClick={prevSlide} style={{ ...arrowStyle, left: '15px' }} data-aos="fade-right">
        &#8592;
      </div>

      {/* IMAGE */}
      <div style={imageWrapper}>
        <img
          src="/laptop-img.webp"
          alt="Laptop"
          style={laptopImageStyle}
          data-aos="fade-up"
        />
        <img
          src={slides[current]}
          alt="Slide"
          style={screenImageStyle}
          key={current}
          data-aos="zoom-in"
        />
      </div>

      {/* RIGHT ARROW */}
      <div onClick={nextSlide} style={{ ...arrowStyle, right: '15px' }} data-aos="fade-left">
        &#8594;
      </div>

      {/* TEXT */}
      <div style={textWrapper}>
        <h1 key={textIndex} style={headingStyle} data-aos="fade-up">
          {texts[textIndex]}
        </h1>
        <p style={subTextStyle} data-aos="fade-up">
          We develop a strong brand identity that connects with your audience!
        </p>
        <button style={buttonStyle} data-aos="zoom-in">
          Read More
        </button>
      </div>
    </section>
  );
};

export default Slider;
