import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (section) => {
    navigate("/"); // Navigiere zuerst zur Home-Seite
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Verzögerung, um sicherzustellen, dass die Seite geladen ist
  };

  return (
    <nav className="navbar">
      <h1 className="tk-logo" onClick={() => handleNavigation("about")}>Tina Kopa</h1>

      {/* Menu Button */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={30} /> : <Menu size={30} />}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.3 }}
          className="menu-overlay"
        >
          <ul>
            <li
              className="menu-item"
              onClick={() => {
                setMenuOpen(false);
                handleNavigation("about");
              }}
            >
              Tina Kopa
            </li>
            <li
              className="menu-item"
              onClick={() => {
                setMenuOpen(false);
                handleNavigation("about-ramus");
              }}
            >
              Ramus
            </li>
            <li
              className="menu-item"
              onClick={() => {
                setMenuOpen(false);
                handleNavigation("contact");
              }}
            >
              Contact
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
