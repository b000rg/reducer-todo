import React, { useReducer } from 'react';
import { default as reducer, initialState } from './reducers/reducer';
import { AppContainer, Attribution } from './styles';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

const App = () => {
  const [list, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContainer>
      <TodoList list={list} dispatch={dispatch} />
      <AddTodoForm dispatch={dispatch} />
      <Attribution>Icons provided by <a href="https://www.flaticon.com/">flaticon</a>.</Attribution>
    </AppContainer>
  );
};

export default App;
