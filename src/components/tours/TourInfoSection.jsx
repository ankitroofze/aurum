import React from "react";
import { FaCheck } from "react-icons/fa";
import "../../style/tours/TourInfoSection.css";

const highlights = [
  "Tour The City With A Licensed NYC Tour Guide, Who",
  "Explore With A Guide To Delve Deeper Into The History",
  "Great For History Buffs And Travelers With Limited Time",
];

const amenities = [
  "Parking",
  "Wifi",
  "Disabled Access",
  "A/C & Heating",
  "Ceiling Height",
  "Pet Friendly",
  "Garages",
  "Garages",
  "Play Ground",
];

function TourInfoSection() {
  return (
    <div className="tour-content-wrapper">
      {/* About Tour */}
      <div className="tour-card">
        <h2>About This Tour</h2>

        <p>
          Isiting Stonehenge, Bath, And Windsor Castle In One Day Is Next To
          Impossible. Designed Cifically For With Limited Time In London, This
          Tour Allows You To Check Off A Range Of Southern England's Are Just
          One Day By Eliminating The Hassle Of Traveling Between.
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

      {/* Amenities */}
      <div className="tour-card">
        <h2>Amenities</h2>

        <p>
          Castle In One Day Is Next To Impossible. Designed Specifically For
          Travel Limited Time In London Ws You To Check Off A Range Of Southern
          England's Are Historical
        </p>

        <div className="amenities-grid">
          {amenities.map((item, index) => (
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