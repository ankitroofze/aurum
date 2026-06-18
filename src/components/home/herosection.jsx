import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../../style/home/HeroSection.css";


// import airplane from "../../assets/airplane.png";

const HeroSection = () => {

  const images = [
    "https://wallpaperaccess.com/full/1881700.jpg",
    "https://img.goodfon.com/wallpaper/big/c/6c/architecture-baroda-gujarat-heritage-historic-historical-mon.webp",
    "https://images.hdqwalls.com/wallpapers/travel-hd.jpg",
    "https://www.larolandiere.com/wp-content/uploads/2024/12/VOYAGE-TOURS-COUPLE-1920x1080.webp",
    "https://images.winalist.com/blog/wp-content/uploads/2022/02/15102150/loire_head.jpg"
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