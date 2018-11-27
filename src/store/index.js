import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const configureStore = previousState => createStore(
	rootReducer,
	previousState,
	applyMiddleware(thunk)
);

export default configureStore;