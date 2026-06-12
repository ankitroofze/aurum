import React from "react";
import "../../style/home/TravelDestinations.css";

const destinations = [
  {
    id: 1,
    image:
      "https://tourex-react.netlify.app/assets/img/location/location.jpg",
    tours: "05 Tours",
    title: "Paris",
  },
  {
    id: 2,
    image:
      "https://tourex-react.netlify.app/assets/img/location/location-2.jpg",
    tours: "08 Tours",
    title: "Australia",
  },
  {
    id: 3,
    image:
      "https://tourex-react.netlify.app/assets/img/location/location-3.jpg",
    tours: "06 Tours",
    title: "New York",
  },
  {
    id: 4,
    image:
      "https://tourex-react.netlify.app/assets/img/location/location-4.jpg",
    tours: "07 Tours",
    title: "Spain City",
  },
];

const TravelDestinations = () => {
  return (
    <section className="travel-section">
      <div className="container">
        <div className="heading-area">
          <span className="sub-title">
            Next Adventure Destination
          </span>

          <h2 className="main-title">
            Popular Travel Destinations
            <br />
            Available Worldwide
          </h2>

          <p className="description">
            Are You Tired Of The Typical Tourist Destinations And Looking
            <br />
            To Step Out Of Your Comfort Zone Travel
          </p>
        </div>

        <div className="cards-wrapper">
          {destinations.map((item) => (
            <div className="travel-card" key={item.id}>
              <div className="card-layer"></div>

              <div className="image-box">
                <img src={item.image} alt={item.title} />

                <span className="tour-badge">
                  {item.tours}
                </span>
              </div>

              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelDestinations;