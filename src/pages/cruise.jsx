import Header from "../components/common/header";
import Footer from "../components/common/Footer";
import PageHeroSection from "../components/common/PageHeroSection";
import InflectedCard from "../components/cruise/cruise-main";
import WhyChooseUs from "../components/cruise/WhyChooseUs";
import VoyagerStyles from "../components/cruise/VoyagerStyles";
import CruiseCTA from "../components/cruise/CruiseCTA";


const Cruise = () => {
  return (
    <div>
      <Header />
      <PageHeroSection
        title="Cruise Packages"
        breadcrumb="Home > Pages > Cruise"
        backgroundImages={[
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
          "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=80"
        ]}
      />
      <InflectedCard />
      <WhyChooseUs />
       <CruiseCTA />
      <VoyagerStyles />           
      <Footer />
    </div>
  );
};

export default Cruise;
