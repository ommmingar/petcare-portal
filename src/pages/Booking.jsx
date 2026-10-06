import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Booking = () => {
  const location = useLocation();
  const selectedPackage = location.state?.package;

  // Set today's date as the minimum selectable date
  const todayDate = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    ownerName: '',
    petNameBreed: '',
    phone: '',
    cityState: 'Mumbai, Maharashtra',
    address: '',
    date: '', // Starts empty: displays dd-mm-yyyy placeholder until selected
    timeSlot: 'Morning (08:00 AM - 11:00 AM)'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Doorstep Booking Logged:", { ...formData, package: selectedPackage });
    setSubmitted(true);
  };

  return (
    <div className="container">
      <div className="booking-card">
        <div className="section-header">
          <h2>Book Doorstep Appointment</h2>
          <p>Schedule certified grooming or walking services at your home.</p>
        </div>

        {selectedPackage ? (
          <div className="selected-package-summary">
            <h4>Selected Tier: {selectedPackage.name} ({selectedPackage.category})</h4>
            <p>Package Price: <strong>{selectedPackage.price}</strong> (Inclusive of all taxes)</p>
          </div>
        ) : (
          <div className="selected-package-summary">
            <h4>General Appointment</h4>
            <p>No package pre-selected. Our grooming van will assess your pet on-site.</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-row">
            <div className="form-group">
              <label>Pet Parent Full Name</label>
              <input
                type="text"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                required
                placeholder="e.g. Rahul Sharma"
              />
            </div>
            <div className="form-group">
              <label>Pet Name & Breed</label>
              <input
                type="text"
                name="petNameBreed"
                value={formData.petNameBreed}
                onChange={handleChange}
                required
                placeholder="e.g. Bruno (Labrador)"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Contact Number (India +91)</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                pattern="[6-9][0-9]{9}"
                title="Enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9"
                required
                placeholder="e.g. 9876543210"
              />
            </div>
            <div className="form-group">
              <label>Select Date (Calendar)</label>
              <input
                type="date"
                name="date"
                min={todayDate}
                value={formData.date}
                onChange={handleChange}
                onClick={(e) => e.target.showPicker && e.target.showPicker()}
                required
                className="calendar-input"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>City & Region</label>
              <select
                name="cityState"
                value={formData.cityState}
                onChange={handleChange}
              >
                <option value="Mumbai, Maharashtra">Mumbai, Maharashtra</option>
                <option value="Pune, Maharashtra">Pune, Maharashtra</option>
                <option value="Delhi NCR">Delhi NCR</option>
                <option value="Bengaluru, Karnataka">Bengaluru, Karnataka</option>
                <option value="Hyderabad, Telangana">Hyderabad, Telangana</option>
                <option value="Chennai, Tamil Nadu">Chennai, Tamil Nadu</option>
              </select>
            </div>
            <div className="form-group">
              <label>Preferred Time Slot</label>
              <select
                name="timeSlot"
                value={formData.timeSlot}
                onChange={handleChange}
              >
                <option value="Morning (08:00 AM - 11:00 AM)">Morning (08:00 AM - 11:00 AM)</option>
                <option value="Afternoon (12:00 PM - 03:00 PM)">Afternoon (12:00 PM - 03:00 PM)</option>
                <option value="Evening (04:00 PM - 07:00 PM)">Evening (04:00 PM - 07:00 PM)</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Complete House / Flat & Street Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="Flat 402, Building 5, Greenfield Society, Link Road"
            />
          </div>

          <button type="submit" className="btn-cyan" style={{ width: '100%' }}>
            Confirm Doorstep Booking
          </button>
        </form>

        {submitted && (
          <div className="success-alert">
            Booking confirmed for <strong>{formData.petNameBreed}</strong> on <strong>{formData.date}</strong> ({formData.timeSlot}). Our grooming specialist will call <strong>+91 {formData.phone}</strong> before arrival!
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;