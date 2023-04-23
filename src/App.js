import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Home from './components/Home/Home';
import Expertise from './components/Expertise/Expertise';
import Experience from './components/Experience/Experience';
import { Element } from 'react-scroll';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  const [showLandingPage, setShowLandingPage] = useState(true);

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
          <header className="header">
            <Header />
          </header>
          <nav className="nav">
            <Nav />
          </nav>
          <div className="content">
            <Element id="home" className="element">
              <Home />
            </Element>
            <Element id="expertise" className="element">
              <Expertise />
            </Element>
            <Element id="projects" className="element">
              <Projects />
            </Element>
            <Element id="experience" className="element">
              <Experience />
            </Element>
            <Element id="contact" className="element">
              <Contact />
            </Element>
          </div>
          <footer className="footer">
            <Footer />
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
