import * as ActionTypes from '../actions';

export const todos = (state = [], action) => {
	switch (action.type) {
		case ActionTypes.GET_TODOS_SUCCESS:
			return [...action.todos];
		case ActionTypes.ADD_TODO_SUCCESS:
			return [
				...state,
				{
					id: action.id,
					text: action.text,
					completed: false
				}
			];
		case ActionTypes.TOGGLE_TODO:
			return state.map(todo =>
				(todo.id === action.id)
					? {...todo, completed: !todo.completed}
					: todo
			);
		default:
			return state;
	}
};

export const visibilityFilter = (state = ActionTypes.VisibilityFilters.SHOW_ALL, action) => {
	switch (action.type) {
		case ActionTypes.SET_VISIBILITY_FILTER:
			return action.filter;
		default:
			return state;
	}
};