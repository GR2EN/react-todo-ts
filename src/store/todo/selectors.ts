import { createSelector } from 'reselect';

import { RootState } from '../rootReducer';
import { LoadingState, TodoState } from './contracts/state';

export const selectTodos = (state: RootState): TodoState => state.todo;

export const selectLoadingState = (state: RootState): LoadingState => selectTodos(state).loadingState;

export const selectTodoItems = createSelector(selectTodos, (todo) => todo.items);
