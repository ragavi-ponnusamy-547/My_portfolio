import React from 'react';
import { Code, Terminal, Database, Globe, Cpu, BarChart2, Layers } from 'lucide-react';

const skillsData = [
  {
    category: 'Programming Languages',
    icon: <Terminal size={20} />,
    skills: [
      { name: 'C++', icon: <Code size={16} /> },
      { name: 'Python', icon: <Terminal size={16} /> },
      { name: 'Java', icon: <Terminal size={16} /> },
      { name: 'SQL', icon: <Database size={16} /> }
    ]
  },
  {
    category: 'Web Development',
    icon: <Globe size={20} />,
    skills: [
      { name: 'HTML', icon: <Code size={16} /> },
      { name: 'CSS', icon: <Layers size={16} /> },
      { name: 'JavaScript', icon: <Globe size={16} /> },
      { name: 'React.js', icon: <Globe size={16} /> },
      { name: 'Express.js', icon: <Layers size={16} /> }
    ]
  },
  {
    category: 'Database',
    icon: <Database size={20} />,
    skills: [
      { name: 'MongoDB', icon: <Database size={16} /> }
    ]
  },
  {
    category: 'Core Computer Science',
    icon: <Cpu size={20} />,
    skills: [
      { name: 'Data Structures & Algorithms', icon: <Cpu size={16} /> },
      { name: 'Object-Oriented Programming', icon: <Code size={16} /> }
    ]
  },
  {
    category: 'Libraries',
    icon: <BarChart2 size={20} />,
    skills: [
      { name: 'NumPy', icon: <BarChart2 size={16} /> },
      { name: 'Pandas', icon: <BarChart2 size={16} /> },
      { name: 'Matplotlib', icon: <BarChart2 size={16} /> }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <span className="section-badge">My Abilities</span>
        <h2 className="section-title">Skills & Tech Stack</h2>
        <div className="section-divider"></div>
      </div>

      <div className="skills-grid">
        {skillsData.map((categoryGroup, index) => (
          <div className="skills-card" key={index}>
            <div className="skills-card-header">
              <div className="skills-card-icon">
                {categoryGroup.icon}
              </div>
              <h3 className="skills-card-title">{categoryGroup.category}</h3>
            </div>
            
            <div className="skills-badges-list">
              {categoryGroup.skills.map((skill, sIndex) => (
                <div className="skill-badge" key={sIndex}>
                  <span className="skill-badge-icon">{skill.icon}</span>
                  <span className="skill-badge-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
