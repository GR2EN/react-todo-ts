import { combineReducers } from 'redux';

import todo from './todo/reducer';
import ui from './ui/reducer';

export const rootReducer = combineReducers({
  ui,
  todo,
});

export type RootState = ReturnType<typeof rootReducer>;
