import React from "react";
import "../../style/Themed-Packages/TravelExperienceGrid.css";

const experiences = [
  {
    image: "https://tse1.mm.bing.net/th/id/OIF.t8Qc62lyHE2jZIv1wQrLcA?rs=1&pid=ImgDetMain&o=7&rm=3",
    title: "Weekend Escapes",
    tagline: "Quick getaways designed to recharge your soul.",
    highlights: [
      "2–4 Days",
      "Relaxed & Scenic",
      "Premium Stays",
    ],
  },
  {
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&h=400&fit=crop",
    title: "Family Fun Tours",
    tagline: "Create unforgettable memories with your loved ones.",
    highlights: [
      "Kid Friendly",
      "Entertainment Included",
      "Family Activities",
    ],
  },
  {
    image: "https://images.unsplash.com/photo-1516589091380-5d8e87df6999?w=600&h=400&fit=crop",
    title: "Senior Retreats",
    tagline: "Comfortable journeys crafted for a peaceful experience.",
    highlights: [
      "Easy Pace",
      "Luxury Transport",
      "Personal Assistance",
    ],
  },
  {
    image: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=600&h=400&fit=crop",
    title: "Honeymoon Collection",
    tagline: "Celebrate love with romantic destinations worldwide.",
    highlights: [
      "Luxury Resorts",
      "Private Experiences",
      "Romantic Dining",
    ],
  },
  {
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=600&h=400&fit=crop",
    title: "Wildlife Adventures",
    tagline: "Experience nature at its most breathtaking.",
    highlights: [
      "Safari Tours",
      "Expert Guides",
      "Nature Experiences",
    ],
  },
  {
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=400&fit=crop",
    title: "Women Exclusive Tours",
    tagline: "Travel confidently with like-minded explorers.",
    highlights: [
      "Safe Environment",
      "Group Activities",
      "Women Guides",
    ],
  },
  // {
  //   image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&h=400&fit=crop",
  //   title: "Spiritual Journeys",
  //   tagline: "Reconnect with culture, heritage and inner peace.",
  //   highlights: [
  //     "Temple Visits",
  //     "Cultural Insights",
  //     "Guided Pilgrimages",
  //   ],
  // },
];

const TravelExperienceGrid = () => {
  return (
    <section className="experience-section">
      <div className="container">
        <div className="section-heading">
          <span>Curated Experiences</span>

          <h2>
            Explore Travel Experiences
            Crafted For Every Traveler
          </h2>

          <p>
            Discover journeys designed around your interests,
            passions, and travel dreams.
          </p>
        </div>

        <div className="experience-grid">
          {experiences.map((item, index) => (
            <div className="experience-card" key={index}>
              <div className="experience-image">
                <img
                  src={item.image}
                  alt={item.title}
                />
              </div>

              <div className="experience-content">
                <h3>{item.title}</h3>

                <p>{item.tagline}</p>

                <ul>
                  {item.highlights.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                <button>
                  Explore Tours
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelExperienceGrid;