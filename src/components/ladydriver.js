import React from 'react';
import ladyDriverImg from '../images/ladydriver.png'; 

function LadyDriver() {
  return (
    <div className="feature-card">
      <img src={ladyDriverImg} alt="Lady Driver" />
      <h3>Lady Driver</h3>
      <p>Book a trusted lady driver for safe travel at night or during emergencies.</p>
    </div>
  );
}

export default LadyDriver;

