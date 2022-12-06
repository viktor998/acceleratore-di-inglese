import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Agenda, { Main } from "./pages/agenda";
import { Routes, Route, Outlet, Link, Navigate } from "react-router-dom";
import DefaultLayout from "./layouts/default/index";
import LandingPage from "./pages/landing-page";
import ThankYouPage from "./pages/thank-you-page";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import EventDetails from "./pages/agenda/event-details-sm";
function App() {
  const [count, setCount] = useState(0);
  let theme = createTheme({
    palette: {
      primary: {
        main: "#8065c9",
        light: "#d9daf3",
        dark: "#2d224c",
      },
      secondary: {
        main: "#74dfac",
        dark: "#31602a",
      },
    },
  });

  return (
    <Routes>
      <Route path="/landing-inglese/" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
