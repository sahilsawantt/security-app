import React from 'react';
import deleteImg from '../images/privacydelete.png';

function PrivacyDelete() {
  return (
    <div className="feature-box">
      <img src={deleteImg} alt="Privacy Delete" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
      <h3>Privacy Delete</h3>
      <p>Help to instantly delete private images/videos from phone or online if compromised.</p>
    </div>
  );
}

export default PrivacyDelete;