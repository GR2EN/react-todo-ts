import { Action } from 'redux';

import { Todo } from './contracts/state';

export enum TodoActionTypes {
  SET_TODO_ITEMS = 'todo/SET_TODO_ITEMS',
  FETCH_TODO_ITEMS = 'todo/FETCH_TODO_ITEMS',
  FETCH_TODO_ITEMS_ERROR = 'todo/FETCH_ERROR',
  FETCH_ADD_TODO_ITEM = 'todo/FETCH_ADD_TODO_ITEM',
  ADD_TODO_ITEM = 'todo/ADD_TODO_ITEM',
}

export interface SetTodoItemsAction extends Action<TodoActionTypes> {
  type: TodoActionTypes.SET_TODO_ITEMS;
  payload: Todo[];
}

export interface FetchTodoItemsAction extends Action<TodoActionTypes> {
  type: TodoActionTypes.FETCH_TODO_ITEMS;
}

export interface FetchTodoItemsErrorAction extends Action<TodoActionTypes> {
  type: TodoActionTypes.FETCH_TODO_ITEMS_ERROR;
}

export interface FetchAddTodoItemAction extends Action<TodoActionTypes> {
  type: TodoActionTypes.FETCH_ADD_TODO_ITEM;
  payload: string;
}

export interface AddTodoItemAction extends Action<TodoActionTypes> {
  type: TodoActionTypes.ADD_TODO_ITEM;
  payload: Todo;
}

export const setTodoItems = (payload: Todo[]): SetTodoItemsAction => ({
  type: TodoActionTypes.SET_TODO_ITEMS,
  payload,
});

export const fetchTodoItems = (): FetchTodoItemsAction => ({
  type: TodoActionTypes.FETCH_TODO_ITEMS,
});

export const fetchTodoItemsError = (): FetchTodoItemsErrorAction => ({
  type: TodoActionTypes.FETCH_TODO_ITEMS_ERROR,
});

export const fetchAddTodoItem = (payload: string): FetchAddTodoItemAction => ({
  type: TodoActionTypes.FETCH_ADD_TODO_ITEM,
  payload,
});

export const addTodoItem = (payload: Todo): AddTodoItemAction => ({
  type: TodoActionTypes.ADD_TODO_ITEM,
  payload,
});

export type TodoActions =
  | SetTodoItemsAction
  | FetchTodoItemsAction
  | FetchTodoItemsErrorAction
  | FetchAddTodoItemAction
  | AddTodoItemAction;
