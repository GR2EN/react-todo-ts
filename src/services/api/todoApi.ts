import axios from 'axios';

import { Todo } from "../../store/todo/contracts/state";

const TodoApi = {
  async fetchTodoItems(): Promise<Todo[]> {
    return axios.get('/todo').then(({ data }) => data);
  }
};

export default TodoApi;
