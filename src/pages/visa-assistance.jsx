import Header from "../components/common/header";
import Footer from "../components/common/Footer";
import PageHeroSection from "../components/common/PageHeroSection";
import VisaServices from "../components/visa-assistance/VisaServices";
import TrustFactor from "../components/visa-assistance/TrustFactor";

const VisaAssistance = () => {
  return (
    <div>
      <Header />
      <PageHeroSection
        title="Visa Assistance"
        breadcrumb="Home > Pages > Visa Assistance"
        backgroundImages={[
          "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1400&q=80",
          "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1400&q=80"
        ]}
      />
      <VisaServices />
      <TrustFactor />
      <Footer />
    </div>
  );
};

export default VisaAssistance;
