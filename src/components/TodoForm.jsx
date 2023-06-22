import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

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
      <div>
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
      </div>
    </form>
  );
}
