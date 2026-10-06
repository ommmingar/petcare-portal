import React from 'react';

const About = () => {
  return (
    <div className="container">
      <div className="section-header">
        <h2>About PetCare Portal</h2>
        <p>Architecture, design principles, and operational workflow.</p>
      </div>

      <div className="grid-3">
        <div className="info-card">
          <h3>Platform Overview</h3>
          <p>
            PetCare Portal is a single-page application (SPA) created to connect pet owners with verified local mobile groomers and dog walkers without telephone waitlists.
          </p>
        </div>
        <div className="info-card">
          <h3>Core Mission</h3>
          <p>
            Reduce separation anxiety and transport stress for domestic pets by providing doorstep services using certified animal-handling standards.
          </p>
        </div>
        <div className="info-card">
          <h3>Tech Architecture</h3>
          <p>
            Engineered using React 18 and Vite for fast client rendering, leveraging React Router v6 for dynamic parameter and state transfer between routes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;