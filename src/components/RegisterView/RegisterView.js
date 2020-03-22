import React, { useState } from "react";
import { useFormik } from "formik";
import db from "firebaseApp";
import { useHistory } from "react-router";

import Input from "components/Input/Input";
import Button from "components/Button/Button";
import Form from "components/Form/Form";
import LoginWrapper from "components/LoginView/LoginWrapper";
import Logo from "components/Logo/Logo";
import Hyperlink from "components/Hyperlink/Hyperlink";
import Error from "components/Error/Error";

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
        .catch(err => {
          switch (err.code) {
            case "auth/invalid-email":
              setError("Email adress is badly formated.");
              break;
            case "auth/weak-password":
              setError("Password must be 6 characters long.");
              break;
            case "auth/email-already-in-use":
              setError("Email is already in use.");
              break;
            default:
              setError(err.message);
              break;
          }
        });
    }
  });
  return (
    <LoginWrapper>
      <Logo>taskify</Logo>
      <Form onSubmit={formik.handleSubmit}>
        <Input
          id="email"
          name="email"
          type="text"
          placeholder="e-mail"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <Button type="submit">Register</Button>
        <Error>{error}</Error>
      </Form>
      <Hyperlink href="/">or Log In</Hyperlink>
    </LoginWrapper>
  );
};

export default RegisterView;
