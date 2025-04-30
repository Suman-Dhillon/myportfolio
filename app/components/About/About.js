//About.js
import React from "react";
import "./About.css"; // Import CSS file for styling

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="hero-intro">
          <p className="greeting">
            Hi There! <span className="emoji">🌧</span>
          </p>
          <h1 className="hero-title">I'M SUMANDEEP KAUR</h1>
          <p className="tagline">Software Developer & Problem Solver!</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              Passionate software developer with expertise in web development
              and IT support. I build creative solutions to real-world problems
              with clean, efficient code.
            </p>

            <div className="highlight-box">
              <p>
                Currently focusing on mastering React ecosystem and backend
                technologies to create full-stack applications.
              </p>
            </div>
          </div>

          <div className="skills-education">
            <div className="skills-section">
              <h2>Skills</h2>
              <div className="skills-grid">
                <div className="skill-category">
                  <ul>
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                    <li>React.js</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <ul>
                    <li>Node.js</li>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <ul>
                    <li>Git/GitHub</li>
                    <li>Figma</li>
                    <li>UI/UX Principles</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="education-section">
              <h2>Education</h2>
              <p>Diploma in Software Development</p>
              <p>Southern Alberta Institute of Technology (SAIT), 2024</p>
              <p>GPA: 3.89</p>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <p>Let's create something amazing together!</p>
          <a href="mailto:youremail@example.com" className="cta-button">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
