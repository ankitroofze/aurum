import React from "react";
import "../../style/home/popular_travel.css";
import stickerImg from "../../assets/aurum-stickers.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";

const PopularTravel = () => {
  return (
    <section className="popular-travel-section">
      <div className="popular-container">

        <div className="popular-img popular-img-1">
          <img
            src="https://tourex-react.netlify.app/assets/img/about/about.jpg"
            alt="travel"
          />
        </div>

        <div className="popular-img popular-img-2">
          <img
            src="https://tourex-react.netlify.app/assets/img/about/about-3.jpg"
            alt="travel"
          />
        </div>

        <div className="popular-content">
          <div className="popular-sticker-wrapper">
            <img src={stickerImg} alt="sticker" className="popular-sticker" />
          </div>
          
          <h5 className="popular-subtitle">Most Popular Tour</h5>

          <h1 className="popular-title">
            Let's Discover The World<br />
            With Our Excellent Eyes
          </h1>

          <p className="popular-description">
            Whether you're looking for a romantic getaway, family-friendly
            vacation, or solo journey to explore the world, a travel agency <br />can
            provide tailored itinerary that exceeds your expectations.
          </p>

          {/* <button className="popular-btn">
            TAKE A TOUR
            <span>→</span>
          </button> */}
                <div className="travel-btn-group">
            <Link to="/international-travels" className="travel-action-btn international-btn">
              <span className="btn-icon">
                <FaGlobeAmericas />
              </span>
          
              <span className="btn-text">
                INTERNATIONAL TOURS
              </span>
          
              <FaArrowRight className="arrow-icon" />
            </Link>
          
            <Link to="/domestic-travels" className="travel-action-btn domestic-btn">
              <span className="btn-icon">
                <FaMapMarkedAlt />
              </span>
          
              <span className="btn-text">
                DOMESTIC TOURS
              </span>
          
              <FaArrowRight className="arrow-icon" />
            </Link>
          </div>
        </div>

        <div className="popular-img popular-img-3">
          <img
            src="https://tourex-react.netlify.app/assets/img/about/about-2.jpg"
            alt="travel"
          />
        </div>

        <div className="popular-img popular-img-4">
          <img
            src="https://tourex-react.netlify.app/assets/img/about/about-4.jpg"
            alt="travel"
          />
        </div>

      </div>
    </section>
  );
};

export default PopularTravel;