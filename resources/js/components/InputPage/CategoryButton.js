import React, { Component } from 'react';
import ReactDOM from 'react-dom';

CategoryButton = (props) => {
    handleButtonClick = (event) => {
        props.click(event.target.id);
    }

    return <button
        type="button"
        onClick={handleButtonClick}
        className={`btn ${props.id == props.selectedId ? "btn-success" : "btn-default"}`}
        id={props.id}>{props.name}
    </button>
}

export default CategoryButton;
