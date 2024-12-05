import React, { useState, useContext } from "react";
import TaskContext from "../context/TaskContext";

import '../styles/components/addTask.scss'

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
        <div className={'todo-block-form'}>
            <div className={'form-group row'}>
                <div className="col-9">
                    <input
                        type="text"
                        value={taskText}
                        className={'form-control'}
                        onChange={e => setTaskText(e.target.value)}
                        placeholder="Добавить задачу"
                    />
                </div>
                <div className="col-3">
                    <button className={'btn btn-info'} onClick={handleAddTask}>Добавить</button>
                </div>
            </div>
        </div>
    );
};

export default AddTask;