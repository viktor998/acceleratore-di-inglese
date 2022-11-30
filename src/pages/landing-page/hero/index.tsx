import { useState } from "react";
import QuickRegister from "../../../components/forms/quick-register";

import s from "./index.module.css";
function Hero() {
  const [count, setCount] = useState(0);

  return (
    <section className={s.hero}>
      <div className={s.intro}>
        <img alt={"logo"} src={"/images/logos/hero-logo.png"} />
        <h1>
          C1 in 3 mesi o<br />
          vieni rimborsato
        </h1>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-2 place-items-center  gap-[40px]">
        <ul className="flex flex-col gap-8">
          <li className={s.item}>
            <img alt={"logo"} src={"/icons/brit.png"} />
            <p>
              Tutor <b>madrelingua</b> <br />
              inglese certificati
            </p>
          </li>
          <li className={s.item}>
            <img alt={"logo"} src={"/icons/notepad.png"} />
            <p>
              Lezioni <b>quando vuoi,</b>
              <br />
              anche nel weekend
            </p>
          </li>
          <li className={s.item}>
            <img alt={"logo"} src={"/icons/snap.png"} />
            <p>
              Costa <b>molto meno</b>
              <br /> delle scuole di inglese
            </p>
          </li>
        </ul>
        <QuickRegister />
      </div>
      {/* <div className="mt-auto ml-auto">
          <QuickRegister />
        </div> */}
    </section>
  );
}

export default Hero;
