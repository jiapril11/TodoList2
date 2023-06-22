import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, changeIsdoneTodo } from "../redux/modules/todos";

export default function TodoButton({ roleButton, todo }) {
  const dispatch = useDispatch();

  const handleDeleteTodo = (id) => {
    const check = window.confirm("정말 삭제하시겠습니까?");
    check && dispatch(deleteTodo(id));
    alert("삭제되었습니다.");
  };

  const handleChangeStateTodo = (todo) => dispatch(changeIsdoneTodo(todo));

  return (
    <button
      onClick={() =>
        roleButton === "delete"
          ? handleDeleteTodo(todo.id)
          : handleChangeStateTodo(todo)
      }
    >
      {roleButton === "delete" ? "삭제" : todo.isDone ? "취소" : "완료"}
    </button>
  );
}
