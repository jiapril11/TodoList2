import React from "react";
import { Link } from "react-router-dom";
import TodoButton from "./TodoButton";

export default function TodoCard({ todo }) {
  return (
    <li key={todo.id}>
      <h3>{todo.title}</h3>
      <p>{todo.content}</p>
      <div>
        <div>
          <Link to={`/todo/${todo.id}`}>상세보기</Link>
        </div>
        <div>
          <TodoButton roleButton={`delete`} todo={todo} />
          <TodoButton roleButton={`change`} todo={todo} />
        </div>
      </div>
    </li>
  );
}
