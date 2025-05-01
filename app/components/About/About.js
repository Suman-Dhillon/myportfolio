"use client";
import React, { useEffect } from "react";
import "./About.css";

const About = () => {
  useEffect(() => {
    // Simple intersection observer for fade-in effects
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.about-animate').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-header about-animate">
          <h2 className="about-belief">
            I believe in a <span className="highlight">user-centered</span> design approach, 
            ensuring that every project I work on is tailored to meet specific user needs.
          </h2>
          <div className="about-divider"></div>
          <p className="about-this-is-me">This is me.</p>
        </div>

        <div className="about-content">
          <div className="about-intro about-animate" style={{ animationDelay: '0.2s' }}>
            <h1 className="about-name">
              Hi, I'm <span className="text-gradient">Sumandeep</span>.
            </h1>
            <p className="about-description">
              I'm a full-stack developer dedicated to turning ideas into creative solutions. 
              I specialize in creating seamless and intuitive user experiences.
            </p>
          </div>

          <div className="about-approach about-animate" style={{ animationDelay: '0.4s' }}>
            <p>
              My approach focuses on creating <strong>scalable</strong>, <strong>high-performing</strong> solutions 
              tailored to both user needs and business objectives. By prioritizing 
              performance, accessibility, and responsiveness, I deliver experiences 
              that engage users and drive tangible results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;