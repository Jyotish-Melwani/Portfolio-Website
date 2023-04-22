import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Greeting from './components/Greeting/Greeting';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  const [activeSection, setActiveSection] = useState(null);
  const [showLandingPage, setShowLandingPage] = useState(true);

  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  const handleHeaderClick = () => {
    setActiveSection(null);
  };

  const handleEnter = () => {
    setShowLandingPage(false);
  };

  const handleExit = () => {
    window.location.href = 'https://www.google.ca';
  };

  return (
    <div className="App">
      {showLandingPage ? (
        <LandingPage onEnter={handleEnter} onExit={handleExit} />
      ) : (
        <>
          <Header onClick={handleHeaderClick} />
          <Nav onNavigate={handleNavigation} isHomepage={!activeSection} />
          <div className="content">
            {!activeSection && <Greeting />}
            {activeSection === 'about' && <About />}
            {activeSection === 'contact' && <Contact />}
            {activeSection === 'projects' && <Projects />}
            {activeSection === 'resume' && <Resume />}
          </div>
          <Footer />
        </>
       )}
       </div>
       );
      }
      
      export default App;
