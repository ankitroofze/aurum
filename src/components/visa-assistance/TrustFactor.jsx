import React from "react";
import "../../style/Visa-assistance/TrustFactor.css";
import {
  FaBullseye,
  FaGlobeAsia,
  FaShieldAlt,
} from "react-icons/fa";

const TrustFactor = () => {
  const trustData = [
    {
      icon: <FaBullseye />,
      title: "High Success Rate",
      description:
        "Experienced visa specialists maximize your approval chances.",
    },
    {
      icon: <FaGlobeAsia />,
      title: "Tailored Travel Solutions",
      description:
        "Personalized visa guidance based on your destination and travel goals.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Complete Transparency",
      description:
        "Clear communication, transparent pricing, and real-time updates.",
    },
  ];

  return (
    <section className="trust-factor">
      <div className="trust-container">
        <div className="trust-header">
          <span>WHY CHOOSE US</span>
          <h2>Why Trust Us With Your Visa?</h2>
        </div>

        <div className="trust-grid">
          {trustData.map((item, index) => (
            <div className="trust-item" key={index}>
              <div className="trust-icon">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustFactor;