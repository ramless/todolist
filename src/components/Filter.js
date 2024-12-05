import React from "react";

import '../styles/components/filter.scss'

const Filter = ({ setFilter }) => {
    return (
        <div className={'row todo-block-filter'}>
            <div className="col-12">
                <button className={'btn btn-primary'} onClick={() => setFilter("all")}>All</button>
            </div>
            <div className="col-12 mt-2">
                <button className={'btn btn-success'} onClick={() => setFilter("completed")}>Done</button>
            </div>
            <div className="col-12 mt-2">
                <button className={'btn btn-danger'} onClick={() => setFilter("incomplete")}>Undone</button>
            </div>
        </div>
    );
};

export default Filter;