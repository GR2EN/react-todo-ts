import React from 'react';

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
    <button
      className="button-base icon-button icon-button--primary"
      type="button"
    >
      <svg
        className="svg-icon"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z" />
      </svg>
    </button>
  </div>
)
