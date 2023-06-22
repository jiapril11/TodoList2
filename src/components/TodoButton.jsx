import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, changeIsdoneTodo } from "../redux/modules/todos";
import styled from "styled-components";

const StyledBtn = styled.button`
  padding: 0.25rem 1.25rem;
  font-size: 0.85rem;
  font-weight: 700;
  color: #fff;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${(props) =>
    props.status === "delete"
      ? "#ef4444"
      : props.status === "cancel"
      ? "#3F7E9A"
      : "#0E2D3E"};

  &:first-child {
    margin-right: 8px;
  }
`;

export default function TodoButton({ roleButton, todo }) {
  const dispatch = useDispatch();

  const handleDeleteTodo = (id) => {
    const check = window.confirm("정말 삭제하시겠습니까?");
    check && dispatch(deleteTodo(id));
    alert("삭제되었습니다.");
  };

  const handleChangeStateTodo = (todo) => dispatch(changeIsdoneTodo(todo));

  const styleButtonStatus =
    roleButton === "delete" ? "delete" : todo.isDone ? "cancel" : "complete";
  return (
    <StyledBtn
      status={styleButtonStatus}
      onClick={() =>
        roleButton === "delete"
          ? handleDeleteTodo(todo.id)
          : handleChangeStateTodo(todo)
      }
    >
      {roleButton === "delete" ? "삭제" : todo.isDone ? "취소" : "완료"}
    </StyledBtn>
  );
}
