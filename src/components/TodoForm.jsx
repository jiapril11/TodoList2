import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

const StyledFormInside = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  font-size: 1.125rem;

  & label {
    margin-right: 5px;
    font-weight: 500;
  }

  & input {
    padding: 0.5rem 1rem;
    border: 1px solid #e5e7eb;
    border-radius: 4px;
    font-size: 1rem;
  }

  & button {
    padding: 0.5rem 1.125rem;
    color: #fff;
    font-weight: 700;
    font-size: 1rem;
    background-color: #d4634f;
    border: 0;
    border-radius: 4px;
  }
`;

export default function TodoForm() {
  const dispatch = useDispatch();

  const inputTitle = useRef(null);
  const [todo, setTodo] = useState({
    id: "",
    title: "",
    content: "",
    isDone: false,
  });

  const handleSubmitTodo = (e) => {
    e.preventDefault();
    if (+todo.title.length === 0 || +todo.content.length === 0) {
      alert("제목과 내용을 모두 입력해주세요.");
    } else {
      setTodo({ ...todo });
      dispatch(addTodo(todo));

      setTodo({ id: "", title: "", content: "", isDone: false });
      inputTitle.current.focus();
    }
  };

  return (
    <form onSubmit={(e) => handleSubmitTodo(e)}>
      <StyledFormInside>
        <div>
          <label htmlFor="toDoTitle">제목 </label>
          <input
            id="toDoTitle"
            type="text"
            placeholder="제목을 입력해주세요"
            value={todo.title}
            onChange={(e) =>
              setTodo({ ...todo, id: uuidv4(), title: e.target.value })
            }
            ref={inputTitle}
          />
        </div>
        <div>
          <label htmlFor="toDoContent">내용 </label>
          <input
            id="toDoContent"
            type="text"
            placeholder="내용을 입력해주세요"
            value={todo.content}
            onChange={(e) => setTodo({ ...todo, content: e.target.value })}
          />
        </div>
        <button type="submit">추가하기</button>
      </StyledFormInside>
    </form>
  );
}
