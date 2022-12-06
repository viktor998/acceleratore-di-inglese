import { Button } from "@mui/material";
import cn from "classnames";
import moment, { Moment } from "moment";
import { ReactNode, useEffect, useState } from "react";

import { CaChevronDown } from "../../../components/Icons";
import { uuid } from "../../../utils/Utils";
import Event, { EventProps } from "./event";
import { CalendarValues, Days, Months, renderCalendar } from "./index.logic";
import s from "./index.module.css";

// import { uuid } from "../../utils/Utils";
// import { CaChevronLeft, CaChevronRight } from "../Icons";
// import Select from "../select";
type DateItemType = {
  value: Moment;
  showMonth?: boolean;
  type: "past" | "now" | "future";
  setOpenModal: Function;
  requestClose: Function;
};
const DateItem = (props: DateItemType) => {
  const { value, type, showMonth = false, setOpenModal, requestClose } = props;
  const event: EventProps = {
    title: "Speaking Class",
    topic: "",
    date: value.hour(9),
    duration: 45,
  };
  const [events, setEvents] = useState<Array<EventProps>>([]);

  const addEvent = () => {
    events.length < 2 && setEvents((r) => [...r, event]);
    // console.log(events);
  };

  if (!Number.isNaN(value.date()))
    return (
      <>
        <div
          id={"calendar"}
          onClick={() => {
            addEvent();
          }}
          className={cn(s.dateItem, {
            [s.prevDays]: type === "past",
            [s.nextDays]: type === "future",
            [s.currentDays]: type === "now",
            [s.toDay]: moment().isSame(value, "day"),
          })}
        >
          <div className="flex flex-row justify-center items-center gap-[1px] absolute top-[-8px] left-0 right-0">
            {events.map((event) => {
              return (
                <div
                  className={cn(s.dot, "text-white", {
                    ["text-[#CCCCCC]"]: type === "past" || type === "future",
                  })}
                />
              );
            })}
          </div>
          <p className={cn(s.day)}>{value.date()}</p>
        </div>
      </>
    );
  return <></>;
};
function Calender() {
  const [date, setDate] = useState<Date>(new Date());
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const [calendarValues, setCalendarValues] = useState<CalendarValues>({
    daysArray: [],
    nextDaysArray: [],
    prevDaysArray: [],
    year: 0,
    month: 0,
  });
  useEffect(() => {
    setCalendarValues(renderCalendar(date));
  }, []);
  //   const calendarValues = renderCalendar(date);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<ReactNode>(<></>);
  const addMonth = (date: Date, months: number) => {
    var d = date.getDate();
    date.setMonth(date.getMonth() + +months);
    if (date.getDate() != d) {
      date.setDate(0);
    }
    return date;
  };
  const next = () => {
    console.log("click");
    setDate(addMonth(date, 1));
    setCalendarValues(renderCalendar(date));
  };

  const previous = () => {
    setDate(addMonth(date, -1));
    setCalendarValues(renderCalendar(date));
  };
  const today = () => {
    setDate(new Date());
    setCalendarValues(renderCalendar(new Date()));
  };

  const handleModalOpen = (content: ReactNode) => {
    setModalContent(content);
    setOpenModal(true);
  };
  return (
    <>
      <div className={s.root}>
        <div className={s.calendar}>
          <div className={s.header}>
            <div className={s.dateHeading}>
              {Months[calendarValues.month]}&nbsp;
              {calendarValues.year}
              <button className="ml-[8px]" onClick={() => previous()}>
                <CaChevronDown />
              </button>
            </div>
            <div className={s.actions}>
              <Button
                onClick={() => today()}
                className={
                  "!py-0 !capitalize ml-auto !text-[13px] leading-[99.5%] !font-[500] flex items-center justify-center"
                }
                color="error"
                variant="contained"
              >
                Today
              </Button>
            </div>
            <div className={s.options}></div>
          </div>
          <div className={s.daysLabels}>
            {Days.map((day) => (
              <p key={uuid()}>{day.slice(0, 3)}</p>
            ))}
          </div>
          <div className={s.daysGrid}>
            {calendarValues.prevDaysArray.map((i, index) => {
              if (calendarValues.month - 1 < 0)
                return (
                  <DateItem
                    key={uuid()}
                    setOpenModal={handleModalOpen}
                    requestClose={() => setOpenModal(false)}
                    showMonth={index === 0}
                    value={moment({
                      day: i,
                      month: 11,
                      year: calendarValues.year - 1,
                    })}
                    type="past"
                  />
                );
              return (
                <DateItem
                  key={uuid()}
                  setOpenModal={handleModalOpen}
                  requestClose={() => setOpenModal(false)}
                  showMonth={index === 0}
                  value={moment({
                    day: i,
                    month: calendarValues.month - 1,
                    year: calendarValues.year,
                  })}
                  type="past"
                />
              );
            })}
            {calendarValues.daysArray.map((i) => (
              <DateItem
                key={uuid()}
                setOpenModal={handleModalOpen}
                requestClose={() => setOpenModal(false)}
                value={moment({
                  day: i,
                  month: calendarValues.month,
                  year: calendarValues.year,
                })}
                type="now"
              />
            ))}
            {calendarValues.nextDaysArray.map((i) => {
              if (calendarValues.month + 1 > 11)
                return (
                  <DateItem
                    key={uuid()}
                    setOpenModal={handleModalOpen}
                    requestClose={() => setOpenModal(false)}
                    value={moment({
                      day: i,
                      month: 0,
                      year: calendarValues.year + 1,
                    })}
                    type="future"
                  />
                );
              return (
                <DateItem
                  key={uuid()}
                  setOpenModal={handleModalOpen}
                  requestClose={() => setOpenModal(false)}
                  value={moment({
                    day: i,
                    month: calendarValues.month + 1,
                    year: calendarValues.year,
                  })}
                  type="future"
                />
              );
            })}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <div className={s.gridItem}>
            <div className={"flex flex-col text-white"}>
              <p className="uppercase text-[13px] leading-[100.5%] font-[500] text-center">
                mon
              </p>
              <p className="text-base font-[700] text-center">28</p>
            </div>
            <div className="w-full h-full grid grid-cols-1 gap-[5px]">
              <Event
                title={"Speaking Class"}
                topic={"Food"}
                date={moment({
                  day: 1,
                  month: 2,
                  year: 2020,
                  hour: 9,
                  minute: 0,
                })}
                duration={45}
              />
              <Event
                title={"Speaking Class"}
                topic={"Food"}
                date={moment({
                  day: 1,
                  month: 2,
                  year: 2020,
                  hour: 9,
                  minute: 0,
                })}
                duration={45}
              />
            </div>
          </div>
          <div className={s.gridItem}>
            <div className={"flex flex-col text-white"}>
              <p className="uppercase text-[13px] leading-[100.5%] font-[500] text-center">
                Tue
              </p>
              <p className="text-base font-[700] text-center">29</p>
            </div>
            <div className="w-full h-full grid grid-cols-1 gap-[5px]">
              <Event
                title={"Speaking Class"}
                topic={"Food"}
                date={moment({
                  day: 1,
                  month: 2,
                  year: 2020,
                  hour: 9,
                  minute: 0,
                })}
                duration={45}
              />
              <Event
                title={"Speaking Class"}
                topic={"Food"}
                date={moment({
                  day: 1,
                  month: 2,
                  year: 2020,
                  hour: 9,
                  minute: 0,
                })}
                duration={45}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function CalenderLg() {
  return (
    <>
      <div className="flex flex-col w-full h-full">
        <Calender />
      </div>
    </>
  );
}
export default CalenderLg;
