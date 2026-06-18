import React from "react";
import "../../style/travel-insurance/TravelInsuranceCoverage.css";

import {
  FaPlaneDeparture,
  FaSuitcaseRolling,
  FaBriefcaseMedical,
  FaCalendarTimes,
  FaPassport,
} from "react-icons/fa";

const coverageData = [
  {
    icon: <FaPlaneDeparture />,
    title: "Flight Delays",
    description:
      "Coverage for accommodation, meals, and essential expenses caused by unexpected flight disruptions.",
  },
  {
    icon: <FaSuitcaseRolling />,
    title: "Baggage Loss",
    description:
      "Receive compensation for lost, stolen, or delayed baggage during your journey.",
  },
  {
    icon: <FaBriefcaseMedical />,
    title: "Emergency Medical Care",
    description:
      "Access emergency medical treatment, hospitalization, and healthcare support worldwide.",
  },
  {
    icon: <FaCalendarTimes />,
    title: "Trip Interruption",
    description:
      "Protection against unexpected cancellations, interruptions, or major travel changes.",
  },
  {
    icon: <FaPassport />,
    title: "Loss of Passport",
    description:
      "Get assistance and reimbursement for passport replacement and related expenses.",
  },
];

const TravelInsuranceCoverage = () => {
  return (
    <section className="coverage-section">
      <div className="coverage-container">
        <div className="coverage-header">
          <span className="coverage-badge">
            🛡 Travel Protection Coverage
          </span>

          <h2>
            What Does Your <span>Travel Insurance</span> Cover?
          </h2>

          <p>
            Travel with confidence knowing you're protected against common
            travel disruptions, medical emergencies, and unexpected expenses.
          </p>
        </div>

        <div className="coverage-grid">
          {coverageData.map((item, index) => (
            <div
              className={`coverage-card ${
                index === 4 ? "passport-card" : ""
              }`}
              key={index}
            >
              <div className="icon-box">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelInsuranceCoverage;