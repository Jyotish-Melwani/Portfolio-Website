import React from 'react';
import './Greeting.scss';
import wavingHand from '../../assets/waving_hand.gif';
import githubLogo from '../../assets/github-logo.png';
import linkedinLogo from '../../assets/linkedin-logo.png';

const Greeting = () => {
  return (
    <div className="greeting">
      <h2>
        <img src={wavingHand} alt="waving hand" className="waving-hand" />
        Hey, I'm Jyotish
      </h2>
      <div className="greeting-buttons">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="github-button"
        >
          <img src={githubLogo} alt="GitHub Logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/yourusername/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-button"
        >
          <img src={linkedinLogo} alt="LinkedIn Logo" />
        </a>
      </div>
    </div>
  );
};

export default Greeting;
