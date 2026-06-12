import React from "react";
import "../../style/home/PromoSection.css";

const PromoSection = () => {
  return (
    <div className="promo-wrapper">

      {/* Left Image */}
      <div className="promo-image-section">
        <img
          src="https://indusdispatch.in/wp-content/uploads/2022/05/1512368781_Ladakh-Home.jpg-975x540.jpg"
          alt="Ladakh"
          className="promo-image"
        />

        <div className="play-btn-wrapper">
          <button className="play-btn">
            <span className="play-icon">▶</span>
          </button>
        </div>
      </div>

      {/* Right Content */}
      <div className="promo-content-section">
        <p className="promo-subtitle">
          Enjoy Summer Deals
        </p>

        <h2 className="promo-title">
          Up to 40% Discount!
        </h2>

        <button className="promo-btn">
          SEE DETAILS
          <span className="btn-arrow">→</span>
        </button>
      </div>

    </div>
  );
};

export default PromoSection;