import React from 'react'; import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; import './App.css';

// Component Cards import LadyDriver from './components/ladydriver'; import LegalSupport from './components/legalsupport'; import PrivacyDelete from './components/PrivacyDelete'; import Emergency from './components/emergencyhelp'; import HarassmentReport from './components/harassment'; import StreetViolence from './components/street_violence'; import HospitalHelp from './components/hospitalhelp'; import PoliceHarassment from './components/PoliceHarassment'; import UnsafeZone from './components/UnsafeZone'; import IllegalActivities from './components/IllegalActivities';

// Pages import LadyDriverPage from './pages/LadyDriverPage'; import LegalSupportPage from './pages/LegalSupportPage'; import PrivacyDeletePage from './pages/PrivacyDeletePage'; import EmergencyPage from './pages/EmergencyPage'; import HarassmentReportPage from './pages/HarassmentReportPage'; import StreetViolencePage from './pages/StreetViolencePage'; import HospitalHelpPage from './pages/HospitalHelpPage'; import PoliceHarassmentPage from './pages/PoliceHarassmentPage'; import UnsafeZonePage from './pages/UnsafeZonePage'; import IllegalActivitiesPage from './pages/IllegalActivitiesPage';

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

      <Route path="/lady-driver" element={<LadyDriverPage />} />
      <Route path="/legal-support" element={<LegalSupportPage />} />
      <Route path="/privacy-delete" element={<PrivacyDeletePage />} />
      <Route path="/emergency-help" element={<EmergencyPage />} />
      <Route path="/harassment-report" element={<HarassmentReportPage />} />
      <Route path="/street-violence" element={<StreetViolencePage />} />
      <Route path="/hospital-help" element={<HospitalHelpPage />} />
      <Route path="/police-harassment" element={<PoliceHarassmentPage />} />
      <Route path="/unsafe-zone" element={<UnsafeZonePage />} />
      <Route path="/illegal-activities" element={<IllegalActivitiesPage />} />
    </Routes>
  </div>
</Router>

); }

export default App;