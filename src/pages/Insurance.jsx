import Header from "../components/common/header";
import Footer from "../components/common/Footer";;
import WhatsAppFloat from "../components/common/WhatsAppFloat";
import HeroSection from "../components/about-us/HeroSection";
import TravelInsuranceCoverage from "../components/travel-insurance/TravelInsuranceCoverage";
import AurumGuarantee from "../components/travel-insurance/AurumGuarantee";
import TravelInsuranceCTA from "../components/travel-insurance/TravelInsuranceCTA";
const Insurance = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <WhatsAppFloat />
      <TravelInsuranceCoverage />
      <AurumGuarantee />
      <TravelInsuranceCTA />
      <Footer />
    </div>
  );
};

export default Insurance;
