import React from "react";
import "../../style/travel-insurance/TravelInsuranceCTA.css";
import { FaArrowRight, FaPhoneAlt, FaShieldAlt, FaGlobe } from "react-icons/fa";

const TravelInsuranceCTA = () => {
  return (
    <section className="insurance-cta">
      <div className="insurance-cta-container">
        <div className="insurance-cta-content">
          <span className="insurance-cta-badge">
            <FaShieldAlt /> Protected Travel Starts Here
          </span>

          <h2>
            Travel with Confidence.
            <span> Secure Your Journey</span>
          </h2>

          <p>
            Comprehensive travel insurance for medical emergencies, trip cancellations, 
            baggage loss & more.
          </p>

          <div className="insurance-cta-buttons">
            <a href="/contact" className="cta-primary-btn">
              <FaArrowRight />
              Get a Quote
            </a>

            <a href="/contact" className="cta-secondary-btn">
              <FaPhoneAlt />
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelInsuranceCTA;