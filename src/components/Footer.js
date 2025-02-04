import React from "react";
import "../styles/Footer.css";
// Import the Font Awesome core
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import the specific brand icons
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="footer bg-dark text-white">
      <div className="container py-4">
        <div className="row text-center">
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p>
              E-Shop is your one-stop solution for amazing deals on top products.
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="text-white text-decoration-none">
                  Products
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white text-decoration-none">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/faq" className="text-white text-decoration-none">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <div className="d-flex justify-content-center">
              <a
                href="https://facebook.com"
                className="text-white me-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                 <FontAwesomeIcon icon={faFacebook} className="fab fa-facebook" size="2x" />
              </a>
              <a
                href="https://twitter.com"
                className="text-white me-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} className="fab fa-twitter" size="2x" />

              </a>
              <a
                href="https://instagram.com"
                className="text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} className="fab fa-instagram" size="2x" />
              </a>
            </div>
          </div>
        </div>
        <hr className="bg-white" />
        <div className="text-center">
          <span>© {new Date().getFullYear()} E-Shop. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
