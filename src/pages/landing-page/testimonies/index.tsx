import { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import s from "./index.module.css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

import video from '../../../assets/video.json';
import {
  CaForbes,
  CaToday,
  CaLaRepublica,
  CaLaGazetta,
  CaRTL,
} from "../../../components/Icons";

import bgTesti480 from '../../../assets/images/backgrounds/bg-testi@480px.svg'
import bgTesti1440 from '../../../assets/images/backgrounds/bg-testi@1440.svg'

import test1 from '../../../assets/images/backgrounds/test1.svg'

import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

interface Props {
  item: {
    poster: string,
    video: string
  },
  autoplay: (value: boolean) => void,
}

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};


const pauseAll = () => {
  let videosBox = document.querySelectorAll(".video-box");
  console.log('STARTING PAUSE');
  [...videosBox].map((v: { querySelector: (arg0: string) => any; }) => {
    const video = v.querySelector("video");
    const poster = v.querySelector("img");
    video.currentTime = 0;
    video?.pause(), video?.classList.add("hidden"), poster?.classList.remove("hidden");
    video.removeEventListener('ended', () => { });
  });

  console.log('END PAUSE');
};

const SplideVideo = ({ item, autoplay }: Props) => {

  const [playing, setPlaying] = useState<boolean>()

  const startPlay = async (e: { preventDefault: () => void; currentTarget: { querySelector: (arg0: string) => any; }; }) => {
    e.preventDefault()
    const video = e.currentTarget.querySelector('video');
    const poster = e.currentTarget.querySelector('img');

    video.addEventListener("ended", () => {
      video?.classList.add("hidden"), poster?.classList.remove("hidden"), autoplay(true)
    })

    if (video.paused) {
      console.log('NOT PAUSED')
      await pauseAll();

      console.log('PAUSED')
    }

    video?.paused ? (video?.play(), video?.classList.remove("hidden"), poster?.classList.add("hidden"), autoplay(false), setPlaying(true)) : (video?.pause(), video?.classList.add("hidden"), poster?.classList.remove("hidden"), autoplay(true), setPlaying(false))

  }

  return (
    <div className={s.splide + ' video-box relative'} onClick={startPlay}>
      {
        !playing ? <PlayArrowRoundedIcon className="absolute " sx={{ fontSize: '100px' }} /> : null
      }
      <img src={`https://edusogno.com/video/Inglese/${item.poster}`} />
      <video className={
        classNames(
          "hidden"
        )
      } playsInline src={`https://edusogno.com/video/Inglese/${item.video}`}></video>
    </div>
  )
}

function Testimonies() {
  const [count, setCount] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  return (
    <section className={s.root}>
      <picture>
        <source
          media="(max-width:528px)"
          srcSet={bgTesti480}
        />
        <img
          src={bgTesti1440}
          className={s.introBg}
          alt="astronaut"
        />
      </picture>
      <div className={s.content}>
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
            autoScroll: autoplay ? {
              pauseOnHover: true,
              pauseOnFocus: true,
              speed: .3,
            } : false
          }}
          extensions={{ AutoScroll }}
          aria-label="My Favorite Images"
        >

          {
            video['Inglese'].map((v, i) => {
              return (
                <SplideSlide key={i}>
                  <SplideVideo item={v} autoplay={setAutoplay} />
                </SplideSlide>
              )
            })
          }
        </Splide>
        <div className={s.svgContainer}>
          <CaForbes />
          <CaLaRepublica />
          <CaLaGazetta />
          <CaToday />
          <CaRTL />
        </div>
      </div>
      <img
        src={test1}
        className={s.cover}
        alt="astronaut"
      />
    </section>
  );
}

export default Testimonies;
