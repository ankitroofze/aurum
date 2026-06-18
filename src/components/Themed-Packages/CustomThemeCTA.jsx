import React from "react";
import "../../style/Themed-Packages/CustomThemeCTA.css";

const CustomThemeCTA = () => {
  return (
    <section className="custom-theme-section">
      <div className="custom-theme-container">
        {/* Left Content */}
        <div className="custom-theme-content">
          <span className="custom-badge">
            Custom Travel Planning
          </span>

          <h2>
            Don't See Your Perfect
            <br />
            Travel Theme?
          </h2>

          <p>
            Tell us what you're looking for and our travel
            specialists will create a tailor-made package
            designed exclusively for your interests,
            budget, and travel style.
          </p>

          <div className="custom-features">
            <div className="feature-item">
              ✓ Free Consultation
            </div>

            <div className="feature-item">
              ✓ Personalized Packages
            </div>

            <div className="feature-item">
              ✓ Expert Travel Assistance
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="custom-theme-form-wrapper">
          <h3>Request Your Custom Package</h3>

          <form className="custom-theme-form">
            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="tel"
              placeholder="Phone Number"
            />

            <select>
              <option>
                Select Preferred Theme
              </option>

              <option>
                Honeymoon Collection
              </option>

              <option>
                Family Fun Tours
              </option>

              <option>
                Weekend Escapes
              </option>

              <option>
                Wildlife Adventures
              </option>

              <option>
                Women Exclusive Tours
              </option>

              <option>
                Senior Retreats
              </option>

              <option>
                Spiritual Journeys
              </option>

              <option>
                Something Unique
              </option>
            </select>

            <button type="submit">
              Get Custom Package
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CustomThemeCTA;