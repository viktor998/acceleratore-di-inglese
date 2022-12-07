import { Button } from "@mui/material";
import cn from "classnames";
import moment, { Moment } from "moment";
import {
  cloneElement,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { CaChevronDown, CaToday } from "../../../components/Icons";
import { uuid } from "../../../utils/Utils";
import Event, { EventProps } from "./event";
import { CalendarValues, Days, Months, renderCalendar } from "./index.logic";
import s from "./index.module.css";
import InfiniteScroll from "react-bidirectional-infinite-scroll";
import VirtualList from "react-tiny-virtual-list";
import Collapse from "@mui/material/Collapse";
import { createPortal } from "react-dom";

const Header = ({ calendarValues }: { calendarValues: CalendarValues }) => {
  const [show, setShowCalendar] = useState(false);
  const scrollToday = () => {
    const todayElement = document.querySelector(`[data-todaytarget="true"]`);
    if (todayElement != null) {
      todayElement.scrollIntoView();
    }
  };
  useEffect(() => {
    scrollToday();
  }, []);
  return (
    <div className={cn(s.calendar, "header")}>
      <div className="flex flex-row items-center">
        <div className={s.dateHeading}>
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
      </div>
    </div>
  );
};
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

function Calender({
  calendarValues,
  setObserverNode,
}: // setObserverNode,
{
  calendarValues: CalendarValues;
  setObserverNode?: (calendar: CalendarValues) => void;
}) {
  const ref = useRef();
  const [date, setDate] = useState<Date>(new Date());
  const id = uuid();

  // const Portal = () => createPortal(<Header />, observerBox);

  // const [observerNode, setObserverNode] = useState<ReactNode>(<></>);

  // const header = <Header />;
  const observerBox = document.querySelector("#observerBox");
  const Portal = ({ children }: { children: ReactNode }) =>
    observerBox !== null && createPortal(<>{children}</>, observerBox);

  useEffect(() => {
    const containerBox = document.querySelector("#containerBox");

    let options = {
      root: containerBox,
      rootMargin: "0px 0px 0px 0px",
      threshold: 1.0,
    };
    const headings = document.querySelectorAll(`[data-item="item-${id}"]`);
    // console.log(headings);

    let observerTwo = new IntersectionObserver((entries) => {
      // console.log(entries.length);
      let halfLent = 0;
      if (entries.length) {
        halfLent = Number.parseInt(String(entries.length / 2));
      }
      if (
        (entries && entries.at(-1) && entries.at(-1)?.isIntersecting) ||
        entries[halfLent].isIntersecting
      ) {
        setObserverNode && setObserverNode(calendarValues);
      }
    }, options);

    headings.forEach((heading) => {
      observerTwo.observe(heading);
    });
  }, []);

  return (
    <>
      <div className={s.root}>
        <div ref={ref}>
          <div className={s.dateHeading}>
            {Months[calendarValues.month]}&nbsp;
            {calendarValues.year}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {calendarValues.daysArray.map((i) => {
            const eventDate = moment({
              day: i,
              month: calendarValues.month,
              year: calendarValues.year,
            });
            // if (i == calendarValues.daysArray.length - 1)
            //   return (
            //     <EventGridItem
            //       data-todaytarget={`${eventDate.isSame(new Date(), "day")}`}
            //       data-last=""
            //       date={eventDate}
            //     />
            //   );

            return (
              <EventGridItem
                data-item={`item-${id}`}
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
  // const addMonth = (date: Date, months: number) => {
  //   var d = date.getDate();
  //   date.setMonth(date.getMonth() + +months);
  //   if (date.getDate() != d) {
  //     date.setDate(0);
  //   }
  //   return date;
  // };

  // const [calendar, setCalendars] = useState<any[]>([1]);
  // const [date, setDate] = useState<Date>(new Date());
  const rewindDate = moment(new Date());

  const forwardDate = moment(new Date());

  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [nextDate, setNextDate] = useState<number>(0);
  const [calendars, setCalendars] = useState<CalendarValues[]>([
    renderCalendar(new Date()),
  ]);

  const [observerNode, setObserverNode] = useState<CalendarValues>(
    renderCalendar(new Date())
  );
  // const [observerNode, setObserverNode] = useState<
  //   Array<{ top: number; node: ReactNode }>
  // >([]);
  const loadNextMonth = () => {
    // if (!isLoading) {
    setIsLoading(true);
    setCalendars((r) => {
      setIsLoading(false);
      return [renderCalendar(rewindDate.subtract(1, "month").toDate())].concat(
        r
      );
    });
    // }
    // setIsLoading(true);
  };
  const loadLastMonth = () => {
    setCalendars((r) => {
      return [renderCalendar(forwardDate.add(1, "month").toDate())];
    });
  };
  const [y, setY] = useState(window.scrollY);
  const [calendarValues, setCalendarValues] = useState<CalendarValues>({
    daysArray: [],
    nextDaysArray: [],
    prevDaysArray: [],
    year: 0,
    month: 0,
  });
  // const calendars = [];
  // const findClosest = () => {
  //   let minTop = null;
  //   let node = null;
  //   for (let i = 0; i++; i < observerNode.length - 1) {
  //     if (minTop !== null) {
  //       if (observerNode[i].top < minTop) {
  //         node = observerNode[i].node;
  //       }
  //     } else {
  //       minTop = observerNode[i].top;
  //       node = observerNode[i].node;
  //     }
  //   }
  //   console.log("Node", node, observerNode, minTop);
  //   return node;
  // };
  // useEffect(() => {
  //   updateHeader();
  // }, []);
  const containerBox = document.querySelector("#containerBox");
  // function prependWeek() {}

  // function appendWeek() {}

  function documentScrollTop() {
    if (containerBox !== null) {
      var scrollTop = containerBox.scrollTop;
      if (document.documentElement)
        scrollTop = Math.max(scrollTop, document.documentElement.scrollTop);
      return scrollTop;
    }
    return 0;
  }

  function documentScrollHeight() {
    if (containerBox !== null) {
      var scrollHeight = document.body.scrollHeight;
      if (document.documentElement)
        scrollHeight = Math.max(
          scrollHeight,
          document.documentElement.scrollHeight
        );
      return scrollHeight;
    }
    return 0;
  }
  // function poll() {
  //   // add more weeks so you can always keep scrolling
  //   if (documentScrollTop() < 500) {
  //     var oldScrollHeight = documentScrollHeight();
  //     // loadLastMonth();
  //     // console.log("scroll-top");

  //     window.scrollBy(0, documentScrollHeight() - oldScrollHeight);
  //   } else if (
  //     documentScrollTop() >
  //     documentScrollHeight() - window.innerHeight - 500
  //   ) {
  //     // loadNextMonth();
  //     console.log("sroll Down");
  //   }
  // }
  const handleVerticalScroll = (position, previousPosition) => {
    const diffScroll = position - previousPosition;
    const directionDown = diffScroll > 0;
    if (directionDown) {
      diffScroll > 200 && loadNextMonth();
    } else {
      diffScroll > 200 && loadLastMonth();
    }
  };
  useEffect(() => {
    // loadLastMonth();
    // loadNextMonth();
  }, []);
  return (
    <div
      id={"containerBox"}
      // onScroll={(e: UIEvent) => {
      //   poll();
      // }}
      className="flex flex-col w-full relative"
    >
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
      >
        <Header calendarValues={observerNode} />
      </div>

      <InfiniteScroll
        // position={100}
        onScroll={handleVerticalScroll}
        // onReachBottom={(f) => {
        //   // console.log("f", f);
        //   loadNextMonth();
        // }}
        // onReachTop={(f) => {
        //   loadLastMonth();
        //   // console.log("top");
        // }}
      >
        {/* {previousCalendars.map((r) => (
          <Calender
            key={uuid()}
            setObserverNode={(node: CalendarValues) => {
              console.log("node", node);
              setObserverNode(node);
            }}
            calendarValues={r}
          />
        ))} */}
          
        <Calender
          setObserverNode={(node: CalendarValues) => {
            console.log("node", node);
            setObserverNode(node);
          }}
          calendarValues={renderCalendar(new Date())}
        />
      </InfiniteScroll>
    </div>
  );
}
export default CalenderSm;
