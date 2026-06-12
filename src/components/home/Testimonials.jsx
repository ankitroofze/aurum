import React from "react";
import "../../style/home/Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Jacob Jones",
    role: "CEO, Traveller",
    image: "/images/client1.jpg",
  },
  {
    id: 2,
    name: "Floyd Miles",
    role: "CEO, Traveller",
    image: "/images/client2.jpg",
  },
  {
    id: 3,
    name: "Esther Howard",
    role: "CEO, Traveller",
    image: "/images/client3.jpg",
  },
  {
    id: 4,
    name: "Jacob Jones",
    role: "CEO, Traveller",
    image: "/images/client1.jpg",
  },
  {
    id: 5,
    name: "Floyd Miles",
    role: "CEO, Traveller",
    image: "/images/client2.jpg",
  },
  {
    id: 6,
    name: "Esther Howard",
    role: "CEO, Traveller",
    image: "/images/client3.jpg",
  },
];

function Testimonials() {
  return (
    <section className="testimonial-section">

      <div className="testimonial-heading">
        <span>Clients Feedback About Us</span>

        <h2>
          See Those Lovely Words From Clients
        </h2>

        <p>
          Are You Tired Of The Typical Tourist Destinations And Looking
          <br />
          To Step Out Of Your Comfort Zonetravel
        </p>
      </div>

      <div className="slider">

        <div className="slide-track">

          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>

              <div className="top">

                <div className="user-info">
                  <img src={item.image} alt="" />

                  <div>
                    <h3>{item.name}</h3>
                    <span>{item.role}</span>
                  </div>
                </div>

                <div className="quote">
                  ❞
                </div>

              </div>

              <p className="review">
                Morem Ipsum Dolor Siterey Amet Mean Earty Areaeey
                Consec Taetur Adipisrvice Ollwing Ipsum Dolor
                Consectetur.
              </p>

              <div className="stars">
                ★★★★★
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;