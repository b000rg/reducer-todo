import React, { useReducer } from "react";
import Container from "react-bootstrap/Container";
import reducer, { initialState } from "./reducers/reducer";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = (todo) => {
    dispatch({ type: ADD_TODO, payload: todo });
  };

  const toggleCompleted = (id) => {
    dispatch({ type: TOGGLE_COMPLETED, payload: id });
  };

  const clearCompleted = () => {
    dispatch({ type: CLEAR_COMPLETED });
  };

  return (
    <Container>
      <TodoList
        todoList={state.todoList}
        toggleCompleted={toggleCompleted}
        clearCompleted={clearCompleted}
      />
      <AddTodo addTodo={addTodo} />
    </Container>
  );
};

export default App;
