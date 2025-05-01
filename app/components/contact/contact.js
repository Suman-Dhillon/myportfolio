"use client";

import Link from "next/link";
import "./contact.css";

const Contact = () => {
  return (
    <div className="call-to-action">
      <h2>Let’s Work Together!</h2>
      <p>
        If you’re looking for a developer who is detail-oriented and loves
        working with technology, feel free to reach out. I am always open to
        exciting opportunities!
      </p>
      <a href="mailto:sumandeepdkaur@gmail.com" className="contact-button">
        Contact Me Now
      </a>
    </div>
  );
};

export default Contact;
