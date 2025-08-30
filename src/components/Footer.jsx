import React from "react";
import { useNavigate } from "react-router-dom"; // Importiere useNavigate für Navigation
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Instagram, Mail} from "lucide-react";
import "./Footer.css"; // CSS für das Styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Social Media Section */}
        <div className="footer-social">
          <a
            href="https://www.instagram.com/dls_studios_"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-icon"
          >
            <Instagram size={20} />
          </a>
          <a
            href="mailto:dls-studios@outlook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-icon"
          >
            <Mail size={20} />
          </a>
        </div>

        <div className="footer-links">
          <a href="/privacy-policy" className="footer-link">
            Privacy Policy
          </a>
        </div>

        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
