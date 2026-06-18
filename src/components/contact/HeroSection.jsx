import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import hero1 from "../../assets/hero-1.jpg";
import hero2 from "../../assets/hero-2.jpg";
import hero3 from "../../assets/hero-3.jpg";
import hero4 from "../../assets/hero-4.jpg";
import hero5 from "../../assets/hero-5.jpg";

const HeroSection = () => {
  const images = [hero1, hero2, hero3, hero4, hero5];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative h-[220px] md:h-[420px] overflow-hidden font-roboto">

      {/* Images */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Hero ${index + 1}`}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4">

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold tracking-wide">
          Contact With Us
        </h1>

        {/* Breadcrumb */}
        <p className="mt-3 text-sm md:text-base text-white/80">
          Home &gt; Pages &gt; Contact
        </p>

      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-3 md:left-6 top-1/2 z-30 flex h-8 w-8 md:h-10 md:w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md hover:bg-white/30 transition-all duration-300 text-base md:text-xl"
        aria-label="Previous slide"
      >
        <FaArrowLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 md:right-6 top-1/2 z-30 flex h-8 w-8 md:h-10 md:w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md hover:bg-white/30 transition-all duration-300 text-base md:text-xl"
        aria-label="Next slide"
      >
        <FaArrowRight />
      </button>

    </section>
  );
};

export default HeroSection;