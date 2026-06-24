import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
interface Project {
  title: string;
  description: string;
  githubUrl: string;
  imageUrl: string;
  category: 'web' | 'ds';
  tags: string[];
}
const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'ds'>('all');
  const projectsData: Project[] = [
    {
      title: 'Stock Price Prediction',
      description: 'A predictive modeling tool using Python to analyze historical shares data and output price trends based on linear regression algorithms.',
      githubUrl: 'https://github.com/Sandysanthosh42/stock-price-prediction',
      imageUrl: '/images/stock-prediction.png',
      category: 'ds',
      tags: ['Python', 'Machine Learning', 'Pandas', 'Scikit-Learn']
    },
    {
      title: 'Weather Forecasting App',
      description: 'An interactive weather client querying external open APIs to fetch, parse, and render real-time weather details for searched global cities.',
      githubUrl: 'https://github.com/Sandysanthosh42/Weather-App',
      imageUrl: '/images/weather-app.png',
      category: 'web',
      tags: ['JavaScript', 'Weather API', 'CSS Grid', 'JSON Fetch']
    },
    {
      title: 'Dynamic Digital Clock',
      description: 'A sleek desktop-style digital time tracker featuring interactive theme changes, responsive styling, and real-time interval state updating.',
      githubUrl: 'https://github.com/Sandysanthosh42/Digitol-clock',
      imageUrl: '/images/digital-clock.png',
      category: 'web',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Intervals']
    },
    {
      title: 'Exact Age Calculator',
      description: 'A utility parsing birthdates against current timestamps to calculate differences across years, months, and days with custom error alerts.',
      githubUrl: 'https://github.com/Sandysanthosh42/Age-Calculator',
      imageUrl: '/images/age-calculator.png',
      category: 'web',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Date Logic']
    }
  ];
  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeFilter);
  return (
    <section id="projects" className="skills-padding reveal-on-scroll">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-4">
            <h6 className="text-center text-cyan fs-6 text-uppercase letter-spacing-2 m-0">My Work</h6>
            <h4 className="text-center pb-2 display-5 fw-bold text-white">Recent Projects</h4>
            <div className="mx-auto" style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent-color)', borderRadius: '2px', boxShadow: '0 0 10px var(--accent-glow-strong)' }}></div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-12">
            <div className="filter-tabs">
              <button 
                onClick={() => setActiveFilter('all')}
                className={`filter-btn ${activeFilter === 'all' ? 'active-filter' : ''}`}
              >
                All Projects
              </button>
              <button 
                onClick={() => setActiveFilter('web')}
                className={`filter-btn ${activeFilter === 'web' ? 'active-filter' : ''}`}
              >
                Web Applications
              </button>
              <button 
                onClick={() => setActiveFilter('ds')}
                className={`filter-btn ${activeFilter === 'ds' ? 'active-filter' : ''}`}
              >
                Python & ML
              </button>
            </div>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          {filteredProjects.map((project, index) => (
            <div key={index} className="col-md-6 col-lg-6">
              <div className="project-card-v2">
                <div className="project-img-wrapper">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="img-fluid"
                    onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%230b1120'/%3E%3Cstop offset='100%25' stop-color='%231e293b'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23g)'/%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <div className="p-4 d-flex flex-column text-start flex-grow-1">
                  <h5 className="text-white fw-bold mb-2">{project.title}</h5>
                  <p className="text-white-50 fs-7 lh-lg mb-4 flex-grow-1">
                    {project.description}
                  </p>
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="tech-tag">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="d-flex gap-3 align-items-center mt-auto border-top border-light border-opacity-10 pt-3">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-accent d-flex align-items-center gap-2 px-3 py-2 fs-7 fw-semibold w-100 justify-content-center"
                    >
                      <FaGithub size={16} />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;