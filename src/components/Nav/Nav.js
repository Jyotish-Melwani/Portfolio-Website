import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './Nav.scss';

const Nav = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item" onClick={scrollToTop}>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="expertise" smooth={true} duration={500}>
            Expertise
          </Link>
        </li>
        <li className="nav-item">
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link to="experience" smooth={true} duration={500}>
            Experience
          </Link>
        </li>
        <li className="nav-item">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
