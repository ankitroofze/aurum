import React from "react";
import banner from "../../assets/banner.png";
import "../../style/home/ExploreWorld.css";

const ExploreWorld = () => {
  return (
    <section
      className="explore-world"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="overlay">
        <div className="content">
          <span className="subtitle">
            Next Adventure Destination
          </span>

          <h2 className="title">
            Popular Travel Destinations
            <br />
            Available Worldwide
          </h2>

          {/* <button className="trip-btn">
            BOOK YOUR TRIP NOW
            <span> → </span>
          </button> */}
        </div>

        <h1 className="big-text">
          EXPLORE THE WORLD
        </h1>

        {/* <button className="scroll-top">
          ↑
        </button> */}
      </div>
    </section>
  );
};

export default ExploreWorld;