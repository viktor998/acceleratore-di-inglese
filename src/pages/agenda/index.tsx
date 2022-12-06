import { useState } from "react";
import { Outlet } from "react-router-dom";
import CalenderLg from "./calender-lg";
import CalenderSm from "./calender-sm";
import s from "./index.module.css";
function Agenda() {
  const [count, setCount] = useState(0);

  return <Outlet />;
}
export function Main() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-full w-full">
      <div className={s.containerLg}>
        <CalenderLg />
      </div>
      <div className={s.containerSm}>
        <CalenderSm />
      </div>
    </div>
  );
}

export default Agenda;
