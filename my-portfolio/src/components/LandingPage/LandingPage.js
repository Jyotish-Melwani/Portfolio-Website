import React from 'react';
import './LandingPage.scss';

const LandingPage = ({ onEnter, onExit }) => {
  return (
    <div className="landing-page">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="welcome-container">
        <h1>Welcome to my Portfolio Website</h1>
        <div className="buttons">
          <button onClick={onEnter}>Enter</button>
          <button onClick={onExit}>Exit</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
