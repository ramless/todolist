import React, { useState } from "react";
import { TaskProvider } from "./context/TaskContext";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import Filter from "./components/Filter";

const App = () => {
  const [filter, setFilter] = useState("all");

  return (
      <TaskProvider>
        <div>
          <h1>TODO-приложение</h1>
          <AddTask />
          <Filter setFilter={setFilter} />
          <TaskList filter={filter} />
        </div>
      </TaskProvider>
  );
};

export default App;