import { ErrorMessage, Field } from "formik";
import React from "react";
import FormikErrorContainer from "./FormikErrorContainer";

function FormikInputField(props) {
  const { label, name, ...restProps } = props;
  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...restProps}></Field>
      <ErrorMessage name={name} component={FormikErrorContainer}></ErrorMessage>
    </div>
  );
}

export default FormikInputField;
