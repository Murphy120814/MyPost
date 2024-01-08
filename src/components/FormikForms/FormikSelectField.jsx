import React from "react";
import { Field, ErrorMessage } from "formik";
import FormikErrorContainer from "./FormikErrorContainer";

function FormikSelectField(props) {
  const { label, name, options, ...restProps } = props;
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}>{label}</label>
      <Field as="select" id={name} name={name} {...restProps}>
        {options?.map((option, index) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component={FormikErrorContainer}></ErrorMessage>
    </div>
  );
}

export default FormikSelectField;
