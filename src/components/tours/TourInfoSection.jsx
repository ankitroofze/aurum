import React from "react";
import { FaCheck } from "react-icons/fa";
import "../../style/tours/TourInfoSection.css";

const highlights = [
  "Tour The City With A Licensed NYC Tour Guide, Who",
  "Explore With A Guide To Delve Deeper Into The History",
  "Great For History Buffs And Travelers With Limited Time",
];

function TourInfoSection() {
  return (
    <div className="tour-content-wrapper">
      {/* About Tour - Single Card */}
      <div className="tour-card">
        <h2>About This Tour</h2>

        <p>
          Visiting Stonehenge, Bath, And Windsor Castle In One Day Is Next To
          Impossible. Designed Specifically For Travelers With Limited Time In 
          London, This Tour Allows You To Check Off A Range Of Southern England's 
          Historical Treasures In Just One Day By Eliminating The Hassle Of 
          Traveling Between.
        </p>

        <h3>Trip Highlights</h3>

        <div className="highlight-list">
          {highlights.map((item, index) => (
            <div className="check-item" key={index}>
              <span className="check-icon">
                <FaCheck />
              </span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TourInfoSection;