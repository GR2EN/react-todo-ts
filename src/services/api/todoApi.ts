import axios from 'axios';

import { Todo } from '../../store/todo/contracts/state';

const TodoApi = {
  async fetchTodoItems(): Promise<Todo[]> {
    return axios.get('/todo').then(({ data }) => data);
  },
  async addTodoItem(todo: Todo): Promise<Todo> {
    return axios.post('/todo', todo).then(({ data }) => data);
  },
  async deleteTodoItem(id: string): Promise<void> {
    return axios.delete(`/todo/${id}`);
  },
  async updateTodoItem(todo: Todo): Promise<void> {
    const { id, text, completed } = todo;
    return axios.put(`/todo/${id}`, { text, completed });
  },
};

export default TodoApi;
