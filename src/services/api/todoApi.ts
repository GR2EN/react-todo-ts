import axios from 'axios';

import { ITodo } from "../../store/todo/contracts/state";

const TodoApi = {
  async fetchTodos(): Promise<ITodo[]> {
    return axios
      .get('/todos')
      .then(({ data }) => data)
      .catch((err) => err.message);
  }
};

export default TodoApi;
