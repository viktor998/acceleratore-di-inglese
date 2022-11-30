import { useState } from "react";
import QuickRegister from "../../../components/forms/quick-register";
import {
  CaBritCouncil,
  CaStar,
  CaCambridgeAssessment,
  CaMinistryOfEducation,
  CaIelts,
} from "../../../components/Icons";

import s from "./index.module.css";
function Approved() {
  const [count, setCount] = useState(0);

  return (
    <section className={s.root}>
      <p className={s.heading}>Come funziona il percorso?</p>
      <ul className={s.list}>
        <li className={s.bar}>
          <CaStar />
          <p>Tutor madrelingua</p>
        </li>
        <li className={s.bar}>
          <CaStar />
          <p>Tutor madrelingua</p>
        </li>
        <li className={s.bar}>
          <CaStar />
          <p>Tutor madrelingua</p>
        </li>
      </ul>
      <div className="flex flex-col gap-4 lg:gap-8 mt-10">
        <p className={s.approvedBy}>Approved by</p>
        <div className="grid  grid-cols-2 lg:grid-cols-4 gap-4">
          <CaMinistryOfEducation />
          <CaBritCouncil />
          <CaCambridgeAssessment />
          <CaIelts />
        </div>
      </div>
    </section>
  );
}

export default Approved;
