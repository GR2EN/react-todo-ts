import { call, put, takeLatest } from 'redux-saga/effects';

import TodoApi from '../../services/api/todoApi';
import {
  addTodoItem,
  deleteTodoItem,
  FetchAddTodoItemAction,
  FetchDeleteTodoItemAction,
  setTodoItems,
  setTodoLoadingState,
  TodoActionTypes,
} from './actionCreators';
import { LoadingState, Todo } from './contracts/state';

function* fetchTodoItems() {
  try {
    const items = yield call(TodoApi.fetchTodoItems);
    yield put(setTodoItems(items));
    yield put(setTodoLoadingState(LoadingState.LOADED));
  } catch (e) {
    yield put(setTodoLoadingState(LoadingState.ERROR));
  }
}

function* fetchAddTodoItemRequest({ payload }: FetchAddTodoItemAction) {
  try {
    const data: Todo = {
      id: Math.random().toString(36).substr(2),
      text: payload,
      completed: false,
    };
    const item = yield call(TodoApi.addTodoItem, data);
    yield put(addTodoItem(item));
  } catch (e) {
    yield put(setTodoLoadingState(LoadingState.ERROR));
  }
}

function* fetchDeleteTodoItem({ payload }: FetchDeleteTodoItemAction) {
  try {
    yield call(TodoApi.deleteTodoItem, payload);
    yield put(deleteTodoItem(payload));
  } catch (e) {
    yield put(setTodoLoadingState(LoadingState.ERROR));
  }
}

// eslint-disable-next-line import/prefer-default-export
export function* todoSaga() {
  yield takeLatest(TodoActionTypes.FETCH_TODO_ITEMS, fetchTodoItems);
  yield takeLatest(
    TodoActionTypes.FETCH_ADD_TODO_ITEM,
    fetchAddTodoItemRequest
  );
  yield takeLatest(TodoActionTypes.FETCH_DELETE_TODO_ITEM, fetchDeleteTodoItem);
}
