import Header from "../components/common/header";
import Footer from "../components/common/Footer";
import PageHeroSection from "../components/common/PageHeroSection";
import TravelSection from "../components/about-us/TravelSection";
import WhatWeDoSection from "../components/about-us/WhatWeDoSection";
const AboutUs = () => {
  return (
    <div>
      <Header />
      <PageHeroSection
        title="About Us"
        breadcrumb="Home > Pages > About Us"
        backgroundImages={[
          "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1400&q=80",
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80"
        ]}
      />
      <TravelSection />
        
       {/* <ExploreWorld /> */}
       <WhatWeDoSection />  
      <Footer />
    </div>
  );
};

export default AboutUs;
