import { useEffect, useState } from "react";
import QuickRegister from "../../../components/forms/quick-register";
import {
  CaBritCouncil,
  CaStar,
  CaCambridgeAssessment,
  CaMinistryOfEducation,
  CaIelts,
  CaApprovedBy,
  CaBritCouncilMobile,
} from "../../../components/Icons";

import s from "./index.module.css";
import cn from "classnames";

import mainItem from "../../../assets/images/backgrounds/main-item@1440px.png";
import { useTranslation } from "react-i18next";

function Approved() {
  const [count, setCount] = useState(0);

  const lng = navigator.language
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lng)
  }, [])

  return (
    <section className={cn(s.root, "container-padding")}>
      <div className={s.itemsContainer}>
        <img className={s.img} src={mainItem} />
        <ul className={s.list}>
          <p className={s.heading + " mb-10"}>
            {/* Come funziona il percorso? */}
            {t('approved.title')}
          </p>
          <li className={s.bar}>
            <CaStar />
            <p>
              {/* Lezioni online e <br />
              orari a tua scelta */}
              {t('approved.first.initial')} <br />
              {t('approved.first.final')}
            </p>
          </li>
          <li className={s.bar}>
            <CaStar />
            <p>
              {/* Classi da massimo <br /> 3 persone */}
              {t('approved.second.initial')} <br />
              {t('approved.second.final')}
            </p>
          </li>
          <li className={s.bar}>
            <CaStar />
            <p>
              {/* App con simulatore
              <br /> d’esame */}
              {t('approved.third.initial')} <br />
              {t('approved.third.final')}
            </p>
          </li>
          <li className={s.bar}>
            <CaStar />
            <p>
              {/* Preparazione esami
              <br /> IELTS Cambridge */}
              {t('approved.fourth.initial')} <br />
              {t('approved.fourth.final')}
            </p>
          </li>
          <li className={s.bar}>
            <CaStar />
            <p>
              {/* Tutor madrelingua <br />
              inglesi certificati */}
              {t('approved.fifth.initial')} <br />
              {t('approved.fifth.final')}
            </p>
          </li>
          <li className={s.bar}>
            <CaStar />
            <p>
              {/* Certificato o <br /> rimborsato */}
              {t('approved.sixth.initial')} <br />
              {t('approved.sixth.final')}
            </p>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-4 lg:gap-8 mt-10">
        <p className={s.approvedBy}>Approved by</p>
        <div className={s.svgContainer}>
          {/* <div className="grid  grid-cols-2 lg:grid-cols-4 items-center gap-8 w-[95%] mx-auto"> */}
          <CaMinistryOfEducation />
          <CaBritCouncil className="hidden lg:block" />
          <CaIelts className="hidden lg:block" />
          <CaBritCouncilMobile className="lg:hidden" />
          {/* <CaCambridgeAssessment className="col-span-2 lg:col-span-1" /> */}
        </div>
        <CaApprovedBy className="mx-auto hidden lg:block" />
      </div>
    </section>
  );
}

export default Approved;
