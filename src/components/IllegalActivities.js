import React from 'react';
import IllegalActivities from '../images/illegalactivity.png'; // image add karna hoga

function IllegalActivities() {
  return (
    <div className="feature-card">
      <img src={illegalactivitylImg} alt="Illegal Activities" />
      <h3>Illegal Activities</h3>
      <p>Report activities like drug dealing, trafficking, or other illegal incidents.</p>
    </div>
  );
}

export default IllegalActivities;