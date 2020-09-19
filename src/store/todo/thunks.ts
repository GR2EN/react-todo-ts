import { Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import TodoApi from '../../services/api/todoApi';
import { RootState } from '../rootReducer';
import { fetchError, fetchTodoItems, setTodoItems } from './actionCreators';

// eslint-disable-next-line import/prefer-default-export
export const thunkFetchTodoItems = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action
> => async (dispatch: Dispatch) => {
  dispatch(fetchTodoItems());
  try {
    const items = await TodoApi.fetchTodoItems();
    dispatch(setTodoItems(items));
  } catch (error) {
    dispatch(fetchError());
  }
};
