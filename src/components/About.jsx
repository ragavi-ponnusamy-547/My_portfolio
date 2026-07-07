import React, { useState, useEffect } from 'react';
import { GraduationCap, Award, BookOpen, ZoomIn, ZoomOut, X, FileText, CheckCircle, Phone, Mail } from 'lucide-react';
import certPaypal from '../assets/cert_paypal.png';
import certHackathon from '../assets/cert_hackathon.png';
import photoTransparent from '../assets/photo_transparent.png';

const educationData = [
  {
    type: 'B.Tech',
    title: 'B.Tech – Artificial Intelligence and Data Science',
    institution: 'Sri Eshwar College of Engineering',
    status: 'Currently Pursuing',
    metricLabel: 'CGPA',
    metricValue: '8.3',
    subText: 'Up to 4th Semester',
    icon: <GraduationCap size={20} />,
    color: 'hsl(265, 80%, 62%)'
  },
  {
    type: 'HSC',
    title: 'Higher Secondary (HSC)',
    institution: 'Government Higher Secondary School, Vadasithur',
    status: 'Completed',
    metricLabel: 'Percentage',
    metricValue: '90.3%',
    subText: 'State Board Examinations',
    icon: <Award size={20} />,
    color: 'hsl(265, 60%, 65%)'
  },
  {
    type: 'SSLC',
    title: 'Secondary School (SSLC)',
    institution: 'Government Higher Secondary School, Vadasithur',
    status: 'Completed',
    metricLabel: 'Percentage',
    metricValue: '78.6%',
    subText: 'Board Examination',
    icon: <BookOpen size={20} />,
    color: 'hsl(265, 40%, 68%)'
  }
];

const accomplishmentsData = [
  {
    title: 'PayPal Career Academy',
    desc: 'Selected for PayPal Career Academy from 70,000+ applicants, chosen as one of only 50 participants.',
    category: 'Selective Program'
  },
  {
    title: 'The Economic Times Hackathon',
    desc: 'Emerged as a Semifinalist in The Economic Times AI Hackathon.',
    category: 'Hackathon'
  },
  {
    title: 'Consultancy Project',
    desc: 'Successfully completed a commercial consultancy project utilizing React.js, HTML, CSS, JavaScript, and Bootstrap.',
    category: 'Industry Project'
  }
];

const certificatesData = [
  {
    id: 'paypal',
    title: 'PayPal Career Academy Certificate',
    description: 'Product Mentorship Program Completion',
    image: certPaypal,
    available: true
  },
  {
    id: 'hackathon',
    title: 'The Economic Times Hackathon Certificate',
    description: 'ET-AI Hackathon Semifinalist Badge',
    image: certHackathon,
    available: true
  },
  {
    id: 'consultancy',
    title: 'Consultancy Project Certificate',
    description: 'Industry project endorsement',
    image: null,
    available: false
  }
];

