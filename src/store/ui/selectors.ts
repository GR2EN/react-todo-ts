/* eslint-disable implicit-arrow-linebreak */
import { RootState } from '../rootReducer';
import { UiMode, UiState } from './contracts/state';

export const selectUiState = (state: RootState): UiState => state.ui;

export const selectUiMode = (state: RootState): UiMode => selectUiState(state).mode;

export const selectUiModeIsDark = (state: RootState): boolean =>
  selectUiMode(state) === UiMode.DARK;

export const selectUiModeIsLight = (state: RootState): boolean =>
  selectUiMode(state) === UiMode.LIGHT;
