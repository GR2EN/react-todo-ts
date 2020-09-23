
import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';

import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';

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
    <motion.div
      animate={{ opacity: 1 }}
      className="todo"
      initial={{ opacity: 0 }}
    >
      <h4 className="todo__title">{title}</h4>
      <AnimateSharedLayout>
        <motion.div
          className="todo__content"
          layout
          style={{ paddingBottom: isEmpty ? 12 : 0 }}
        >
          <TodoAddField placeholder="Add beginning..." />
          {isEmpty ? (
            <p className="quote">
              &quot;Big things have small beginnings.&quot; - Prometheus
            </p>
          ) : (
            <ul className="todo__list">
              <AnimatePresence>
                {items.map(({ id, text, completed }) => (
                  <TodoListItem
                    completed={completed}
                    id={id}
                    key={id}
                    text={text}
                  />
                ))}
              </AnimatePresence>
            </ul>
          )}
        </motion.div>
      </AnimateSharedLayout>
    </motion.div>
  );
};
