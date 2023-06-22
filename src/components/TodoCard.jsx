import React from "react";
import { Link } from "react-router-dom";
import TodoButton from "./TodoButton";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";

const StyledLi = styled.li`
  margin: 0 0 1rem 0;
  padding: 1rem;
  border: 1px solid #c5d5dd;
  border-radius: 4px;
  background-color: ${(props) =>
    props.status === "true" ? "#f1f1f1" : "#fff"};

  & h3 {
    margin: 0 0 1rem;
    font-size: 1.25rem;
    font-weight: 500;
    overflow-wrap: break-word;
  }

  & p {
    margin: 0 0 2rem;
    overflow-wrap: break-word;
  }
`;

const StyledLinkWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .link-detail {
    display: flex;
    align-items: center;
    gap: 3px;
    font-size: 0.85rem;
    text-decoration: none;
    color: #305c73;
    font-weight: 700;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function TodoCard({ todo }) {
  const isDoneState = todo.isDone.toString();
  return (
    <StyledLi status={isDoneState}>
      <h3>{todo.title}</h3>
      <p>{todo.content}</p>
      <StyledLinkWrap>
        <div>
          <Link className="link-detail" to={`/todo/${todo.id}`}>
            상세보기 <BsArrowRight />
          </Link>
        </div>
        <div>
          <TodoButton roleButton={`delete`} todo={todo} />
          <TodoButton roleButton={`change`} todo={todo} />
        </div>
      </StyledLinkWrap>
    </StyledLi>
  );
}
