import React, { ReactElement } from 'react';

import classNames from 'classnames';

export interface SvgIcon {
  children: React.ReactNode;
  viewBox?: string;
  className?: string;
}

export const SvgIcon: React.FC<SvgIcon> = ({ children, viewBox = '0 0 24 24', className }): ReactElement => (
  <svg className={classNames('svg-icon', [className && `${className}`])} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
    {children}
  </svg>
)
