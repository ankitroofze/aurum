import React, { useEffect, useState, useRef } from "react";
import "../../style/home/ExploreDestinations.css";
import earthVector from "../../assets/bg.png";

const data = [
  { img: "https://tourex-react.netlify.app/assets/img/destination/tu/des-2.jpg", name: "Australia" },
  { img: "https://tourex-react.netlify.app/assets/img/destination/tu/des-1.jpg", name: "New York" },
  { img: "https://tourex-react.netlify.app/assets/img/destination/tu/des-3.jpg", name: "Spain City" },
  { img: "https://tourex-react.netlify.app/assets/img/destination/tu/des-4.jpg", name: "Thailand" },
  { img: "https://tourex-react.netlify.app/assets/img/destination/tu/des-1.jpg", name: "Dubai" },
  { img: "https://tourex-react.netlify.app/assets/img/destination/tu/des-4.jpg", name: "Paris" },
];

// Duplicate data multiple times for seamless infinite scroll (3 times is enough)
const extendedData = [...data, ...data, ...data];

const ExploreDestinations = () => {
  const [currentIndex, setCurrentIndex] = useState(data.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const autoScrollRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto scroll every 2.5 seconds
  useEffect(() => {
    autoScrollRef.current = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 2500);

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, []);

  const handleTransitionEnd = () => {
    // When we reach near the end, jump back to the middle without transition
    if (currentIndex >= extendedData.length - data.length) {
      setIsTransitioning(false);
      setCurrentIndex(data.length);
      setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
    }
    // When we reach near the beginning, jump forward
    else if (currentIndex <= 0) {
      setIsTransitioning(false);
      setCurrentIndex(extendedData.length - data.length * 2);
      setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
    }
  };

  const goToSlide = (index) => {
    setIsTransitioning(true);
    setCurrentIndex(data.length + index);
  };

  const getActiveIndex = () => {
    let activeIndex = (currentIndex - data.length) % data.length;
    if (activeIndex < 0) activeIndex += data.length;
    return activeIndex;
  };

  const nextSlide = () => {
    setCurrentIndex(prev => prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => prev - 1);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  return (
    <section
      className="explore-section"
      style={{ backgroundImage: `url(${earthVector})` }}
    >
      <div className="explore-header">
        <h2>Explore Top Destinations</h2>
      </div>

      <div className="arrows">
        <button onClick={prevSlide} className="arrow-btn prev">
          ❮
        </button>
        <button onClick={nextSlide} className="arrow-btn next">
          ❯
        </button>
      </div>

      <div 
        className="slider-container"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="slider-track"
          style={{
            transform: `translateX(-${currentIndex * 270}px)`,
            transition: isTransitioning ? 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none',
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedData.map((item, i) => (
            <div className="explore-card" key={i}>
              <img src={item.img} alt={item.name} />
              <div className="card-footer">
                <span>{item.name}</span>
                <button className="card-arrow">↗</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots indicator */}
      <div className="dots-container">
        {data.map((_, i) => (
          <button
            key={i}
            className={`dot ${getActiveIndex() === i ? 'active' : ''}`}
            onClick={() => goToSlide(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default ExploreDestinations;