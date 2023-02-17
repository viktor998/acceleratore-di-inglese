import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page";
import AlienLandingPage from "./pages/alien-landing-page";
import ProfessionalLandingPage from "./pages/professional-landing-page/index";

function App() {
  return (
    <Routes>
      <Route path="/acceleratore-di-inglese/" element={<LandingPage />} />
      <Route
        path="/acceleratore-di-inglese/alien"
        element={<AlienLandingPage />}
      />
      <Route
        path="/acceleratore-di-inglese/professional"
        element={<ProfessionalLandingPage />}
      />
    </Routes>
  );
}

export default App;
