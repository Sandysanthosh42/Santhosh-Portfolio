import React, { useEffect, useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaPython, FaBootstrap, FaGithub, FaBitbucket, FaGoogle, FaRobot } from 'react-icons/fa';
import { SiMongodb, SiCanva, SiN8N } from 'react-icons/si';
import { DiVisualstudio } from 'react-icons/di';
interface Skill {
  name: string;
  level: string;
  percentage: number;
  description: string;
  icon: React.ReactNode;
  cssClass: string;
}
const Skills: React.FC = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  const frontendSkills: Skill[] = [
    {
      name: 'HTML',
      level: 'Intermediate',
      percentage: 85,
      description: 'Used structural elements, accessible markup, and optimized DOM tags to construct modern responsive websites.',
      icon: <FaHtml5 size={32} />,
      cssClass: 'skill-html'
    },
    {
      name: 'CSS',
      level: 'Intermediate',
      percentage: 80,
      description: 'Possess strong CSS grid, flexbox, and glassmorphic styling skills to build layouts and custom keyframe animations.',
      icon: <FaCss3Alt size={32} />,
      cssClass: 'skill-css'
    },
    {
      name: 'JAVASCRIPT',
      level: 'Intermediate',
      percentage: 75,
      description: 'Utilized ES6+ features, modular JS logic, async fetch APIs, event listeners, and dynamic DOM rendering.',
      icon: <FaJs size={32} />,
      cssClass: 'skill-js'
    },
    {
      name: 'BOOTSTRAP',
      level: 'Intermediate',
      percentage: 80,
      description: 'Designed quick responsive grid interfaces, card elements, nav components, and clean CSS customization.',
      icon: <FaBootstrap size={32} />,
      cssClass: 'skill-bootstrap'
    }
  ];
  const backendSkills: Skill[] = [
    {
      name: 'JAVA',
      level: 'Intermediate',
      percentage: 75,
      description: 'Applied object-oriented principles, modular classes, package structures, and simple data architectures.',
      icon: <FaJava size={32} />,
      cssClass: 'skill-java'
    },
    {
      name: 'MONGODB',
      level: 'Intermediate',
      percentage: 70,
      description: 'Configured unstructured database collections, document structures, and processed database queries.',
      icon: <SiMongodb size={32} />,
      cssClass: 'skill-mongodb'
    },
    {
      name: 'PYTHON',
      level: 'Basics',
      percentage: 60,
      description: 'Written basic computational scripts and logical algorithms using standard library modules.',
      icon: <FaPython size={32} />,
      cssClass: 'skill-python'
    }
  ];
  const toolSkills: Skill[] = [
    {
      name: 'Google Workspace',
      level: 'Intermediate',
      percentage: 85,
      description: 'Collaborating using Drive, Docs, Sheets, Forms, and optimizing admin productivity workflows.',
      icon: <FaGoogle size={28} />,
      cssClass: 'skill-google'
    },
    {
      name: 'Canva',
      level: 'Intermediate',
      percentage: 80,
      description: 'Creating visual content, banner illustrations, mockups, and presentations for projects.',
      icon: <SiCanva size={28} />,
      cssClass: 'skill-canva'
    },
    {
      name: 'GitHub',
      level: 'Intermediate',
      percentage: 75,
      description: 'Managing source version repositories, commits, branch structures, pull requests, and merges.',
      icon: <FaGithub size={28} />,
      cssClass: 'skill-github'
    },
    {
      name: 'Bitbucket',
      level: 'Basics',
      percentage: 60,
      description: 'Understanding team codebase coordination, clone triggers, and basic Git commands in Jira integrated systems.',
      icon: <FaBitbucket size={28} />,
      cssClass: 'skill-bitbucket'
    },
    {
      name: 'VS Code',
      level: 'Intermediate',
      percentage: 85,
      description: 'Configuring custom development environments, workspace settings, extension integrations, and terminal triggers.',
      icon: <DiVisualstudio size={28} />,
      cssClass: 'skill-vscode'
    },
    {
      name: 'N8N',
      level: 'Basics',
      percentage: 60,
      description: 'Building custom automated API nodes, conditional workflow branches, and data pipelines.',
      icon: <SiN8N size={28} />,
      cssClass: 'skill-n8n'
    },
    {
      name: 'Antigravity AI',
      level: 'Advanced',
      percentage: 85,
      description: 'AI-driven coding agent used for automated scaffolding, code refactoring, styling system overrides, and rapid UI development.',
      icon: <FaRobot size={28} />,
      cssClass: 'skill-antigravity'
    }
  ];
  const renderSkillGrid = (skills: Skill[]) => (
    <div className="row g-4">
      {skills.map((skill, index) => (
        <div key={index} className="col-md-6 col-lg-4 col-xl-3">
          <div className={`skill-card-v2 ${skill.cssClass}`}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="skill-icon-wrap">
                {skill.icon}
              </div>
              <span className="skill-level-badge">{skill.level}</span>
            </div>
            <div className="text-start mb-4">
              <h5 className="skill-title mb-2 fs-6">{skill.name}</h5>
              <p className="text-white-50 fs-7 lh-base m-0">{skill.description}</p>
            </div>
            <div className="mt-auto">
              <div className="d-flex justify-content-between align-items-center mb-1 fs-8 text-white-50">
                <span>Proficiency</span>
                <span>{skill.percentage}%</span>
              </div>
              <div className="skill-progress-container">
                <div
                  className="skill-progress-bar"
                  style={{
                    width: shouldAnimate ? `${skill.percentage}%` : '0%',
                    transitionDelay: `${index * 50}ms`
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
  return (
    <section id="skills" className="skills-padding reveal-on-scroll">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-5">
            <h6 className="text-center text-cyan fs-6 text-uppercase letter-spacing-2 m-0">My Capabilities</h6>
            <h4 className="text-center pb-2 display-5 fw-bold text-white">Skills & Proficiencies</h4>
            <div className="mx-auto" style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent-color)', borderRadius: '2px', boxShadow: '0 0 10px var(--accent-glow-strong)' }}></div>
          </div>
        </div>
        <h5 className="text-start text-white fw-bold mb-4 border-bottom border-light border-opacity-10 pb-2 d-flex align-items-center gap-2">
          <span className="text-cyan">01.</span> Frontend Development
        </h5>
        {renderSkillGrid(frontendSkills)}
        <h5 className="text-start text-white fw-bold mb-4 mt-5 border-bottom border-light border-opacity-10 pb-2 d-flex align-items-center gap-2">
          <span className="text-cyan">02.</span> Backend Development
        </h5>
        {renderSkillGrid(backendSkills)}
        <h5 className="text-start text-white fw-bold mb-4 mt-5 border-bottom border-light border-opacity-10 pb-2 d-flex align-items-center gap-2">
          <span className="text-cyan">03.</span> Tools & Automation
        </h5>
        {renderSkillGrid(toolSkills)}
      </div>
    </section>
  );
};
export default Skills;