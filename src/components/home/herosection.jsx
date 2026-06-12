import React, { useEffect, useState } from "react";
import "../../style/home/HeroSection.css";

import hero1 from "../../assets/hero-1.jpg";
import hero2 from "../../assets/hero-2.jpg";
import hero3 from "../../assets/hero-3.jpg";
import hero4 from "../../assets/hero-4.jpg";
import hero5 from "../../assets/hero-5.jpg";

import airplane from "../../assets/airplane.png";

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
    <section className="hero-section">
      {/* Background Images */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Hero ${index + 1}`}
          className={`hero-image ${
            index === currentSlide ? "active" : ""
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Flying Plane */}
      <img
        src={airplane}
        alt="Airplane"
        className="flying-plane"
      />

      {/* Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          Explore The World With Us
        </h1>

        <p className="hero-description">
          Discover premium destinations, unforgettable journeys,
          and seamless travel experiences.
        </p>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="hero-arrow hero-arrow-left"
      >
        ‹
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="hero-arrow hero-arrow-right"
      >
        ›
      </button>
    </section>
  );
};

export default HeroSection;