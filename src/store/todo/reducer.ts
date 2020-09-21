import { TodoActions, TodoActionTypes } from './actionCreators';
import { LoadingState, TodoState } from './contracts/state';

const initialTodoState: TodoState = {
  items: [],
  loadingState: LoadingState.NEVER,
};

const todo = (state = initialTodoState, action: TodoActions): TodoState => {
  switch (action.type) {
    case TodoActionTypes.SET_LOADING_STATE: {
      return {
        ...state,
        loadingState: action.payload,
      };
    }

    case TodoActionTypes.FETCH_TODO_ITEMS: {
      return {
        ...state,
        items: [],
        loadingState: LoadingState.PENDING,
      };
    }

    case TodoActionTypes.SET_TODO_ITEMS: {
      return {
        ...state,
        items: action.payload,
      };
    }

    case TodoActionTypes.ADD_TODO_ITEM: {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }

    case TodoActionTypes.DELETE_TODO_ITEM: {
      return {
        ...state,
        items: [...state.items.filter((item) => item.id !== action.payload)],
      };
    }

    case TodoActionTypes.UPDATE_TODO_ITEM: {
      const updatedItems = state.items.map((item) => {
        if (action.payload.id !== item.id) {
          return item;
        }

        return {
          ...action.payload,
        };
      });
      return {
        ...state,
        items: [...updatedItems],
      };
    }

    default:
      return state;
  }
};

export default todo;
