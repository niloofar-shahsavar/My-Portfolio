import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { HashLink as RouterHashLink } from 'react-router-hash-link';
import { Link as ScrollLink } from 'react-scroll';
import '../Style/Navbar.css';
import logo from '../assets/Vector.png';

const Navbar = () => {
  const location = useLocation();
  const [navbarBackground, setNavbarBackground] = useState('transparent');

  const isLandingPage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBackground('#ffffff'); // Change to desired background color
      } else {
        setNavbarBackground('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const smoothScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Adjust duration if needed
    });
  };
  return (
    <nav className='navbar' style={{ backgroundColor: navbarBackground }}>
      <div className='logo-div'>
        {/* Navigate to Landing Page and scroll to the top */}
        <RouterLink to="/" onClick={smoothScrollToTop}>
          <img src={logo} alt="Logo" className="logo" />
        </RouterLink>
      </div>
      <div className='navbar-button'>
        {isLandingPage ? (
          <ScrollLink className='nav-button-up' to="section-work" smooth={true} duration={500}>
            Projects
          </ScrollLink>
        ) : (
          <RouterHashLink className='nav-button-up' to="/#section-work" smooth>
            Projects
          </RouterHashLink>
        )}
        {isLandingPage ? (
          <ScrollLink className='nav-button' to="section-about" smooth={true} duration={500}>
            About
          </ScrollLink>
        ) : (
          <RouterHashLink className='nav-button' to="/#section-about" smooth>
            About
          </RouterHashLink>
        )}
        {isLandingPage ? (
          <ScrollLink className='nav-button-up' to="section-cv" smooth={true} duration={500}>
            CV
          </ScrollLink>
        ) : (
          <RouterHashLink className='nav-button-up' to="/#section-cv" smooth>
            CV
          </RouterHashLink>
        )}
        {isLandingPage ? (
          <ScrollLink className='nav-button' to="section-contact" smooth={true} duration={500}>
            Contact
          </ScrollLink>
        ) : (
          <RouterHashLink className='nav-button' to="/#section-contact" smooth>
            Contact
          </RouterHashLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;