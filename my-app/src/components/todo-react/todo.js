import "./todo.css";
import React from "react";
import TodoItem from "./todo-item";
export default function Todo() {
  let allTodos = [
    {
      id: 1,
      title: "HTML",
      status: false
    },
    {
      id: 2,
      title: "CSS",
      status: false
    },
    {
      id: 3,
      title: "JS",
      status: true
    }
  ];

  return (
    <div className="todo-container">
      <div className="main">
        <select id="select-box">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
        <input type="text" />
        <button>add todo</button>
      </div>
      <button className="fetch">Fetch API</button>
      <div className="todos-wrapper">
        {allTodos.map((todo) => {
          return <TodoItem title={todo.title} status={todo.status} />;
        })}
      </div>
    </div>
  );
}
