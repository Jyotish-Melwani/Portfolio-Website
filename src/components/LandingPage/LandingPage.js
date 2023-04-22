import React from 'react';
import './LandingPage.scss';

const LandingPage = ({ onEnter, onExit }) => {
  return (
    <div className="landing-page">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="welcome-container">
        <h1>Welcome to Jyotish Melwani's Website (In Progress) </h1>
        <div className="buttons">
        <button className="enter" onClick={onEnter}>Enter</button>
        <button className="exit" onClick={onExit}>Exit</button>

        </div>
      </div>
    </div>
  );
};

export default LandingPage;
