import { useState } from "react";
import QuickRegister from "../../../components/forms/quick-register";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ReactPlayer from "react-player";
import "@splidejs/react-splide/css";
import s from "./index.module.css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import cn from "classnames";
import {
  CaForbes,
  CaToday,
  CaLaRepublica,
  CaLaGazetta,
  CaRTL,
} from "../../../components/Icons";
function Testimonies() {
  const [count, setCount] = useState(0);

  return (
    <section className={s.root}>
      <p className={s.heading}>Ecco cosa dicono di noi</p>
      <Splide
        options={{
          type: "loop",
          pagination: false,
          arrows: false,
          gap: "22px",
          perPage: 1,
          fixedWidth: "283px",
          fixedHeight: "466px",
          breakpoints: {
            1280: {
              perPage: 6,
            },
          },
          autoScroll: {
            pauseOnHover: true,
            pauseOnFocus: true,
            speed: 1,
          },
        }}
        extensions={{ AutoScroll }}
        aria-label="My Favorite Images"
      >
        <SplideSlide>
          <div className={s.splide}>One</div>
        </SplideSlide>
        <SplideSlide>
          <div className={s.splide}>Two</div>
        </SplideSlide>
        <SplideSlide>
          <div className={s.splide}>Three</div>
        </SplideSlide>
        <SplideSlide>
          <div className={s.splide}>Three</div>
        </SplideSlide>
        <SplideSlide>
          <div className={s.splide}>Three</div>
        </SplideSlide>
        <SplideSlide>
          <div className={s.splide}>Three</div>
        </SplideSlide>
        <SplideSlide>
          <div className={s.splide}>Three</div>
        </SplideSlide>
        <SplideSlide>
          <div className={s.splide}>Three</div>
        </SplideSlide>
        <SplideSlide>
          <div className={s.splide}>Three</div>
        </SplideSlide>
        <SplideSlide>
          <div className={s.splide}>Three</div>
        </SplideSlide>
      </Splide>
      <div className={s.svgContainer}>
        <CaForbes />
        <CaLaRepublica />
        <CaLaGazetta />
        <CaToday />
        <CaRTL />
      </div>
    </section>
  );
}

export default Testimonies;
