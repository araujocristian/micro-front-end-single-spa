import React, { useEffect, useState } from "react";
import { listenEvent } from "@cr/utils";

const App = ({ name }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    listenEvent("@cr/react-route/todo/add-task", (event) => {
      setTasks((oldTasks) => [...oldTasks, event.detail]);
    });
  }, []);

  return (
    <>
      <h1>@cr/react-parcel</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.describe}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default App;
