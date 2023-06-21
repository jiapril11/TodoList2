import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addTodo, deleteTodo, changeIsdoneTodo } from "./redux/modules/todos";
import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const todos = useSelector((state) => state.todos);
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

  const handleDeleteTodo = (id) => {
    const check = window.confirm("정말 삭제하시겠습니까?");
    check && dispatch(deleteTodo(id));
  };
  return (
    <main>
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
      <section>
        <article>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                <h3>{todo.title}</h3>
                <p>{todo.content}</p>
                <div>
                  <div>
                    <button>상세보기</button>
                  </div>
                  <div>
                    <button onClick={() => handleDeleteTodo(todo.id)}>
                      삭제
                    </button>
                    <button onClick={() => dispatch(changeIsdoneTodo(todo))}>
                      {todo.isDone ? "취소" : "완료"}
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}

export default App;
