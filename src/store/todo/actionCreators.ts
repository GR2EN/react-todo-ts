import { Action } from 'redux';

import { LoadingState, Todo } from './contracts/state';

export enum TodoActionTypes {
  SET_LOADING_STATE = 'todo/SET_LOADING_STATE',
  SET_TODO_ITEMS = 'todo/SET_TODO_ITEMS',
  FETCH_TODO_ITEMS = 'todo/FETCH_TODO_ITEMS',
  FETCH_ADD_TODO_ITEM = 'todo/FETCH_ADD_TODO_ITEM',
  ADD_TODO_ITEM = 'todo/ADD_TODO_ITEM',
  FETCH_DELETE_TODO_ITEM = 'todo/FETCH_DELETE_TODO_ITEM',
  DELETE_TODO_ITEM = 'todo/DELETE_TODO_ITEM',
}

export interface SetTodoLoadingState extends Action<TodoActionTypes> {
  type: TodoActionTypes.SET_LOADING_STATE;
  payload: LoadingState;
}

export interface SetTodoItemsAction extends Action<TodoActionTypes> {
  type: TodoActionTypes.SET_TODO_ITEMS;
  payload: Todo[];
}

export interface FetchTodoItemsAction extends Action<TodoActionTypes> {
  type: TodoActionTypes.FETCH_TODO_ITEMS;
}

export interface FetchAddTodoItemAction extends Action<TodoActionTypes> {
  type: TodoActionTypes.FETCH_ADD_TODO_ITEM;
  payload: string;
}

export interface AddTodoItemAction extends Action<TodoActionTypes> {
  type: TodoActionTypes.ADD_TODO_ITEM;
  payload: Todo;
}

export interface FetchDeleteTodoItemAction extends Action<TodoActionTypes> {
  type: TodoActionTypes.FETCH_DELETE_TODO_ITEM;
  payload: string;
}

export interface DeleteTodoItemAction extends Action<TodoActionTypes> {
  type: TodoActionTypes.DELETE_TODO_ITEM;
  payload: string;
}

export const setTodoLoadingState = (
  payload: LoadingState
): SetTodoLoadingState => ({
  type: TodoActionTypes.SET_LOADING_STATE,
  payload,
});

export const setTodoItems = (payload: Todo[]): SetTodoItemsAction => ({
  type: TodoActionTypes.SET_TODO_ITEMS,
  payload,
});

export const fetchTodoItems = (): FetchTodoItemsAction => ({
  type: TodoActionTypes.FETCH_TODO_ITEMS,
});

export const fetchAddTodoItem = (payload: string): FetchAddTodoItemAction => ({
  type: TodoActionTypes.FETCH_ADD_TODO_ITEM,
  payload,
});

export const addTodoItem = (payload: Todo): AddTodoItemAction => ({
  type: TodoActionTypes.ADD_TODO_ITEM,
  payload,
});

export const fetchDeleteTodoItem = (
  payload: string
): FetchDeleteTodoItemAction => ({
  type: TodoActionTypes.FETCH_DELETE_TODO_ITEM,
  payload,
});

export const deleteTodoItem = (payload: string): DeleteTodoItemAction => ({
  type: TodoActionTypes.DELETE_TODO_ITEM,
  payload,
});

export type TodoActions =
  | SetTodoLoadingState
  | SetTodoItemsAction
  | FetchTodoItemsAction
  | FetchAddTodoItemAction
  | AddTodoItemAction
  | FetchDeleteTodoItemAction
  | DeleteTodoItemAction;
