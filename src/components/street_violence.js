import React from 'react';
import streetImg from '../images/street.png';

function StreetViolence() {
  return (
    <div className="feature-card">
      <img src={streetImg} alt="Street Violence" />
      <h3>Street Violence</h3>
      <p>Report street crime and public safety threats.</p>
    </div>
  );
}

export default StreetViolence;