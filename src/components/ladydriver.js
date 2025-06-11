import React from 'react';
import driverImg from '../images/driver.png';

function LadyDriver() {
  return (
    <div className="feature-box">
      <img src={driverImg} alt="Lady Driver" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
      <h3>Lady Driver Cab</h3>
      <p>Night-time safe cab booking with verified lady drivers for secure travel.</p>
    </div>
  );
}

export default LadyDriver;