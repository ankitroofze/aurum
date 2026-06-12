import React from "react";
import "../../style/home/DestinationSection.css";

const data = [
  {
    img: "https://tourex-react.netlify.app/assets/img/destination/des.jpg",
    title: "California",
  },
  {
    img: "https://tourex-react.netlify.app/assets/img/destination/des-2.jpg",
    title: "California",
  },
  {
    img: "https://tourex-react.netlify.app/assets/img/destination/des-3.jpg",
    title: "Spain",
  },
  {
    img: "https://tourex-react.netlify.app/assets/img/destination/des-4.jpg",
    title: "Bali",
  },
];

const DestinationSection = () => {
  return (
    <section className="dest-section">

      {/* HEADER */}
      <div className="dest-header">
        <p className="sub-title">Most Popular Tour Packages</p>
        <h2>Our Best Destination</h2>
        <p className="desc">
          See those lovely words from clients and explore amazing destinations
          for your next trip.
        </p>
      </div>

      {/* GRID */}
      <div className="dest-grid">

        {data.map((item, index) => (
          <div className="dest-card" key={index}>

            {/* IMAGE */}
            <div className="img-box">
              <img src={item.img} alt={item.title} />
              <span className="badge">{item.title}</span>
            </div>

            {/* DETAILS */}
            <div className="card-body">

              <div className="tags-row">
                <span className="tag dark">01 Tour</span>
                <span className="tag dark">02 Hotel</span>
              </div>

              <div className="tags-row">
                <span className="tag dark">04 Activity</span>
                <span className="tag dark">01 Restaurant</span>
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default DestinationSection;