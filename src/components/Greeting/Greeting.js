import React from 'react';
import './Greeting.scss';
import githubLogo from '../../assets/github-logo.png';
import linkedinLogo from '../../assets/linkedin-logo.png';

const Greeting = () => {
  return (
    <div className="greeting">
      <div className="text-container">
        <h1>
          Jyotish Melwani
        </h1>
      </div>
      <div className="greeting-content">
        <h3> Full-Stack Developer </h3>
        <div className="greeting-buttons">
          <a
            href="https://github.com/Jyotish-Melwani"
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
          >
            <img src={githubLogo} alt="GitHub Logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/jyotishmelwani/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-button"
          >
            <img src={linkedinLogo} alt="LinkedIn Logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
