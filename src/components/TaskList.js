import React, { useContext, useState } from "react";
import TaskContext from "../context/TaskContext";

import '../styles/components/task-list.scss'

const TaskList = ({ filter }) => {
    const { tasks, dispatch } = useContext(TaskContext);
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [newText, setNewText] = useState("");

    const filteredTasks = tasks.filter(task => {
        if (filter === "completed") return task.completed;
        if (filter === "incomplete") return !task.completed;
        return true;
    });

    const handleEdit = (task) => {
        setEditingTaskId(task.id);
        setNewText(task.text);
    };

    const saveEdit = (taskId) => {
        if (newText.trim()) {
            dispatch({ type: "EDIT_TASK", payload: { id: taskId, text: newText } });
            setEditingTaskId(null);
        }
    };

    return (
        <ul className={'todo-task-list'}>
            {filteredTasks.map(task => (
                <li key={task.id}>
                    {editingTaskId === task.id ? (
                        <>
                            <div className={'mb-2'}>
                                <input
                                    type="text"
                                    className={'form-control'}
                                    value={newText}
                                    onChange={(e) => setNewText(e.target.value)}
                                />
                            </div>
                            <div className={'todo-task-list__buttons'}>
                                <button className={'badge badge-pill bg-secondary mr-1'}
                                        onClick={() => saveEdit(task.id)}>Save
                                </button>
                                <button className={'badge bg-dark'} onClick={() => setEditingTaskId(null)}>Cancel
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                        <div className={'todo-task-list__text ' + (task.completed ? "done" : "undone")}
                             onClick={() => dispatch({type: "TOGGLE_TASK", payload: task.id})}
                        >
                            {task.text}
                        </div>
                            <div className={'todo-task-list__buttons'}>
                                <button className={'badge badge-pill bg-secondary mr-1'}
                                        onClick={() => handleEdit(task)}>Edit
                                </button>
                                <button className={'badge bg-dark'}
                                        onClick={() => dispatch({type: "DELETE_TASK", payload: task.id})}>
                                    Delete
                                </button>
                            </div>
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default TaskList;