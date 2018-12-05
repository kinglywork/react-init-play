import {combineReducers} from 'redux';

import * as ActionTypes from '../actions';

const errorMessage = (state = '', action) => {
	const {type, error} = action;

	if (type === ActionTypes.RESET_ERROR_MESSAGE) {
		return '';
	} else if (error) {
		return error;
	} else {
		return state;
	}
};

const rootReducer = combineReducers({
	errorMessage
});

export default rootReducer;

