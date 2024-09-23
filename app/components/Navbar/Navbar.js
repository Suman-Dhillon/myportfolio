import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = () => setShowNavList(!showNavList);

  return (
    <nav className="nav">
      <div className="nav__logo">
        <a href="#home" className="nav__logo-link">My Portfolio</a>
      </div>
      <button
        className="nav__hamburger"
        onClick={toggleNavList}
        aria-label="Toggle navigation"
      >
        {showNavList ? 'Close' : 'Menu'}
      </button>
      <ul className={`nav__list ${showNavList ? 'nav__list--active' : ''}`}>
        <li className="nav__list-item">
          <a href="#about" className="nav__link" onClick={toggleNavList}>About</a>
        </li>
        <li className="nav__list-item">
          <a href="#projects" className="nav__link" onClick={toggleNavList}>Projects</a>
        </li>
        <li className="nav__list-item">
          <a href="#skills" className="nav__link" onClick={toggleNavList}>Skills</a>
        </li>
        <li className="nav__list-item">
          <a href="#contact" className="nav__link" onClick={toggleNavList}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
