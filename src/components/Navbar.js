import { useState } from "react";
import "../styles/navbar.css";
import EnquiryModal from "./EnquiryModal";
import img from "../assets/golden-bule-logo.jpeg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showEnquiry, setShowEnquiry] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="nav-container">
          {/* LOGO */}
          <div className="logo">
            <img src={img} alt="Golden Blue Academy Logo" />
          </div>

          {/* NAV LINKS */}
          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="/" onClick={() => setMenuOpen(false)}>
              Home
            </a>
            <a href="/about-us" onClick={() => setMenuOpen(false)}>
              About Us
            </a>
            <a href="/courses" onClick={() => setMenuOpen(false)}>
              Courses
            </a>
            <a href="/german-language">German Language</a>

            <a href="/testimonials">Our Students Review</a>

            {/* Mobile enroll button */}
            <button
              className="enroll-btn mobile-enroll"
              onClick={() => {
                setShowEnquiry(true);
                setMenuOpen(false);
              }}
            >
              Enroll Now
            </button>
          </nav>

          {/* Desktop enroll */}
          <button
            className="enroll-btn desktop-enroll"
            onClick={() => setShowEnquiry(true)}
          >
            Enroll Now
          </button>

          {/* HAMBURGER */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </header>

      {/* ENQUIRY MODAL */}
      <EnquiryModal
        isOpen={showEnquiry}
        onClose={() => setShowEnquiry(false)}
      />
    </>
  );
}
