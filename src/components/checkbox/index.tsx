/* A checkbox component. */
// import React, { InputHTMLAttributes } from 'react'
// import styled, { css } from 'styled-components'
import cn from "classnames";
import React, { InputHTMLAttributes, JSXElementConstructor } from "react";

import s from "./index.module.css";

type Props = {
  className?: string;
  Component?: string | JSXElementConstructor<any>;
  disabled?: boolean;
  name?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const CheckBox: React.FC<Props> = (props) => {
  const {
    className,
    disabled = false,
    style = {},
    Component = "input",
    name,
    ...rest
  } = props;

  return (
    <Component
      className={cn(s.root, className)}
      disabled={disabled}
      name={name}
      type="checkbox"
      style={{
        ...style,
      }}
    />
  );
};

export default CheckBox;
