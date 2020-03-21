import React, { useContext } from "react";
import { useFormik } from "formik";
import db from "firebaseApp";
import { useHistory } from "react-router";
import Context from "context";

const AddTask = () => {
  const { user } = useContext(Context);
  const formik = useFormik({
    initialValues: {
      task: ""
    },
    onSubmit: values => {
      db.firestore()
        .collection("users")
        .doc(user)
        .collection("tasks")
        .add({ title: values.task });
    }
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="Task">Task</label>
        <input
          id="task"
          name="task"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.task}
        />
        <button type="submit">+AddTask</button>
      </form>
    </>
  );
};

export default AddTask;
