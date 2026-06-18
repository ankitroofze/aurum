import React from "react";
import "../../style/cruise/VoyagerStyles.css";
import {
  FaHeart,
  FaUsers,
  FaGlassCheers,
  FaBriefcase,
} from "react-icons/fa";

const voyagerData = [
  {
    icon: <FaHeart />,
    title: "Bespoke Couple & Honeymoon",
    desc: "Romantic escapes, luxury stays and unforgettable sunset experiences crafted for couples.",
  },
  {
    icon: <FaUsers />,
    title: "Fun-Filled Family & Group",
    desc: "Exciting adventures, waterparks and memorable holidays designed for families and groups.",
  },
  {
    icon: <FaGlassCheers />,
    title: "Epic Bachelor Parties",
    desc: "Celebrate in style with nightlife, beach clubs and premium party experiences.",
  },
  {
    icon: <FaBriefcase />,
    title: "Corporate Incentive Tours",
    desc: "Reward teams with curated travel experiences, conferences and luxury retreats.",
  },
];

const VoyagerStyles = () => {
  return (
    <section className="voyager-section">
      <div className="voyager-container">
        <span className="voyager-tag">VOYAGER STYLES</span>

        <h2 className="voyager-heading">
          A Perfect Voyage for Every Style of Traveller
        </h2>

        <div className="voyager-grid">
          {voyagerData.map((item, index) => (
            <div className="voyager-card" key={index}>
              <div className="voyager-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VoyagerStyles;