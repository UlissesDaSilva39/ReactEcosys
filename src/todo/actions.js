export const CREAT_TODO = CREAT_TODO;
export const creatTodo = text =>({
    type: CREATE_TODO,
    payload: {text},
});

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = text => ({
    type: REMOVE_TODO,
    payload: {text},
});