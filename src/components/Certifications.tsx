import React, { useState } from 'react';
import { FaCertificate, FaDownload, FaEye } from 'react-icons/fa';
interface Certification {
  title: string;
  issuer: string;
  description: string;
  fileName: string;
  cssClass: string;
  type: 'internship' | 'course';
}
const Certifications: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'internship' | 'course'>('all');
  const certsList: Certification[] = [
    {
      title: 'Web Development Internship',
      issuer: 'MyDailyWork (Intern)',
      description: 'Completed practical web development internship engineering responsive components, CSS modules, and layouts.',
      fileName: 'Web Developement - MyDailyWork.jpg',
      cssClass: 'skill-bootstrap',
      type: 'internship'
    },
    {
      title: 'HTML Course Certificate',
      issuer: 'Infosys Springboard',
      description: 'Verified certification in HTML5, semantic structure, form elements, and web markup best practices.',
      fileName: 'HTML - infosys.pdf',
      cssClass: 'skill-html',
      type: 'course'
    },
    {
      title: 'CSS Course Certificate',
      issuer: 'Infosys Springboard',
      description: 'Certified expertise in responsive design, CSS grids, flexbox coordinates, keyframe animations, and layouts.',
      fileName: 'CSS - infosys.pdf',
      cssClass: 'skill-css',
      type: 'course'
    },
    {
      title: 'JavaScript Course Certificate',
      issuer: 'Infosys Springboard',
      description: 'Verified skills in ES6+ syntax, asynchronous requests, API fetching, event handlers, and DOM scripting.',
      fileName: 'JAVASCRIPT - infosys.pdf',
      cssClass: 'skill-js',
      type: 'course'
    },
    {
      title: 'Python Programming Certificate',
      issuer: 'Great Learning',
      description: 'Certified training in Python programming foundation, OOP structures, and basic scripting algorithms.',
      fileName: 'PYTHON - Great Learning.jpg',
      cssClass: 'skill-python',
      type: 'course'
    }
  ];
  const filteredCerts = activeTab === 'all'
    ? certsList
    : certsList.filter(cert => cert.type === activeTab);
  return (
    <section id="certs" className="py-5 skills-padding reveal-on-scroll">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-4">
            <h6 className="text-center text-cyan fs-6 text-uppercase letter-spacing-2 m-0">My Credentials</h6>
            <h4 className="text-center pb-2 display-5 fw-bold text-white">Certifications</h4>
            <div className="mx-auto" style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent-color)', borderRadius: '2px', boxShadow: '0 0 10px var(--accent-glow-strong)' }}></div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-12">
            <div className="filter-tabs">
              <button 
                onClick={() => setActiveTab('all')}
                className={`filter-btn ${activeTab === 'all' ? 'active-filter' : ''}`}
              >
                All Certifications
              </button>
              <button 
                onClick={() => setActiveTab('internship')}
                className={`filter-btn ${activeTab === 'internship' ? 'active-filter' : ''}`}
              >
                Internships
              </button>
              <button 
                onClick={() => setActiveTab('course')}
                className={`filter-btn ${activeTab === 'course' ? 'active-filter' : ''}`}
              >
                Courses
              </button>
            </div>
          </div>
        </div>
        <div className="row g-4 text-start justify-content-center">
          {filteredCerts.map((cert, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className={`skill-card-v2 ${cert.cssClass} d-flex flex-column h-100 justify-content-between`}>
                <div>
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <div className="skill-icon-wrap" style={{ width: '38px', height: '38px', borderRadius: '8px' }}>
                      <FaCertificate size={16} style={{ color: 'rgb(var(--tech-rgb))' }} />
                    </div>
                    <span 
                      className="fw-bold fs-8 text-uppercase letter-spacing-1"
                      style={{ color: 'rgb(var(--tech-rgb))' }}
                    >
                      {cert.issuer}
                    </span>
                  </div>
                  <h5 className="text-white fw-bold mb-2 fs-6">{cert.title}</h5>
                  <p className="text-white-50 fs-7 lh-lg mb-4">
                    {cert.description}
                  </p>
                </div>
                <div className="d-flex gap-2 border-top border-light border-opacity-10 pt-3 mt-auto">
                  <a 
                    href={`/images/${cert.fileName}`}
                    download
                    className="btn btn-accent btn-sm d-flex align-items-center justify-content-center gap-2 flex-grow-1 py-2 fw-semibold fs-8 text-uppercase"
                    title={`Download ${cert.title}`}
                  >
                    <FaDownload size={11} />
                    Download
                  </a>
                  <a 
                    href={`/images/${cert.fileName}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline-light btn-sm d-flex align-items-center justify-content-center p-2"
                    title={`View ${cert.title}`}
                    style={{ width: '36px', height: '36px' }}
                  >
                    <FaEye size={12} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Certifications;