import React from 'react';
import './App.css';

import LadyDriver from './components/ladydriver';
import LegalSupport from './components/legalsupport';
import PrivacyDelete from './components/privacydelete';
import Emergency from './components/emergancyhelp';
import HarassmentReport from './components/harassment';
import StreetViolence from './components/street_violence';

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="branding">Guarantee Helper</div>
        <input type="text" placeholder="Search..." className="search-bar" />
        <nav className="menu-bar">
          <a href="#">Option 1</a>
          <a href="#">Option 2</a>
        </nav>
      </header>

      <p className="tagline">( Hamare bolne me nhi, krne me guarantee he )</p>

      <div className="features-grid">
        <LadyDriver />
        <LegalSupport />
        <PrivacyDelete />
        <Emergency />
        <HarassmentReport />
        <StreetViolence />
      </div>

      <footer className="footer">
        <p>Company Information & More</p>
      </footer>
    </div>
  );
}

export default App;
