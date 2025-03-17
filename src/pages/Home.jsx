import React, { useEffect } from "react";
import ContactButton from "../components/ContactButton";
import AnimatedImage from "../components/AnimatedImage";
import LinkButton from "../components/LinkButton";

const Home = () => {
 
  return (
    <div id="home">
      <section id="about">
        <div className="container">
          <div className="image-content">
            {/* Ensure AnimatedImage has alt text support */}
            <AnimatedImage alt="Tina Kopa - RAMUS Studio" />
          </div>
          {/* Right Column */}
          <div className="text-content">
            <div className="about-text">
              <h1>Tina Kopa | RAMUS Managing Director</h1>
              <p>
                Tina Kopa is the Managing Director of RAMUS Studio, a leading creative studio specializing in 
                media architecture, light design, and interactive installations. She oversees the overall success of the business, 
                managing teams across legal, human resources, project management, and marketing. Tina fosters a 'people-first' culture 
                that is inclusive, forward-thinking, and conducive to creating impactful, large-scale works.
              </p>
            </div>
            <ContactButton />
          </div>
        </div>
      </section>

      {/* About Tina Section */}
      <section id="about-tina">
        <div className="about-ramus-text">
          <h2>About Tina Kopa</h2>
          <p>
            With over 15 years of experience, Tina is the strategic mind behind RAMUS, shaping business development 
            and international expansion with vision and expertise. She combines in-depth knowledge of business strategies 
            and case development with a keen eye for opportunities and innovation. Her clear perspective on the big picture 
            enables her to make forward-thinking decisions—from client projects and tenders to marketing and human resources. 
            Through her visionary leadership, she ensures that RAMUS not only continues to grow but also sets new industry standards.
          </p>
        </div>
      </section>

      {/* About Ramus Section */}
      <section id="about-ramus">
        <div className="about-ramus-text">
          <h2>About RAMUS</h2>
          <p>
            RAMUS is a global media architecture and lighting design studio specializing in large-scale lighting and 
            video design for both temporary and permanent installations. With expertise in media architecture, lighting 
            design, and interactive experiences, RAMUS transforms urban spaces, commercial environments, and public precincts 
            through innovative light installations and dynamic light shows.
          </p>
          <p>
            By blending art, technology, and storytelling, the studio creates striking visual experiences that redefine how people 
            engage with spaces, shaping the future of interactive and illuminated environments. From concept design and technical 
            drawings to final execution, RAMUS leads every stage of the creative and technical process. Each project is designed to 
            inspire and engage communities, recognizing the profound role light plays in shaping experiences, reflecting rhythms, and 
            connecting people.
          </p>
          <LinkButton url="https://ramus.com.au" text="Learn more about RAMUS" />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="contact-text">
          <h2>Contact</h2>
          <p>For media inquiries, collaborations, or speaking engagements, reach out via:</p>
          <p>Email: <a href="mailto:media@ramus.com.au">media@ramus.com.au</a></p>
          <p>
            LinkedIn: <a href="https://www.linkedin.com/company/ramusstudio" target="_blank" rel="noopener noreferrer">
               RAMUS Studio on LinkedIn
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
