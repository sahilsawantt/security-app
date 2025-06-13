import React from 'react';
import UnsafeZoneImg from '../images/unsafezone.png'; 

function UnsafeZone() {
  return (
    <div className="feature-card">
      <img src={UnsafeZoneImg} alt="Unsafe Zone" />
      <h3>Unsafe Public Places</h3>
      <p>Mark locations where public safety is compromised or women feel unsafe.</p>
    </div>
  );
}

export default UnsafeZone;