import { useState } from "react";
import QuickRegister from "../../../components/forms/quick-register";

import s from "./index.module.css";
import cn from "classnames";
function Hero() {
  const [count, setCount] = useState(0);

  return (
    // <section className={s.hero}>
    //   <div className={s.intro}>
    //     <img alt={"logo"} src={"/images/logos/hero-logo.png"} />
    //     <h1>
    //       C1 in 3 mesi o<br />
    //       vieni rimborsato
    //     </h1>
    //   </div>
    //   <div className="grid  grid-cols-1 md:grid-cols-2 place-items-center  gap-[40px]">
    //     <ul className="flex flex-col gap-8">
    //       <li className={s.item}>
    //         <img alt={"logo"} src={"/icons/brit.png"} />
    //         <p>
    //           Tutor <b>madrelingua</b> <br />
    //           inglese certificati
    //         </p>
    //       </li>
    //       <li className={s.item}>
    //         <img alt={"logo"} src={"/icons/notepad.png"} />
    //         <p>
    //           Lezioni <b>quando vuoi,</b>
    //           <br />
    //           anche nel weekend
    //         </p>
    //       </li>
    //       <li className={s.item}>
    //         <img alt={"logo"} src={"/icons/snap.png"} />
    //         <p>
    //           Costa <b>molto meno</b>
    //           <br /> delle scuole di inglese
    //         </p>
    //       </li>
    //     </ul>
    //     <QuickRegister />
    //   </div>
    // </section>
    <section className={s.hero}>
      <div className={s.intro}>
        {/* <img
          className={s.introBg}
          src={"/images/backgrounds/bg-intro@1440x1091.png"}
          srcSet={
            "/images/backgrounds/bg-intro@390x266.png 390w, /images/backgrounds/bg-intro@1024x1091.png 1024w,/images/backgrounds/bg-intro@1440x1091.png 1550w"
          }
          sizes={
            "(max-width:480px) 390px, (max-width:1024px) 1024px, (max-width:1550px) 1550px"
          }
        /> */}
        <picture>
          <source
            media="(max-width:528px)"
            srcSet="/images/backgrounds/bg-intro@320.svg"
          />
          <source
            media="(max-width:2618px)"
            srcSet="/images/backgrounds/bg-intro@528.svg"
          />
          <img
            src="/images/backgrounds/bg-intro@2618.svg"
            className={s.introBg}
            alt="astronaut"
          />
        </picture>

        <img
          className={s.astroMobile2}
          src={"/images/backgrounds/bg-astro@1440px.png"}
        />
        <div className={s["text-box"]}>
          <img alt={"logo"} src={"/images/logos/hero-logo.png"} />
          <h1>
            C1 in 3 mesi o<br />
            vieni rimborsato
          </h1>
        </div>
      </div>
      <div className={s.contentRail}>
        <div className={cn("relative py-4", s.listContainer)}>
          <ul className={cn(s.list, "")}>
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
          <div className="flex flex-direction w-full relative h-[236px]">
            <picture>
              <source
                media="(max-width:360px)"
                srcSet="/images/backgrounds/as-fix.svg"
              />
              <source
                media="(max-width:480px)"
                srcSet="/images/backgrounds/as-fix.svg"
              />
              <source
                media="(max-width:1024px)"
                srcSet="/images/backgrounds/as-fix.svg"
              />
              <img
                src="/images/backgrounds/as-fix.svg"
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
