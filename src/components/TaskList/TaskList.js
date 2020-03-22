import React, { useEffect, useContext } from "react";
import db from "firebaseApp";
import Context from "context";

import AddTask from "components/AddTask/AddTask";
import Logo from "components/Logo/Logo";
import ListWrapper from "components/TaskList/ListWrapper";
import TaskListWrapper from "./TaskListWrapper";
import Task from "./Task";
import Info from "./Info";
import Logout from "components/Logout/Logout";

const TaskList = () => {
  const { user, tasks, setTasks, clearTasks } = useContext(Context);
  useEffect(() => {
    db.firestore()
      .collection("users")
      .doc(user)
      .collection("tasks")
      .onSnapshot(res => {
        const loaded = res.docs.map(task => task.data());
        setTasks(loaded);
      });
  }, []);
  return (
    <TaskListWrapper>
      <Logo>taskify</Logo>
      {tasks.length !== 0 ? (
        <ListWrapper>
          {tasks.map((task, index) => (
            <Task key={index}>{task.title}</Task>
          ))}
        </ListWrapper>
      ) : (
        <Info>Add some Tasks.</Info>
      )}
      <AddTask />
      <Logout
        onClick={() => {
          db.auth().signOut();
          clearTasks();
        }}
      ></Logout>
    </TaskListWrapper>
  );
};

export default TaskList;
