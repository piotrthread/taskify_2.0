import React, { useState } from "react";
import { useFormik } from "formik";
import db from "firebaseApp";

import Input from "components/Input/Input";
import Button from "components/Button/Button";
import Form from "components/Form/Form";
import LoginWrapper from "components/LoginView/LoginWrapper";
import Logo from "components/Logo/Logo";
import Hyperlink from "components/Hyperlink/Hyperlink";
import Error from "components/Error/Error";

const LoginView = () => {
  const [error, setError] = useState("");
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: values => {
      db.auth()
        .signInWithEmailAndPassword(values.email, values.password)
        .catch(err => {
          switch (err.code) {
            case "auth/invalid-email":
              setError("Email adress is badly formated.");
              break;
            case "auth/user-not-found":
              setError("User not found.");
              break;
            case "auth/wrong-password":
              setError("Wrong password.");
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
        <Button type="submit">Login</Button>
        <Error>{error}</Error>
      </Form>
      <Hyperlink href="/register">or Sign Up</Hyperlink>
    </LoginWrapper>
  );
};

export default LoginView;
