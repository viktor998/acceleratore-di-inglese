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
      {label && <label className="label-standard mb-2">{label}</label>}
      <div className="grid grid-cols-12 gap-4 telBack">
        <select className="sm:col-span-3 col-span-4 select-standard">
          <option>+39</option>
        </select>
        <input
          className="sm:col-span-9 col-span-8 textfield-standard"
          type={"tel"}
          {...rest}
        />
      </div>
    </div>
  );
};
