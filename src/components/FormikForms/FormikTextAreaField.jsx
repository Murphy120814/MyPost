import React from "react";
import { Field, ErrorMessage } from "formik";
import FormikErrorContainer from "./FormikErrorContainer";

function FormikTextAreaField(props) {
  const { label, name, ...restProps } = props;
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}>{label}</label>
      <Field name={name} id={name} as="textarea" {...restProps}></Field>
      <ErrorMessage name={name} component={FormikErrorContainer}></ErrorMessage>
    </div>
  );
}

export default FormikTextAreaField;
