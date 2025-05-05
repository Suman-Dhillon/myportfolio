"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";
import Image from "next/image";
import "./footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-middle">
          <div className="footer-logo">
            <Image
              src="/logo-white.png" //logo path
              alt="Sumandeep Kaur Logo"
              width={240}
              height={64}
              style={{ width: "100%", height: "auto" }}
              className="logo-image"
            />
          </div>

          <div className="footer-links">
            <a href="/">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-socials">
            <a href="mailto:sumandeepdkaur@gmail.com">
              <FiMail className="social-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/sumandeep-kaur01/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin className="social-icon" />
            </a>
            <a
              href="https://github.com/Suman-Dhillon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub className="social-icon" />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>&copy; 2025 Sumandieep Kaur. All rights reserved&rsquo;</p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <FiArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
