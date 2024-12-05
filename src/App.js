import React, { useState } from "react";
import { TaskProvider } from "./context/TaskContext";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import Filter from "./components/Filter";

const App = () => {
  const [filter, setFilter] = useState("all");

  return (
      <TaskProvider>
        <div className={'todo-block'}>
          <h2 className={'todo-block__heading'}>TODO-APP</h2>
          <AddTask />
            <div className="row">
                <div className="col-9">
                    <TaskList filter={filter} />
                </div>
                <div className="col-3">
                    <Filter setFilter={setFilter} />

                </div>
            </div>
        </div>
      </TaskProvider>
  );
};

export default App;