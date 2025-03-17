import React from "react";
import { useNavigate } from "react-router-dom"; // Importiere useNavigate für Navigation
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Facebook, Linkedin, Instagram, Youtube } from "lucide-react"; 
import "./Footer.css"; // CSS für das Styling

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Links Section */}
        <div className="footer-links">
          <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
        </div>

        {/* Social Media Section */}
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
            <Facebook size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
            <Linkedin size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
            <Instagram size={20} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
            <Youtube size={20} />
          </a>
        </div>

        {/* Copyright */}
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Tina Kopa. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
