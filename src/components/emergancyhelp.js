import React from 'react';
import emergencyImg from '../images/emergency.png';

function Emergency() {
  return (
    <div className="feature-card">
      <img src={emergencyImg} alt="Emergency Help" />
      <h3>Emergency Help</h3>
      <p>Send quick emergency alerts to saved contacts.</p>
    </div>
  );
}

export default Emergency;