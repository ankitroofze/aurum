import React from "react";
import "../../style/about/TravelSection.css";
import { FaArrowRight } from "react-icons/fa";

import circleText from "../../assets/circle-text.png";
import travelAgency from "../../assets/travel_agency.png";
import worldBg from "../../assets/shape-world.png";
import shapeA from "../../assets/shape-a.png";

const TravelSection = () => {
  return (
    <section className="travel-section">
      <div className="travel-container">

        {/* LEFT SIDE */}
        <div className="travel-images">

          {/* BACKGROUND SHAPES */}
          <img src={worldBg} className="world-bg" alt="world" />
          <img src={shapeA} className="shape-a" alt="shape" />

          {/* LEFT STACK IMAGES */}
          <div className="img-card img1">
            <img src="https://tourex-react.netlify.app/assets/img/about/details/thumb-1.jpg" alt="" />
          </div>

          <div className="img-card img2">
            <img src="https://tourex-react.netlify.app/assets/img/about/details/thumb-3.jpg" alt="" />
          </div>

          {/* RIGHT IMAGE */}
          <div className="img-card img3">
            <img src="https://tourex-react.netlify.app/assets/img/about/details/thumb-2.jpg" alt="" />
          </div>

          {/* ROTATING BADGE */}
          <div className="badge-circle">
            <img src={circleText} className="circle-text" alt="" />
            <img src={travelAgency} className="circle-center" alt="" />
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="travel-content">

          <span className="sub-title">Explore The World With Us</span>

          <h2>
            The Perfect Vacation<br />
            Come True With Our Travel Agency
          </h2>

          <p>
            When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries But Also The Leap Into Electronic Typesetting Remaining Essentially Unchanged.
          </p>

          <button className="travel-btn">
            BOOK NOW <FaArrowRight />
          </button>

        </div>

      </div>
    </section>
  );
};

export default TravelSection;