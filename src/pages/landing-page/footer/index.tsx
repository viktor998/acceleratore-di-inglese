import { useState } from "react";
import QuickRegister from "../../../components/forms/quick-register";
import {
  CaBritCouncil,
  CaStar,
  CaCambridgeAssessment,
  CaMinistryOfEducation,
  CaIelts,
  CaFacebook,
  CaInstagram,
  CaLinkedIn,
  CaYoutube,
  CaTiktok,
} from "../../../components/Icons";

import s from "./index.module.css";
function Footer() {
  const [count, setCount] = useState(0);

  return (
    <section className={s.root}>
      <div className="flex flex-col w-full container items-center gap-6 lg:flex-row justify-between">
        <img
          alt={"logo"}
          className={s.image}
          src={"/images/logos/hero-logo.png"}
        />
        <div className="flex flex-row gap-[2px]">
          <CaFacebook />
          <CaInstagram />
          <CaLinkedIn />
          <CaYoutube />
          <CaTiktok />
        </div>
      </div>
      <p className={s.otherInformation}>
        www.edusogno.com - Realizzato con il 🧠 in 🇮🇹
      </p>
      <p className={s.copyright}>
        Copyright © 2022 Edusogno. Tutti i diritti riservati. |Privacy Policy
        |Cookie Policy |P.IVA 08587960728
      </p>
    </section>
  );
}

export default Footer;
