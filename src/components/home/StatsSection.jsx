import React, { useEffect, useState, useRef } from "react";
import "../../style/home/StatsSection.css";

import fam from "../../assets/fam.png";
import countryTour from "../../assets/blue-earth.png";
import trophy from "../../assets/trophy.png";
import officeBoy from "../../assets/offices_boy.png";

const stats = [
  {
    image: fam,
    title: "Happy Clients",
    count: 50000, // 50K as number
    displayCount: "50K",
  },
  {
    image: countryTour,
    title: "Country Tour",
    count: 80000, // 80K as number
    displayCount: "80K",
  },
  {
    image: trophy,
    title: "Tourism Award",
    count: 20000, // 20K as number
    displayCount: "20K",
  },
  {
    image: officeBoy,
    title: "Skilled Support",
    count: 24000, // 24K as number
    displayCount: "24K",
  },
];

// Counter Component
const Counter = ({ target, duration = 2000, displayValue }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated.current) {
          setIsVisible(true);
          animated.current = true;
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = target / (duration / 16); // 60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, target, duration]);

  // Format number with K if needed
  const formatNumber = (num) => {
    if (num >= 100000) return (num / 1000).toFixed(0) + "K";
    if (num >= 1000) return (num / 1000).toFixed(0) + "K";
    return num.toString();
  };

  return (
    <div ref={counterRef} className="counter-value">
      {isVisible ? formatNumber(count) : "0"}
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((item, index) => (
          <div className="stats-box" key={index}>
            {/* Background Number - Now shows animated counter */}
            <div className="big-number">
              <Counter 
                target={item.count} 
                duration={2000}
                displayValue={item.displayCount}
              />
            </div>

            {/* Text Above Number */}
            <h3>{item.title}</h3>

            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="stats-icon"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;