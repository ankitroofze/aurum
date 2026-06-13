import React, { useEffect, useState } from "react";

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
  }, [images.length]);

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
    <section className="relative w-full overflow-hidden h-[320px] md:h-[320px] lg:h-[420px]">
      {/* Images */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Hero ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark overlay - REMOVED (no black shadow) */}
      {/* <div className="absolute inset-0 bg-black/50 z-10" /> */}

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl font-bold font-roboto">
          About Us
        </h1>
        <p className="mt-4 text-sm md:text-base text-gray-200 font-roboto">
          Home &gt; Pages &gt; About Us
        </p>
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-3 md:left-6 top-1/2 z-30 flex h-8 w-8 md:h-10 md:w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md hover:bg-white/30 transition-all duration-300 text-xl md:text-2xl"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 md:right-6 top-1/2 z-30 flex h-8 w-8 md:h-10 md:w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md hover:bg-white/30 transition-all duration-300 text-xl md:text-2xl"
      >
        ›
      </button>
    </section>
  );
};

export default HeroSection;