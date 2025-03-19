import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedImage from "../components/AnimatedImage";
import ContactButton from "../components/ContactButton";
import LinkButton from "../components/LinkButton";
import image1 from "../assets/images/bg.jpg";

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
      {/* Fixiertes Hero Image im Hintergrund */}
      <div className="fixed-hero">
        <motion.div
          className="hero-image"
          style={{
            backgroundImage: `url(${image1})`,
          }}
        />
      </div>

      <motion.div className="black-section">
      
        <motion.div
          className="background-overlay"
          style={{ opacity: blackFadeIn }}
        />
        <motion.div
          className="background-overlay"
          style={{ opacity: finalBlackFade }}
        />

        <section id="about" className="landing-page">
        <motion.div className="container"  >
        <div className="image-content">
              <AnimatedImage alt="Tina Kopa - RAMUS Studio" />
            </div>
          <div className="text-content">
            <h1>Tina Kopa | RAMUS Managing Director</h1>
            <p>
              Tina Kopa is the Managing Director of RAMUS Studio, a leading
              creative studio specializing in media architecture, light design,
              and interactive installations. She oversees the studio’s
              operations across legal, human resources, project management, and
              marketing, fostering a people-first culture that is inclusive,
              forward-thinking, and conducive to creating large-scale,
              meaningful works.
            </p>
            <ContactButton />
          </div>
          </motion.div>
        </section>

        <section id="about-tina" className="text-section">
         
            <motion.div className="section-text"
             variants={textAnimation}
             initial="hidden"
             whileInView="visible"
             viewport={{ margin: "0px 0px -150px 0px" }}>
              <h2>About Tina Kopa</h2>
              <p>
                With over 15 years of experience, Tina is the strategic mind
                behind RAMUS, shaping business development and international
                expansion with vision and expertise. Currently pursuing a
                business degree in law, she blends legal and strategic insights
                with in-depth knowledge of business strategies and case
                development, along with a strong sense of opportunities and
                innovation. With her clear perspective on the big picture, she
                makes forward-thinking decisions—from client projects and
                tenders to marketing and human resources. Through her visionary
                leadership, she ensures that RAMUS not only continues to grow
                but also sets new industry standards.
              </p>
            </motion.div>
          
        </section>

        <motion.section id="about-ramus" className="text-section">
          <motion.div className="section-text" 
          variants={textAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "0px 0px -150px 0px" }}> 
            <h2>About RAMUS</h2>
            <p>
              Ramus is a global media architecture and lighting design studio
              specializing in large-scale lighting and video design, both
              temporary and permanent. With expertise in architectural lighting
              design, and interactive experiences, Ramus transforms urban
              spaces, commercial environments, and public precincts through
              innovative light installations and dynamic light shows.
            </p>
            <p>
              By blending art, technology, and storytelling, the studio creates
              striking visual experiences that redefine how people engage with
              spaces, shaping the future of interactive and illuminated
              environments. From concept design and technical drawings to final
              execution, Ramus leads every stage of the creative and technical
              process. Each work is designed to inspire and engage communities,
              recognizing the profound role light plays in shaping experiences,
              reflecting rhythms and connecting people.
            </p>
            <LinkButton
              url="https://ramus.com.au"
              text="Learn more about RAMUS"
            />
          </motion.div>
        </motion.section>

        <motion.section id="contact" className="text-section" 
        variants={textAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "0px 0px -150px 0px" }}>
          <div className="contact-text">
            <h2>Contact</h2>
            <p>
              Email: <a href="mailto:media@ramus.com.au">media@ramus.com.au</a>
            </p>
            <p>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/tina-kopa-0b0b8157/"
                target="_blank"
              >
                Tina Kopa
              </a>
            </p>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default Home;
