import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../style/home/Header.css";
import logo from "../../assets/logo.png";
import { FaPhoneAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";

const Header = () => {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  // Dropdown ke states
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);

      if (window.innerWidth > 768) {
        setIsOpen(false);
        setIsMobileDropdownOpen(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const forceWhitePages = [
    "/international-travels",
    "/domestic-travels",
    "/cruise-package",
  ];

  const headerBgClass = () => {
    if (isMobile) {
      return "header header-mobile";
    }
    if (forceWhitePages.includes(location.pathname)) {
      return "header header-scrolled";
    }
    return scrolled ? "header header-scrolled" : "header header-transparent";
  };

  const handleMobileMenuClose = () => {
    setIsOpen(false);
    setIsMobileDropdownOpen(false);
  };

  return (
    <header className={headerBgClass()}>
      <div className="header-container">
        <div className="header-inner">
          {/* LOGO */}
          <div className="logo-wrapper">
            <img src={logo} alt="Logo" className="logo-img" />
          </div>

          {/* DESKTOP MENU */}
          <nav className="desktop-nav">
            <Link to="/" className="nav-link">
              Home
            </Link>

            <Link to="/domestic-travels" className="nav-link">
              Domestic Travels
            </Link>

            <Link to="/international-travels" className="nav-link">
              International Travels
            </Link>

            <Link to="/about-us" className="nav-link">
              About Us
            </Link>

            <Link to="/contact" className="nav-link">
              Contact
            </Link>

            {/* OTHERS DROPDOWN - Sabse last me */}
            <div 
              className="dropdown-container"
              onClick={() => setIsDesktopDropdownOpen(!isDesktopDropdownOpen)}
              onMouseEnter={() => setIsDesktopDropdownOpen(true)}
              onMouseLeave={() => setIsDesktopDropdownOpen(false)}
            >
              <span className="nav-link dropdown-trigger">
                Others {isDesktopDropdownOpen ? <FaChevronUp className="dropdown-icon" /> : <FaChevronDown className="dropdown-icon" />}
              </span>

              {isDesktopDropdownOpen && (
                <div className="dropdown-menu">
                  <Link to="/themed-packages" className="dropdown-item">THEMED PACKAGES</Link>
                  <Link to="/cruise-package" className="dropdown-item">CRUISE PACKAGE</Link>
                  <Link to="/visa-assistance" className="dropdown-item">VISA ASSISTANCE</Link>
                  <Link to="/travel-insurance" className="dropdown-item">TRAVEL INSURANCE</Link>
                </div>
              )}
            </div>
          </nav>

          {/* CALL SECTION - Desktop */}
          <div className="desktop-call">
            <div className="call-icon">
              <FaPhoneAlt />
            </div>
            <div className="call-text">
              <p className="call-label">Call Us:</p>
              <p className="call-number">+91 98765 43210</p>
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className={`mobile-menu-btn ${isOpen ? "active" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <div className={`mobile-dropdown ${isOpen ? "open" : ""}`}>
        <div className="mobile-dropdown-inner">
          <Link to="/" className="mobile-nav-link" onClick={handleMobileMenuClose}>
            Home
          </Link>

          <Link to="/domestic-travels" className="mobile-nav-link" onClick={handleMobileMenuClose}>
            Domestic Travels
          </Link>

          <Link to="/international-travels" className="mobile-nav-link" onClick={handleMobileMenuClose}>
            International Travels
          </Link>

          <Link to="/about-us" className="mobile-nav-link" onClick={handleMobileMenuClose}>
            About Us
          </Link>

          <Link to="/contact" className="mobile-nav-link" onClick={handleMobileMenuClose}>
            Contact
          </Link>

          {/* OTHERS DROPDOWN - Mobile me sabse last me */}
          <div className="mobile-dropdown-container">
            <button 
              className="mobile-nav-link mobile-dropdown-trigger" 
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
            >
              Others {isMobileDropdownOpen ? <FaChevronUp className="dropdown-icon" /> : <FaChevronDown className="dropdown-icon" />}
            </button>
            
            {isMobileDropdownOpen && (
              <div className="mobile-sub-menu">
                <Link to="/themed-packages" className="mobile-nav-link sub-link" onClick={handleMobileMenuClose}>THEMED PACKAGES</Link>
                <Link to="/cruise-package" className="mobile-nav-link sub-link" onClick={handleMobileMenuClose}>CRUISE PACKAGE</Link>
                <Link to="/visa-assistance" className="mobile-nav-link sub-link" onClick={handleMobileMenuClose}>VISA ASSISTANCE</Link>
                <Link to="/travel-insurance" className="mobile-nav-link sub-link" onClick={handleMobileMenuClose}>TRAVEL INSURANCE</Link>
              </div>
            )}
          </div>

          <div className="mobile-call-box">
            <div className="mobile-call-icon">
              <FaPhoneAlt />
            </div>
            <div>
              <p className="mobile-call-label">Call Us:</p>
              <p className="mobile-call-number">+91 98765 43210</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;