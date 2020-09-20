import { call, put, takeEvery } from 'redux-saga/effects';

import TodoApi from '../../services/api/todoApi';
import { fetchTodoItemsError, setTodoItems, TodoActionTypes } from './actionCreators';

function* fetchTodoItems() {
  try {
    const items = yield call(TodoApi.fetchTodoItems);
    yield put(setTodoItems(items));
  } catch (e) {
    yield put(fetchTodoItemsError());
  }
}

// eslint-disable-next-line import/prefer-default-export
export function* todoSaga() {
  yield takeEvery(TodoActionTypes.FETCH_TODO_ITEMS, fetchTodoItems)
}
