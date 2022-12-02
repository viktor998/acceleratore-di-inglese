import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Agenda from "./pages/Agenda";
import { Routes, Route, Outlet, Link, Navigate } from "react-router-dom";
import DefaultLayout from "./layouts/default/index";
import LandingPage from "./pages/landing-page";
import ThankYouPage from "./pages/thank-you-page";
import { Helmet } from "react-helmet-async";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Helmet>
        <link rel="shortcut icon" href="/images/logos/hero-logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/public/images/logos/favicon@180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/logos/favicon@16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/logos/favicon@16x16.png"
        />
        <link rel="shortcut icon" href="/images/logos/favicon@16x16.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" sizes="192x192" href="/images/logos/hero-logo.png" />
        <link
          rel="apple-touch-icon-precomposed"
          href="/images/logos/hero-logo.png"
        />
      </Helmet> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/user" element={<DefaultLayout />}>
          <Route index element={<Navigate to="agenda" replace={true} />} />
          <Route path="agenda" element={<Agenda />} />
          <Route
            path="*"
            element={
              <div className="flex flex-col justify-center items-center h-full text-3xl">
                Coming Soon
              </div>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
