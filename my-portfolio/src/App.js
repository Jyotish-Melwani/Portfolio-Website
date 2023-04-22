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

function App() {
  const [activeSection, setActiveSection] = useState(null);

  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  const handleHeaderClick = () => {
    setActiveSection(null);
  };

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
