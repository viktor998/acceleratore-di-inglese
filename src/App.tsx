import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page";
import AlienLandingPage from "./pages/alien-landing-page";
import ProfessionalLandingPage from "./pages/professional-landing-page/index";

import './utils/i18n.ts'

function App() {
  return (
    <Routes>
      <Route path="/acceleratore-di-inglese/" >
        <Route index element={<LandingPage />} />
        <Route path="alien" element={<AlienLandingPage />} />
        <Route path="professional" element={<ProfessionalLandingPage />} />
      </Route>
      <Route path="/acceleratore-di-inglese/ads/:traking_id" >
        <Route index element={<LandingPage />} />
        <Route path="alien" element={<AlienLandingPage />} />
        <Route path="professional" element={<ProfessionalLandingPage />} />
      </Route>
    </Routes>

  );
}

export default App;
