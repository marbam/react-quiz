import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function CategoryButton(props) {
    function handleButtonClick(event) {
        props.click(event.target.id);
    }

    return <button
        type="button"
        onClick={handleButtonClick}
        className={`categoryButton btn ${props.id == props.selectedId ? "btn-success" : "btn-light"}`}
        id={props.id}>{props.name}
    </button>
}

export default CategoryButton;
