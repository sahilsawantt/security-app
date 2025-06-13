import React from 'react'; import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; import './App.css';

import LadyDriver from './components/ladydriver';
import LegalSupport from './components/legalsupport';
import PrivacyDelete from './components/privacydelete';
import Emergency from './components/emergancyhelp';
import HarassmentReport from './components/harassment';
import StreetViolence from './components/street_violence';
import HospitalHelp from './components/hospitalhelp';
import PoliceHarassment from './components/PoliceHarassment';
import UnsafeZone from './components/UnsafeZone';
import IllegalActivities from './components/IllegalActivities';

function App() { return ( <Router> <div className="app"> <header className="header"> <div className="branding">Guarantee Helper</div> <input type="text" placeholder="Search..." className="search-box" /> </header>

<Routes>
      <Route path="/" element={
        <div className="features-container">
          <LadyDriver />
          <LegalSupport />
          <PrivacyDelete />
          <Emergency />
          <HarassmentReport />
          <StreetViolence />
          <HospitalHelp />
          <PoliceHarassment />
          <UnsafeZone />
          <IllegalActivities />
        </div>
      } />

      <Route path="/lady-driver" element={<LadyDriver />} />
      <Route path="/legal-support" element={<LegalSupport />} />
      <Route path="/privacy-delete" element={<PrivacyDelete />} />
      <Route path="/emergency-help" element={<Emergency />} />
      <Route path="/harassment-report" element={<HarassmentReport />} />
      <Route path="/street-violence" element={<StreetViolence />} />
      <Route path="/hospital-help" element={<HospitalHelp />} />
      <Route path="/police-harassment" element={<PoliceHarassment />} />
      <Route path="/unsafe-zone" element={<UnsafeZone />} />
      <Route path="/illegal-activities" element={<IllegalActivities />} />
    </Routes>
  </div>
</Router>

); }

export default App;