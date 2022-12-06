import { duration, Moment } from "moment";
import { ReactHTMLElement, useState } from "react";
// import { Months, renderCalendar } from "./index.logic";
import s from "./index.module.css";
import moment from "moment";
import cn from "classnames";
import EventDetails from "./event-details";
export type EventProps = {
  title: string;
  topic: string;
  date: Moment;
  duration: number;
  materials?: string[];
  onClick?: Function;
  requestClose?: Function;
};
function Event(props: EventProps) {
  const { date, title, duration, onClick } = props;
  const endTime = moment(date);
  endTime.add(Math.ceil(duration / 60), "hours");
  const isPast = moment().isAfter(endTime, "minutes");
  return (
    <div
      onClick={() =>
        onClick && onClick(<EventDetails {...props} isPast={isPast} />)
      }
      className={cn(s.root, { [s.past]: isPast })}
    >
      <div className={s.circle} />
      <div className={s.textBox}>
        <p className={s.time}>
          {date.hour()}&nbsp;-&nbsp;{endTime.hour()}
        </p>
        <p className={s.title}>{title}</p>
      </div>
    </div>
  );
}

export default Event;
