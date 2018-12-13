import {delay} from 'redux-saga';
import {all, put, takeEvery, takeLatest} from 'redux-saga/effects';

import * as ActionTypes from '../actions';
import {getTodosRequest, getTodosSuccess, addTodoRequest, addTodoSuccess, getTodosFailed} from '../actions';

let todoId = 0;

function* getTodos() {
	yield put(getTodosRequest());
	yield delay(1000);
	yield put(getTodosSuccess([
		{id: 1000, text: 'do homework', completed: true},
		{id: 1001, text: 'watch sky', completed: false}
	]));
}

function* addTodo(action) {
	yield put(addTodoRequest(action.text));
	yield delay(1000);
	yield put(addTodoSuccess(todoId++, action.text));
}

function* watchGetTodos() {
	yield takeEvery(ActionTypes.GET_TODOS, getTodos);
}

function* watchAddTodo() {
	yield takeEvery(ActionTypes.ADD_TODO, addTodo);
}

export default function* rootSaga() {
	yield all([
		watchGetTodos(),
		watchAddTodo()
	]);
};