import React from 'react';
import hospitalImg from '../images/hospitalhelp.png';

function HospitalHelp() {
  return (
    <div className="feature-card">
      <img src={hospitalImg} alt="Hospital Help" />
      <h3>Hospital Help</h3>
      <p>Report issues related to hospital bills, insurance, or misbehavior by staff or doctors.</p>
    </div>
  );
}

export default HospitalHelp;