export default function About() {
  const [activeCert, setActiveCert] = useState(null);
  const [zoomScale, setZoomScale] = useState(1);

  // Close modal on Esc key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    };
    if (activeCert) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeCert]);

  const openLightbox = (cert) => {
    if (!cert.available) return;
    setActiveCert(cert);
    setZoomScale(1);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setActiveCert(null);
    setZoomScale(1);
    document.body.style.overflow = 'unset';
  };

  const toggleZoom = () => {
    setZoomScale(prev => (prev === 1 ? 1.8 : 1));
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      window.scrollTo({
        top: contactEl.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        {/* Profile Intro Redesign Section - Mimicking Jons Smith Reference UI */}
        <div className="about-intro-grid" id="aboutProfileIntro">
          {/* Visual Side (Left on Desktop): Profile photo + background shapes */}
          <div className="about-intro-visual">
            {/* Background decorative shapes in Lavender theme */}
            <div className="intro-shape-wave-top"></div>
            <div className="intro-shape-wave-bottom"></div>
            <div className="intro-shape-circle"></div>
            <div className="intro-shape-stripe"></div>
            
            {/* Transparent profile image overlay */}
            <img 
              src={photoTransparent} 
              alt="Ragavi Profile" 
              className="about-intro-photo"
              id="aboutIntroPhoto"
            />
          </div>

          {/* Text/Content Side (Right on Desktop) */}
          <div className="about-intro-content">
            <h2 className="about-intro-greeting">
              Hello, I'm <span>Ragavi</span>
            </h2>
            <h3 className="about-intro-role">
              Artificial Intelligence & Data Science Student
            </h3>

            <div className="about-intro-paragraphs">
              <p>
                I am Ragavi, an Artificial Intelligence and Data Science student passionate about building innovative software solutions that solve real-world problems. I have a strong interest in full-stack development, artificial intelligence, and data-driven applications.
              </p>
              <p>
                I enjoy transforming ideas into functional products by working with modern technologies like React.js, Node.js, MongoDB, Python, and AI/ML frameworks. Through my projects and hackathon experiences, I have explored areas such as intelligent automation, computer vision, and web application development.
              </p>
              <p>
                I am continuously learning, improving my technical skills, and looking for opportunities to collaborate on impactful projects where I can contribute as a software developer while growing into a technology professional.
              </p>
            </div>

          </div>
        </div>

        {/* Education Subsection heading */}
        <div className="subsection-container" style={{ marginTop: '2rem' }}>
          <h3 className="subsection-title">Education</h3>
          {/* Horizontal Education Cards */}
          <div className="education-grid">
            {educationData.map((edu, idx) => (
              <div className="education-horizontal-card" key={idx}>
                <div className="edu-card-header">
                  <span className="edu-icon-badge" style={{ backgroundColor: edu.color }}>
                    {edu.icon}
                  </span>
                  <span className="edu-badge-type" style={{ color: edu.color, backgroundColor: `rgba(139, 92, 246, 0.08)` }}>
                    {edu.type}
                  </span>
                </div>
                <h3 className="edu-card-title">{edu.title}</h3>
                <p className="edu-card-inst">{edu.institution}</p>
                
                <div className="edu-card-footer">
                  <div className="edu-card-metric">
                    <span className="edu-metric-lbl">{edu.metricLabel}</span>
                    <span className="edu-metric-val" style={{ color: edu.color }}>{edu.metricValue}</span>
                  </div>
                  <span className="edu-card-status">{edu.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights & Accomplishments Section */}
        <div className="subsection-container">
          <h3 className="subsection-title">Highlights & Accomplishments</h3>
          <div className="accomplishments-grid">
            {accomplishmentsData.map((acc, idx) => (
              <div className="accomplishment-card" key={idx}>
                <div className="acc-card-top">
                  <CheckCircle size={18} className="acc-icon" />
                  <span className="acc-category">{acc.category}</span>
                </div>
                <h4 className="acc-title">{acc.title}</h4>
                <p className="acc-desc">{acc.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates Subsection */}
        <div className="subsection-container">
          <h3 className="subsection-title">Certificates</h3>
          <div className="certificates-grid">
            {certificatesData.map((cert) => (
              <div 
                className={`certificate-card ${!cert.available ? 'disabled' : ''}`} 
                key={cert.id}
                onClick={() => openLightbox(cert)}
                role="button"
                tabIndex={cert.available ? 0 : -1}
                id={`certCard-${cert.id}`}
                aria-label={`View ${cert.title}`}
              >
                <div className="cert-card-icon-wrapper">
                  <FileText size={28} className="cert-icon" />
                </div>
                <div className="cert-card-info">
                  <h4 className="cert-title">{cert.title}</h4>
                  <p className="cert-desc">{cert.description}</p>
                </div>
                <div className="cert-card-action">
                  {cert.available ? (
                    <span className="cert-action-badge">View Certificate <ZoomIn size={14} /></span>
                  ) : (
                    <span className="cert-action-badge soon">Coming Soon ⏳</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Zoom Modal */}
      {activeCert && (
        <div className="modal-overlay lightbox-overlay" onClick={closeLightbox} id="certLightboxOverlay">
          <div 
            className="lightbox-content-wrapper" 
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="lightboxTitle"
          >
            {/* Control buttons */}
            <div className="lightbox-header">
              <span className="lightbox-title" id="lightboxTitle">{activeCert.title}</span>
              <div className="lightbox-controls">
                <button 
                  className="lightbox-btn" 
                  onClick={toggleZoom} 
                  aria-label={zoomScale === 1 ? 'Zoom in' : 'Zoom out'}
                  id="lightboxZoomBtn"
                >
                  {zoomScale === 1 ? <ZoomIn size={18} /> : <ZoomOut size={18} />}
                </button>
                <button 
                  className="lightbox-btn close" 
                  onClick={closeLightbox} 
                  aria-label="Close certificate"
                  id="lightboxCloseBtn"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Scrollable image viewport */}
            <div className="lightbox-image-viewport">
              <img 
                src={activeCert.image} 
                alt={activeCert.title} 
                className="lightbox-image" 
                style={{ 
                  transform: `scale(${zoomScale})`,
                  cursor: zoomScale === 1 ? 'zoom-in' : 'zoom-out'
                }}
                onClick={toggleZoom}
                id="lightboxImg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
