import { useState } from "react";
import QuickRegister from "../../../components/forms/quick-register";
import {
  CaBritCouncil,
  CaStar,
  CaCambridgeAssessment,
  CaMinistryOfEducation,
  CaIelts,
} from "../../../components/Icons";

import s from "./index.module.css";
import cn from "classnames";
function QuickRegSection() {
  const [count, setCount] = useState(0);

  return (
    <section className={cn(s.root, "container mx-auto")}>
      <QuickRegister />
    </section>
  );
}

export default QuickRegSection;
