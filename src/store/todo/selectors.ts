/* eslint-disable implicit-arrow-linebreak */
import { createSelector } from 'reselect';

import { RootState } from '../rootReducer';
import { LoadingState, TodoState } from './contracts/state';

export const selectTodo = (state: RootState): TodoState => state.todo;

export const selectLoadingState = (state: RootState): LoadingState =>
  selectTodo(state).loadingState;

export const selectTodoItemsIsLoading = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.PENDING;

export const selectTodoItemsIsLoaded = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADED;

export const selectTodoItemsError = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.ERROR;

export const selectTodoItems = createSelector(selectTodo, (todo) => todo.items);

export const selectTodoItemsIsEmpty = (state: RootState): boolean =>
  selectTodoItems(state).length === 0;
