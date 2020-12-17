import React from 'react';
import { MARK_AS_COMPLETED } from '../reducers/reducer';
import { ItemContainer, TodoText, CheckmarkButton } from '../styles';
import checked from '../assets/checked.svg';

const TodoItem = ({ item, dispatch }) => {
    return (
        <ItemContainer>
            <TodoText completed={item.completed}>{item.text}</TodoText>
            <CheckmarkButton src={checked} onClick={() => dispatch({ type: MARK_AS_COMPLETED, payload: item.id })} />
        </ItemContainer>
    );
};

export default TodoItem;
