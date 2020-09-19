import { createSelector } from 'reselect';

import { RootState } from '../rootReducer';
import { ITodoState, LoadingState } from './contracts/state';

export const selectTodos = (state: RootState): ITodoState => state.todo;

export const selectLoadingState = (state: RootState): LoadingState => selectTodos(state).loadingState;

export const selectTodoItems = createSelector(selectTodos, (todo) => todo.items);
