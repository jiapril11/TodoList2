const ADD_TODO = "todos/ADD_TODO";

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    todo: todo,
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
    default:
      return state;
  }
};

export default todos;
