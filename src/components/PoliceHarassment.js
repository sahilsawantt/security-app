import React from 'react';
import policeImg from '../images/policeharassment.png'; 

function PoliceHarassment() {
  return (
    <div className="feature-card">
      <img src={policeImg} alt="Police Harassment" />
      <h3>Police Harassment</h3>
      <p>Report any kind of harassment or misconduct by police officers.</p>
    </div>
  );
}

export default PoliceHarassment;