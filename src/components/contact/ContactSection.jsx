import React from "react";
import tree from "../../assets/tree.png";
import "../../style/ContactSection.css"; // अपनी CSS फ़ाइल का पाथ यहाँ चेक कर लेना भाई

const ContactSection = () => {
  return (
    <section className="contact-section">
      {/* Background Tree Shape */}
      <img src={tree} alt="tree" className="bg-tree-shape" />

      <div className="contact-container">
        
        {/* ========================================================
            LEFT SIDE: Information Card & Map (हमेशा बाईं तरफ रहेगा)
            ======================================================== */}
        <div className="contact-info-card">
          <h3 className="info-title">Information:</h3>
          <p className="info-desc">
            Brendan Fraser, renowned actor of the silver screen, has taken on a
            new role as a tour guide, leveraging his passion for adventure.
          </p>

          <div className="info-details">
            <p>
              <span className="label">Phone :</span>
              <span className="value"> +123 9998 000</span>
            </p>
            <p>
              <span className="label">Phone No :</span>
              <span className="value"> phone number</span>
            </p>
            <p>
              <span className="label">E-Mail :</span>
              <span className="value"> info@gmail.com</span>
            </p>
            <p>
              <span className="label">Address :</span>
              <span className="value"> 1426 California, USA</span>
            </p>
          </div>

          {/* Fully Responsive Map */}
          {/*
          <div className="map-container">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456789!2d-122.4194155!3d37.774929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa712e0303b57f00d!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1234567890"
              loading="lazy"
            ></iframe>
          </div>
          */}
        </div>

        {/* ========================================================
            RIGHT SIDE: Contact Form (हमेशा दाईं तरफ रहेगा)
            ======================================================== */}
        <div className="contact-form-wrapper">
          <h2 className="form-main-title">
            Let's Connect And Get To Know <br className="hide-on-mobile" /> Each Other
          </h2>
          <p className="form-sub-desc">
            Brendan Fraser, Renowned Actor Of The Silver Screen, Has Taken On A
            New Role As A Tour Guide, Leveraging His Passion.
          </p>

          {/* Form Fields */}
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row-two-col">
              <input type="text" placeholder="Name" className="form-input" />
              <input 
                type="email" 
                placeholder="E-mail" 
                required 
                className="form-input" 
              />
            </div>

            <input type="text" placeholder="Website" className="form-input w-100" />
            
            <textarea rows="5" placeholder="Comments" className="form-textarea w-100"></textarea>

            {/* Privacy Checkbox */}
            <label className="form-checkbox-label">
              <input type="checkbox" className="form-checkbox" />
              <span>Save my name, email, and website in this browser for the next time I comment.</span>
            </label>

            {/* Submit Button */}
            <div className="btn-wrapper">
              <button type="submit" className="form-submit-btn">
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;