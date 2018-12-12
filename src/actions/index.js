export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE';

export const resetErrorMessage = () => ({
	type: RESET_ERROR_MESSAGE
});

export const getUser = () => (dispatch, getState) => {
	setTimeout(() => dispatch({type: 'API_ERROR', error: 'error occurs when getting user info'}), 2000);
};

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

let todoId = 0;
export const addTodo = text => ({
	type: ADD_TODO,
	id: todoId++,
	text
});

export const toggleTodo = id => ({
	type: TOGGLE_TODO,
	id
});

export const setVisibilityFilter = filter => ({
	type: SET_VISIBILITY_FILTER,
	filter
});

export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
};