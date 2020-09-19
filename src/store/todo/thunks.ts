import { Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import TodoApi from '../../services/api/todoApi';
import { RootState } from '../rootReducer';
import { fetchError, fetchTodos, setTodos } from './actionCreators';

// eslint-disable-next-line import/prefer-default-export
export const thunkFetchTodos = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action
> => async (dispatch: Dispatch) => {
  dispatch(fetchTodos());
  try {
    const items = await TodoApi.fetchTodos();
    dispatch(setTodos(items));
  } catch (error) {
    dispatch(fetchError());
  }
};
