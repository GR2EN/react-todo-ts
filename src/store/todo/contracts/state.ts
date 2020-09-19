export enum LoadingState {
  NEVER = 'NEVER',
  LOADED = 'LOADED',
  PENDING = 'PENDING',
  ERROR = 'ERROR',
}

export interface ITodo {
  id: number;
  text: string;
  completed: boolean;
};

export interface ITodoState {
  items: ITodo[];
  loadingState: LoadingState;
};
