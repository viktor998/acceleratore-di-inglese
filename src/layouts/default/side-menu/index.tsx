import { ReactNode, useState } from "react";
// import Calender from "../../components/calendar";
import s from "./index.module.css";
import { menuItems } from "./constants";
import { CaLogout, CaRedChevron } from "../../../components/Icons";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import cn from "classnames";
import { uuid } from "../../../utils/Utils";
type Props = {
  // children: ReactNode;
};
function SideMenu(props: Props) {
  const [count, setCount] = useState(0);
  // const { children } = props;
  return (
    <ul className={s.root}>
      {menuItems.map((r) => {
        const Icon = r?.Icon;
        return r.type === "item" ? (
          <li key={uuid()}>
            <NavLink
              to={r.path || r.value}
              className={({ isActive }) => cn(s.item, { [s.active]: isActive })}
            >
              {({ isActive }) => (
                <>
                  {Icon && <Icon />}
                  <p>{r.value}</p>
                  {isActive && <CaRedChevron />}
                </>
              )}
            </NavLink>
          </li>
        ) : (
          <li key={uuid()} className={s.label}>
            {r.value}
          </li>
        );
      })}
      <li className={classNames(s.item, s.signOut)}>
        <CaLogout />
        <p>logout</p>
      </li>
    </ul>
  );
}

export default SideMenu;
