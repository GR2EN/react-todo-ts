import { Action } from 'redux';

import { ITodo } from './contracts/state';

export enum TodoActionTypes {
  SET_TODOS = 'todos/SET_TODOS',
  FETCH_TODOS = 'todos/FETCH_TODOS',
  FETCH_ERROR = 'todos/FETCH_ERROR',
}

export interface ISetTodosAction extends Action<TodoActionTypes> {
  type: TodoActionTypes.SET_TODOS,
  payload: ITodo[],
}

export interface IFetchTodosAction extends Action<TodoActionTypes> {
  type: TodoActionTypes.FETCH_TODOS,
}

export interface IFetchErrorAction extends Action<TodoActionTypes> {
  type: TodoActionTypes.FETCH_ERROR,
}

export const setTodos = (payload: ITodo[]): ISetTodosAction => ({
  type: TodoActionTypes.SET_TODOS,
  payload,
})

export const fetchTodos = (): IFetchTodosAction => ({
  type: TodoActionTypes.FETCH_TODOS,
})

export const fetchError = (): IFetchErrorAction => ({
  type: TodoActionTypes.FETCH_ERROR,
})

export type TodoActions = ISetTodosAction | IFetchTodosAction | IFetchErrorAction;
