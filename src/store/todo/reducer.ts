import { TodoActions, TodoActionTypes } from './actionCreators';
import { ITodoState, LoadingState } from './contracts/state';

const initialTodoState: ITodoState = {
  items: [],
  loadingState: LoadingState.NEVER,
};

const todo = (state = initialTodoState, action: TodoActions): ITodoState => {
  switch (action.type) {
    case TodoActionTypes.SET_TODOS: {
      return {
        ...state,
        items: action.payload,
        loadingState: LoadingState.LOADED,
      }
    }

    case TodoActionTypes.FETCH_TODOS: {
      return {
        ...state,
        items: [],
        loadingState: LoadingState.PENDING,
      }
    }

    case TodoActionTypes.FETCH_ERROR: {
      return {
        ...state,
        items: [],
        loadingState: LoadingState.ERROR,
      }
    }

    default: return state;
  }
};

export default todo;
