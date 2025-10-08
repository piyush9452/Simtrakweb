/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  // Enhanced smooth scroll function
  const scrollToSection = (sectionId: string) => {
    console.log('Footer scrolling to:', sectionId);
    
    // Add a small delay to ensure DOM is ready
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      
      if (element) {
        console.log('Footer element found:', element);
        
        // Try modern scrollIntoView first
        try {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });
        } catch (error) {
          // Fallback for older browsers
          console.log('Footer using fallback scroll method');
          const elementRect = element.getBoundingClientRect();
          const absoluteElementTop = elementRect.top + window.pageYOffset;
          const middle = absoluteElementTop - 80;
          
          window.scrollTo({
            top: middle,
            behavior: 'smooth'
          });
        }
      } else {
        console.log('Footer element not found for ID:', sectionId);
      }
    }, 100);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>SIMTRAK</h3>
          <p>Providing innovative solutions for businesses across various industries. Our mission is to empower organizations through technology and strategic partnerships.</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a> */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        
        <div className="footer-section-ql">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About Us</a></li>
            <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li>
            <li><a href="#clients" onClick={(e) => { e.preventDefault(); scrollToSection('clients'); }}>Clients</a></li>
            <li><a href="#internships" onClick={(e) => { e.preventDefault(); scrollToSection('internships'); }}>Internships</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
          </ul>
        </div>
        
        {/* <div className="footer-section">
          <h3>Services</h3>
          <ul className="footer-links">
            <li>Software Development</li>
            <li>Web Application Development</li>
            <li>Mobile App Development</li>
            <li>Cloud Solutions</li>
            <li>IT Consulting</li>
            <li>Digital Transformation</li>
          </ul>
        </div> */}
        
        <div className="footer-section">
          <h3>Contact Us</h3>
          <address>
            <p><i className="fas fa-map-marker-alt"></i> Simtrak Solutions, JBS Haldane Avenue, Kolkata 700046</p>
            <p><i className="fas fa-phone"></i> +91 9883585647</p>
            <p><i className="fas fa-envelope"></i> contact@simtrak.in</p>
          </address>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Simtrak. All Rights Reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;