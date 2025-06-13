import React from 'react';
import illegalactivitiesImg from '../images/illegalactivities.png';

function IllegalActivities() {
  return (
    <div className="feature-card">
      <img src={illegalactivitiesImg} alt="Illegal Activities" />
      <h3>Illegal Activities</h3>
      <p>Report any kind of illegal activities happening in your area anonymously.</p>
    </div>
  );
}

export default IllegalActivities;