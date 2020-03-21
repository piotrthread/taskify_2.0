import React from "react";
import APP_COMPONENT from "components/APP_COMPONENT/APP_COMPONENT";
import StateProvider from "components/StateProvider/StateProvider";
import GlobalStyle from "GlobalStyle";

const App = () => {
  return (
    <StateProvider>
      <GlobalStyle />
      <APP_COMPONENT />
    </StateProvider>
  );
};

export default App;
