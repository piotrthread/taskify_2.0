import React, { useEffect, useContext } from "react";
import db from "firebaseApp";
import Context from "context";

import AddTask from "components/AddTask/AddTask";
import Logo from "components/Logo/Logo";
import ListWrapper from "components/TaskList/ListWrapper";

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
    <>
      <Logo>taskify</Logo>
      {tasks ? (
        <ListWrapper>
          {tasks.map((task, index) => (
            <li key={index}>{task.title}</li>
          ))}
        </ListWrapper>
      ) : (
        <p>LOADING...</p>
      )}
      <AddTask />
      <button
        onClick={() => {
          db.auth().signOut();
          clearTasks();
        }}
      >
        Logout
      </button>
    </>
  );
};

export default TaskList;
