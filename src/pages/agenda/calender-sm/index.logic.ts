import moment from "moment";
export const Months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const Days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
export type CalendarValues = {
  daysArray: Array<number>;
  prevDaysArray: Array<number>;
  nextDaysArray: Array<number>;
  year: number;
  month: number;
};

export const renderCalendar = (date: Date): CalendarValues => {
  date.setDate(1);
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay =
    new Date(date.getFullYear(), date.getMonth(), 0).getDate() + 1;

  const firstDayIndex = date.getDay() - 1;

  let daysArray: Array<number> = [];
  let prevDaysArray: Array<number> = [];
  for (let x = firstDayIndex; x > 0; x--) {
    prevDaysArray.push(prevLastDay - x);
  }
  for (let i = 1; i <= lastDay; i++) {
    daysArray.push(i);
  }
  let sum = daysArray.length + prevDaysArray.length;
  let nextDaysArray: Array<number> = [];
  const nextDays = 7 - (sum % 7);
  console.log("nextDays", sum, daysArray, prevDaysArray, nextDays);

  for (let j = 1; j <= nextDays; j++) {
    let sum = nextDaysArray.length + daysArray.length + prevDaysArray.length;
    // if (sum % 7 == 0 || sum > 35) break;
    nextDaysArray.push(j);
  }

  return {
    daysArray,
    prevDaysArray,
    nextDaysArray,
    year: date.getFullYear(),
    month: date.getMonth(),
  };
};

export const getDate = (month: number, year: number): Array<string[]> => {
  var calendar: Array<string[]> = [];
  const startDate = moment([year, month])
    .clone()
    .startOf("month")
    .startOf("isoWeek");
  const endDate = moment([year, month]).clone().endOf("month");
  const day = startDate.clone().subtract(1, "day");

  while (day.isBefore(endDate, "day")) {
    calendar.push(
      Array(7)
        .fill(0)
        .map(() => day.add(1, "day").clone().format("DD"))
    );
  }
  return calendar;
};
// export const isExtraDays = (week, date) => {
//   if (week === 0 && date > 10) {
//     return true;
//   } else if (week === 5 && date < 10) {
//     return true;
//   } else if (week === 4 && date < 10) {
//     return true;
//   } else {
//     return false;
//   }
// };
