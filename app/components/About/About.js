// About.js
import React from "react";
import './About.css'; // Import CSS file for styling

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <h1 className="section-title">About Me</h1>

        <p className="about-intro">
          Hi, I'm Sumandeep Kaur, a passionate and driven software developer with a focus on web development and IT support. I enjoy building creative and efficient solutions to real-world problems.
        </p>

        <div className="about-content">
          <div className="about-details">
            <h2>My Skills</h2>
            <ul>
              <li>Frontend: HTML, CSS, JavaScript, React.js</li>
              <li>Backend: Node.js, MongoDB, MySQL</li>
              <li>Version Control: Git, GitHub</li>
              <li>UI/UX Design: Responsive Design, Figma</li>
            </ul>
          </div>

          <div className="about-education">
            <h2>Education</h2>
            <p>Diploma in Software Development</p>
            <p>Southern Alberta Institute of Technology (SAIT), 2024</p>
            <p><strong>GPA:</strong> 3.89</p>
          </div>
        </div>

        <div className="call-to-action">
          <h2>Let’s Work Together!</h2>
          <p>
            If you’re looking for a developer who is detail-oriented and loves working with technology, feel free to reach out. I am always open to exciting opportunities!
          </p>
          <a href="mailto:youremail@example.com" className="contact-button">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
