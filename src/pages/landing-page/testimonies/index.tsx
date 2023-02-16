import { useState } from "react";
import "@splidejs/react-splide/css";
import s from "./index.module.css";
import { Box, } from "@mui/material";
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
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import { Autoplay, Lazy } from "swiper";
import React from "react";


const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};


const pauseAll = async () => {
  let videosBox = document.querySelectorAll(".video-box");

  await [...videosBox].map((v) => {
    let video: HTMLVideoElement = v.querySelector("video") as HTMLVideoElement;
    let img: HTMLImageElement = v.querySelector("img") as HTMLImageElement;
    let icon: HTMLElement = v.querySelector(".play-icon") as HTMLElement;
    video.pause(),
      video.classList.add("hidden"),
      img.classList.remove("hidden"),
      icon.classList.remove("hidden");


  });
};


type SwiperInstance = typeof Swiper & {
  autoplay: {
    start: () => void;
    stop: () => void;
  };
};

function Testimonies() {
  const [count, setCount] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [width] = useWindowSize();

  const slidesCount =
    width < 576
      ? 1.4
      : width < 768
        ? 3
        : width < 1024
          ? 5
          : width < 1280
            ? 6
            : 7;

  const swiperRef = React.useRef<SwiperInstance>();
  const onInit = (swiper: any) => {
    swiperRef.current = swiper;
  };
  const handleMouseEnter = () => {
    if (swiperRef.current) swiperRef.current.autoplay.stop();
  };
  const handleMouseLeave = () => {
    if (swiperRef.current) swiperRef.current?.autoplay.start();
  };

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

        <Box
          onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
        >
          <Swiper
            onInit={onInit}
            modules={[Autoplay, Lazy]}
            // autoplay={{ delay: 5000 }}
            spaceBetween={25}
            slidesPerView={slidesCount}
          >
            {video['Inglese']?.map((video, index) => (
              <SwiperSlide key={index}>
                <Item item={video} id={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
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

function Item(props: { item: { poster: string; video: string; }; id: number; }) {
  const [width] = useWindowSize();
  const [isPlaying, setIsPlaying] = React.useState(false);

  return (
    <div
      style={{ overflowY: "hidden" }}
      onClick={async (e) => {
        let video = e.currentTarget.querySelector("video") as HTMLVideoElement;
        let img = e.currentTarget.querySelector("img") as HTMLImageElement;
        let icon = e.currentTarget.querySelector(".play-icon") as HTMLElement;

        // console.log({ video })

        if (video.paused) {
          await pauseAll();
          video.play();
          setIsPlaying(true);
          video.currentTime = 0;
          video.classList.remove("hidden");
          img.classList.add("hidden");
          icon.classList.add("hidden");


        } else {
          setIsPlaying(false);
          video.pause();
          video.classList.add("hidden");
          img.classList.remove("hidden");
          icon.classList.remove("hidden");
        }
      }}
      className={`relative overflow-hidden video-box h-[${width < 640 ? "500px" : "300px"
        }] aspect-[9/16]`}
    >

      <Box className={`play-icon `}>
        <PlayArrowRoundedIcon
          className={`absolute text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  `}
          sx={{ fontSize: 75 }}
        />
      </Box>

      <img
        className="object-cover object-center"
        src={"https://edusogno.com/video/Inglese/" + props.item.poster}
      />
      <video
        className={`hidden object-cover object-center video-${props.id}`}
        playsInline
        src={"https://edusogno.com/video/Inglese/" + props.item.video}
      ></video>
    </div>
  );
}



export function useWindowSize() {
  const [size, setSize] = React.useState([0, 0]);
  React.useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

export default Testimonies;
