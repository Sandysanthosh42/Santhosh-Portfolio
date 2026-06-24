import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
const Hero: React.FC = () => {
  const el = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Software Developer", "Full Stack Developer", "Software Engineer", "Web Developer"],
      typeSpeed: 80,
      backSpeed: 60,
      backDelay: 1500,
      loop: true
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section className="hero-wrapper pt-5 mt-5">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0 reveal-on-scroll">
            <div className="text-start pe-lg-4">
              <div className="hero-badge mb-3">Welcome to my space</div>
              <h1 className="display-3 fw-bold text-white mb-2">
                I'm <span className="text-cyan text-gradient">Santhosh Babu</span>
              </h1>
              <h2 className="h3 text-white-50 mb-4 fw-semibold">
                And I'm a <span ref={el} className="text-cyan fw-bold text-gradient"></span>
              </h2>
              <p className="lead text-white-50 mb-4 lh-lg" style={{ maxWidth: '520px' }}>
                Aspiring software engineer specializing in building modern web applications, clean responsive interfaces, and predictive data science projects.
              </p>
              <div className="d-flex flex-wrap gap-3 align-items-center mb-4">
                <a 
                  className="btn btn-accent btn-lg px-4 py-2 text-uppercase fw-semibold"
                  href="/images/Santhoshbabu Software Developer - Resume.pdf" 
                  download
                >
                  Download CV
                </a>
                <a 
                  className="btn btn-outline-light btn-lg px-4 py-2 text-uppercase fw-semibold"
                  href="#contact"
                >
                  Get In Touch
                </a>
              </div>
              <div className="d-flex gap-3 align-items-center">
                <span className="text-muted fs-7">Connect with me:</span>
                <a 
                  href="https://github.com/Sandysanthosh42" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  title="GitHub Profile"
                >
                  <FaGithub size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/santhosh342/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  title="LinkedIn Profile"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 reveal-on-scroll">
            <div className="position-relative px-3">
              <div className="hero-profile-glow"></div>
              <div className="code-terminal">
                <div className="terminal-header">
                  <div className="terminal-dots">
                    <span className="terminal-dot dot-red"></span>
                    <span className="terminal-dot dot-yellow"></span>
                    <span className="terminal-dot dot-green"></span>
                  </div>
                  <div className="terminal-title">developer.json</div>
                  <div style={{ width: '38px' }}></div>
                </div>
                <div className="terminal-body">
                  <pre className="m-0" style={{ whiteSpace: 'pre-wrap' }}>
                    <code>
                      <span className="t-comment">// Aspiring Software Developer Profile</span><br />
                      <span className="t-keyword">const</span> developer <span className="t-punctuation">=</span> <span className="t-punctuation">{'{'}</span><br />
                      &nbsp;&nbsp;<span className="t-property">"education"</span><span className="t-punctuation">:</span> <span className="t-string">"B.Sc. Computer Science"</span><span className="t-punctuation">,</span><br />
                      &nbsp;&nbsp;<span className="t-property">"name"</span><span className="t-punctuation">:</span> <span className="t-string">"Santhosh Babu"</span><span className="t-punctuation">,</span><br />
                      &nbsp;&nbsp;<span className="t-property">"skills"</span><span className="t-punctuation">:</span> <span className="t-punctuation">[</span><br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="t-string">"HTML"</span><span className="t-punctuation">,</span> <span className="t-string">"CSS"</span><span className="t-punctuation">,</span> <span className="t-string">"JavaScript"</span><span className="t-punctuation">,</span><br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="t-string">"Bootstrap"</span><span className="t-punctuation">,</span> <span className="t-string">"Java"</span><span className="t-punctuation">,</span> <span className="t-string">"MongoDB"</span><span className="t-punctuation">,</span> <span className="t-string">"Python"</span><br />
                      &nbsp;&nbsp;<span className="t-punctuation">]</span><span className="t-punctuation">,</span><br />
                      &nbsp;&nbsp;<span className="t-property">"specialty"</span><span className="t-punctuation">:</span> <span className="t-string">"FullStack Dev & Data Science Projects"</span><span className="t-punctuation">,</span><br />
                      &nbsp;&nbsp;<span className="t-property">"passions"</span><span className="t-punctuation">:</span> <span className="t-punctuation">[</span><br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="t-string">"Sleek Web Experiences"</span><span className="t-punctuation">,</span><br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="t-string">"Algorithmic Problem Solving"</span><br />
                      &nbsp;&nbsp;<span className="t-punctuation">]</span><br />
                      <span className="t-punctuation">{'}'}</span><span className="t-punctuation">;</span>
                    </code>
                  </pre>
                </div>
              </div>
              <div className="floating-feature-card card-1 d-none d-sm-flex align-items-center gap-2">
                <div className="text-cyan fw-bold">B.Sc.</div>
                <div className="text-white-50 fs-7">Computer Science</div>
              </div>
              <div className="floating-feature-card card-2 d-none d-sm-flex align-items-center gap-2">
                <img 
                  src="/images/logo.png" 
                  alt="Badge Icon" 
                  style={{ width: '22px', height: '22px' }}
                />
                <div className="text-white fw-bold fs-7">Creative Dev</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;