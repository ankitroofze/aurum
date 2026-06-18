import React, { useState, useEffect } from 'react';
import { X, MapPin, Users, MessageSquare, Phone, User, Globe, Send, HelpCircle, Compass } from 'lucide-react';
import '../../style/TravelEnquiryModal.css';

const TravelEnquiryModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false); // Mini card vs Full form toggle
  const [tripType, setTripType] = useState('domestic');
  const [selectedCountry, setSelectedCountry] = useState('');
  
  const [formData, setFormData] = useState({
    fullName: '',
    contactNo: '',
    place: '',
    adults: 1,
    children: 0,
    message: ''
  });

  const domesticPlaces = ['Goa', 'Kashmir', 'Kerala', 'Manali', 'Rajasthan', 'Leh Ladakh', 'Andaman'];
  
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
      }, 2000); // 2 seconds delay over load

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    setFormData(prev => ({ ...prev, place: '' }));
    setSelectedCountry('');
  }, [tripType]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCounter = (field, type) => {
    setFormData(prev => {
      const current = prev[field];
      const updated = type === 'inc' ? current + 1 : Math.max(0, current - 1);
      return { ...prev, [field]: updated };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your travel enquiry has been submitted.');
    setIsOpen(false);
    setIsExpanded(false);
  };

  return (
    <>
      {/* 1. FLOATING CIRCLE BADGE (Positioned perfectly above WhatsApp Icon) */}
      {!isOpen && (
        <button className="travel-circle-floating-badge" onClick={() => { setIsOpen(true); setIsExpanded(true); }} title="Quick Enquiry">
          <div className="pulse-ring-badge"></div>
          <MessageSquare size={22} />
          <span className="badge-tooltip">Travel Enquiry</span>
        </button>
      )}

      {/* 2. ENQUIRY MODAL OVERLAY */}
      {isOpen && (
        <div className="travel-modal-overlay">
          
          {/* 7-8 LAYER DOT MATRIX BORDER (4 Sides) */}
          <div className="dot-matrix-wrapper top-side">
            {[...Array(8)].map((_, i) => <div key={i} className={`dot-layer layer-${i+1}`}></div>)}
          </div>
          <div className="dot-matrix-wrapper bottom-side">
            {[...Array(8)].map((_, i) => <div key={i} className={`dot-layer layer-${i+1}`}></div>)}
          </div>
          <div className="dot-matrix-wrapper left-side">
            {[...Array(8)].map((_, i) => <div key={i} className={`dot-layer layer-${i+1}`}></div>)}
          </div>
          <div className="dot-matrix-wrapper right-side">
            {[...Array(8)].map((_, i) => <div key={i} className={`dot-layer layer-${i+1}`}></div>)}
          </div>

          {/* MAIN ENQUIRY CARD CONTAINER (No Scroll - Compact Height) */}
          <div className={`travel-card-container ${!isExpanded ? 'mini-card' : 'expanded-card'}`}>
            
            {/* Cancel Upper Icon */}
            <button className="travel-modal-close" onClick={() => { setIsOpen(false); setIsExpanded(false); }}>
              <X size={18} />
            </button>

            {/* STATE A: MINI INTRO CARD */}
            {!isExpanded ? (
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
              /* STATE B: COMPACT FULL ENQUIRY FORM */
              <>
                <div className="travel-modal-header">
                  <h2>Travel Enquiry</h2>
                  <p>Provide your details to unlock exclusive custom packages.</p>
                </div>

                <form onSubmit={handleSubmit} className="travel-enquiry-form">
                  {/* Full Name */}
                  <div className="input-group">
                    <label><User size={13} /> Full Name</label>
                    <input 
                      type="text" 
                      name="fullName"
                      required 
                      placeholder="Your Name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Contact / WhatsApp */}
                  <div className="input-group">
                    <label><Phone size={13} /> Contact / WhatsApp</label>
                    <input 
                      type="tel" 
                      name="contactNo"
                      required 
                      placeholder="Contact No."
                      value={formData.contactNo}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Category Toggle */}
                  <div className="input-group full-width">
                    <div className="trip-toggle-container">
                      <button 
                        type="button" 
                        className={`toggle-btn ${tripType === 'domestic' ? 'active' : ''}`}
                        onClick={() => setTripType('domestic')}
                      >
                        Bharat (Domestic)
                      </button>
                      <button 
                        type="button" 
                        className={`toggle-btn ${tripType === 'international' ? 'active' : ''}`}
                        onClick={() => setTripType('international')}
                      >
                        International
                      </button>
                    </div>
                  </div>

                  {/* Conditional Country Field */}
                  {tripType === 'international' && (
                    <div className="input-group animated-field full-width">
                      <label><Globe size={13} /> Select Country</label>
                      <select 
                        required 
                        value={selectedCountry}
                        onChange={(e) => {
                          setSelectedCountry(e.target.value);
                          setFormData(prev => ({ ...prev, place: '' }));
                        }}
                      >
                        <option value="">-- Choose Country --</option>
                        {Object.keys(internationalData).map(country => (
                          <option key={country} value={country}>{country}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Spot Selection */}
                  <div className="input-group full-width animated-field">
                    <label><MapPin size={13} /> Select Destination</label>
                    <select 
                      name="place"
                      required 
                      value={formData.place}
                      onChange={handleInputChange}
                      disabled={tripType === 'international' && !selectedCountry}
                    >
                      <option value="">-- Choose Spot --</option>
                      {tripType === 'domestic' 
                        ? domesticPlaces.map(place => <option key={place} value={place}>{place}</option>)
                        : selectedCountry && internationalData[selectedCountry].map(place => (
                            <option key={place} value={place}>{place}</option>
                          ))
                      }
                    </select>
                  </div>

                  {/* Travelers Counter */}
                  <div className="input-group full-width counters-wrapper">
                    <div className="counters-row">
                      <div className="counter-box">
                        <span>Adults (12+ Yrs)</span>
                        <div className="counter-controls">
                          <button type="button" onClick={() => handleCounter('adults', 'dec')}>-</button>
                          <span className="counter-value">{formData.adults}</span>
                          <button type="button" onClick={() => handleCounter('adults', 'inc')}>+</button>
                        </div>
                      </div>

                      <div className="counter-box">
                        <span>Child (2-11 Yrs)</span>
                        <div className="counter-controls">
                          <button type="button" onClick={() => handleCounter('children', 'dec')}>-</button>
                          <span className="counter-value">{formData.children}</span>
                          <button type="button" onClick={() => handleCounter('children', 'inc')}>+</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Message Queries */}
                  <div className="input-group full-width">
                    <textarea 
                      name="message"
                      rows="2"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Mention expected dates, hotel rating preferences (3★/5★), flight assistance, or budget limits..."
                    ></textarea>
                  </div>

                  {/* Submit button */}
                  <button type="submit" className="travel-submit-btn">
                    <span>Submit Enquiry</span>
                    <Send size={14} />
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