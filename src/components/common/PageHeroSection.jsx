import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const defaultBackgrounds = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1400&q=80"
];

const PageHeroSection = ({
  title,
  breadcrumb,
  backgroundImages = defaultBackgrounds,
  overlay = true,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!backgroundImages || backgroundImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [backgroundImages]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? backgroundImages.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative h-[220px] md:h-[420px] overflow-hidden font-roboto">
      {backgroundImages.map((image, index) => (
        <img
          key={`${image}-${index}`}
          src={image}
          alt={`${title || "Page"} ${index + 1}`}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {overlay && <div className="absolute inset-0 bg-black/45" />}

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl font-bold tracking-wide">
          {title}
        </h1>
        {breadcrumb && (
          <p className="mt-3 text-sm md:text-base text-white/80">
            {breadcrumb}
          </p>
        )}
      </div>

      {backgroundImages.length > 1 && (
        <>
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
        </>
      )}
    </section>
  );
};

export default PageHeroSection;
