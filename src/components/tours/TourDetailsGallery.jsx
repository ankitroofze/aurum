import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaStar,
  FaClock,
  FaGlobe,
  FaUsers,
  FaLanguage,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

import "../../style/tours/TourDetailsGallery.css";

const images = [
  "https://tourex-react.netlify.app/assets/img/tour-details/details-2/slider-big-1.jpg",
  "https://tourex-react.netlify.app/assets/img/blog/sidebar/standard.jpg",
  "https://tourex-react.netlify.app/assets/img/blog/sidebar/standard-2.jpg",
   
  
  "https://tourex-react.netlify.app/assets/img/blog/sidebar/standard-3.jpg",
  "https://tourex-react.netlify.app/assets/img/blog/sidebar/standard-4.jpg",
];

const TourDetailsGallery = () => {
  const [activeImage, setActiveImage] = useState(0);

  const nextSlide = () => {
    setActiveImage((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <section className="tour-details-section">
      <div className="breadcrumb">
        Home &gt; Tour Grid &gt;
        <span> Vatican Museums Sistine Chapel Skip The Line</span>
      </div>

      <h2 className="tour-title">
        Vatican Museums Sistine Chapel Skip The Line
      </h2>

      <div className="tour-meta">
        {/* <div className="price">
          From <span>$59.00</span> / Person
        </div> */}

        {/* <div className="location">
          <FaMapMarkerAlt />
          Street Bintage, Veins City, Italy
        </div> */}
{/* 
        <div className="rating">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span>(5 Reviews)</span>
        </div> */}
      </div>

      <div className="slider-wrapper">
        <img
          src={images[activeImage]}
          alt=""
          className="main-image"
        />

        <button className="nav-btn left" onClick={prevSlide}>
          <FaArrowLeft />
        </button>

        <button className="nav-btn right" onClick={nextSlide}>
          <FaArrowRight />
        </button>
      </div>

      <div className="thumbnail-row">
        {images.map((img, index) => (
          <div
            key={index}
            className={`thumb ${
              activeImage === index ? "active" : ""
            }`}
            onClick={() => setActiveImage(index)}
          >
            <img src={img} alt="" />
          </div>
        ))}
      </div>

      {/* <div className="tour-info">
        <div className="info-box">
          <FaClock />
          <div>
            <span>Duration</span>
            <h5>4 Days</h5>
          </div>
        </div>

        <div className="info-box">
          <FaGlobe />
          <div>
            <span>Type</span>
            <h5>Adventure</h5>
          </div>
        </div>

        <div className="info-box">
          <FaUsers />
          <div>
            <span>Group Size</span>
            <h5>50 People</h5>
          </div>
        </div>

        <div className="info-box">
          <FaLanguage />
          <div>
            <span>Languages</span>
            <h5>English</h5>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default TourDetailsGallery;