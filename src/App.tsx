import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import ThemeSwitcher from './components/ThemeSwitcher';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
const App: React.FC = () => {
  useIntersectionObserver('.reveal-on-scroll', 0.1);
  return (
    <div className="app-container">
      <ParticleBackground />
      <ThemeSwitcher />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};
export default App;