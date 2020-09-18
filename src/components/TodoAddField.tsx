import React from 'react';

import { IconButton } from './IconButton';
import { SvgIcon } from './SvgIcon';

export interface TodoAddFieldProps {
  placeholder: string;
}

export const TodoAddField: React.FC<TodoAddFieldProps> = ({ placeholder }) => (
  <div className="todo__add-field">
    <input
      className="todo__add-field-input"
      name="todo"
      placeholder={placeholder}
      type="text"
    />
    <IconButton color="primary">
      <SvgIcon>
        <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z" />
      </SvgIcon>
    </IconButton>
  </div>
)
