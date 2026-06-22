import React, { useState, useEffect } from 'react';
import { X, MapPin, MessageSquare, Phone, User, Globe, Send, Compass, CheckCircle } from 'lucide-react';
import '../../style/TravelEnquiryModal.css';

const TravelEnquiryModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false); // Mini card vs Full form toggle
  const [isSubmitted, setIsSubmitted] = useState(false); // Thank you modal toggle
  const [isSubmitting, setIsSubmitting] = useState(false); // Loading state for API
  const [tripType, setTripType] = useState('domestic');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState(''); 
  const [errorMsg, setErrorMsg] = useState('');
  
  const [formData, setFormData] = useState({
    fullName: '',
    contactNo: '',
    place: '',
    adults: 1,
    children: 0,
    message: ''
  });

  // Updated India Data: States -> Destinations
  const indiaData = {
    'Goa': ['North Goa', 'South Goa', 'Panjim'],
    'Kashmir': ['Srinagar', 'Gulmarg', 'Pahalgam', 'Sonamarg'],
    'Kerala': ['Munnar', 'Alleppey', 'Wayanad', 'Kochi'],
    'Himachal Pradesh': ['Manali', 'Shimla', 'Kasol', 'Dalhousie'],
    'Rajasthan': ['Jaipur', 'Udaipur', 'Jodhpur', 'Jaisalmer'],
    'Ladakh': ['Leh', 'Pangong Lake', 'Nubra Valley'],
    'Andaman': ['Havelock', 'Port Blair', 'Neil Island']
  };
  
  const internationalData = {
    'Thailand': ['Bangkok', 'Phuket', 'Pattaya', 'Krabi'],
    'Dubai': ['Burj Khalifa', 'Desert Safari', 'Marina Cruise'],
    'Maldives': ['Male Atoll', 'Maafushi', 'Vaadhoo Island'],
    'Bali': ['Ubud', 'Kuta', 'Seminyak'],
    'Singapore': ['Marina Bay', 'Sentosa Island']
  };

  // ONE-TIME SHOW LOGIC (Per Session)
  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem('aurum_enquiry_seen');
    
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('aurum_enquiry_seen', 'true');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    setFormData(prev => ({ ...prev, place: '' }));
    setSelectedCountry('');
    setSelectedState('');
    setErrorMsg('');
  }, [tripType]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'fullName') {
      if (/^[a-zA-Z\s]*$/.test(value)) {
        setFormData(prev => ({ ...prev, [name]: value }));
      }
      return;
    }

    if (name === 'contactNo') {
      if (/^\d{0,10}$/.test(value)) {
        setFormData(prev => ({ ...prev, [name]: value }));
      }
      return;
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCounter = (field, type) => {
    setFormData(prev => {
      const current = prev[field];
      const updated = type === 'inc' ? current + 1 : Math.max(0, current - 1);
      return { ...prev, [field]: updated };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.contactNo.length < 10) {
      setErrorMsg("Please enter a valid 10-digit mobile number.");
      return;
    }
    setErrorMsg('');

    setIsSubmitting(true);

    // Keys exactly match Google Sheet columns. Values match React state exactly.
    const dataToSave = {
      "FullName": formData.fullName,
      "ContactNo": formData.contactNo,
      "TripType": tripType === 'domestic' ? 'India' : 'International',
      "Place": formData.place, 
      "Adults": formData.adults,
      "Children": formData.children,
      "Messages": formData.message
    };

    try {
      const response = await fetch('https://sheetdb.io/api/v1/69ua9nocyjp24', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: [dataToSave] })
      });

      if (response.ok) {
        // Success: Sheet mein chala gaya. Apps Script ab wahan se background me mail bhej dega.
        setIsSubmitted(true); 
      } else {
        const errorData = await response.json();
        console.error("SheetDB Error:", errorData);
        alert("Something went wrong while submitting. Please try again.");
      }
    } catch (error) {
      console.error("Network Error:", error);
      alert("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    setIsExpanded(false);
    setIsSubmitted(false);
  };

  return (
    <>
      {!isOpen && (
        <button className="travel-circle-floating-badge" onClick={() => { setIsOpen(true); setIsExpanded(true); }} title="Quick Enquiry">
          <div className="pulse-ring-badge"></div>
          <MessageSquare size={22} />
          <span className="badge-tooltip">Travel Enquiry</span>
        </button>
      )}

      {isOpen && (
        <div className="travel-modal-overlay">
          <div className="dot-matrix-wrapper top-side">{[...Array(8)].map((_, i) => <div key={i} className={`dot-layer layer-${i+1}`}></div>)}</div>
          <div className="dot-matrix-wrapper bottom-side">{[...Array(8)].map((_, i) => <div key={i} className={`dot-layer layer-${i+1}`}></div>)}</div>
          <div className="dot-matrix-wrapper left-side">{[...Array(8)].map((_, i) => <div key={i} className={`dot-layer layer-${i+1}`}></div>)}</div>
          <div className="dot-matrix-wrapper right-side">{[...Array(8)].map((_, i) => <div key={i} className={`dot-layer layer-${i+1}`}></div>)}</div>

          <div className={`travel-card-container ${!isExpanded ? 'mini-card' : 'expanded-card'}`}>
            <button className="travel-modal-close" onClick={closeModal} disabled={isSubmitting}>
              <X size={18} />
            </button>

            {isSubmitted ? (
              <div className="success-card-content animated-field">
                <div className="success-icon-box">
                  <CheckCircle size={48} color="#18b65b" />
                </div>
                <h3>Thank You!</h3>
                <p>Your travel enquiry has been submitted successfully. Our travel expert will contact you shortly.</p>
                <button type="button" className="mini-action-btn" onClick={closeModal}>
                  Close Window
                </button>
              </div>
            ) : !isExpanded ? (
              <div className="mini-card-content">
                <div className="mini-icon-box">
                  <Compass size={32} className="compass-rotate" />
                </div>
                <h3>Plan Your Next Journey?</h3>
                <p>Get a customized tour package designed by our travel experts within minutes.</p>
                <button type="button" className="mini-action-btn" onClick={() => setIsExpanded(true)}>
                  Enquiry Now
                </button>
              </div>
            ) : (
              <>
                <div className="travel-modal-header">
                  <h2>Travel Enquiry</h2>
                  <p>Provide your details to unlock exclusive custom packages.</p>
                </div>

                <form onSubmit={handleSubmit} className="travel-enquiry-form">
                  <div className="input-group">
                    <label><User size={13} /> Full Name</label>
                    <input type="text" name="fullName" required placeholder="Your Name" value={formData.fullName} onChange={handleInputChange} disabled={isSubmitting} />
                  </div>

                  <div className="input-group">
                    <label><Phone size={13} /> Contact / WhatsApp</label>
                    <input type="text" name="contactNo" required placeholder="10-digit number" value={formData.contactNo} onChange={handleInputChange} maxLength="10" disabled={isSubmitting} />
                    {errorMsg && <span className="error-text">{errorMsg}</span>}
                  </div>

                  <div className="input-group full-width">
                    <div className="trip-toggle-container">
                      <button type="button" className={`toggle-btn ${tripType === 'domestic' ? 'active' : ''}`} onClick={() => setTripType('domestic')} disabled={isSubmitting}>India</button>
                      <button type="button" className={`toggle-btn ${tripType === 'international' ? 'active' : ''}`} onClick={() => setTripType('international')} disabled={isSubmitting}>International</button>
                    </div>
                  </div>

                  {tripType === 'domestic' && (
                    <>
                      <div className="input-group animated-field">
                        <label><MapPin size={13} /> Select State</label>
                        <select className="custom-select" required value={selectedState} onChange={(e) => { setSelectedState(e.target.value); setFormData(prev => ({ ...prev, place: '' })); }} disabled={isSubmitting}>
                          <option value="">-- Choose State --</option>
                          {Object.keys(indiaData).map(state => <option key={state} value={state}>{state}</option>)}
                        </select>
                      </div>
                      {/* <div className="input-group animated-field">
                        <label><Compass size={13} /> Select Destination</label>
                        <select className="custom-select" name="place" required value={formData.place} onChange={handleInputChange} disabled={!selectedState || isSubmitting}>
                          <option value="">-- Choose Spot --</option>
                          {selectedState && indiaData[selectedState].map(place => <option key={place} value={place}>{place}</option>)}
                        </select>
                      </div> */}
                    </>
                  )}

                  {tripType === 'international' && (
                    <>
                      <div className="input-group animated-field">
                        <label><Globe size={13} /> Select Country</label>
                        <select className="custom-select" required value={selectedCountry} onChange={(e) => { setSelectedCountry(e.target.value); setFormData(prev => ({ ...prev, place: '' })); }} disabled={isSubmitting}>
                          <option value="">-- Choose Country --</option>
                          {Object.keys(internationalData).map(country => <option key={country} value={country}>{country}</option>)}
                        </select>
                      </div>
                      {/* <div className="input-group animated-field">
                        <label><MapPin size={13} /> Select Destination</label>
                        <select className="custom-select" name="place" required value={formData.place} onChange={handleInputChange} disabled={!selectedCountry || isSubmitting}>
                          <option value="">-- Choose Spot --</option>
                          {selectedCountry && internationalData[selectedCountry].map(place => <option key={place} value={place}>{place}</option>)}
                        </select>
                      </div> */}
                    </>
                  )}

                  <div className="input-group full-width counters-wrapper">
                    <div className="counters-row">
                      <div className="counter-box">
                        <span>Adults (12+ Yrs)</span>
                        <div className="counter-controls">
                          <button type="button" onClick={() => handleCounter('adults', 'dec')} disabled={isSubmitting}>-</button>
                          <span className="counter-value">{formData.adults}</span>
                          <button type="button" onClick={() => handleCounter('adults', 'inc')} disabled={isSubmitting}>+</button>
                        </div>
                      </div>
                      <div className="counter-box">
                        <span>Child (2-11 Yrs)</span>
                        <div className="counter-controls">
                          <button type="button" onClick={() => handleCounter('children', 'dec')} disabled={isSubmitting}>-</button>
                          <span className="counter-value">{formData.children}</span>
                          <button type="button" onClick={() => handleCounter('children', 'inc')} disabled={isSubmitting}>+</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="input-group full-width">
                    <textarea name="message" rows="2" value={formData.message} onChange={handleInputChange} placeholder="Mention expected dates, hotel rating preferences (3★/5★), flight assistance, or budget limits..." disabled={isSubmitting}></textarea>
                  </div>

                  <button type="submit" className="travel-submit-btn" disabled={isSubmitting}>
                    <span>{isSubmitting ? 'Sending...' : 'Submit Enquiry'}</span>
                    {!isSubmitting && <Send size={14} />}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default TravelEnquiryModal;