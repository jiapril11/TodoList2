import React from "react";
import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";

export default function TodoList({ isDoneState }) {
  const todos = useSelector((state) => state.todos);

  return (
    <article>
      <h2>{isDoneState ? "DONE" : "WORKING"}</h2>
      <ul>
        {todos
          .filter((todo) => todo.isDone === isDoneState)
          .map((todo) => (
            <TodoCard todo={todo} />
          ))}
      </ul>
    </article>
  );
}
