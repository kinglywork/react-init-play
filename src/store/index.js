import 'regenerator-runtime/runtime';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const configureStore = previousState => {
	const store = createStore(
		rootReducer,
		previousState,
		applyMiddleware(sagaMiddleware)
	);
	sagaMiddleware.run(rootSaga);

	return store;
};


export default configureStore;