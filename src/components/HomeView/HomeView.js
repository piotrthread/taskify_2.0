import React from "react";

import TaskList from "components/TaskList/TaskList";
import HomeWrapper from "components/HomeView/HomeWrapper";

const HomeView = () => {
  return (
    <HomeWrapper>
      <TaskList />
    </HomeWrapper>
  );
};

export default HomeView;
