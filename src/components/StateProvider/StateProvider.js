import React, { useState, useEffect } from "react";
import Context from "context";
import db from "firebaseApp";

const StateProvider = props => {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    db.auth().onAuthStateChanged(user =>
      user ? setUser(user.uid) : setUser(null)
    );
  }, []);
  return (
    <Context.Provider
      value={{
        user: user,
        tasks: tasks,
        setUser: user => setUser(user),
        setTasks: newTasks => setTasks(newTasks),
        clearTasks: () => setTasks([])
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default StateProvider;
