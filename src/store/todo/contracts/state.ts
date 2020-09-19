export enum LoadingState {
  NEVER = 'NEVER',
  LOADED = 'LOADED',
  PENDING = 'PENDING',
  ERROR = 'ERROR',
}

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
};

export interface TodoState {
  items: Todo[];
  loadingState: LoadingState;
};
