import { all } from 'redux-saga/effects';

import { todoSaga } from './todo/sagas';

export default function* rootSaga() {
  yield all([
    todoSaga()
  ])
}
