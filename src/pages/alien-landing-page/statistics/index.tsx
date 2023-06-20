import { useEffect, useState } from "react";
import QuickRegister from "../../../components/forms/quick-register";

import s from "./index.module.css";
import cn from "classnames";
import { useTranslation } from "react-i18next";
function Statistics() {
  const [count, setCount] = useState(0);

  const lng = navigator.language
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lng)
  }, [])

  return (
    <section className={s.root}>
      <ul className={s.list}>
        <li className={cn(s.bar, "container-padding")}>
          <div className={s.megaText}>
            <h2>+30</h2>
            <p>
              {/* Tutor madrelingua <br /> inglese certificati */}
              {t('statistics.first.left.initial')} <br /> {t('statistics.first.left.final')}
            </p>
          </div>
          <p className={s.paragraph}>
            {/* Incontri di conversazione, grammatica, pronuncia e vocabolario con
            Tutor certificati con 1000+ ore di insegnamento. */}
            {t('statistics.first.right')}
          </p>
        </li>
        <li className={cn(s.bar, "container-padding")}>
          <div className={s.megaText}>
            <h2>
              {/* 87&nbsp;<b className="md:text-[60px]">su</b>&nbsp;100 */}
              {t('statistics.second.left.initial')}&nbsp;<b className="md:text-[60px]">{t('statistics.second.left.bold')}</b>&nbsp;{t('statistics.second.left.final')}
            </h2>
            <p>
              {/* Prendono il C1 */}
              {t('statistics.second.left.paragraph')}
            </p>
          </div>
          <p className={s.paragraph}>
            {/* Lezioni ad hoc sull’esame Cambridge IELTS che hanno l’obiettivo di
            velocizzare i tempi di preparazione */}
            {t('statistics.second.right')}
          </p>
        </li>
        <li className={cn("container-padding flex flex-col")}>
          <div className={s.bar}>
            <div className={s.megaText}>
              <h2>
                {/* 98% */}
                {t('statistics.third.left.initial')}
              </h2>
              <p>
                {/* Clienti contenti del servizio */}
                {t('statistics.third.left.paragraph')}
              </p>
            </div>
            <p className={s.paragraph}>
              {/* Se non ottieni la certificazione C1 ti rimborsiamo il 100% del
              costo del corso. */}
              {t('statistics.third.right')}
            </p>
          </div>
          <a href={'https://edusogno.com/form/edusogno-inglese' + window.location.search} className="btn-green btn-sm w-[265px] py-6 mx-auto my-6 xl:my-10 flex text-xl font-semibold justify-center items-center">
            {/* RICHIEDI INFO */}
            {t('form.buttonInfo')}
          </a>
          {/* </div> */}
        </li>
      </ul>
    </section>
  );
}

export default Statistics;
