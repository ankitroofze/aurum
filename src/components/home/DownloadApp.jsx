import React from "react";
import "../../style/home/DownloadApp.css";

import mobileMockup from "../../assets/phone.png";
import googlePlay from "../../assets/google.png";
import appStore from "../../assets/app.png";
import banner from "../../assets/banner.jpg";

const DownloadApp = () => {
  return (
    <section className="download-section">
      <div
        className="download-container"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="download-left">
          <img
            src={mobileMockup}
            alt="Mobile App"
            className="mobile-image"
          />
        </div>

        <div className="download-content">
          <span className="download-subtitle">
            Explore Tour
          </span>

          <h2 className="download-title">
            Download Our App
            <br />
            From Google & App Store!
          </h2>
        </div>

        <div className="download-buttons">
          <img
            src={googlePlay}
            alt="Google Play"
            className="store-btn"
          />
          <img
            src={appStore}
            alt="App Store"
            className="store-btn"
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;