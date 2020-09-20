import { call, put, takeLatest } from 'redux-saga/effects';

import TodoApi from '../../services/api/todoApi';
import {
  addTodoItem,
  FetchAddTodoItemAction,
  fetchTodoItemsError,
  setTodoItems,
  TodoActionTypes,
} from './actionCreators';
import { Todo } from './contracts/state';

function* fetchTodoItems() {
  try {
    const items = yield call(TodoApi.fetchTodoItems);
    yield put(setTodoItems(items));
  } catch (e) {
    yield put(fetchTodoItemsError());
  }
}

function* fetchAddTodoItemRequest({ payload }: FetchAddTodoItemAction) {
  try {
    const data: Todo = {
      id: Math.random().toString(36).substr(2),
      text: payload,
      completed: false,
    }
    const item = yield call(TodoApi.addTodoItem, data);
    yield put(addTodoItem(item))
  } catch (e) {
    console.log(e);
  }
}

// eslint-disable-next-line import/prefer-default-export
export function* todoSaga() {
  yield takeLatest(TodoActionTypes.FETCH_TODO_ITEMS, fetchTodoItems)
  yield takeLatest(TodoActionTypes.FETCH_ADD_TODO_ITEM, fetchAddTodoItemRequest)
}
