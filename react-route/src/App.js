import React, { useState } from "react";
import Parcel from "single-spa-react/parcel";
import * as singleSpa from "single-spa";
import { v4 as uuid } from "uuid";
import { emitEvent } from "@cr/utils";

const App = ({ name }) => {
  const [task, setTask] = useState("");

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    emitEvent("@cr/react-route/todo/add-task", {
      id: uuid(),
      describe: task,
    });
    setTask("");
  };

  return (
    <>
      <h1>{name}</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={task} type="text" />
        <button type="submit">Add</button>
      </form>
      <Parcel
        config={() => System.import("@cr/react-parcel")}
        mountParcel={singleSpa.mountRootParcel}
      />
    </>
  );
};

export default App;
