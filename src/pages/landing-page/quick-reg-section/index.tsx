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

interface Props {
  id: string
}

function QuickRegSection({ id }: Props) {
  const [count, setCount] = useState(0);

  return (
    <section id={id} className={cn(s.root, "container-padding")}>
      <QuickRegister className="container !max-w-[1115px]" />
    </section>
  );
}

export default QuickRegSection;
