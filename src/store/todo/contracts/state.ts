export enum LoadingState {
  NEVER = 'NEVER',
  LOADED = 'LOADED',
  PENDING = 'PENDING',
  ERROR = 'ERROR',
}

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
};

export interface TodoState {
  items: Todo[];
  loadingState: LoadingState;
};
