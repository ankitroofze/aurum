import Header from "../components/common/header";
import Footer from "../components/common/Footer";;
import WhatsAppFloat from "../components/common/WhatsAppFloat";
import HeroSection from "../components/about-us/HeroSection";
import InflectedCard from "../components/cruise/cruise-main";
import WhyChooseUs from "../components/cruise/WhyChooseUs";
import VoyagerStyles from "../components/cruise/VoyagerStyles";
import CruiseCTA from "../components/cruise/CruiseCTA";


const Cruise = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <WhatsAppFloat />
      <InflectedCard />
      <WhyChooseUs />
       <CruiseCTA />
      <VoyagerStyles />           
      <Footer />
    </div>
  );
};

export default Cruise;
