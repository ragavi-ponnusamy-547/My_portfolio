import React, { useState, useEffect } from 'react';
import { Phone, Mail } from 'lucide-react';
import profilePhoto from '../assets/photo_transparent.png';

export default function Hero() {
  const words = [
    "AI and Data Science Student",
    "Problem Solver",
    "Aspiring Software Developer",
    "MERN Stack Developer"
  ];
  const [wordIdx, setWordIdx] = useState(0);
  const [subText, setSubText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentFullWord = words[wordIdx];

    if (!isDeleting) {
      // Typing
      if (subText.length < currentFullWord.length) {
        timer = setTimeout(() => {
          setSubText(currentFullWord.substring(0, subText.length + 1));
        }, 120);
      } else {
        // Wait before starting deletion
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      // Deleting
      if (subText.length > 0) {
        timer = setTimeout(() => {
          setSubText(currentFullWord.substring(0, subText.length - 1));
        }, 60);
      } else {
        setIsDeleting(false);
        setWordIdx((prevIdx) => (prevIdx + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [subText, isDeleting, wordIdx]);

  return (
    <section id="home" className="hero-section">
      {/* Background organic SVG curve matching the reference UI spacing */}
      <div className="hero-curve-bg">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
          <path 
            className="hero-curve-path" 
            d="M 0,0 L 78,0 C 90,28 92,60 76,82 C 64,95 40,98 0,100 Z"
          />
        </svg>
      </div>

      <div className="hero-grid">
        {/* Left Side: Photo placed inside a floating custom frame */}
        <div className="hero-visual">
          <div className="image-wrapper">
            <img 
              src={profilePhoto} 
              alt="Ragavi Portrait" 
              className="profile-photo"
              id="heroProfilePhoto"
            />
          </div>
        </div>

        {/* Right Side: Copy & Content */}
        <div className="hero-content">
          <span className="badge-greeting" id="heroGreeting">Hi, I'm</span>
          
          <h1 className="main-title" id="heroName">Ragavi</h1>
          
          <div className="typing-subheader" id="heroSubtitle">
            <span>{subText}</span>
            <span className="cursor"></span>
          </div>
          

          {/* Social Icons row matching the yellow circle style from the reference */}
          <div className="social-icons-row" id="heroSocials">
            <a 
              href="tel:+916379834166" 
              className="social-icon-btn" 
              title="Phone" 
              aria-label="Phone Link"
              id="socialPhone"
            >
              <Phone />
            </a>
            <a 
              href="https://github.com/ragavi-ponnusamy-547" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-btn" 
              title="GitHub" 
              aria-label="GitHub Link"
              id="socialGithub"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/ragaviponnusamy547" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-btn" 
              title="LinkedIn" 
              aria-label="LinkedIn Link"
              id="socialLinkedin"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a 
              href="mailto:ragaviponnusamy547@gmail.com" 
              className="social-icon-btn" 
              title="Email" 
              aria-label="Email Link"
              id="socialEmail"
            >
              <Mail />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
