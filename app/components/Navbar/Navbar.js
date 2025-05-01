"use client";

import Link from "next/link";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="transparent-nav">
      <div className="nav-logo">
        <Link href="/">SK</Link>
      </div>

      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
