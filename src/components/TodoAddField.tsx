import React, { ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';

import { fetchAddTodoItem } from '../store/todo/actionCreators';
import { IconButton } from './IconButton';
import { SvgIcon } from './SvgIcon';

export interface TodoAddField {
  placeholder: string;
}

export const TodoAddField: React.FC<TodoAddField> = ({
  placeholder,
}): ReactElement => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event: React.FormEvent<HTMLInputElement>):void => {
    setValue(event.currentTarget.value);
  };

  const handleSubmit = ():void => {
    setValue('');
    dispatch(fetchAddTodoItem(value));
  };

  const handleKeyboard = (event: React.KeyboardEvent<HTMLInputElement>):void => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="todo__add-field">
      <input
        className="todo__add-field-input"
        name="todo"
        onChange={handleChange}
        onKeyUp={handleKeyboard}
        placeholder={placeholder}
        type="text"
        value={value}
      />
      <IconButton color="primary" onClick={handleSubmit}>
        <SvgIcon>
          <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z" />
        </SvgIcon>
      </IconButton>
    </div>
  );
};
