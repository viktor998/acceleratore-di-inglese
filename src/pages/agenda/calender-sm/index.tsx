import moment, { Moment } from "moment";
import { useState, ReactNode, useEffect, Fragment } from "react";
import s from "./index.module.css";
import Event, { EventProps } from "./event";
import { uuid } from "../../../utils/Utils";
import Button from "@mui/material/Button";
import { CaChevronDown } from "../../../components/Icons";
import { CalendarValues, Months, Days, renderCalendar } from "./index.logic";
import cn from "classnames";
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
const Header = ({ calendarValues }: { calendarValues: CalendarValues }) => {
  const [show, setShowCalendar] = useState(false);
  const scrollToday = () => {
    const todayElement = document.querySelector(`[data-todaytarget="true"]`);
    const containerBox = document.querySelector("#containerBox");
    if (todayElement != null && containerBox !== null) {
      // containerBox?.scroll({
      //   top: todayElement.getBoundingClientRect().top,
      //   behavior: "smooth",
      // });
      todayElement.scrollIntoView();
    }
  };
  useEffect(() => {
    scrollToday();
  }, []);
  return (
    <div className={cn(s.calendar, "header px-6")}>
      <div className="flex flex-row items-center">
        <div className={cn(s.dateHeading, "!mt-0")}>
          {Months[calendarValues.month]}&nbsp;
          {calendarValues.year}
          <button
            // id={`chevronButton-${id}`}
            className={cn("ml-[8px] hidden", {
              "rotate-180": show,
            })}
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
            // id={`todayButtonCalendar-${id}`}
            className={cn(
              "!py-0 !capitalize !hidden ml-auto !text-[13px] leading-[99.5%] !font-[500] items-center justify-center"
            )}
            color="error"
            variant="contained"
          >
            Today
          </Button>
        </div>
      </div>
      <div className={cn({ hidden: !show })}>
        <div className={cn(s.daysLabels, "mt-1")}>
          {Days.map((day) => (
            <p key={uuid()}>{day.slice(0, 3)}</p>
          ))}
        </div>
        <div className={cn(s.daysGrid, "mt-4 mb-4")}>
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
      </div>
    </div>
  );
};
const DateHeading = ({
  date,
  setObserverNode,
  ...rest
}: {
  date: Moment;
  setObserverNode?: Function;
}) => {
  const id = uuid();
  useEffect(() => {
    const containerBox = document.querySelector("#containerBox");
    let options = {
      root: containerBox,
      rootMargin: "0px 0px -50% 0px",
      threshold: 1.0,
    };
    const heading = document.querySelector(`[data-heading="${id}"]`);
    // console.log(headings);

    let observerTwo = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        console.log("entry", entry.target);
        setObserverNode &&
          setObserverNode(
            renderCalendar(
              moment(
                entry.target.getAttribute("data-date"),
                "DD-MM-YYYY"
              ).toDate()
            )
          );
      }
    }, options);

    if (heading != null) observerTwo.observe(heading);

    return () => {
      observerTwo.disconnect();
    };
  }, []);
  return (
    <div {...rest} data-heading={`${id}`} className={s.dateHeading}>
      {date.format("MMMM")}&nbsp;
      {date.format("YYYY")}
    </div>
  );
};
export default function CalenderSm() {
  const [observerNode, setObserverNode] = useState<CalendarValues>(
    renderCalendar(new Date())
  );

  // handle populating dateItems
  const BOX_HEIGHT = 60;
  const BUFFER_BOXES = 10;
  const [rewindCounter, setRewindCounter] = useState(0);
  const [forwardCounter, setForwardCounter] = useState(100);
  const [dates, setDates] = useState<number[]>([]);
  function scrollListener(e: UIEvent) {
    const bufferHeight = BOX_HEIGHT * BUFFER_BOXES;
    if (e.target.scrollTop >= bufferHeight + BOX_HEIGHT) {
      // scroll down

      setForwardCounter((r) => r + 1);
    } else if (e.target.scrollTop < bufferHeight) {
      // console.log("down");
      setRewindCounter((r) => r + 1);
    }
    generatePreviousDates();
  }

  const generatePreviousDates = () => {
    const previousDates = [];
    // const nextDates = [];
    for (let i = rewindCounter; i--; i > 1) {
      previousDates.push(i);
    }
    // const dates=
    setDates(previousDates);
  };
  useEffect(() => {
    generatePreviousDates();
  }, []);

  return (
    <div
      id={"containerBox"}
      onScroll={scrollListener}
      className="text-white w-full h-[100%] grid grid-cols-1 gap-6  overflow-y-auto"
    >
      <div
        id="observerBox"
        className={s.observerBox}
        style={{
          // border: "1px solid red",
          minHeight: 10,
          position: "fixed",
          width: "100%",
          left: 0,
          right: 0,
          // top: 0,
          zIndex: 1,
        }}
      >
        <Header calendarValues={observerNode} />
      </div>
      {dates.map((r, i) => {
        const _item = moment();
        _item.subtract(r, "days");
        return (
          <>
            {_item.date() === 1 && (
              <DateHeading
                setObserverNode={setObserverNode}
                data-date={`${_item.format("DD-MM-YYYY")}`}
                date={_item}
              />
            )}
            <Fragment key={i}>
              <EventGridItem
                data-todaytarget={`${_item.isSame(moment(), "day")}`}
                date={_item}
              />
            </Fragment>
          </>
        );
      })}

      {Array(forwardCounter)
        .fill({})
        .map((r, i) => {
          const _item = moment();
          _item.add(i + 1, "days");
          return (
            <>
              {_item.date() === 1 && (
                <DateHeading
                  setObserverNode={setObserverNode}
                  data-date={`${_item.format("DD-MM-YYYY")}`}
                  date={_item}
                />
              )}
              <Fragment key={i}>
                <EventGridItem
                  data-todaytarget={`${_item.isSame(moment(), "day")}`}
                  date={_item}
                />
              </Fragment>
            </>
          );
        })}
    </div>
  );
}

