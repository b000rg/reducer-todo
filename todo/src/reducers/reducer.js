import { ADD_TODO, TOGGLE_COMPLETED, CLEAR_COMPLETED } from "../App";

export const initialState = {
  todoList: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todoList: [...state.todoList, action.payload] };
    case TOGGLE_COMPLETED:
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case CLEAR_COMPLETED:
      return {
        ...state,
        todoList: state.todoList.filter((todo) => !todo.completed),
      };
    default:
      return state;
  }
};

export default reducer;
