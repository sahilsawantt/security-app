import React from 'react';
import illegalactivities from '../images/illegalactivities.png'; 

function IllegalActivities() {
  return (
    <div className="feature-card">
      <img src={IllegalActivitiesImg} alt="Illegal Activities" />
      <h3>Illegal Activities</h3>
      <p>Report activities like drug dealing, trafficking, or other illegal incidents.</p>
    </div>
  );
}

export default IllegalActivities;