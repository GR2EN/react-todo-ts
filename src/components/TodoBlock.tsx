import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';

import { Todo } from '../store/todo/contracts/state';
import { selectTodoItemsIsEmpty } from '../store/todo/selectors';
import { TodoAddField } from './TodoAddField';
import TodoListItem from './TodoListItem';

export interface TodoBlock {
  title: string;
  items: Todo[];
}

export const TodoBlock: React.FC<TodoBlock> = ({
  title,
  items,
}): ReactElement => {
  const isEmpty = useSelector(selectTodoItemsIsEmpty);

  return (
    <div className="todo">
      <h4 className="todo__title">{title}</h4>
      <div
        className="todo__content"
        style={{ paddingBottom: isEmpty ? '12px' : '' }}
      >
        <TodoAddField placeholder="Add beginning..." />
        {isEmpty ? (
          <p className="quote">
            &quot;Big things have small beginnings.&quot; - Prometheus
          </p>
        ) : (
          <ul className="todo__list">
            {items.map(({ id, text, completed }) => (
              <TodoListItem
                completed={completed}
                id={id}
                key={id}
                text={text}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
