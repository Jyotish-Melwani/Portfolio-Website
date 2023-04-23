import React from 'react';
import './Home.scss';
import githubLogo from '../../assets/github-logo.png';
import linkedinLogo from '../../assets/linkedin-logo.png';

const Home = () => {
  return (
    <div className="home">
      <div className="text-container">
        <h1>Jyotish Melwani</h1>
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
      <div className="paragraph-box">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default Home;
