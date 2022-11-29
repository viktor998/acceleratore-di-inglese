import { useState } from "react";
import Calender from "../components/calendar";

function Agenda() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-full w-full">
      <Calender />
    </div>
  );
}

export default Agenda;
