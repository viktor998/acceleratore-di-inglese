import { duration, Moment } from "moment";
import { ReactNode, useState } from "react";
import { uuid } from "../../../utils/Utils";

import s from "./index.module.css";

// import { Months, renderCalendar } from "./index.logic";
import moment from "moment";
import { CaChevronLeft, CaPdf, CaVideo } from "../../../components/Icons";
import { useNavigate } from "react-router-dom";

export type Props = {
  isPast?: boolean;
  title?: string;
  topic?: string;
  date?: Moment;
  duration?: number;
  materials?: string[];
  requestClose?: Function;
};

function EventDetails(props: Props) {
  const {
    isPast = false,
    title = "Speaking class",
    topic = "Food",
    date = moment({ day: 1, month: 4, year: 2022, h: 9, minutes: 45 }),
    duration = 45,
    requestClose,
    materials = ["Video Listening Introduzione"],
    ...rest
  } = props;
  const navigate = useNavigate();
  return (
    <div data-past={`${isPast}`} className={s.root}>
      <div className={s.header}>
        <div className={s.eventTitle}>
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            <CaChevronLeft />
          </button>
          <h3>{title}</h3>
          <div className="flex flex-col gap-1">
            <h5>Topic:</h5>
            <p>{topic}</p>
          </div>
          <div className={"flex flex-col gap-1"}>
            <h5>Date</h5>
            <p className="uppercase">{date.format("ddd DD/MM/YYYY")}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col relative z-[3] h-full">
        <img className={s.bg} src="/src/assets/details.svg" />
        <div className={s.imageDurationRow}>
          <div className={s.image}>
            <img
              src={"/src/assets/8e88f4561b02f111fd55434f2328dd54 1.png"}
              alt="img"
            />
            <p>Liam</p>
          </div>
          <div className="flex flex-col mt-auto gap-4">
            <div className={s.detail}>
              <h5>Time</h5>
              <p>
                {date.format("hh:mm")}-
                {date.add(duration, "minutes").format("hh:mm")}
              </p>
            </div>
            <div className={s.detail}>
              <h5>Duration</h5>
              <p>{duration}&nbsp;minutes</p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col px-6 w-full">
          <button
            onClick={() => requestClose && requestClose()}
            className={s.button}
          >
            {isPast ? "watch recording" : "Join Class"}
          </button>
          <div className={s.material}>
            <p> Material:</p>
            <ul>
              {/* {materials.map((r) => (
            <li key={uuid()}>
              <a href="/#">{r}</a>
            </li>
          ))} */}
              <li>
                <CaVideo /> <a href="/#">Video Listening Introduzione</a>
              </li>
              <li>
                <CaPdf />
                <a href="/#">Video Listening Introduzione</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
