import { Button } from "@mui/material";
import cn from "classnames";
import moment, { Moment } from "moment";
import { ReactNode, useEffect, useRef, useState } from "react";

import { CaChevronDown, CaToday } from "../../../components/Icons";
import { uuid } from "../../../utils/Utils";
import Event, { EventProps } from "./event";
import { CalendarValues, Days, Months, renderCalendar } from "./index.logic";
import s from "./index.module.css";
import InfiniteScroll from "react-bidirectional-infinite-scroll";
import Collapse from "@mui/material/Collapse";

type DayType = {
  value: Moment;
  showMonth?: boolean;
  type: "past" | "now" | "future";
  setOpenModal: Function;
  requestClose: Function;
};
const Day = (props: DayType) => {
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

function EventGridItem(props: {
  date: Moment;
  events?: Array<EventProps | string>;
}) {
  const { events, date, ...rest } = props;
  return (
    <div {...rest} className={s.gridItem}>
      <div className={"flex flex-col text-white"}>
        <p className="uppercase text-[13px] leading-[100.5%] font-[500] text-center">
          {date.format("ddd")}
        </p>
        <p className="text-base font-[700] text-center">{date.format("DD")}</p>
      </div>
      <div className="w-full h-full grid grid-cols-1 gap-[5px]">
        {events ? (
          events.map(() => (
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
          ))
        ) : (
          <div className="h-[33px] w-full border-[#D9DAF3] border-solid border-[1px] rounded-[3px] flex flex-row font-[400] items-center pl-4 text-[#D9DAF3] text-[13px] leading-[124%]">
            No event planned
          </div>
        )}
      </div>
    </div>
  );
}

function Calender({ calendarValues }: { calendarValues: CalendarValues }) {
  const [date, setDate] = useState<Date>(new Date());
  const [show, setShowCalendar] = useState(false);
  const scrollToday = async () => {
    const todayElement = document.querySelector("[data-todaytarget]");
    if (todayElement != null) {
      todayElement.scrollIntoView();
    }
  };
  return (
    <>
      <div className={s.root}>
        <div className={cn(s.calendar, "header")}>
          {/* <div className="header flex flex-col"> */}
          <div className={cn(s.header, "")}>
            <div className={s.dateHeading}>
              {Months[calendarValues.month]}&nbsp;
              {calendarValues.year}
              <button
                className={cn("ml-[8px] hidden", { "rotate-180": show })}
                onClick={() => {
                  setShowCalendar(!show);
                }}
              >
                <CaChevronDown />
              </button>
            </div>
            <div className={s.actions}>
              <Button
                onClick={() => scrollToday()}
                className={
                  "!py-0 !capitalize !hidden ml-auto !text-[13px] leading-[99.5%] !font-[500] items-center justify-center"
                }
                color="error"
                variant="contained"
              >
                Today
              </Button>
            </div>
          </div>
          <Collapse in={show}>
            <div className={s.daysLabels}>
              {Days.map((day) => (
                <p key={uuid()}>{day.slice(0, 3)}</p>
              ))}
            </div>
            <div className={s.daysGrid}>
              {calendarValues.prevDaysArray.map((i, index) => {
                if (calendarValues.month - 1 < 0)
                  return (
                    <Day
                      key={uuid()}
                      setOpenModal={() => {}}
                      requestClose={() => {}}
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
                  <Day
                    key={uuid()}
                    setOpenModal={() => {}}
                    requestClose={() => {}}
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
                <Day
                  key={uuid()}
                  setOpenModal={() => {}}
                  requestClose={() => {}}
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
                    <Day
                      key={uuid()}
                      setOpenModal={() => {}}
                      requestClose={() => {}}
                      value={moment({
                        day: i,
                        month: 0,
                        year: calendarValues.year + 1,
                      })}
                      type="future"
                    />
                  );
                return (
                  <Day
                    key={uuid()}
                    setOpenModal={() => {}}
                    requestClose={() => {}}
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
          </Collapse>
          {/* </div> */}
        </div>
        <div className="grid grid-cols-1 gap-6">
          {calendarValues.daysArray.map((i) => {
            const eventDate = moment({
              day: i,
              month: calendarValues.month,
              year: calendarValues.year,
            });
            return (
              <EventGridItem
                data-todaytarget={`${eventDate.isSame(new Date(), "day")}`}
                date={eventDate}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
function CalenderSm() {
  const observerBox = useRef();
  const testRef = useRef();
  const addMonth = (date: Date, months: number) => {
    var d = date.getDate();
    date.setMonth(date.getMonth() + +months);
    if (date.getDate() != d) {
      date.setDate(0);
    }
    return date;
  };
  const [calendar, setCalendars] = useState<any[]>([1]);
  const [date, setPreviousDate] = useState<Date>(new Date());
  const [nextDate, setNextDate] = useState<number>(0);
  const [nextCalendars, setNextCalendars] = useState<CalendarValues[]>([]);
  const [previousCalendars, setPreviousCalendars] = useState<CalendarValues[]>(
    []
  );

  const loadNextMonth = () => {
    setNextCalendars([renderCalendar(addMonth(date, 1)), ...nextCalendars]);
    // console.log(renderCalendar(addMonth(date, 1)));
    // setNextDate(nextDate + 1);
  };
  const loadLastMonth = () => {
    // setPreviousCalendars((r) => {
    //   return [renderCalendar(addMonth(previousMonthsDate, -1)), ...r];
    // });
  };
  const [calendarValues, setCalendarValues] = useState<CalendarValues>({
    daysArray: [],
    nextDaysArray: [],
    prevDaysArray: [],
    year: 0,
    month: 0,
  });
  const calendars = [];
  const updateHeader = async () => {
    const observerBox = document.querySelector("#observerBox");
    const containerBox = document.querySelector("#containerBox");

    let options = {
      root: containerBox,
      rootMargin: "10px 0px 90% 0px",
      threshold: 1.0,
    };

    let observer = new IntersectionObserver((entries) => {
      console.log(entries);
      let closestEntry = null;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (closestEntry !== null) {
            console.log(
              "to-the top,",
              entry.target.getBoundingClientRect().top
            );

            if (
              closestEntry?.getBoundingClientRect().top >
              entry.target.getBoundingClientRect().top
            ) {
              closestEntry = entry.target;
            }
          } else {
            closestEntry = entry.target;
          }
        }
      });
      // observerBox?.replaceChildren(closestEntry);
      if (closestEntry !== null) {
        testRef.current = closestEntry;

        // while (observerBox.firstChild) {
        //   observerBox.removeChild(observerBox.lastChild);
        // }
        observerBox?.replaceChildren(closestEntry);
      }
      console.log("ce", closestEntry);
    }, options);

    const headings = document.querySelectorAll(".header");

    headings.forEach((heading) => {
      observer.observe(heading);
      // console.log(isInObserverArea(heading));
    });
  };
  useEffect(() => {
    updateHeader();
  }, []);


  
  return (
    <div id={"containerBox"} className="flex flex-col w-full  h-auto relative">
      <div
        id="observerBox"
        ref={observerBox}
        className={s.observerBox}
        style={{
          border: "1px solid red",
          minHeight: 10,
          position: "fixed",
          width: "100%",
          left: 0,
          right: 0,
          // top: 0,
          zIndex: 1,
        }}
      ></div>

      <InfiniteScroll
        position={100}
        onScroll={async () => {
          await updateHeader();
        }}
        onReachBottom={(f) => {
          console.log("f", f);

          loadNextMonth();
        }}
        onReachTop={(f) => {
          // loadLastMonth();
          // console.log("top");
        }}
      >
        {/* {previousCalendars.map((r) => (
          <Calender calendarValues={r} />
        ))} */}
        <Calender calendarValues={renderCalendar(new Date())} />

        {nextCalendars.map((r) => (
          <Calender key={uuid()} calendarValues={r} />
        ))}
      </InfiniteScroll>
    </div>
  );
}
export default CalenderSm;
