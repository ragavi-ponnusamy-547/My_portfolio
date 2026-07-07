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
    shortDesc: 'ReconAI is an AI-powered invoice-to-payment reconciliation system that matches invoices with payments.',
    longDesc: 'ReconAI reduces manual accounting efforts by identifying whether invoices are paid, partially paid, unpaid, or overdue. The system automatically reconciles bank transactions and invoices using natural language understanding and machine learning. It also provides a comprehensive dashboard, confidence scores, explainable matching reasons, real-time alerts, an interactive query chatbot, and multilingual support to make financial tracking simple and accurate.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Python', 'AI/ML'],
    link: 'https://example.com/reconai'
  },
  {
    id: 2,
    name: 'HireAI',
    title: 'HireAI - Recruitment Platform',
    image: hireAiImg,
    shortDesc: 'HireAI is an AI-powered recruitment and interview management platform built using the MERN stack.',
    longDesc: 'HireAI enables recruiters to design customizable hiring workflows, host AI-assisted virtual interviews, and manage candidate assessments seamlessly. The platform evaluates candidate performance on-the-fly and presents insights through a centralized analytics dashboard, keeping the final hiring decision transparent and in human hands. It supports secure, token-based authentication and role-based views.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AI Integration', 'JWT Authentication'],
    link: 'https://example.com/hireai'
  },
  {
    id: 3,
    name: 'RecipeHub',
    title: 'RecipeHub - Recipe Sharing',
    image: recipeHubImg,
    shortDesc: 'RecipeHub is a full-stack recipe sharing web application built using React.js, Node.js, Express.js, and MongoDB.',
    longDesc: 'RecipeHub allows users to register, log in, create, and share culinary recipes with ratings and comments. It implements secure JWT-based authentication and role-based access control where users can edit or delete only their recipes, while administrators hold full system access. Key features include a 5-star rating scale, comments, user profiles, and a robust admin monitor panel.',
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
                
                <p className="modal-description">{selectedProject.longDesc}</p>

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
