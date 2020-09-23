import { UiActions, UiActionTypes } from './actionCreators';
import { UiMode, UiState } from './contracts/state';

const initialState: UiState = {
  mode: UiMode.LIGHT,
}

const ui = (state = initialState, action: UiActions): UiState => {
  switch (action.type) {
    case UiActionTypes.SET_UI_MODE: {
      return {
        ...state,
        mode: action.payload,
      };
    }

    case UiActionTypes.TOGGLE_UI_MODE: {
      return {
        ...state,
        mode: state.mode === UiMode.DARK ? UiMode.LIGHT : UiMode.DARK,
      }
    }

    default:
      return state;
  }
}

export default ui;
