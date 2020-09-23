
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
  const variants = {
    visible: { opacity: 1, transition: { when: 'beforeChildren', staggerChildren: 0.3 } },
    hidden: { opacity: 0, transition: { when: 'afterChildren' } },
  }
  const isEmpty = useSelector(selectTodoItemsIsEmpty);

  return (
    <AnimateSharedLayout>
      <motion.div
        animate="visible"
        className="todo"
        exit="hidden"
        initial="hidden"
        variants={variants}
      >
        <h4 className="todo__title">{title}</h4>
        <div
          className="todo__content"
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
        </div>
      </motion.div>
    </AnimateSharedLayout>
  );
};
