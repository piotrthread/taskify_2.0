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
import DeleteIcon from "components/Delete/DeleteIcon";

const TaskList = () => {
  const { user, tasks, setTasks, clearTasks } = useContext(Context);
  useEffect(() => {
    db.firestore()
      .collection("users")
      .doc(user)
      .collection("tasks")
      .onSnapshot(res => {
        const loaded = res.docs.map(task => ({ ...task.data(), id: task.id }));
        setTasks(loaded);
      });
  }, []);
  return (
    <TaskListWrapper>
      <Logo>taskify</Logo>
      {tasks.length !== 0 ? (
        <ListWrapper>
          {tasks.map(task => (
            <Task key={task.id}>
              {task.title}
              <DeleteIcon
                onClick={() => {
                  db.firestore()
                    .collection("users")
                    .doc(user)
                    .collection("tasks")
                    .doc(task.id)
                    .delete();
                }}
              />
            </Task>
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
      />
    </TaskListWrapper>
  );
};

export default TaskList;
