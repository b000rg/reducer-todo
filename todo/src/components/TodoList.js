import React from 'react';
import { REMOVE_COMPLETED } from '../reducers/reducer';
import { ListContainer, Heading, Button } from '../styles';
import TodoItem from './TodoItem';

const TodoList = ({ list, dispatch }) => {
    return (
        <ListContainer>
            <Heading>
                <span>Todo List</span>
                <Button type="button" onClick={() => dispatch({ type: REMOVE_COMPLETED })}>Remove Completed</Button>
            </Heading>
            {list.map(item =>
                <TodoItem key={item.id} item={item} dispatch={dispatch} />
            )}
        </ListContainer>
    );
};

export default TodoList;
