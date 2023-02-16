import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page";

function App() {

  return (
    <Routes>
      <Route path="/acceleratore-di-inglese/" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
