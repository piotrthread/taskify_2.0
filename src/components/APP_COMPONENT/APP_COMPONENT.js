import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Context from "context";

import LoginView from "components/LoginView/LoginView";
import HomeView from "components/HomeView/HomeView";
import RegisterView from "components/RegisterView/RegisterView";

const APP_COMPONENT = () => {
  const { user } = useContext(Context);
  return (
    <>
      <Router>
        <Switch>
          <Route path="/register">
            <RegisterView />
          </Route>
          <Route path="/">{user ? <HomeView /> : <LoginView />}</Route>
        </Switch>
      </Router>
    </>
  );
};

export default APP_COMPONENT;
