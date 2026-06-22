import Header from "../components/common/header";
import Footer from "../components/common/Footer";
import PageHeroSection from "../components/common/PageHeroSection";
import TravelExperienceGrid from "../components/themed-packages/TravelExperienceGrid";
import CustomThemeCTA from "../components/themed-packages/CustomThemeCTA";

const Theme = () => {
  return (
    <div>
      <Header />
      <PageHeroSection
        title="Themed Packages"
        breadcrumb="Home > Pages > Themed Packages"
        backgroundImages={[
          "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1400&q=80",
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80"
        ]}
      />
      <TravelExperienceGrid />
      <CustomThemeCTA />
      <Footer />
    </div>
  );
};

export default Theme;
