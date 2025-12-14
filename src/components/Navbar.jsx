import React, { useState, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { HashLink as RouterHashLink } from "react-router-hash-link";
import "../Style/Navbar.css";
import logo from "../assets/new-logo.svg";

const Navbar = () => {
  const location = useLocation();
  const [navbarBackground, setNavbarBackground] = useState("transparent");
  const [activeSection, setActiveSection] = useState(""); // Track active section
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Track mobile menu state

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBackground("glassy");
      } else {
        setNavbarBackground("transparent");
      }

      // Detect which section is currently visible
      const sections = ["section-work", "section-about", "section-cv", "section-contact"];
      let foundSection = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            foundSection = section;
          }
        }
      }
      setActiveSection(foundSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const smoothScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = (el) => {
    const yOffset = -100; // Adjust this value to match your header height
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Skip Navigation Link for Accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <nav className={`navbar ${navbarBackground}`} role="navigation" aria-label="Main Navigation">
        <div className="logo-div">
          <RouterLink to="/" onClick={smoothScrollToTop}>
            <img src={logo} alt="Niloofar Shahsavar's Portfolio Logo" className="logo" />
          </RouterLink>
        </div>

        {/* Hamburger Menu Button for Mobile */}
        <button
          className="hamburger-menu"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Desktop Navigation */}
        <div className="navbar-button desktop-nav">
          <RouterHashLink
            className="nav-button-up"
            to="/#section-work"
            scroll={handleScroll}
            aria-current={activeSection === "section-work" ? "page" : undefined}
          >
            Projects
          </RouterHashLink>

          <RouterHashLink
            className="nav-button"
            to="/#section-about"
            scroll={handleScroll}
            aria-current={activeSection === "section-about" ? "page" : undefined}
          >
            About
          </RouterHashLink>

          <RouterHashLink
            className="nav-button-up"
            to="/#section-cv"
            scroll={handleScroll}
            aria-current={activeSection === "section-cv" ? "page" : undefined}
          >
            CV
          </RouterHashLink>

          <RouterHashLink
            className="nav-button"
            to="/#section-contact"
            scroll={handleScroll}
            aria-current={activeSection === "section-contact" ? "page" : undefined}
          >
            Contact
          </RouterHashLink>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`mobile-nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <RouterHashLink
            className="mobile-nav-link"
            to="/#section-work"
            scroll={handleScroll}
            onClick={closeMobileMenu}
            aria-current={activeSection === "section-work" ? "page" : undefined}
          >
            Projects
          </RouterHashLink>

          <RouterHashLink
            className="mobile-nav-link"
            to="/#section-about"
            scroll={handleScroll}
            onClick={closeMobileMenu}
            aria-current={activeSection === "section-about" ? "page" : undefined}
          >
            About
          </RouterHashLink>

          <RouterHashLink
            className="mobile-nav-link"
            to="/#section-cv"
            scroll={handleScroll}
            onClick={closeMobileMenu}
            aria-current={activeSection === "section-cv" ? "page" : undefined}
          >
            CV
          </RouterHashLink>

          <RouterHashLink
            className="mobile-nav-link"
            to="/#section-contact"
            scroll={handleScroll}
            onClick={closeMobileMenu}
            aria-current={activeSection === "section-contact" ? "page" : undefined}
          >
            Contact
          </RouterHashLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;