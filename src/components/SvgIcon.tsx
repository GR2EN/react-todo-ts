import React from 'react';

import classNames from 'classnames';

export interface ISvgIconProps {
  children: React.ReactNode;
  viewBox?: string;
  className?: string;
}

export const SvgIcon: React.FC<ISvgIconProps> = ({ children, viewBox = '0 0 24 24', className }) => (
  <svg className={classNames('svg-icon', [className && `${className}`])} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
    {children}
  </svg>
)
