import { useState } from "react";
import QuickRegister from "../../../components/forms/quick-register";

import s from "./index.module.css";
import cn from "classnames";
import Calendar from "../calendar";
import Poster from "../Poster";
function Hero() {
  const [count, setCount] = useState(0);

  return (
    <section className={s.hero}>
      <div className={s.intro}>
        <picture>
          <source
            media="(max-width:528px)"
            srcSet="/images/backgrounds/bg-intro@320.svg"
          />
          <source
            media="(max-width:2370px)"
            srcSet="/images/backgrounds/bg-tyIntro@1440px.svg"
          />
          <img
            src="/images/backgrounds/bg-tyIntro@2000px.svg"
            className={s.introBg}
            alt="astronaut"
          />
        </picture>
      </div>
      <div className={s.contentRail}>
        <div className={cn(s.message, "")}>
          <Poster />
        </div>
        <div className={s.calendarContainer}>
          <QuickRegister />
        </div>
      </div>
    </section>
  );
}

export default Hero;
