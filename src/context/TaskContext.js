import React, { createContext, useReducer, useEffect } from "react";

const TaskContext = createContext();

const taskReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return [...state, { id: Date.now(), text: action.payload, completed: false }];
        case "TOGGLE_TASK":
            return state.map(task =>
                task.id === action.payload ? { ...task, completed: !task.completed } : task
            );
        case "DELETE_TASK":
            return state.filter(task => task.id !== action.payload);
        case "EDIT_TASK":
            return state.map(task =>
                task.id === action.payload.id ? { ...task, text: action.payload.text } : task
            );
        case "SET_TASKS":
            return action.payload;
        default:
            return state;
    }
};

// Load tasks from localStorage (helper function)
const loadTasksFromLocalStorage = () => {
    try {
        const storedTasks = localStorage.getItem("tasks");
        return storedTasks ? JSON.parse(storedTasks) : [];
    } catch (error) {
        console.error("Error parsing tasks from localStorage:", error);
        return [];
    }
};

export const TaskProvider = ({ children }) => {
    const [tasks, dispatch] = useReducer(taskReducer, [], loadTasksFromLocalStorage);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    return (
        <TaskContext.Provider value={{ tasks, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
};

export default TaskContext;