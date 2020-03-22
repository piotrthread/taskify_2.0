import React, { useContext } from "react";
import { useFormik } from "formik";
import db from "firebaseApp";
import Context from "context";

import Input from "components/Input/Input";
import Button from "components/Button/Button";
import Form from "components/Form/Form";

const AddTask = () => {
  const { user } = useContext(Context);
  const formik = useFormik({
    initialValues: {
      task: ""
    },
    onSubmit: (values, { resetForm }) => {
      if (values.task !== "") {
        db.firestore()
          .collection("users")
          .doc(user)
          .collection("tasks")
          .add({ title: values.task });
        resetForm();
      }
    }
  });
  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <Input
          id="task"
          name="task"
          type="text"
          placeholder="task title"
          onChange={formik.handleChange}
          value={formik.values.task}
        />
        <Button type="submit">+ AddTask</Button>
      </Form>
    </>
  );
};

export default AddTask;
