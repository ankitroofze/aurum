import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../../style/home/HeroSection.css";


// import airplane from "../../assets/airplane.png";

const HeroSection = () => {

  const images = [
    "https://images.pexels.com/photos/5589575/pexels-photo-5589575.jpeg",
    "https://images.pexels.com/photos/17935005/pexels-photo-17935005.jpeg",
    "https://images.pexels.com/photos/20095151/pexels-photo-20095151.jpeg",
    "https://images.pexels.com/photos/13900611/pexels-photo-13900611.jpeg",
    "https://images.pexels.com/photos/34534796/pexels-photo-34534796.jpeg",
    "https://images.pexels.com/photos/19063439/pexels-photo-19063439.jpeg"
    
  ];

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
    <section className="hero-section">
      {/* Background Images - लोड हो रही हैं सीधे URL के थ्रू */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image} // 💡 यहाँ लाइव URL पास हो रहा है
          alt={`Hero ${index + 1}`}
          className={`hero-image ${
            index === currentSlide ? "active" : ""
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Flying Plane */}
      {/* <img
        src={airplane}
        alt="Airplane"
        className="flying-plane"
      /> */}

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
        aria-label="Previous slide"
      >
        <FaArrowLeft />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="hero-arrow hero-arrow-right"
        aria-label="Next slide"
      >
        <FaArrowRight />
      </button>
    </section>
  );
};

export default HeroSection;