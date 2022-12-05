import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Agenda from "./pages/Agenda";
import { Routes, Route, Outlet, Link, Navigate } from "react-router-dom";
import DefaultLayout from "./layouts/default/index";
import LandingPage from "./pages/landing-page";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/landing-inglese/" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
