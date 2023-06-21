import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Todo() {
  const params = useParams();
  const todos = useSelector((state) => state.todos);
  const foundTodo = todos.find((todo) => String(todo.id) === params.id);
  const navigate = useNavigate();
  return (
    <article>
      <h2>{foundTodo.title} </h2>

      <p>{foundTodo.content}</p>

      <div>
        <p>{foundTodo.isDone ? "완료" : "미완료"}</p>
        <p>ID: {foundTodo.id}</p>
      </div>

      <button onClick={() => navigate(-1)}>이전으로</button>
    </article>
  );
}
