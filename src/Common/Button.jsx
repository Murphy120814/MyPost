import React from "react";

function Button(props) {
  const { children, ...restProps } = props;
  return <button {...restProps}>{children}</button>;
}

export default Button;
