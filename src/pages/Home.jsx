import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <div className="hero-card">
        <span className="hero-pill">DOORSTEP PET CARE</span>
        <h1 className="hero-title">Premium Grooming & Walking For Your Pets</h1>
        <p className="hero-subtitle">
          Professional pet stylists and certified dog walkers at your doorstep. Transparent pricing, stress-free scheduling.
        </p>
        <div className="hero-actions">
          <Link to="/services" className="btn-cyan">View Packages</Link>
          <Link to="/contact" className="btn-secondary">Contact Support</Link>
        </div>
      </div>

      <div className="grid-3">
        <div className="info-card">
          <h3>Certified Groomers</h3>
          <p>Trained handlers equipped with sanitized, pet-safe grooming tools for sensitive skin and all coat types.</p>
        </div>
        <div className="info-card">
          <h3>Doorstep Convenience</h3>
          <p>No travel anxiety for your pets. We arrive at your location at your designated appointment time.</p>
        </div>
        <div className="info-card">
          <h3>Instant Scheduling</h3>
          <p>Select your tier, choose your time slot, and receive real-time booking confirmation directly.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;