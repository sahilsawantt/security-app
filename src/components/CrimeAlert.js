import React from 'react';
import CrimeAlert from '../images/crimealert.png';

function Emergency() {
  return (
    <div className="feature-card">
      <img src={CrimeAlert} alt="CrimeAlert" />
      <h3>Emergency Help</h3>
      <p>Send quick emergency alerts to saved contacts.</p>
    </div>
  );
}

export default CrimeAlert;