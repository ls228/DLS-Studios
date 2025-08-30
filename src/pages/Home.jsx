import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedImage from "../components/AnimatedImage";
import ContactButton from "../components/ContactButton";
import MaskedText from "../components/MaskedText";
import MaskedTextVideo from "../components/MaskedTextVideo";
import image1 from "../assets/images/donna-lisa.jpg";
import video1 from "../assets/images/bts-donna-lisa.mp4";
import image2 from "../assets/images/lisa-bts.jpg";
import image3 from "../assets/images/donna-bts.jpg";

const Home = () => {
  const { scrollYProgress } = useScroll();

  const blackFadeIn = useTransform(scrollYProgress, [0, 0.2], [0.1, 0.5]);
  const finalBlackFade = useTransform(scrollYProgress, [0.3, 1], [0, 0.6]);

  const textAnimation = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut", } },
  };

  return (
    <div id="home">


      <motion.div className="black-section">

        <motion.div
          className="background-overlay"
          style={{ opacity: blackFadeIn }}
        />
        <motion.div
          className="background-overlay"
          style={{ opacity: finalBlackFade }}
        />

        <section id="dls" className="landing-page">
          <MaskedTextVideo videoSrc={video1} line1="DLS" line2="studios" />
        </section>

        <motion.section id="about-dls" className="about-section"
          variants={textAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "0px 0px -150px 0px" }}>
          <motion.div className="container"  >
            <div className="image-content">
              <AnimatedImage src={image1} alt="Donna & Lisa - DLS Studios" />
            </div>
            <div className="text-content">
              <h1>DLS Studios</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <ContactButton />
            </div>
          </motion.div>
        </motion.section>

        <section id="about-us" className="text-section">
          <motion.div className="section-text"
            variants={textAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "0px 0px -150px 0px" }}>
            <h1>About us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
              sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </motion.div>
        </section>ß

      <motion.section id="about-us" className="about-section"
          variants={textAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "0px 0px -150px 0px" }}>
          <motion.div className="container"  >
            <div className="text-content-about-us">
              <h1>About Lisa</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
            <div className="image-content">
              <AnimatedImage src={image2} alt="Lisa - DLS Studios" />
            </div>
          </motion.div>
        </motion.section>


        <motion.section id="about" className="about-section"
          variants={textAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "0px 0px -150px 0px" }}>
          <motion.div className="container"  >
            <div className="image-content">
              <AnimatedImage src={image3} alt="Donna - DLS Studios" />
            </div>
            <div className="text-content">
              <h1>About Donna</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          </motion.div>
        </motion.section>

        <motion.section id="portfolio" className="text-section"
          variants={textAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "0px 0px -150px 0px" }}>
          <div className="contact-text">
            <h1>Portfolio</h1>
          </div>
        </motion.section>

        <motion.section id="contact" className="text-section"
          variants={textAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "0px 0px -150px 0px" }}>
          <div className="contact-text">
            <h1>Contact</h1>
            <p>
              Email: <a href="mailto:dls-studios@outlook.com">dls-studios@outlook.com</a>
            </p>
          </div>
        </motion.section>

      </motion.div>
    </div>
  );
};

export default Home;
