import Header from "../components/common/header";
import Footer from "../components/common/Footer";;
import WhatsAppFloat from "../components/common/WhatsAppFloat";
import HeroSection from "../components/about-us/HeroSection";
import VisaServices from "../components/visa-assistance/VisaServices";
import TrustFactor from "../components/visa-assistance/TrustFactor";

const VisaAssistance = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <WhatsAppFloat />
      <VisaServices />
      <TrustFactor />
      <Footer />
    </div>
  );
};

export default VisaAssistance;
