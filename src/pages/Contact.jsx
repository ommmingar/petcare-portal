import React, { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container">
      <div className="contact-form-card">
        <div className="section-header">
          <h2>Contact Support</h2>
          <p>Have questions about specialized medical grooming or custom schedules?</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" required placeholder="Jane Doe" />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" required placeholder="jane@example.com" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea rows="4" required placeholder="Describe your pet's needs or your query..."></textarea>
          </div>
          <button type="submit" className="btn-cyan" style={{ width: '100%' }}>
            Send Inquiry
          </button>
        </form>

        {submitted && (
          <div className="success-alert">
            Thank you! Your message has been received. Our support team responds within 24 hours.
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;