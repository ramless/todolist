import React, { useState, useContext } from "react";
import TaskContext from "../context/TaskContext";

const AddTask = () => {
    const { dispatch } = useContext(TaskContext);
    const [taskText, setTaskText] = useState("");

    const handleAddTask = () => {
        if (taskText.trim()) {
            dispatch({ type: "ADD_TASK", payload: taskText });
            setTaskText("");
        }
    };

    return (
        <div>
            <input
                type="text"
                value={taskText}
                onChange={e => setTaskText(e.target.value)}
                placeholder="Добавить задачу"
            />
            <button onClick={handleAddTask}>Добавить</button>
        </div>
    );
};

export default AddTask;