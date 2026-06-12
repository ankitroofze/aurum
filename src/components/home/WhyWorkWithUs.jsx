import "../../style/home/WhyWorkWithUs.css";

import globeIcon from "../../assets/image-removebg-preview.png";
import bagIcon from "../../assets/bag.png";
import mountainIcon from "../../assets/mountains.png";
import brid from "../../assets/brid.png";

const WhyWorkWithUs = () => {
  return (
    <section className="why-work-section">
      <img src={brid} alt="" className="bridge-bg" />

      <div className="why-work-header">
        <span>Next Adventure Destination</span>

        <h2>Why You Should Work With Us</h2>

        <p>
          Are You Tired Of The Typical Tourist Destinations And Looking
          <br />
          To Step Out Of Your Comfort Zone Travel
        </p>
      </div>

      <div className="why-work-grid">

        <div className="image-card">
          <img
            src="https://tourex-react.netlify.app/assets/img/chose/chose-2/thumb-1.jpg"
            alt="travel"
          />
        </div>

        <div className="purple-card">
          <img src={globeIcon} alt="" className="card-icon" />

          <h3>Best Travel Agency</h3>

          <p>
            Are You Tired Offer Theare Typical
            Tourist New Destination
          </p>
        </div>

        <div className="image-card">
          <img
            src="https://tourex-react.netlify.app/assets/img/chose/chose-2/thumb-2.jpg"
            alt="travel"
          />
        </div>

        <div className="purple-card">
          <img src={bagIcon} alt="" className="card-icon" />

          <h3>Secure Journey With Us</h3>

          <p>
            Are You Tired Offer Theare Typical
            Tourist New Destination
          </p>
        </div>

        <div className="image-card">
          <img
            src="https://tourex-react.netlify.app/assets/img/chose/chose-2/thumb-3.jpg"
            alt="travel"
          />
        </div>

        <div className="purple-card">
          <img src={mountainIcon} alt="" className="card-icon" />

          <h3>Top Class Places</h3>

          <p>
            Are You Tired Offer Theare Typical
            Tourist New Destination
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhyWorkWithUs;