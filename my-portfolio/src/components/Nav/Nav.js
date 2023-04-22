import React, { useState } from 'react';
import './Nav.scss';
import avatar1 from '../../assets/avatar1.avif';
import avatar2 from '../../assets/avatar2.avif';
import avatar3 from '../../assets/avatar3.avif';
import avatar4 from '../../assets/avatar4.avif';

const Nav = ({ onNavigate, isHomepage }) => {
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <nav className={`nav ${isHomepage ? 'centered' : ''}`}>
      <ul className="nav-list">
        <li className="nav-item" onClick={() => { setShowAbout(!showAbout); onNavigate('about'); }}>
          <img src={avatar1} alt="Avatar 1" />
          <span>About</span>
        </li>
        <li className="nav-item" onClick={() => onNavigate('projects')}>
          <img src={avatar2} alt="Avatar 2" />
          <span>Projects</span>
        </li>
        <li className="nav-item" onClick={() => { setShowContact(!showContact); onNavigate('contact'); }}>
          <img src={avatar3} alt="Avatar 3" />
          <span>Contact</span>
        </li>
        <li className="nav-item" onClick={() => onNavigate('resume')}>
          <img src={avatar4} alt="Avatar 4" />
          <span>Resume</span>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
