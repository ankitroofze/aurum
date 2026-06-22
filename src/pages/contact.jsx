import Header from "../components/common/header";
import Footer from "../components/common/Footer";
import PageHeroSection from "../components/common/PageHeroSection";
import ContactSection from "../components/contact/ContactSection";
const Contact = () => {
  return (
    <div>
      <Header />
      <PageHeroSection
        title="Contact With Us"
        breadcrumb="Home > Pages > Contact"
        backgroundImages={[
          "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1400&q=80",
          "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80"
        ]}
      />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Contact;
