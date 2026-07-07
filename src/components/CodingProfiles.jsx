import React from 'react';

const profiles = [
  {
    name: 'LeetCode',
    tooltip: 'LeetCode Profile',
    url: 'https://leetcode.com/u/Ragavi_PON/',
    color: '#FFA116',
    bgLight: 'rgba(255, 161, 22, 0.1)',
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="profile-logo-svg">
        <path d="M16.102 17.93l-2.697 2.607c-.466.45-1.211.45-1.677 0l-5.32-5.144a1.144 1.144 0 0 1 0-1.621l2.697-2.608c.466-.45 1.211-.45 1.677 0l5.32 5.144a1.144 1.144 0 0 1 0 1.622zm-2.697-8.087l-2.697 2.607c-.466.45-1.211.45-1.677 0L3.71 7.306a1.144 1.144 0 0 1 0-1.621L6.41 3.078c.466-.45 1.211-.45 1.677 0l5.32 5.144a1.144 1.144 0 0 1 0 1.621zm6.98 3.513l-2.697 2.607c-.466.45-1.211.45-1.677 0l-5.32-5.144a1.144 1.144 0 0 1 0-1.621l2.697-2.608c.466-.45 1.211-.45 1.677 0l5.32 5.144a1.144 1.144 0 0 1 0 1.622z" />
      </svg>
    )
  },
  {
    name: 'HackerRank',
    tooltip: 'HackerRank Profile',
    url: 'https://www.hackerrank.com/profile/ragavipon_2024a1',
    color: '#2EC866',
    bgLight: 'rgba(46, 200, 102, 0.1)',
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="profile-logo-svg">
        <path d="M22 6.556v10.888C22 19.34 19.336 21 16.556 21H7.444C4.66 21 2 19.336 2 16.556V6.556C2 3.664 4.66 2 7.444 2h9.112C19.336 2 22 3.664 22 6.556zm-11.236 7.44H8.76v-3.992H6.776v3.992H4.788V6.004h1.988v3.664h1.984V6.004h1.988v7.992zm7.448-3.992c-.104-.648-.636-1.12-1.344-1.12-.8 0-1.328.6-1.328 1.48v1.272c0 .88.528 1.48 1.328 1.48.708 0 1.24-.472 1.344-1.12h1.988c-.14 1.764-1.48 3.112-3.332 3.112-2.18 0-3.328-1.504-3.328-3.472v-1.272c0-1.968 1.148-3.472 3.328-3.472 1.852 0 3.192 1.348 3.332 3.112h-1.988z" />
      </svg>
    )
  },
  {
    name: 'CodeChef',
    tooltip: 'CodeChef Profile',
    url: 'https://www.codechef.com/users/ragavi547',
    color: '#5B4636',
    bgLight: 'rgba(91, 70, 54, 0.1)',
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="profile-logo-svg">
        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1 15.845v1.249h-2v-1.249a4.996 4.996 0 0 1-3.668-3.668h-1.25v-2h1.25A4.996 4.996 0 0 1 11 8.506V7.25h2v1.256a4.997 4.997 0 0 1 3.668 3.668h1.25v2h-1.25A4.996 4.996 0 0 1 13 17.845zM12 10a2 2 0 1 0 .001 4.001A2 2 0 0 0 12 10z" />
      </svg>
    )
  },
  {
    name: 'Skillrack',
    tooltip: 'Skillrack Profile',
    url: 'https://www.skillrack.com/faces/resume.xhtml?id=514508&key=5a505c3d342fbe6708a0ad28ec791dcb3677497d',
    color: '#F05B24',
    bgLight: 'rgba(240, 91, 36, 0.1)',
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="profile-logo-svg">
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v4h2v-4h3l-4-4-4 4h3z" />
      </svg>
    )
  }
];

export default function CodingProfiles() {
  return (
    <section id="coding-profiles" className="coding-profiles-section">
      <div className="section-header">
        <span className="section-badge">My Stats</span>
        <h2 className="section-title">Coding Profiles</h2>
        <div className="section-divider"></div>
      </div>

      <div className="profiles-container">
        {profiles.map((profile, index) => (
          <a
            key={index}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="profile-circle-card"
            style={{
              '--profile-color': profile.color,
              '--profile-bg-light': profile.bgLight
            }}
            id={`codingProfile-${profile.name.toLowerCase()}`}
          >
            <div className="profile-icon-wrapper">
              {profile.logo}
            </div>
            <span className="profile-tooltip">{profile.tooltip}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
