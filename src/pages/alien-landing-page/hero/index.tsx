import QuickRegister from "../../../components/forms/quick-register";

import s from "./index.module.css";
import cn from "classnames";
import bgIntro320 from "../../../assets/images/backgrounds/bg-intro@320.svg";
import bgIntro528 from "../../../assets/images/backgrounds/bg-intro@528.svg";
import bgIntro2618 from "../../../assets/images/backgrounds/bg-intro@2618.svg";
import asFix from "../../../assets/images/backgrounds/as-fix.svg";
import heroLogo from "../../../assets/images/logos/hero-logo.svg";
import bgAstro from "../../../assets/images/backgrounds/bg-astro@1440px.png";
import alienLg from "../../../assets/alien@lg.svg";
import alienSm from "../../../assets/alien@sm.svg";
import brit from "../../../assets/icons/brit.png";
import notepad from "../../../assets/icons/notepad.png";
import snap from "../../../assets/icons/snap.png";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function Hero() {
  const lng = navigator.language
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lng)
  }, [])

  return (
    <section className={s.hero}>
      <div className={s.intro}>
        <picture>
          <source media="(max-width:528px)" srcSet={bgIntro320} />
          <source media="(max-width:10618px)" srcSet={bgIntro528} />
          <img src={bgIntro2618} className={s.introBg} alt="astronaut" />
        </picture>

        <img className={s.astroMobile2} src={alienLg} />
        <div className={s["text-box"]}>
          <img alt={"logo"} src={heroLogo} />
          <h1>
            {/* C1 in 3 mesi o<br />
            vieni rimborsato */}
            {t('hero.headerTop')}<br></br>
            {t('hero.headerBottom')}
          </h1>
        </div>
      </div>
      <div className={s.contentRail}>
        <div className={cn("relative py-4", s.listContainer)}>
          <ul className={cn(s.list, "")}>
            <li className={s.item}>
              <img alt={"logo"} src={brit} />
              <p>
                {/* Tutor <b>madrelingua</b> <br />
                inglese certificati */}
                {t('hero.benefits.first.initial')} <b>{t('hero.benefits.first.bold')}</b> <br />
                {t('hero.benefits.first.final')}
              </p>
            </li>
            <li className={s.item}>
              <img alt={"logo"} src={notepad} />
              <p>
                {/* Lezioni <b>quando vuoi,</b>
                <br />
                anche nel weekend */}
                {t('hero.benefits.second.initial')} <b>{t('hero.benefits.second.bold')}</b> <br />
                {t('hero.benefits.second.final')}
              </p>
            </li>
            <li className={s.item}>
              <img alt={"logo"} src={snap} />
              <p>
                {/* Costa <b>molto meno</b>
                <br /> delle scuole di inglese */}
                {t('hero.benefits.third.initial')} <b>{t('hero.benefits.third.bold')}</b> <br />
                {t('hero.benefits.third.final')}
              </p>
            </li>
          </ul>
          <div className="flex flex-direction w-full relative h-[236px]">
            <picture>
              <source media="(max-width:360px)" srcSet={alienSm} />
              <source media="(max-width:480px)" srcSet={alienSm} />
              <source media="(max-width:1024px)" srcSet={alienSm} />
              <img src={alienSm} className={s.astroMobile1} alt="astronaut" />
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
