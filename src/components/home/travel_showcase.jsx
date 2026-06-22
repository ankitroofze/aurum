import React from "react";
import "../../style/home/travel_showcase.css";
import { FaArrowRight } from "react-icons/fa";


// Import your custom images
import blueWorld from "../../assets/blue-world.png";  // Best Travel Agency ke liye
import blueBag from "../../assets/blue-bag.png";      // Secure Journey ke liye

const TravelShowcase = () => {
  return (
    <section className="travel-showcase">
      <div className="showcase-container">

        {/* Left Content */}
        <div className="showcase-content">
          <span className="sub-heading">Dream Your Next Adventure</span>

          <h2>
            Discover The Perfect Time To Explore Your Dream Destination
          </h2>

          <p className="showcase-text">
            Are You Tired Of The Typical Tourist Destinations And Looking
            To Step Out Of Your Comfort Zone? Adventure Travel May Be
            The Perfect Solution For You! Here Are Four.
          </p>

          {/* Feature 1 - Best Travel Agency with blue-world.png */}
          <div className="feature-box">
            <img 
              src={blueWorld} 
              alt="Best Travel Agency" 
              className="feature-icon-img"
            />
            <div>
              <h4>Best Travel Agency</h4>
              <p>
                Are you tired of the typical tourist destination and
                looking step out of your comfort.
              </p>
            </div>
          </div>

          {/* Feature 2 - Secure Journey With Us with blue-bag.png */}
          <div className="feature-box">
            <img 
              src={blueBag} 
              alt="Secure Journey" 
              className="feature-icon-img"
            />
            <div>
              <h4>Secure Journey With Us</h4>
              <p>
                Are you tired of the typical tourist destination and
                looking step out of your comfort.
              </p>
            </div>
          </div>

          <button className="travel_showcase-btn">
            BOOK YOUR TRIP <FaArrowRight />
          </button>

    
        </div>

        {/* Right Images */}
        <div className="showcase-images">
          <img
            className="main-image"
            src="https://tourex-react.netlify.app/assets/img/chose/chose-2.jpg"
            alt="Travel destination"
          />

          <img
            className="floating-image"
            src="https://tourex-react.netlify.app/assets/img/chose/chose.png"
            alt="Travel experience"
          />

          <div className="travel-text">
            TRAVEL
          </div>
        </div>

      </div>
    </section>
  );
};

export default TravelShowcase;