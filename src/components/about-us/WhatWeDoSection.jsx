import React from "react";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { PiSuitcaseRollingLight } from "react-icons/pi";
import { PiTrophyLight } from "react-icons/pi";
import "../../style/about/WhatWeDoSection.css"; 
const WhatWeDoSection = () => {
  const services = [
    {
      id: 1,
      icon: <HiOutlineCurrencyDollar />,
      title: "Ultimate flexibility",
      description:
        "When an unknown printer took galley of type and scrambled make type specimen book has survived five.",
    },
    {
      id: 2,
      icon: <PiSuitcaseRollingLight />,
      title: "Memorable experiences",
      description:
        "When an unknown printer took galley of type and scrambled make type specimen book has survived five.",
    },
    {
      id: 3,
      icon: <PiTrophyLight />,
      title: "Award winning support",
      description:
        "When an unknown printer took galley of type and scrambled make type specimen book has survived five.",
    },
  ];

  return (
    <section className="what-we-do-section">
      <div className="decorative-icon">
        <img
          src="https://tourex-react.netlify.app/assets/img/home1/icon/vector-1.svg"
          alt="decor"
        />
      </div>

      <div className="container">
        <div className="heading-wrapper">
          <span className="sub-title">What We Do</span>
          <h3 className="main-title">
            We Arrange the Best Tour<br />
            Ever Possible
          </h3>
          <p className="description">
            when an unknown printer took a galley of type and scrambled make type specimen bookhas survived not only five.
          </p>
        </div>

        <div className="cards-grid">
          {services.map((item) => (
            <div key={item.id} className="card">
              <div className="icon-wrapper">
                {item.icon}
              </div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;