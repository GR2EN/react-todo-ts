import { Action } from 'redux';

import { UiMode } from './contracts/state';

export enum UiActionTypes {
  SET_UI_MODE = 'ui/SET_UI_MODE',
  TOGGLE_UI_MODE = 'ui/TOGGLE_UI_MODE',
}

export interface SetUiModeAction extends Action<UiActionTypes> {
  type: UiActionTypes.SET_UI_MODE,
  payload: UiMode
}

export interface ToggleUiModeAction extends Action<UiActionTypes> {
  type: UiActionTypes.TOGGLE_UI_MODE,
}

export const setUiMode = (payload: UiMode): SetUiModeAction => ({
  type: UiActionTypes.SET_UI_MODE,
  payload,
})

export const toggleUiMode = (): ToggleUiModeAction => ({
  type: UiActionTypes.TOGGLE_UI_MODE,
})

export type UiActions = SetUiModeAction | ToggleUiModeAction;
