import React from 'react';

import { TodoAddField } from './TodoAddField';
import { TodoListItem, TodoListItemProps } from './TodoListItem';

export interface TodoProps {
  title: string;
  items: Array<TodoListItemProps>;
}

export const Todo: React.FC<TodoProps> = ({ title, items }) => (
  <div className="todo">
    <h4 className="todo__title">{title}</h4>
    <div className="todo__content">
      <TodoAddField placeholder="What about another great thing?.." />
      <ul className="todo__list">
        {items.map(({ id, text, completed }) => (
          <TodoListItem completed={completed} key={id} text={text} />
        ))}
      </ul>
    </div>
  </div>
);
