import React from 'react';
import reportImg from '../images/harassment.png';

function HarassmentReport() {
  return (
    <div className="feature-card">
      <img src={reportImg} alt="Report Harassment" />
      <h3>Report Harassment</h3>
      <p>File a harassment complaint or raise awareness.</p>
    </div>
  );
}

export default HarassmentReport;