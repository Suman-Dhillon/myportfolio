"use client";

import Link from "next/link";
import Image from "next/image";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="transparent-nav">
      <div className="nav-logo">
      <Link href="/">
          <Image 
            src="/logo-white.png" // Path to my logo in public folder
            alt="Sumandeep Kaur Logo"
            width={70}
            height={70} 
            className="logo-image"
          />
        </Link>
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
