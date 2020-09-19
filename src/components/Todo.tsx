import React from 'react';

import { ITodo } from '../store/todo/contracts/state';
import { TodoAddField } from './TodoAddField';
import TodoListItem from './TodoListItem';

export interface TodoProps {
  title: string;
  items: ITodo[];
}

export const Todo: React.FC<TodoProps> = ({ title, items }) => (
  <div className="todo">
    <h4 className="todo__title">{title}</h4>
    <div className="todo__content">
      <TodoAddField placeholder="What about another great thing?.." />
      <ul className="todo__list">
        {items.map(({ id, text, completed }) => (
          <TodoListItem completed={completed} id={id} key={id}
            text={text} />
        ))}
      </ul>
    </div>
  </div>
);
