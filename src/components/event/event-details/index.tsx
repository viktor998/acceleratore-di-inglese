import { duration, Moment } from "moment";
import { ReactNode, useState } from "react";
// import { Months, renderCalendar } from "./index.logic";
import s from "./index.module.css";
import moment from "moment";
import cn from "classnames";
import RNModal from "react-modal";
import { uuid } from "../../../utils/Utils";

export type EventProps = {
  isPast: boolean;
  title: string;
  topic: string;
  date: Moment;
  duration: number;
  materials?: string[];
  requestClose?: Function;
};

function EventDetails(props: EventProps) {
  const {
    isPast,
    title,
    topic,
    date,
    duration,
    requestClose,
    materials = ["Video Listening Introduzione"],
    ...rest
  } = props;

  return (
    <div data-past={`${isPast}`} className={s.root}>
      <div className={s.header}>
        <div className={s.eventTitle}>
          <h3>{title}</h3>
          <p>Topic:&nbsp;{topic}</p>
        </div>
        <div className={s.image}>
          <img
            src={"/src/assets/8e88f4561b02f111fd55434f2328dd54 1.png"}
            alt="img"
          />
          <p>Liam</p>
        </div>
      </div>
      <div className=" flex flex-row justify-between w-full">
        <div className={s.detail}>
          <h5>Date</h5>
          <p>{date.format("dddd Do MMMM YYYY")}</p>
        </div>
        <div className={s.detail}>
          <h5>Time</h5>
          <p>{date.format("hh:mm")}</p>
        </div>
        <div className={s.detail}>
          <h5>Duration</h5>
          <p>{duration}&nbsp;minutes</p>
        </div>
      </div>
      <button
        onClick={() => requestClose && requestClose()}
        className={s.button}
      >
        {isPast ? "watch recording" : "Join"}
      </button>
      <div className={s.material}>
        <p> Material:</p>
        <ul>
          {materials.map((r) => (
            <li key={uuid()}>
              <a href="/#">{r}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default EventDetails;
