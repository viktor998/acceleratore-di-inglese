import cn from "classnames";
import { InputHTMLAttributes } from "react";
type Props = {
  className?: string;
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const TextField = (props: Props) => {
  const { className, label, ...rest } = props;
  return (
    <div className={cn("flex flex-col", className)}>
      {label && <label className="label-standard">{label}</label>}
      <input className="textfield-standard" {...rest} />
    </div>
  );
};
