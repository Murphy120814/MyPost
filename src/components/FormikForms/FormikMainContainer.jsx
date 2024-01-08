import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button } from "../../Common";
import FormikControlInputs from "./FormikControlInputs";
import { useDispatch, useSelector } from "react-redux";
import { postAdd } from "../../slices/postsSlice";
import { selectAllUsers } from "../../slices/usersSlice";

function FormikMainContainer() {
  const options = useSelector(selectAllUsers);
  const dispatch = useDispatch();
  const initialValues = {
    userId: "",
    title: "",
    content: "",
  };

  const validationSchema = Yup.object({
    userId: Yup.string().required("Name is required!"),
    title: Yup.string().required("Title is required!"),
    content: Yup.string().required("Content is required!"),
  });

  const onSubmit = (values, onSubmitProps) => {
    console.log("form Values", values);
    dispatch(postAdd(values.title, values.content, values.userId));
    onSubmitProps.resetForm();
  };

  return (
    <div>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}>
        {(formik) => {
          return (
            <Form>
              <FormikControlInputs
                name="title"
                label="Title"
                control="input"
                type="text"></FormikControlInputs>
              <FormikControlInputs
                name="userId"
                label="Author Name"
                control="select"
                options={options}></FormikControlInputs>

              <FormikControlInputs
                name="content"
                control="textarea"
                label="Your thoughts"
                type="text"></FormikControlInputs>
              <Button type="submit">Post</Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default FormikMainContainer;
