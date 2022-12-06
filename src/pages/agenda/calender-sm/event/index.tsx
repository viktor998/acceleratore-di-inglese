import cn from "classnames";
import moment, { duration, Moment } from "moment";
import { ReactHTMLElement, useState } from "react";

import s from "./index.module.css";

// import { Months, renderCalendar } from "./index.logic";
export type EventProps = {
  title: string;
  topic: string;
  date: Moment;
  duration: number;
  materials?: string[];
  onClick?: Function;
};
function Event(props: EventProps) {
  const { date, title, duration, onClick } = props;
  const endTime = moment(date);
  endTime.add(Math.ceil(duration / 60), "hours");
  const isPast = moment().isAfter(endTime, "minutes");
  return (
    <div
      onClick={() => onClick && onClick()}
      className={cn(s.root, { [s.past]: isPast })}
    >
      <div className={s.circle} />
      <p className={s.textItems}>
        <p className={s.time}>
          {date.format("hh.mm")}&nbsp;-&nbsp;{endTime.format("hh.mm")}
        </p>
        <p className={s.title}>{title}</p>
      </p>
      <div className={s.textBox}></div>
    </div>
  );
}

export default Event;
