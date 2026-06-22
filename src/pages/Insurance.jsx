import Header from "../components/common/header";
import Footer from "../components/common/Footer";
import PageHeroSection from "../components/common/PageHeroSection";
import TravelInsuranceCoverage from "../components/travel-insurance/TravelInsuranceCoverage";
import AurumGuarantee from "../components/travel-insurance/AurumGuarantee";
import TravelInsuranceCTA from "../components/travel-insurance/TravelInsuranceCTA";
const Insurance = () => {
  return (
    <div>
      <Header />
      <PageHeroSection
        title="Travel Insurance"
        breadcrumb="Home > Pages > Travel Insurance"
        backgroundImages={[
          "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=80",
          "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1400&q=80"
        ]}
      />
      <TravelInsuranceCoverage />
      <AurumGuarantee />
      <TravelInsuranceCTA />
      <Footer />
    </div>
  );
};

export default Insurance;
