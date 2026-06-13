import React from "react";
import "../../style/home/Footer.css";
import footerBg from "../../assets/footer.jpg";
import logo from "../../assets/logo.png";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="footer-wrapper"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="footer-overlay"></div>

      <div className="footer-container">
        {/* Column 1 */}
        <div className="footer-col">
          <div className="footer-logo">
            <img src={logo} alt="Tourex Logo" />
          </div>

          <p className="desc">
            Pharetra Maecenas Felis Vestibulum Convallis Mollis Nullam Congue
            Sit. Rivers Of Finland Quebec.
          </p>

          <div className="newsletter">
            <input type="email" placeholder="Enter your email" />
            <button>➜</button>
          </div>

          <div className="socials">
            <span><FaFacebookF /></span>
            <span><FaTwitter /></span>
            <span><FaLinkedinIn /></span>
            <span><FaPinterestP /></span>
            <span><FaYoutube /></span>
          </div>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>International Travals</li>
            <li>Domestic Travals</li>
            <li>About Us</li>
            <li>Contact </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h3>Information</h3>

          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <span>
              A-1307,Suhas modi Ram Nagar,             
              Ashok Nagar, Kandiwali (E), Mumbai-400101
            </span>
          </div>

          <div className="info-item">
            <FaPhoneAlt className="info-icon" />
            <span>
              +91 8108564545
            </span>
          </div>

          <div className="info-item">
            <FaClock className="info-icon" />
            <span>
              Mon – Sat: 8 am – 5 pm,
              <br />
              Sunday: CLOSED
            </span>
          </div>
        </div>

        {/* Column 4 */}
        <div className="footer-col">
          <h3>Utility Pages</h3>

          <ul>
            <li>Style Guide</li>
            <li>Password Protected</li>
            <li>404 Error</li>
            <li>Changelog</li>
            <li>License</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © Copyright 2026 All rights reserved by Aurum voyages | Developed by
Roofze Digital Hub LLP
      </div>
{/* 
      <div
        className="scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </div> */}
    </footer>
  );
};

export default Footer;