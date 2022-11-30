import { useState } from "react";
import s from "./index.module.css";
import { TextField } from "../../TextField";
import { TelField } from "../../TelField";
import CheckBox from "../../checkbox";
import cn from "classnames";
type Props = {
  className?: string;
};
function QuickRegister(props: Props) {
  const { className } = props;

  return (
    <form className={cn(s.root, className)}>
      <TextField label="Nome e Cogome" />
      <TelField label="Tel" />
      <TextField label="E-mail" />
      <div className="hidden md:flex flex-row items-center gap-[9px] ">
        <CheckBox />
        <p className={s.terms}>
          Accetto i Termini e le Condizioni della Privacy Policy
        </p>
      </div>
      <button className="btn-green btn-sm w-[265px] py-6 mx-auto">
        RICHIEDI INFO
      </button>
    </form>
  );
}

export default QuickRegister;
