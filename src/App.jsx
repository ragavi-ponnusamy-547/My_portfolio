import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CodingProfiles from './components/CodingProfiles';
import { Phone, Mail } from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Sections */}
      <main>
        {/* Home / Hero Section */}
        <Hero />

        {/* About Section - Profile Intro, Education cards, Achievements, Certificates */}
        <About />

        {/* Skills Section - Grouped Tech Badges */}
        <Skills />

        {/* Projects Section - Responsive Grid with Detail Modals */}
        <Projects />

        {/* Coding Profiles Section - Tooltipped Badges */}
        <CodingProfiles />

        {/* Contact Section */}
        <section id="contact" className="section-placeholder">
          <div className="placeholder-content">
            <h2 className="placeholder-title">Get In Touch</h2>
            <p className="placeholder-text" style={{ marginBottom: '1.5rem' }}>
              Have a question or want to work together? I am always open to discussing new opportunities, creative ideas, or projects. Feel free to reach out via my email or phone.
            </p>
            <div className="section-divider" style={{ margin: '0 auto 2.5rem' }}></div>
            
            {/* Contact Cards Row */}
            <div className="contact-icons-row" id="contactIcons">
              <a 
                href="tel:+916379834166" 
                className="contact-icon-card" 
                title="Phone" 
                aria-label="Phone Link"
                id="contactPhone"
              >
                <Phone size={20} />
                <span className="contact-card-label">Phone</span>
              </a>
              <a 
                href="https://github.com/ragavi-ponnusamy-547" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-icon-card" 
                title="GitHub" 
                aria-label="GitHub Link"
                id="contactGithub"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                <span className="contact-card-label">GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/ragaviponnusamy547" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-icon-card" 
                title="LinkedIn" 
                aria-label="LinkedIn Link"
                id="contactLinkedin"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span className="contact-card-label">LinkedIn</span>
              </a>
              <a 
                href="mailto:ragaviponnusamy547@gmail.com" 
                className="contact-icon-card" 
                title="Email" 
                aria-label="Email Link"
                id="contactEmail"
              >
                <Mail size={20} />
                <span className="contact-card-label">Email</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} <span>Ragavi</span>. All rights reserved. Made with love and lavender vibes.</p>
      </footer>
    </div>
  );
}

export default App;
