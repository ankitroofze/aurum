import React from "react";
import "../../style/Visa-assistance/VisaServices.css"; // Ensure this matches your file path
import {
  FaBolt,
  FaPassport,
  FaCheckCircle,
  FaGlobe,
} from "react-icons/fa";

const VisaServices = () => {
  return (
    <section className="vs-section">
      <div className="vs-container">
        <div className="vs-header">
          <span className="vs-subtitle">OUR VISA SERVICES</span>
          <h2 className="vs-title">Fast & Reliable Visa Solutions</h2>
          <p className="vs-intro">Expert visa assistance for e-visa and physical applications</p>
        </div>

        <div className="vs-grid-wrapper">
          {/* Card 1 - e-Visa */}
          <div className="vs-item-card">
            <div className="vs-icon-box">
              <FaBolt />
            </div>
            <h3 className="vs-card-title">e-Visa Processing</h3>
            <p className="vs-card-text">Quick online visa solutions</p>
            <ul className="vs-feature-list">
              <li><FaCheckCircle /> Online Support</li>
              <li><FaCheckCircle /> Fast Processing</li>
              <li><FaCheckCircle /> Digital Docs</li>
            </ul>
          </div>

          {/* Card 2 - Physical Visa */}
          <div className="vs-item-card">
            <div className="vs-icon-box">
              <FaPassport />
            </div>
            <h3 className="vs-card-title">Physical Visa</h3>
            <p className="vs-card-text">Complete embassy assistance</p>
            <ul className="vs-feature-list">
              <li><FaCheckCircle /> Documentation</li>
              <li><FaCheckCircle /> Appointments</li>
              <li><FaCheckCircle /> Review & Verify</li>
            </ul>
          </div>

          {/* Card 3 - Visa Assistance */}
          <div className="vs-item-card">
            <div className="vs-icon-box">
              <FaGlobe />
            </div>
            <h3 className="vs-card-title">Visa Assistance</h3>
            <p className="vs-card-text">Global visa guidance</p>
            <ul className="vs-feature-list">
              <li><FaCheckCircle /> Destination Research</li>
              <li><FaCheckCircle /> Form Filling</li>
              <li><FaCheckCircle /> Interview Prep</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaServices;