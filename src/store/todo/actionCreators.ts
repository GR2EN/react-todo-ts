import { Action } from 'redux';

import { Todo } from './contracts/state';

export enum TodoActionTypes {
  SET_TODO_ITEMS = 'todo/SET_TODO_ITEMS',
  FETCH_TODO_ITEMS = 'todo/FETCH_TODO_ITEMS',
  FETCH_TODO_ITEMS_ERROR = 'todo/FETCH_ERROR',
}

export interface SetTodoItemsAction extends Action<TodoActionTypes> {
  type: TodoActionTypes.SET_TODO_ITEMS,
  payload: Todo[],
}

export interface FetchTodoItemsAction extends Action<TodoActionTypes> {
  type: TodoActionTypes.FETCH_TODO_ITEMS,
}

export interface FetchTodoItemsErrorAction extends Action<TodoActionTypes> {
  type: TodoActionTypes.FETCH_TODO_ITEMS_ERROR,
}

export const setTodoItems = (payload: Todo[]): SetTodoItemsAction => ({
  type: TodoActionTypes.SET_TODO_ITEMS,
  payload,
})

export const fetchTodoItems = (): FetchTodoItemsAction => ({
  type: TodoActionTypes.FETCH_TODO_ITEMS,
})

export const fetchTodoItemsError = (): FetchTodoItemsErrorAction => ({
  type: TodoActionTypes.FETCH_TODO_ITEMS_ERROR,
})

export type TodoActions = SetTodoItemsAction | FetchTodoItemsAction | FetchTodoItemsErrorAction;
