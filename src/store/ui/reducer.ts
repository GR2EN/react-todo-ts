import { UiActions, UiActionTypes } from './actionCreators';
import { UiMode, UiState } from './contracts/state';

const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)')
const currentTheme = localStorage.getItem('ui-mode');
let initialUiMode;

if (currentTheme) {
  initialUiMode = currentTheme === UiMode.DARK ? UiMode.DARK : UiMode.LIGHT;
} else if (prefersDarkMode.matches) {
  initialUiMode = prefersDarkMode.matches ? UiMode.DARK : UiMode.LIGHT
} else {
  initialUiMode = UiMode.LIGHT;
}

localStorage.setItem('ui-mode', initialUiMode);

const initialState: UiState = {
  mode: initialUiMode,
}

const ui = (state = initialState, action: UiActions): UiState => {
  switch (action.type) {
    case UiActionTypes.SET_UI_MODE: {
      localStorage.setItem('ui-mode', action.payload);

      return {
        ...state,
        mode: action.payload,
      };
    }

    case UiActionTypes.TOGGLE_UI_MODE: {
      const nextUiMode = state.mode === UiMode.DARK ? UiMode.LIGHT : UiMode.DARK;
      localStorage.setItem('ui-mode', nextUiMode);

      return {
        ...state,
        mode: nextUiMode,
      }
    }

    default:
      return state;
  }
}

export default ui;
