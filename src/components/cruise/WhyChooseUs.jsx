import React from "react";
import "../../style/cruise/WhyChooseUs.css";
import { FaCompass, FaMedal, FaHeadset, FaShieldAlt } from "react-icons/fa";

const whyChooseData = [
  {
    title: "Expert Guidance",
    description: "Professional travel experts to assist you at every step.",
    icon: <FaCompass />,
  },
  {
    title: "Best Prices",
    description: "Competitive rates with premium travel experiences.",
    icon: <FaMedal />,
  },
  {
    title: "24/7 Support",
    description: "Dedicated support whenever and wherever you need help.",
    icon: <FaHeadset />,
  },
  {
    title: "Trusted Service",
    description: "Thousands of happy travelers trust our services.",
    icon: <FaShieldAlt />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="section-header">
          <span>WHY CHOOSE US</span>
          <h2>Why Travel With Us?</h2>
        </div>

        <div className="why-cards">
          {whyChooseData.map((item, index) => (
            <div className="why-card" key={index}>
              <div className="why-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;