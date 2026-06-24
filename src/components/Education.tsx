import React from 'react';
const Education: React.FC = () => {
  return (
    <section id="education" className="py-5 skills-padding reveal-on-scroll">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-5">
            <h6 className="text-center text-cyan fs-6 text-uppercase letter-spacing-2 m-0">My Academic Journey</h6>
            <h4 className="text-center pb-2 display-5 fw-bold text-white">Education</h4>
            <div className="mx-auto" style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent-color)', borderRadius: '2px', boxShadow: '0 0 10px var(--accent-glow-strong)' }}></div>
          </div>
        </div>
        <div className="about-card-wrapper p-4 p-md-5">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="timeline-track text-start">
                <div className="timeline-item">
                  <span className="timeline-bullet"></span>
                  <span className="text-cyan fw-bold fs-7 d-block mb-1">Graduation Period</span>
                  <h5 className="text-white fw-bold m-0 fs-5">Bachelor of Science in Computer Science</h5>
                  <p className="text-white-50 fs-7 mb-2">Graduated</p>
                  <p className="text-white-50 fs-6 lh-lg">
                    Established core concepts in computing, software architecture, relational databases, data structures, and algorithms. Actively engineered class projects utilizing Java and Python.
                  </p>
                </div>
                <div className="timeline-item">
                  <span className="timeline-bullet"></span>
                  <span className="text-cyan fw-bold fs-7 d-block mb-1">Higher Secondary</span>
                  <h5 className="text-white fw-bold m-0 fs-6">Computer Science</h5>
                  <p className="text-white-50 fs-6 lh-lg">
                    Studied fundamental programming logic, mathematical modeling, and web basics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Education;