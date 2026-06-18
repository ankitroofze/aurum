import React from "react";
import "../../style/cruise/CruiseCTA.css";

const CruiseCTA = () => {
  return (
    <section className="cruise-cta">
      <div className="cruise-overlay"></div>

      <div className="cruise-content">
        <span className="cta-tag">
          YOUR NEXT VOYAGE STARTS HERE
        </span>

        <h2>
          The Ocean is Calling, and Your Luxury
          <br />
          Stateroom is Waiting
        </h2>

        <p>
          You are just a call away from charting your course.
          Let our travel experts design the perfect cruise
          holiday tailored exclusively for you.
        </p>

        <div className="cta-buttons">
          <button className="primary-btn">
            Build My Perfect Cruise
          </button>

          <button className="secondary-btn">
            Call Us Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CruiseCTA;