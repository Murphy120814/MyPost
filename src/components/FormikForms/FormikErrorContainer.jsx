import React from "react";

function FormikErrorContainer(props) {
  const { children } = props;
  return <div className="mt-2 text-red-500">{children}</div>;
}

export default FormikErrorContainer;
