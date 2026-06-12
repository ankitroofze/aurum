import Header from "../components/common/header";
import Footer from "../components/common/Footer";

import HeroSection from "../components/home/HeroSection";
import PopularTravel from "../components/home/popular_travel";
import TravelShowcase from "../components/home/travel_showcase";
import PromoSection from "../components/home/PromoSection";
import TravelDestinations from "../components/home/TravelDestinations";
import ExploreWorld from "../components/home/ExploreWorld";
import Testimonials from "../components/home/Testimonials";
import DestinationSection from "../components/home/DestinationSection";
import WhyWorkWithUs from "../components/home/WhyWorkWithUs";
import StatsSection from "../components/home/StatsSection";
import ExploreDestinations from "../components/home/ExploreDestinations";
import DownloadApp from "../components/home/DownloadApp";
import WhatsAppFloat from "../components/common/WhatsAppFloat";

const Home = () => {
  return (
    <div className="app-wrapper">
      <div className="app-container">
        <Header />
        <WhatsAppFloat />
        <HeroSection />
        <PopularTravel />
        <TravelShowcase />
        <PromoSection />
        <TravelDestinations />
        <ExploreWorld />
        <Testimonials />
        <DestinationSection />
        <WhyWorkWithUs />
        <StatsSection />
        <ExploreDestinations />
        <DownloadApp />

        <Footer />
      </div>
    </div>
  );
};

export default Home;
