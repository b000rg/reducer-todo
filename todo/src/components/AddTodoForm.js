import React, { useState } from 'react';
import { ADD_TODO } from '../reducers/reducer';
import { StyledForm, InputBox, Button } from '../styles';

const AddTodoForm = ({ dispatch }) => {
    const [todoText, setTodoText] = useState('');

    const handleChange = e => {
        setTodoText(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (todoText) {
            dispatch({
                type: ADD_TODO, payload: {
                    text: todoText,
                    id: Date.now(),
                    completed: false
                }
            });
            setTodoText('');
        };
    };

    return (
        <StyledForm onSubmit={handleSubmit}>
            <InputBox value={todoText} onChange={handleChange} />
            <Button type="submit">Submit</Button>
        </StyledForm>
    );
};

export default AddTodoForm;
