import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Navbar from "./components/Navbar";
import './styles.css';
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <Helmet>
        <title>Tina Kopa</title>
        <meta name="description" content="Tina Kopa is the Managing Director of Ramus." />
        <meta property="og:title" content="Tina Kopa" />
        <meta property="og:description" content="Learn more about Tina Kopa." />
      </Helmet>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </Router>
  );
}
