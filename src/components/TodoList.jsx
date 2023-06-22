import React from "react";
import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";
import styled from "styled-components";

const StyleArticle = styled.article`
  & h2 {
    margin-bottom: 1.5rem;
    color: #d4634f;
    font-weight: 700;
  }

  & ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

export default function TodoList({ isDoneState }) {
  const todos = useSelector((state) => state.todos);

  return (
    <StyleArticle>
      <h2>{isDoneState ? "DONE" : "WORKING"}</h2>
      <ul>
        {todos
          .filter((todo) => todo.isDone === isDoneState)
          .map((todo) => (
            <TodoCard key={todo.id} todo={todo} />
          ))}
      </ul>
    </StyleArticle>
  );
}
