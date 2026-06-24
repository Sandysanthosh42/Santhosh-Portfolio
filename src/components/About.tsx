import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
const About: React.FC = () => {
  return (
    <section id="about" className="py-5 skills-padding reveal-on-scroll">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-5">
            <h6 className="text-center text-cyan fs-6 text-uppercase letter-spacing-2 m-0">My Story</h6>
            <h4 className="text-center pb-2 display-5 fw-bold text-white">About Me</h4>
            <div className="mx-auto" style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent-color)', borderRadius: '2px', boxShadow: '0 0 10px var(--accent-glow-strong)' }}></div>
          </div>
        </div>
        <div className="about-card-wrapper p-4 p-md-5">
          <div className="row align-items-stretch">
            <div className="col-lg-5 mb-5 mb-lg-0 text-center d-flex align-items-center justify-content-center">
              <div className="photo-frame-glow w-75">
                <img 
                  src="/images/pass-profile.png" 
                  alt="Santhosh Babu Profile" 
                  className="img-fluid w-100 shadow-lg" 
                  style={{ objectFit: 'cover', aspectRatio: '1/1' }}
                />
              </div>
            </div>
            <div className="col-lg-7 d-flex flex-column justify-content-center text-start ps-lg-5">
              <h5 className="text-white fw-bold mb-3">👋 Hi there! I'm Santhosh.</h5>
              <p className="text-white-50 fs-6 lh-lg mb-4">
                I am an enthusiastic and motivated aspiring Software Developer. I graduated with a Bachelor of Science in Computer Science, which provided me with a strong logical and technical foundation. I love constructing clean, interactive, and responsive web products and applying data tools to build prediction interfaces.
              </p>
              <div className="row g-3">
                <div className="col-12">
                  <div className="d-flex align-items-start gap-2 text-white-50 fs-7">
                    <FaArrowRight className="text-cyan mt-1 flex-shrink-0" size={10} style={{ flexShrink: 0 }} />
                    <div className="text-start">
                      <strong>Degree:</strong> B.Sc. Computer Science
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex align-items-start gap-2 text-white-50 fs-7">
                    <FaArrowRight className="text-cyan mt-1 flex-shrink-0" size={10} style={{ flexShrink: 0 }} />
                    <div className="text-start">
                      <strong>Focus:</strong> Software Development
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex align-items-start gap-2 text-white-50 fs-7">
                    <FaArrowRight className="text-cyan mt-1 flex-shrink-0" size={10} style={{ flexShrink: 0 }} />
                    <div className="text-start">
                      <strong>Status:</strong> Ready for new opportunities
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex align-items-start gap-2 text-white-50 fs-7">
                    <FaArrowRight className="text-cyan mt-1 flex-shrink-0" size={10} style={{ flexShrink: 0 }} />
                    <div className="text-start">
                      <strong>Email:</strong>{' '}
                      <a href="mailto:developersanthosh15@gmail.com" className="text-cyan text-break text-decoration-none">
                        developersanthosh15@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;