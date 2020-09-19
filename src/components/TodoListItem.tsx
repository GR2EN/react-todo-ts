import React from 'react';

import classNames from 'classnames';

import { ITodo } from '../store/todo/contracts/state';
import { IconButton } from './IconButton';
import { SvgIcon } from './SvgIcon';

const TodoListItem: React.FC<ITodo> = ({
  text,
  completed,
}) => (
  <li
    className={classNames('todo__list-item', {
      'todo__list-item--completed': completed,
    })}
  >
    <div className="todo__list-item-icon">
      <IconButton color="primary">
        <SvgIcon className="svg-icon-completed">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.88-11.71L10 14.17l-1.88-1.88c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7c.39-.39.39-1.02 0-1.41-.39-.39-1.03-.39-1.42 0z" />
        </SvgIcon>
        <SvgIcon className="svg-icon-incompleted">
          <path d="M2 12C2 6.47998 6.47998 2 12 2C17.52 2 22 6.47998 22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12ZM4 12C4 16.42 7.57996 20 12 20C16.42 20 20 16.42 20 12C20 7.58002 16.42 4 12 4C7.57996 4 4 7.58002 4 12Z" />
        </SvgIcon>
      </IconButton>
    </div>
    <p className="todo__list-item-text">{text}</p>
    <div className="todo__list-item-icon">
      <IconButton color="secondary">
        <SvgIcon>
          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM9 9h6c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-8c0-.55.45-1 1-1zm6.5-5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1h-2.5z" />
        </SvgIcon>
      </IconButton>
    </div>
  </li>
);

export default TodoListItem;
