import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    const savedMode = localStorage.getItem('portfolio-theme-mode');
    if (savedMode === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.add('mode-light');
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.remove('mode-light');
    }
  }, []);
  const toggleThemeMode = () => {
    const nextMode = !isDarkMode;
    setIsDarkMode(nextMode);
    if (nextMode) {
      document.documentElement.classList.remove('mode-light');
      localStorage.setItem('portfolio-theme-mode', 'dark');
    } else {
      document.documentElement.classList.add('mode-light');
      localStorage.setItem('portfolio-theme-mode', 'light');
    }
  };
  useEffect(() => {
    const sectionIds = ['about', 'projects', 'skills', 'education', 'experience', 'certs', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0,
    };
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    const handleHomeScroll = () => {
      if (window.scrollY < 120) {
        setActiveSection('home');
      }
    };
    window.addEventListener('scroll', handleHomeScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleHomeScroll);
    };
  }, []);
  return (
    <nav 
      className={`navbar navbar-expand-lg navbar-dark fixed-top py-4 navbar-custom ${
        isScrolled ? 'navbar-scrolled' : ''
      }`}
    >
      <div className="container">
        <a className="navbar-brand fs-3" href="#">
          Santhosh
        </a>
        <button 
          className="navbar-toggler border-0 text-white" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4 mt-3 mt-lg-0 align-items-lg-center">
            <li className="nav-item">
              <a 
                className={`nav-link ${activeSection === 'home' ? 'active-link' : ''}`} 
                href="#"
                onClick={() => setActiveSection('home')}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${activeSection === 'about' ? 'active-link' : ''}`} 
                href="#about"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${activeSection === 'projects' ? 'active-link' : ''}`} 
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${activeSection === 'skills' ? 'active-link' : ''}`} 
                href="#skills"
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${activeSection === 'education' ? 'active-link' : ''}`} 
                href="#education"
              >
                Education
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${activeSection === 'experience' ? 'active-link' : ''}`} 
                href="#experience"
              >
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${activeSection === 'certs' ? 'active-link' : ''}`} 
                href="#certs"
              >
                Certificates
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${activeSection === 'contact' ? 'active-link' : ''}`} 
                href="#contact"
              >
                Contact
              </a>
            </li>
            <li className="nav-item ps-lg-2">
              <button 
                onClick={toggleThemeMode} 
                className="btn btn-outline-light border-0 rounded-circle d-flex align-items-center justify-content-center p-2"
                style={{ width: '40px', height: '40px' }}
                title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                aria-label="Toggle Theme Mode"
              >
                {isDarkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;