export const ADD_TODO = 'ADD_TODO';
export const MARK_AS_COMPLETED = 'MARK_AS_COMPLETED';
export const REMOVE_COMPLETED = 'REMOVE_COMPLETED';

export const initialState = [{
    text: 'Learn about reducers',
    completed: false,
    id: 3892987589
}];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return addTodo(state, action.payload)
        case MARK_AS_COMPLETED:
            return markAsCompleted(state, action.payload);
        case REMOVE_COMPLETED:
            return removeCompleted(state);
        default:
            return state;
    };
};
export default reducer;

const addTodo = (state, todo) => {
    return [...state, todo];
};

const markAsCompleted = (state, id) => {
    let newList = [...state];
    for (let i = 0; i < newList.length; i++) {
        if (newList[i].id === id) {
            newList[i].completed = true;
            break;
        };
    };
    return newList;
};

const removeCompleted = state => {
    return state.filter(item => !item.completed);
};
