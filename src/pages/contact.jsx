import Header from "../components/common/header";
import Footer from "../components/common/Footer";
import HeroSection from "../components/contact/HeroSection";
import ContactSection from "../components/contact/ContactSection";
import WhatsAppFloat from "../components/common/WhatsAppFloat";
const Contact = () => {
  return (
    <div>
      <Header />
      <WhatsAppFloat />
      <HeroSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Contact;
