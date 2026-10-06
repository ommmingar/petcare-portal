import React from 'react';
import { useNavigate } from 'react-router-dom';

const petServices = [
  {
    id: 1,
    icon: '🐕',
    name: 'Bath & Blow Dry (Sniff & Shine)',
    category: 'Dog Care',
    price: '₹799',
    desc: 'Medicated anti-tick bath, high-velocity blow dry, ear cleaning, and thorough brush-out.'
  },
  {
    id: 2,
    icon: '✂️',
    name: 'Full Breed Styling & Grooming',
    category: 'Dog Care',
    price: '₹1,499',
    desc: 'Breed-specific scissor haircut, sanitary hygiene trim, nail clipping, and paw butter massage.'
  },
  {
    id: 3,
    icon: '🦮',
    name: 'Daily Society Dog Walking',
    category: 'Dog Walking',
    price: '₹399',
    desc: '40-minute disciplined society walk, hydration check, paw wipe-down, and WhatsApp activity update.'
  },
  {
    id: 4,
    icon: '🐈',
    name: 'Royal Cat Bath & Brush',
    category: 'Cat Care',
    price: '₹999',
    desc: 'Low-stress feline bath, shedding control, claw tip clipping, and sensitive ear cleansing.'
  },
  {
    id: 5,
    icon: '🐱',
    name: 'Complete Feline Trim & Hygiene',
    category: 'Cat Care',
    price: '₹1,699',
    desc: 'Lion cut or summer hygienic trim, deep de-matting treatment, and waterless foam wash.'
  },
  {
    id: 6,
    icon: '✨',
    name: 'Anti-Tick & Flea Spa Treatment',
    category: 'Add-on',
    price: '₹499',
    desc: 'Organic neem & eucalyptus tick rinse, coat conditioning spray, and dental freshening mist.'
  }
];

const Services = () => {
  const navigate = useNavigate();

  const handleBook = (pkg) => {
    console.log("Selected Pet Care Package:", pkg);
    navigate('/booking', { state: { package: pkg } });
  };

  return (
    <div className="container">
      <div className="section-header">
        <h2>Available Pet Care Packages</h2>
        <p>Doorstep pet grooming and walking services across Indian metropolitan cities.</p>
      </div>

      <div className="grid-3">
        {petServices.map((pkg) => (
          <div key={pkg.id} className="service-card">
            <div className="service-content">
              <div className="service-meta">
                <span className="badge">{pkg.icon} {pkg.category}</span>
                <span className="price-tag">{pkg.price}</span>
              </div>
              <h3>{pkg.name}</h3>
              <p>{pkg.desc}</p>
              <button onClick={() => handleBook(pkg)} className="btn-cyan">
                Select & Book
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;