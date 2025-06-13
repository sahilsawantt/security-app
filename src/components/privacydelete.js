// import React from 'react';
// import privacyImg from '../images/privacydelete.png'; // इमेज का नाम और path सही रखें

// function PrivacyDelete() {
//   return (
//     <div className="feature-card">
//       <img src={privacyImg} alt="Privacy Delete" />
//       <h3>Privacy Delete</h3>
//       <p>Get immediate help in deleting private or sensitive photos/videos from the internet or device.</p>
//     </div>
//   );
// }

// export default PrivacyDelete;

import React from 'react';
import { Link } from 'react-router-dom';
import privacyImg from '../images/privacydelete.png';

function PrivacyDelete() {
  return (
    <Link to="/privacydelete" className="feature-card">
      <img src={privacyImg} alt="Privacy Delete" />
      <h3>Privacy Delete</h3>
      <p>Get help deleting private or sensitive media instantly.</p>
    </Link>
  );
}

export default PrivacyDelete;