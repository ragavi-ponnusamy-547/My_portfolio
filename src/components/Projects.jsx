import React, { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';
import reconAiImg from '../assets/recon_ai.png';
import hireAiImg from '../assets/hire_ai.png';
import recipeHubImg from '../assets/recipe_hub.png';

const projectsData = [
  {
    id: 1,
    name: 'ReconAI',
    title: 'ReconAI - Payment Reconciliation',
    image: reconAiImg,
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Python', 'AI/ML'],
    link: 'https://example.com/reconai'
  },
  {
    id: 2,
    name: 'HireAI',
    title: 'HireAI - Recruitment Platform',
    image: hireAiImg,
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AI Integration', 'JWT Authentication'],
    link: 'https://example.com/hireai'
  },
  {
    id: 3,
    name: 'RecipeHub',
    title: 'RecipeHub - Recipe Sharing',
    image: recipeHubImg,
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Authentication'],
    link: 'https://example.com/recipehub'
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <span className="section-badge">My Work</span>
        <h2 className="section-title">Featured Projects</h2>
        <div className="section-divider"></div>
      </div>

      <div className="projects-grid">
        {projectsData.map((project) => (
          <div 
            className="project-card" 
            key={project.id}
            onClick={() => openModal(project)}
            role="button"
            tabIndex={0}
            aria-label={`View project details for ${project.name}`}
            id={`projectCard-${project.id}`}
          >
            <div className="project-thumbnail-wrapper">
              <img 
                src={project.image} 
                alt={`${project.name} Thumbnail`} 
                className="project-thumbnail"
              />
              <div className="project-card-overlay">
                <span className="overlay-btn-text">View Details</span>
              </div>
            </div>
            
            <div className="project-card-info">
              <h3 className="project-card-title">{project.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal} id="projectModalOverlay">
          <div 
            className="modal-content" 
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modalTitle"
          >
            <button className="modal-close-btn" onClick={closeModal} aria-label="Close modal" id="modalCloseBtn">
              <X size={20} />
            </button>

            <div className="modal-scroll-container">
              <div className="modal-image-wrapper">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.name} 
                  className="modal-image"
                />
              </div>

              <div className="modal-body">
                <h3 className="modal-project-name" id="modalTitle">{selectedProject.title}</h3>

                <div className="modal-tech-stack">
                  <span className="tech-stack-label">Tech Stack:</span>
                  <div className="tech-tags-list">
                    {selectedProject.techStack.map((tech, idx) => (
                      <span className="tech-tag" key={idx}>{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-actions">
                  <a 
                    href={selectedProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary btn-modal-link"
                    id="btnModalDeploy"
                  >
                    View Live Deployment <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
