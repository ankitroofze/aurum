import Header from "../components/common/header";
import Footer from "../components/common/Footer";;
import WhatsAppFloat from "../components/common/WhatsAppFloat";
import HeroSection from "../components/about-us/HeroSection";

import TravelExperienceGrid from "../components/themed-packages/TravelExperienceGrid";
import CustomThemeCTA from "../components/themed-packages/CustomThemeCTA";

const Theme = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <WhatsAppFloat />
      
      <TravelExperienceGrid />
      <CustomThemeCTA />
      <Footer />
    </div>
  );
};

export default Theme;
