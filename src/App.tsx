import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Agenda from "./pages/Agenda";
import { Routes, Route, Outlet, Link, Navigate } from "react-router-dom";
import DefaultLayout from "./layouts/default/index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
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
  );
}

export default App;
