import QuickRegister from "../../../components/forms/quick-register";

import s from "./index.module.css";
import cn from "classnames";
import bgIntro320 from "../../../assets/images/backgrounds/bg-intro@320.svg";
import bgIntro528 from "../../../assets/images/backgrounds/bg-intro@528.svg";
import bgIntro2618 from "../../../assets/images/backgrounds/bg-intro@2618.svg";
import asFix from "../../../assets/images/backgrounds/as-fix.svg";
import professionalLg from "../../../assets/professional@lg.svg";
import professionalSm from "../../../assets/professional@sm.png";
import heroLogo from "../../../assets/images/logos/hero-logo.svg";
import bgAstro from "../../../assets/images/backgrounds/bg-astro@1440px.png";
import brit from "../../../assets/icons/brit.png";
import notepad from "../../../assets/icons/notepad.png";
import snap from "../../../assets/icons/snap.png";

function Hero() {
  return (
    <section className={s.hero}>
      <div className={s.intro}>
        <picture>
          <source media="(max-width:528px)" srcSet={bgIntro320} />
          <source media="(max-width:10618px)" srcSet={bgIntro528} />
          <img src={bgIntro2618} className={s.introBg} alt="astronaut" />
        </picture>

        <div className={s["text-box"]}>
          <img alt={"logo"} src={heroLogo} />
          <h1>
            Migliora il tuo inglese,
            <br /> fatti prendere sul serio
          </h1>
        </div>
      </div>
      <div className={s.contentRail}>
        <div className={s.astroMobileDiv}>
          <img className={s.astroMobile2} src={professionalLg} />
        </div>
        <div className={cn("relative xl:py-4", s.listContainer)}>
          <ul className={cn(s.list, "")}>
            <li className={s.item}>
              <img alt={"logo"} src={brit} />
              <p>
                Tutor <b>madrelingua</b> <br />
                inglese certificati
              </p>
            </li>
            <li className={s.item}>
              <img alt={"logo"} src={notepad} />
              <p>
                Lezioni <b>quando vuoi, </b>
                anche nel <br />
                weekend
              </p>
            </li>
            <li className={s.item}>
              <img alt={"logo"} src={snap} />
              <p>
                Costa <b>molto meno</b>
                <br /> delle scuole di inglese
              </p>
            </li>
          </ul>
          <div className="flex flex-direction w-full relative h-[236px] max-w-[300px]">
            <picture>
              <source media="(max-width:360px)" srcSet={professionalSm} />
              <source media="(max-width:480px)" srcSet={professionalSm} />
              <source media="(max-width:1024px)" srcSet={professionalSm} />
              <img
                src={professionalSm}
                className={s.astroMobile1}
                alt="astronaut"
              />
            </picture>
          </div>
        </div>
        <div className={s.form}>
          <QuickRegister className={s.quickReg} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
