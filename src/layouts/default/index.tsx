import { ReactNode, useState } from "react";
import Calender from "../../components/calendar";
import s from "./index.module.css";
import SideMenu from "./side-menu";
import { Routes, Route, Outlet, Link } from "react-router-dom";
type Props = {
  // children: ReactNode;
};
function Default(props: Props) {
  const [count, setCount] = useState(0);

  return (
    <div className={s.root}>
      <SideMenu />
      <div className={s.children}>
        <Outlet />
      </div>
    </div>
  );
}

export default Default;
