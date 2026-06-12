import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../style/home/Header.css";
import logo from "../../assets/logo.png";
import { FaPhoneAlt } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Mobile me always white background
  const headerBgClass = () => {
    if (isMobile) {
      return "header header-mobile"; // Mobile me always white
    }
    return scrolled ? "header header-scrolled" : "header header-transparent";
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
          <Link to="/" className="mobile-nav-link" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/domestic-travels" className="mobile-nav-link" onClick={() => setIsOpen(false)}>
            Domestic Travels
          </Link>
          <Link to="/international-travels" className="mobile-nav-link" onClick={() => setIsOpen(false)}>
            International Travels
          </Link>
          <Link to="/about-us" className="mobile-nav-link" onClick={() => setIsOpen(false)}>
            About Us
          </Link>
          <Link to="/contact" className="mobile-nav-link" onClick={() => setIsOpen(false)}>
            Contact
          </Link>

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