// import moment from "moment";
// import { useState, ReactNode, useEffect } from "react";
// export default function CalenderSm() {
//   const BOX_HEIGHT = 60;
//   const BUFFER_BOXES = 10;
//   const [rewindCounter, setRewindCounter] = useState(100);
//   const [forwardCounter, setForwardCounter] = useState(100);
//   const [dates, setDates] = useState<ReactNode[]>([]);
//   function scrollListener(e: UIEvent) {
//     const bufferHeight = BOX_HEIGHT * BUFFER_BOXES;
//     if (e.target.scrollTop >= bufferHeight + BOX_HEIGHT) {
//       // scroll down

//       setForwardCounter((r) => r + 1);
//     } else if (e.target.scrollTop < bufferHeight) {
//       // console.log("down");
//       setRewindCounter((r) => r + 1);
//     }
//     generatePreviousDates();
//   }

//   const generatePreviousDates = () => {
//     const previousDates = [];
//     const nextDates = [];
//     for (let i = rewindCounter; i--; i > 0) {
//       previousDates.push(
//         <p>{moment().subtract(i, "days").format("DD-MM-YYYY")}</p>
//       );
//     }
//     for (let i = 1; i--; i > forwardCounter) {
//       nextDates.push(<p>{moment().add(i, "days").format("DD-MM-YYYY")}</p>);
//     }
//     // const dates=
//     setDates(previousDates.concat(nextDates));
//   };
//   useEffect(() => {
//     generatePreviousDates();
//   }, []);
//   return (
//     <div
//       onScroll={scrollListener}
//       className="text-white w-full h-[50%] bg-black overflow-y-auto"
//     >
//       {dates.map((item) => item)}
//     </div>
//   );
// }
// import moment from "moment";
// import { useState } from "react";
// import InfiniteScroll from "react-bidirectional-infinite-scroll";

// export default function CalenderSm() {
//   const BOX_HEIGHT = 60;
//   const BUFFER_BOXES = 10;
//   const [rewindCounter, setRewindCounter] = useState(100);
//   const [forwardCounter, setForwardCounter] = useState(100);

//   const handleVerticalScroll = (position, previousPosition) => {
//     const diffScroll = position - previousPosition;
//     const directionDown = diffScroll > 0;
//     if (directionDown) {
//       setForwardCounter((r) => r + 1);
//     } else {
//       setRewindCounter((r) => r + 1);
//     }
//   };
//   const generatePreviousDates = () => {
//     const previousDates = [];
//     const nextDates = [];
//     for (let i = rewindCounter; i--; i > 0) {
//       previousDates.push(
//         <p>{moment().subtract(i, "days").format("DD-MM-YYYY")}</p>
//       );
//     }
//     for (let i = 1; i--; i > forwardCounter) {
//       nextDates.push(<p>{moment().add(i, "days").format("DD-MM-YYYY")}</p>);
//     }
//     return previousDates.concat(nextDates);
//   };

//   return (
//     <div className="text-white">
//       <InfiniteScroll
//         // position={100}
//         onScroll={handleVerticalScroll}
//         // onReachBottom={(f) => {
//         //   // console.log("f", f);
//         //   loadNextMonth();
//         // }}
//         // onReachTop={(f) => {
//         //   loadLastMonth();
//         //   // console.log("top");
//         // }}
//       >
//         {generatePreviousDates().map((item) => item)}
//       </InfiniteScroll>
//     </div>
//   );
// }
