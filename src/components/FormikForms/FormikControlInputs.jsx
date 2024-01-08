import FormikSelectField from "./FormikSelectField";
import FormikInputField from "./FormikInputField";
import FormikTextAreaField from "./FormikTextAreaField";
import React from "react";
function FormikControlInputs(props) {
  const { control, ...restProps } = props;
  switch (control) {
    case "input":
      return <FormikInputField {...restProps} />;
    case "select":
      return <FormikSelectField {...restProps} />;
    case "textarea":
      return <FormikTextAreaField {...restProps} />;
    default:
      return null;
  }
}

export default FormikControlInputs;
