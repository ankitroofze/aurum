import React from "react";
import "../../style/travel-insurance/AurumGuarantee.css";
import {
  FaCheckCircle,
  FaShieldAlt,
  FaFileContract,
  FaCogs,
} from "react-icons/fa";

const AurumGuarantee = () => {
  return (
    <section className="guarantee-section">
      <div className="guarantee-container">

        {/* Left Side */}
        <div className="guarantee-left">
          <div className="policy-card">
            <div className="policy-header">
              <FaShieldAlt />
              <span>Travel Insurance Policy</span>
            </div>

            <div className="policy-content">
              <h3>Protected Journey</h3>
              <p>
                Comprehensive travel protection backed by trusted global
                insurance partners.
              </p>
            </div>

            <div className="guarantee-stamp">
              GUARANTEED
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="guarantee-right">

          <span className="section-tag">
            ✨ Aurum Assurance
          </span>

          <h2>
            The Aurum Voyages Guarantee:
            <span> Seamless Security</span>
          </h2>

          <p className="section-description">
            Every policy is carefully selected to provide reliable protection,
            flexible options, and peace of mind throughout your journey.
          </p>

          <div className="feature-list">

            <div className="feature-row">
              <div className="feature-icon">
                <FaCheckCircle />
              </div>

              <div className="feature-content">
                <h3>Built-In Protection</h3>
                <p>
                  Comprehensive coverage for medical emergencies, baggage
                  issues, trip delays, and unforeseen travel disruptions.
                </p>
              </div>
            </div>

            <div className="feature-row">
              <div className="feature-icon">
                <FaFileContract />
              </div>

              <div className="feature-content">
                <h3>Flexible Issuance</h3>
                <p>
                  Quick policy issuance with options tailored to your travel
                  dates, destinations, and visa requirements.
                </p>
              </div>
            </div>

            <div className="feature-row">
              <div className="feature-icon">
                <FaCogs />
              </div>

              <div className="feature-content">
                <h3>Tailored Policies</h3>
                <p>
                  Personalized insurance solutions designed around your travel
                  plans and specific coverage preferences.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AurumGuarantee;