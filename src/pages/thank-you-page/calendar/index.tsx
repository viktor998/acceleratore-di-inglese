import { useState } from "react";

import {
  CaBritCouncil,
  CaStar,
  CaCambridgeAssessment,
  CaMinistryOfEducation,
  CaIelts,
} from "../../../components/Icons";

import s from "./index.module.css";
import cn from "classnames";
import QuickRegister from "../quick-register";
function Calendar() {
  const [count, setCount] = useState(0);

  return (
    // <section className={cn(s.root, "container-padding")}>
    <QuickRegister className="container !max-w-[1115px]" />
    // </section>
  );
}

export default Calendar;
