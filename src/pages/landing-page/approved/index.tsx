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
import cn from "classnames";

import mainItem from '../../../assets/images/backgrounds/main-item@1440px.png'

function Approved() {
  const [count, setCount] = useState(0);

  return (
    <section className={cn(s.root, "container-padding")}>
      <div className={s.itemsContainer}>
        <img
          className={s.img}
          src={mainItem}
        />
        <ul className={s.list}>
          <p className={s.heading + ' mb-10'}>Come funziona il percorso?</p>
          <li className={s.bar}>
            <CaStar />
            <p>
              Lezioni online e <br />
              orari a tua scelta
            </p>
          </li>
          <li className={s.bar}>
            <CaStar />
            <p>
              Classi da massimo <br /> 3 persone
            </p>
          </li>
          <li className={s.bar}>
            <CaStar />
            <p>
              App con simulatore
              <br /> d’esame
            </p>
          </li>
          <li className={s.bar}>
            <CaStar />
            <p>
              Preparazione esami
              <br /> IELTS Cambridge
            </p>
          </li>
          <li className={s.bar}>
            <CaStar />
            <p>
              Tutor madrelingua <br />
              inglesi certificati
            </p>
          </li>
          <li className={s.bar}>
            <CaStar />
            <p>
              Certificato o <br /> rimborsato
            </p>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-4 lg:gap-8 mt-10">
        <p className={s.approvedBy}>Approved by</p>
        <div className={s.svgContainer}>
          {/* <div className="grid  grid-cols-2 lg:grid-cols-4 items-center gap-8 w-[95%] mx-auto"> */}
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
