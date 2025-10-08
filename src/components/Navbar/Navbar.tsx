import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/simtrak-logo.webp';

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Close menu when a link is clicked
  const closeMenu = () => {
    setShowMenu(false);
  };

  // Enhanced smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    console.log('Scrolling to:', sectionId);
    
    // Add a small delay to ensure DOM is ready
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      
      if (element) {
        console.log('Element found:', element);
        
        // Try modern scrollIntoView first
        try {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });
        } catch (error) {
          // Fallback for older browsers
          console.log('Using fallback scroll method');
          const elementRect = element.getBoundingClientRect();
          const absoluteElementTop = elementRect.top + window.pageYOffset;
          const middle = absoluteElementTop - 80;
          
          window.scrollTo({
            top: middle,
            behavior: 'smooth'
          });
        }
      } else {
        console.log('Element not found for ID:', sectionId);
        // List all available IDs for debugging
        const allIds = Array.from(document.querySelectorAll('[id]')).map(el => el.id);
        console.log('Available IDs:', allIds);
      }
    }, 100);
    
    closeMenu();
  };

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Simtrak Solutions Logo" width="150" />
      </div>

      {/* Hamburger icon */}
      <div className="menu-toggle" onClick={toggleMenu}>
        {showMenu ? "✖" : "☰"}
      </div>

      <ul className={`nav-links ${showMenu ? 'show' : ''}`}>
        <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
        <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
        <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li>
        <li><a href="#clients" onClick={(e) => { e.preventDefault(); scrollToSection('clients'); }}>Clients</a></li>
        <li><a href="#internships" onClick={(e) => { e.preventDefault(); scrollToSection('internships'); }}>Internships</a></li>
        <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact us</a></li>
        <li>
          <a 
            href="https://adore.simtrak.in/" 
            className="login-btn" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
