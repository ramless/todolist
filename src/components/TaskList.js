import React, { useContext, useState } from "react";
import TaskContext from "../context/TaskContext";

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
        <ul>
            {filteredTasks.map(task => (
                <li key={task.id}>
                    {editingTaskId === task.id ? (
                        <>
                            <input
                                type="text"
                                value={newText}
                                onChange={(e) => setNewText(e.target.value)}
                            />
                            <button onClick={() => saveEdit(task.id)}>Сохранить</button>
                            <button onClick={() => setEditingTaskId(null)}>Отмена</button>
                        </>
                    ) : (
                        <>
              <span
                  onClick={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })}
                  style={{
                      textDecoration: task.completed ? "line-through" : "none",
                      cursor: "pointer",
                  }}
              >
                {task.text}
              </span>
                            <button onClick={() => handleEdit(task)}>Редактировать</button>
                            <button onClick={() => dispatch({ type: "DELETE_TASK", payload: task.id })}>
                                Удалить
                            </button>
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default TaskList;