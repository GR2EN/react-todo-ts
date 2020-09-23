import React, { ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';

import { fetchAddTodoItem } from '../store/todo/actionCreators';
import { IconButton } from './IconButton';
import AddIcon from './icons/AddIcon';

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
    dispatch(fetchAddTodoItem(value));
    setValue('');
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
      <IconButton color="primary" disabled={value.length === 0} onClick={handleSubmit}>
        <AddIcon />
      </IconButton>
    </div>
  );
};
