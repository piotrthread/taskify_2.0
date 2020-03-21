import React, { useEffect, useContext } from "react";
import db from "firebaseApp";
import Context from "context";

import AddTask from "components/AddTask/AddTask";

const HomeView = () => {
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
      <h1>HOME_VIEW</h1>
      {tasks ? (
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>{task.title}</li>
          ))}
        </ol>
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

export default HomeView;
