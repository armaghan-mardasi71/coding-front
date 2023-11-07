import "./todo-item.css";
import React from "react";

export default function TodoItem(props) {


  return (
    <div className="todo-item-wrapper">
      <p className="todo-title">{props.title}</p>
      <div className="actions-wrapper">
        <input type="checkbox" id="status" checked={props.status} />
        <button className="remove-todo-btn">
          X
        </button>
      </div>
    </div>
  );
}
