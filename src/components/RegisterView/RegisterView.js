import React, { useState } from "react";
import { useFormik } from "formik";
import db from "firebaseApp";
import { useHistory } from "react-router";

const RegisterView = () => {
  const history = useHistory();
  const [error, setError] = useState(null);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: values => {
      db.auth()
        .createUserWithEmailAndPassword(values.email, values.password)
        .then(history.push("/"))
        .catch(err => setError(err.message));
    }
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="E-mail">E-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label htmlFor="Password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <button type="submit">Register</button>
      </form>
      {error ? <p>{error}</p> : null}
    </>
  );
};

export default RegisterView;
