import cn from "classnames";
import moment, { Moment } from "moment";
import { ReactNode, useEffect, useState } from "react";

import { uuid } from "../../utils/Utils";
import Event, { EventProps } from "../event";
import { CaChevronLeft, CaChevronRight } from "../Icons";
import Select from "../select";
import { CalendarValues, Days, Months, renderCalendar } from "./index.logic";
import s from "./index.module.css";
import Modal from "./modal";

type DateItemType = {
  value: Moment;
  type: "past" | "now" | "future";
  setOpenModal: Function;
  requestClose: Function;
};
const DateItem = (props: DateItemType) => {
  const { value, type, setOpenModal, requestClose } = props;
  const event: EventProps = {
    title: "Speaking Class",
    topic: "",
    date: value.hour(9),
    duration: 45,
  };
  const [events, setEvents] = useState<Array<EventProps>>([]);

  const addEvent = () => {
    events.length < 1 && setEvents((r) => [...r, event]);
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
          <p className={s.day}>
            {value.date()}
            {value.date() === 1 && (
              <>&nbsp;{Months[value.month()].slice(0, 3)}</>
            )}
          </p>
          <div>
            {events.map((event) => {
              return (
                <Event
                  {...event}
                  onClick={setOpenModal}
                  requestClose={requestClose}
                />
              );
            })}
          </div>
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
      <Modal modalIsOpen={openModal} onRequestClose={() => setOpenModal(false)}>
        {/* <EventDetails isPast={false} /> */}
        {modalContent}
      </Modal>
      <div className={s.root}>
        <div className={s.header}>
          <p className={s.dateHeading}>
            {Months[calendarValues.month]}&nbsp;
            {calendarValues.year}
          </p>
          <div className={s.actions}>
            <button onClick={() => previous()}>
              <CaChevronLeft />
            </button>
            <button onClick={() => next()}>
              <CaChevronRight />
            </button>
          </div>
          <div className={s.options}>
            <button onClick={() => today()} className="btn-violet btn-sm">
              Today
            </button>
            <Select />
          </div>
        </div>
        <div className={s.daysLabels}>
          {Days.map((day) => (
            <p key={uuid()}>{day.slice(0, 3)}</p>
          ))}
        </div>
        <div className={s.daysGrid}>
          {calendarValues.prevDaysArray.map((i) => (
            <DateItem
              key={uuid()}
              setOpenModal={handleModalOpen}
              requestClose={() => setOpenModal(false)}
              value={moment({
                day: i,
                month: calendarValues.month - 1,
                year: calendarValues.year,
              })}
              type="past"
            />
          ))}
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
          {calendarValues.nextDaysArray.map((i) => (
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
          ))}
        </div>
      </div>
    </>
  );
}

export default Calender;
