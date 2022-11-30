import cn from "classnames";
import { InputHTMLAttributes } from "react";
type Props = {
  className?: string;
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const TelField = (props: Props) => {
  const { className, label, ...rest } = props;
  return (
    <div className={cn("grid grid-cols-1", className)}>
      {label && <label className="label-standard">{label}</label>}
      <div className="grid grid-cols-6 gap-4 telBack">
        <select className="col-span-1 select-standard">
          <option>+39</option>
        </select>
        <input
          className="col-span-5 textfield-standard"
          type={"tel"}
          {...rest}
        />
      </div>
    </div>
  );
};
