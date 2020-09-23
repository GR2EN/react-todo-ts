import React, { ReactElement } from 'react';

import classNames from 'classnames';

import { ButtonColor } from './Button';

export interface IconButton {
  children: React.ReactElement | React.ReactElement[];
  color?: ButtonColor;
  onClick?: | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
  disabled?: boolean;
}

export const IconButton: React.FC<IconButton> = ({
 children, color, onClick, disabled
}): ReactElement => (
  <button
    className={classNames(
      'button-base',
      'icon-button',
      [color && `icon-button--${color}`],
      [disabled && `icon-button--disabled`]
    )}
    disabled={disabled}
    onClick={onClick}
    type="button"
  >
    {children}
  </button>
)
