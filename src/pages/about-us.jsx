import Header from "../components/common/header";
import Footer from "../components/common/Footer";
import HeroSection from "../components/about-us/HeroSection";
import TravelSection from "../components/about-us/TravelSection";
import WhatWeDoSection from "../components/about-us/WhatWeDoSection";
import ExploreWorld from "../components/home/ExploreWorld";
import WhatsAppFloat from "../components/common/WhatsAppFloat";
const AboutUs = () => {
  return (
    <div>
      <Header />
      <WhatsAppFloat />
      <HeroSection />
       <TravelSection />
      <WhatWeDoSection />    
       <ExploreWorld />
      <Footer />
    </div>
  );
};

export default AboutUs;
