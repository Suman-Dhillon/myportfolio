"use client";
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [state, handleSubmit] = useForm("movddqpe");

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="contact-header"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Have a project in mind or want to collaborate? Let's talk!</p>
        </motion.div>

        <div className="contact-content">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="contact-info"
          >
            <div className="info-card">
              <div className="info-icon">
                <FiMail className="icon" />
              </div>
              <div className="info-text">
                <h3>Email</h3>
                <a href="mailto:sumandeepdkaur@gmail.com">sumandeepdkaur@gmail.com</a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FiMapPin className="icon" />
              </div>
              <div className="info-text">
                <h3>Location</h3>
                <p>Calgary, Alberta, Canada</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FiPhone className="icon" />
              </div>
              <div className="info-text">
                <h3>Phone</h3>
                <a href="tel:+15879660156">+1 (587) 966-0156</a>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="contact-form"
          >
            <div className="form-group">
              <input
                id="name"
                type="text" 
                name="name"
                placeholder="Your Name"
                required
              />
              <span className="input-highlight"></span>
              <ValidationError 
                prefix="Name" 
                field="name"
                errors={state.errors}
                className="validation-error"
              />
            </div>

            <div className="form-group">
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <span className="input-highlight"></span>
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
                className="validation-error"
              />
            </div>

            <div className="form-group">
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>
              <span className="input-highlight"></span>
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
                className="validation-error"
              />
            </div>

            {state.succeeded ? (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="submit-message success"
              >
                Thank you! Your message has been sent.
              </motion.p>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={state.submitting}
                className="submit-btn"
              >
                {state.submitting ? 'Sending...' : (
                  <>
                    <FiSend className="send-icon" />
                    Send Message
                  </>
                )}
              </motion.button>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;