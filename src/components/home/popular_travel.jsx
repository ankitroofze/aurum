import React from "react";
import "../../style/home/popular_travel.css";
import stickerImg from "../../assets/aurum-stickers.png"; // Apni path ke according adjust karna

const PopularTravel = () => {
  return (
    <section className="popular-travel">
      <div className="travel-container">

        {/* Left Top Image */}
        <div className="travel-img travel-img-1">
          <img
            src="https://tourex-react.netlify.app/assets/img/about/about.jpg"
            alt="travel"
          />
        </div>

        {/* Right Top Image */}
        <div className="travel-img travel-img-2">
          <img
            src="https://tourex-react.netlify.app/assets/img/about/about-3.jpg"
            alt="travel"
          />
        </div>

        {/* Content */}
        <div className="travel-content">
          {/* Sticker Added Here - Above Most Popular Tour */}
          <div className="sticker-wrapper">
            <img src={stickerImg} alt="sticker" className="travel-sticker" />
          </div>
          
          <h5>Most Popular Tour</h5>

          <h1>
            Let's Discover The World<br />
            With Our Excellent Eyes
          </h1>

          <p>
            Whether you're looking for a romantic getaway, family-friendly
            vacation, or solo journey to explore the world, a travel agency <br />can
            provide tailored itinerary that exceeds your expectations.
          </p>

          <button className="travel-btn">
            TAKE A TOUR
            <span>→</span>
          </button>
        </div>

        {/* Left Bottom Image */}
        <div className="travel-img travel-img-3">
          <img
            src="https://tourex-react.netlify.app/assets/img/about/about-2.jpg"
            alt="travel"
          />
        </div>

        {/* Right Bottom Image */}
        <div className="travel-img travel-img-4">
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