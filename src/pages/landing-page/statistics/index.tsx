import { useState } from "react";
import QuickRegister from "../../../components/forms/quick-register";

import s from "./index.module.css";
import cn from "classnames";
function Statistics() {
  const [count, setCount] = useState(0);

  return (
    <section className={s.root}>
      <ul className={s.list}>
        <li className={cn(s.bar, "container-padding")}>
          <div className={s.megaText}>
            <h2>+30</h2>
            <p>
              Tutor madrelingua <br /> inglese certificati
            </p>
          </div>
          <p className={s.paragraph}>
            Incontri di conversazione, grammatica, pronuncia e vocabolario con
            Tutor certificati con 1000+ ore di insegnamento.
          </p>
        </li>
        <li className={cn(s.bar, "container-padding")}>
          <div className={s.megaText}>
            <h2>
              87&nbsp;<b className="md:text-[60px]">su</b>&nbsp;100
            </h2>
            <p> Prendono il C1</p>
          </div>
          <p className={s.paragraph}>
            Lezioni ad hoc sull’esame Cambridge IELTS che hanno l’obiettivo di
            velocizzare i tempi di preparazione
          </p>
        </li>
        <li className={cn("container-padding flex flex-col")}>
          <div className={s.bar}>
            <div className={s.megaText}>
              <h2>98%</h2>
              <p>Clienti contenti del servizio</p>
            </div>
            <p className={s.paragraph}>
              Se non ottieni la certificazione C1 ti rimborsiamo il 100% del
              costo del corso.
            </p>
          </div>
          <button className="btn-green btn-sm w-[265px] py-6 mx-auto my-6 xl:my-10">
            RICHIEDI INFO
          </button>
          {/* </div> */}
        </li>
      </ul>
    </section>
  );
}

export default Statistics;
