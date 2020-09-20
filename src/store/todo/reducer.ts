import { TodoActions, TodoActionTypes } from './actionCreators';
import { LoadingState, TodoState } from './contracts/state';

const initialTodoState: TodoState = {
  items: [],
  loadingState: LoadingState.NEVER,
};

const todo = (state = initialTodoState, action: TodoActions): TodoState => {
  switch (action.type) {
    case TodoActionTypes.SET_TODO_ITEMS: {
      return {
        ...state,
        items: action.payload,
        loadingState: LoadingState.LOADED,
      }
    }

    case TodoActionTypes.FETCH_TODO_ITEMS: {
      return {
        ...state,
        items: [],
        loadingState: LoadingState.PENDING,
      }
    }

    case TodoActionTypes.FETCH_TODO_ITEMS_ERROR: {
      return {
        ...state,
        items: [],
        loadingState: LoadingState.ERROR,
      }
    }

    case TodoActionTypes.ADD_TODO_ITEM: {
      return {
        ...state,
        items: [...state.items, action.payload],
      }
    }

    default: return state;
  }
};

export default todo;
