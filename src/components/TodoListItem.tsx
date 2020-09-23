import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';

import classNames from 'classnames';
import { motion } from 'framer-motion';

import {
  fetchDeleteTodoItem,
  fetchUpdateTodoItem,
} from '../store/todo/actionCreators';
import { Todo } from '../store/todo/contracts/state';
import { IconButton } from './IconButton';
import CompletedIcon from './icons/CompletedIcon';
import DeleteIcon from './icons/DeleteIcon';
import IncompletedIcon from './icons/IncompletedIcon';

const TodoListItem: React.FC<Todo> = ({
  id,
  text,
  completed,
}): ReactElement => {
  const dispatch = useDispatch();

  const handleToggleCompleted = (): void => {
    const todo = { id, text, completed: !completed };
    dispatch(fetchUpdateTodoItem(todo));
  };

  const handleDelete = (): void => {
    dispatch(fetchDeleteTodoItem(id));
  };

  return (
    <motion.li
      animate={{ opacity: 1 }}
      className={classNames('todo__list-item', {
        'todo__list-item--completed': completed,
      })}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
    >
      <div className="todo__list-item-icon">
        <IconButton color="primary" onClick={handleToggleCompleted}>
          {completed ? <CompletedIcon /> : <IncompletedIcon />}
        </IconButton>
      </div>
      <p className="todo__list-item-text">{text}</p>
      <div className="todo__list-item-icon">
        <IconButton color="secondary" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </div>
    </motion.li>
  );
};

export default TodoListItem;
