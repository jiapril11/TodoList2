const ADD_TODO = "todos/ADD_TODO";
const DELETE_TODO = "todos/DELETE_TODO";
const CHANGE_ISDONE_TODO = "todos/CHANGE_ISDONE_TODO";

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    todo: todo,
  };
};

export const deleteTodo = (todoId) => {
  return {
    type: DELETE_TODO,
    todoId,
  };
};

export const changeIsdoneTodo = (todo) => {
  return {
    type: CHANGE_ISDONE_TODO,
    todo,
  };
};

const initialState = [
  {
    id: 1,
    title: "React1",
    content: "Redux 공부하기",
    isDone: false,
  },
  {
    id: 2,
    title: "React2",
    content: "Router 공부하기",
    isDone: false,
  },
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case DELETE_TODO:
      return state.filter((item) => item.id !== action.todoId);
    case CHANGE_ISDONE_TODO:
      return state.map((item) =>
        item.id !== action.todo.id
          ? item
          : { ...item, isDone: !action.todo.isDone }
      );
    default:
      return state;
  }
};

export default todos;
