export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE';

export const resetErrorMessage = () => ({
	type: RESET_ERROR_MESSAGE
});

export const GET_TODOS = 'GET_TODOS';
export const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST';
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
export const GET_TODOS_FAILED = 'GET_TODOS_FAILED';
export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_REQUEST = 'ADD_TODO_REQUEST';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const getTodos = () => ({
	type: GET_TODOS
});

export const getTodosRequest = () => ({
	type: GET_TODOS_REQUEST
});

export const getTodosSuccess = (todos) => ({
	type: GET_TODOS_SUCCESS,
	todos
});

export const getTodosFailed = (error) => ({
	type: GET_TODOS_FAILED,
	error
});

export const addTodo = text => ({
	type: ADD_TODO,
	text
});

export const addTodoRequest = text => ({
	type: ADD_TODO_REQUEST,
	text
});

export const addTodoSuccess = (id, text) => ({
	type: ADD_TODO_SUCCESS,
	id,
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