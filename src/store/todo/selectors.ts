import { createSelector } from 'reselect';

import { RootState } from '../rootReducer';
import { LoadingState, TodoState } from './contracts/state';

export const selectTodos = (state: RootState): TodoState => state.todo;

/* eslint implicit-arrow-linebreak: 0 */
export const selectLoadingState = (state: RootState): LoadingState =>
  selectTodos(state).loadingState;

export const selectTodoItems = createSelector(
  selectTodos,
  (todo) => todo.items
);
