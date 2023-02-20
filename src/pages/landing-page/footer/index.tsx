import { useState } from "react";
import {
  CaFacebook,
  CaInstagram,
  CaLinkedIn,
  CaYoutube,
  CaTiktok,
} from "../../../components/Icons";
import logo from "../../../assets/images/logos/hero-logo.svg";
import s from "./index.module.css";
import cn from "classnames";
function Footer() {
  const [count, setCount] = useState(0);

  return (
    <footer className={cn(s.root)}>
      <div className={cn(s.content, "container-padding")}>
        <div className={cn(s.innerContent, "container mx-auto")}>
          <div className="flex flex-col w-full container items-center gap-6 lg:flex-row justify-between relative z-[3]">
            <img alt={"logo"} className={s.image} src={logo} />
            <div className="flex flex-row gap-[2px]">
              <a target={"_blank"} href="https://www.facebook.com/edusogno">
                <CaFacebook />
              </a>
              <a target={"_blank"} href="https://www.instagram.com/edu.sogno/">
                <CaInstagram />
              </a>
              <a
                target={"_blank"}
                href="https://www.linkedin.com/company/28861904/admin/"
              >
                <CaLinkedIn />
              </a>
              <a
                target={"_blank"}
                href="https://www.youtube.com/@edusognotutoring2258"
              >
                <CaYoutube />
              </a>
              <a target={"_blank"} href="https://www.tiktok.com/@edu.sogno">
                <CaTiktok />
              </a>
            </div>
          </div>
          <p className={s.otherInformation}>
            www.edusogno.com - Realizzato con il 🧠 in 🇮🇹
          </p>
          <div className={s.copyright + " flex items-center justify-center"}>
            <p>Copyright © 2022 Edusogno. Tutti i diritti riservati.</p>

            <p>
              |&nbsp;
              <a
                target={"_blank"}
                href="https://www.iubenda.com/privacy-policy/22694950"
              >
                Privacy Policy
              </a>
              &nbsp;|&nbsp;
            </p>
            <p>
              <a
                target={"_blank"}
                href="https://www.iubenda.com/privacy-policy/22694950/cookie-policy?an=no&s_ck=false&newmarkup=yes&ifr=true&height=650"
              >
                Cookie Policy
              </a>
              &nbsp;|
            </p>
            <p>P.IVA 08587960728</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
