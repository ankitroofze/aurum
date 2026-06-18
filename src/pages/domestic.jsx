import Header from "../components/common/header";
import Footer from "../components/common/Footer";;
import WhatsAppFloat from "../components/common/WhatsAppFloat";
import TourDetailsGallery from "../components/tours/TourDetailsGallery";  
 import TourInfoSection from "../components/tours/TourInfoSection";
 import TravelDestinations from "../components/home/TravelDestinations";
const Domestic = () => {
  return (
    <div>
      <Header />
      <WhatsAppFloat />
      <TourDetailsGallery />
        <TourInfoSection />
      <TravelDestinations />
      <Footer />
    </div>
  );
};

export default Domestic;
