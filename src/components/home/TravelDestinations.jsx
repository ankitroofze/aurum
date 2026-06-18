import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import "../../style/home/TravelDestinations.css";

const globalDestinations = [
  { id: 101, title: "AGRA TAJ MAHAL", image: "https://media.istockphoto.com/id/586047840/photo/taj-mahal-agra.jpg?s=170667a&w=0&k=20&c=5eO4RAx3931JTS3s5iJ4JrT3Pm4TUZRS2hobDI7okno=" },
  { id: 111, title: "RAM MANDIR", image: "https://www.livemint.com/lm-img/img/2024/01/21/1600x900/Ram_Temple_in_Ayodhya_1705838563493_1705838563927.jpg" },
  { id: 113, title: "KERALA BACK WATERS / HOUSE BOATS", image: "https://tse4.mm.bing.net/th/id/OIP.oLDz9xvRptiGKu9WwmbG2AHaFj?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 109, title: "LAKSHWADEEP ISLAND", image: "https://www.holidify.com/images/bgImages/LAKSHADWEEP-ISLANDS.jpg" },
  { id: 201, title: "SWITZERLAND MOUNTAINS", image: "https://deih43ym53wif.cloudfront.net/zermatt-matterhorn-switzerland-shutterstock_1298208013_44fea015e5.jpeg" },
  { id: 202, title: "EIFFEL TOWER", image: "https://tse3.mm.bing.net/th/id/OIP.0Z4Iwz5wgSAFxCb9IIUX1QHaKr?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 210, title: "MALDIVES WATER VILLAS", image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=600&q=80" },
  { id: 203, title: "LONDON TOWER BRIDGE", image: "https://www.tripsavvy.com/thmb/N8xRZX2VLCE8P4cqOh4hUND5XeY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Tower-Bridge-at-sunset-58c5d1533df78c353c619ce8.jpg" }
];

const domesticDestinations = [
  { id: 101, title: "AGRA TAJ MAHAL", image: "https://media.istockphoto.com/id/586047840/photo/taj-mahal-agra.jpg?s=170667a&w=0&k=20&c=5eO4RAx3931JTS3s5iJ4JrT3Pm4TUZRS2hobDI7okno=" },
  { id: 102, title: "ATAL TUNNEL IN MANALI", image: "https://thenewshimachal.com/wp-content/uploads/2024/01/Snowfall-at-Atal-Tunnel.jpg" },
  { id: 103, title: "NAINITAL LAKE", image: "https://media.cdn.tripadvisor.com/media/photo-s/15/f3/7a/05/dsc-1028-largejpg.jpg" },
  { id: 104, title: "AMER FORT", image: "https://www.india-a2z.com/images/city_palace.jpg" },
  { id: 105, title: "DESERT CAMP AT JAISALMER", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/2a/04/c5/getlstd-property-photo.jpg?w=1400&h=-1&s=1" },
  { id: 106, title: "STATUE OF UNITY", image: "https://journeybees.in/uploads/0000/19/2022/10/01/statue-of-unity-featured.jpg" },
  { id: 107, title: "DARJEELING TEA ESTATES (ROPE WAY)", image: "https://roadsrider.com/wp-content/uploads/darjeeling-ropeway.webp" },
  { id: 108, title: "ANDAMAN ISLAND", image: "https://tse2.mm.bing.net/th/id/OIP.L9yaetZPUzBEipqu_GU3kAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 109, title: "LAKSHWADEEP ISLAND", image: "https://www.holidify.com/images/bgImages/LAKSHADWEEP-ISLANDS.jpg" },
  { id: 110, title: "JAGGANATH PURI DHAM", image: "https://as2.ftcdn.net/jpg/16/56/90/31/1000_F_1656903185_2ysUUgwaaSdWszkFF4oOHplgizPEhvxq.jpg" },
  { id: 111, title: "RAM MANDIR", image: "https://www.livemint.com/lm-img/img/2024/01/21/1600x900/Ram_Temple_in_Ayodhya_1705838563493_1705838563927.jpg" },
  { id: 112, title: "KASHI VISHWANATH MANDIR", image: "https://i.pinimg.com/736x/d1/a2/b2/d1a2b230d11adde4888e1d5a4ded1cf2.jpg" },
  { id: 113, title: "KERALA BACK WATERS / HOUSE BOATS", image: "https://tse4.mm.bing.net/th/id/OIP.oLDz9xvRptiGKu9WwmbG2AHaFj?rs=1&pid=ImgDetMain&o=7&rm=3" }
];

const internationalDestinations = [
  { id: 201, title: "SWITZERLAND MOUNTAINS", image: "https://deih43ym53wif.cloudfront.net/zermatt-matterhorn-switzerland-shutterstock_1298208013_44fea015e5.jpeg" },
  { id: 202, title: "EIFFEL TOWER", image: "https://tse3.mm.bing.net/th/id/OIP.0Z4Iwz5wgSAFxCb9IIUX1QHaKr?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 203, title: "LONDON TOWER BRIDGE", image: "https://www.tripsavvy.com/thmb/N8xRZX2VLCE8P4cqOh4hUND5XeY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Tower-Bridge-at-sunset-58c5d1533df78c353c619ce8.jpg" },
  { id: 204, title: "VENICE GONDOLA", image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=600&q=80" },
  { id: 205, title: "BAKU HYDER ALIYEV CENTRE", image: "https://preview.redd.it/the-heydar-aliyev-center-by-zaha-hadid-in-baku-azerbaijan-v0-o3p1tyu47raa1.jpg?auto=webp&s=b2fdb39083fa401a727d7223ed367b97412c3d00" },
  { id: 206, title: "RICE TERRACE IN BALI", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80" },
  { id: 207, title: "PHUKET BUDDHA STATUE WITH VIEW", image: "https://images.unsplash.com/photo-1582468546235-9bf31e5bc4a1?auto=format&fit=crop&w=600&q=80" },
  { id: 208, title: "SINGAPORE MERLION", image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=600&q=80" },
  { id: 209, title: "MALAYSIA TWIN TOWER", image: "https://wallpapercave.com/wp/wp4507494.jpg" },
  { id: 210, title: "MALDIVES WATER VILLAS", image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=600&q=80" },
  { id: 211, title: "SEYCHELLES TURTLES", image: "https://d19lgisewk9l6l.cloudfront.net/assetbank/Giant_tortoise_Seychelles_680881.jpg" },
  { id: 212, title: "KENYA WILDLIFE", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=600&q=80" },
  { id: 213, title: "ALI AND NINO IN GEORGIA", image: "https://thumbs.dreamstime.com/b/ali-nino-iv-portrait-picture-iconic-moving-sculpture-batumi-along-ferris-wheel-alphabet-tower-92354454.jpg" },
];

const TravelDestinations = () => {
  const location = useLocation();
  const trackRef = useRef(null);
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  let currentData = globalDestinations;
  let subTitle = "Next Adventure Destination";
  let mainTitle = "Popular Travel Destinations Available Worldwide";

  if (location.pathname === "/domestic-travels") {
    currentData = domesticDestinations;
    subTitle = "Explore Incredible India";
    mainTitle = "Popular Domestic Travel Destinations";
  } else if (location.pathname === "/international-travels") {
    currentData = internationalDestinations;
    subTitle = "Fly Across The Borders";
    mainTitle = "Trending International Holiday Packages";
  }

  // Infinite Seamless Loop के लिए डेटा को 3 बार रिपीट करेंगे
  const infiniteDestinations = [...currentData, ...currentData, ...currentData];

  const updateScrollState = () => {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    setIsStart(track.scrollLeft <= 10);
    setIsEnd(track.scrollLeft >= maxScroll - 10);
  };

  const getScrollStep = () => {
    const track = trackRef.current;
    if (!track) return 296;
    const card = track.querySelector(".travel-card");
    const cardWidth = card ? card.getBoundingClientRect().width : 280;
    return cardWidth + 16; // 280px Width + 16px Gap
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    track.scrollTo({ left: 0, behavior: "auto" });
    updateScrollState();
    track.addEventListener("scroll", updateScrollState, { passive: true });

    // 🟢 CONTINUOUS PERFECT AUTO SCROLL LOGIC 1px-1px करके बहेगा बिना जर्क के
    let animationFrameId;
    const speed = 1; // स्क्रॉल की स्पीड (बढ़ाने के लिए 1.5 या 2 कर सकते हो)

    const render = () => {
      if (!track) return;
      
      const maxScroll = track.scrollWidth - track.clientWidth;
      
      // अगर स्क्रॉल आधी से ज़्यादा दूरी (क्लोन डेटा) पार कर जाए, तो चुपके से वापस 0 पर ले आओ
      if (track.scrollLeft >= maxScroll - 5) {
        track.scrollLeft = 0;
      } else {
        track.scrollLeft += speed;
      }
      
      animationFrameId = requestAnimationFrame(render);
    };

    // एनीमेशन स्टार्ट करें
    animationFrameId = requestAnimationFrame(render);

    // माउस होवर करने पर ऑटो-स्क्रॉल रुक जाए (ताकि यूजर क्लिक कर सके)
    const handleMouseEnter = () => cancelAnimationFrame(animationFrameId);
    const handleMouseLeave = () => animationFrameId = requestAnimationFrame(render);

    track.addEventListener("mouseenter", handleMouseEnter);
    track.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (track) {
        track.removeEventListener("scroll", updateScrollState);
        track.removeEventListener("mouseenter", handleMouseEnter);
        track.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [currentData]);

  const scrollCards = (direction) => {
    const track = trackRef.current;
    if (!track) return;

    const step = getScrollStep() * 2; // बटन दबाने पर 2 कार्ड्स एक साथ मूव होंगे
    track.scrollBy({
      left: direction === "next" ? step : -step,
      behavior: "smooth",
    });
  };

  return (
    <section className="travel-section">
      <div className="TravelDestinations-container">
        <div className="heading-area">
          <span className="sub-title">{subTitle}</span>
          <h2 className="main-title">{mainTitle}</h2>
          <p className="description">
            Are You Tired Of The Typical Tourist Destinations And Looking
            <br />
            To Step Out Of Your Comfort Zone Travel
          </p>
        </div>
      </div>

      <div className="slider-container-full">
        {/* लेफ्ट और राइट कोनों पर व्हाइट शैडो/फेड ओवरले */}
        <div className="edge-shadow-overlay left"></div>
        <div className="edge-shadow-overlay right"></div>

        {!isStart && (
          <button className="slider-nav-btn left" onClick={() => scrollCards("prev")} aria-label="Scroll left">
            <FaArrowLeft />
          </button>
        )}

        {!isEnd && (
          <button className="slider-nav-btn right" onClick={() => scrollCards("next")} aria-label="Scroll right">
            <FaArrowRight />
          </button>
        )}

        <div className="cards-track" ref={trackRef}>
          {infiniteDestinations.map((item, index) => (
            <div className="travel-card" key={`${item.id}-${index}`}>
              <div className="card-layer"></div>
              <div className="image-box">
                <img src={item.image} alt={item.title} />
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