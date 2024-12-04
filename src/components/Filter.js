import React from "react";

const Filter = ({ setFilter }) => {
    return (
        <div>
            <button onClick={() => setFilter("all")}>Все</button>
            <button onClick={() => setFilter("completed")}>Выполненные</button>
            <button onClick={() => setFilter("incomplete")}>Невыполненные</button>
        </div>
    );
};

export default Filter;