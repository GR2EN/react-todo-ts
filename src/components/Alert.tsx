import React, { ReactElement, ReactNode } from 'react';

import classNames from 'classnames';

import ErrorIcon from './icons/ErrorIcon';
import InfoIcon from './icons/InfoIcon';
import SuccessIcon from './icons/SuccessIcon';

export enum AlertType {
  error = 'error',
  info = 'info',
  success = 'success',
}

export interface Alert {
  severity?: AlertType;
  children: ReactNode;
}

export const Alert: React.FC<Alert> = ({ children, severity }): ReactElement => (
  <div className={classNames('alert', [severity && `alert--${severity}`])}>
    <div className="alert__icon">
      {severity === AlertType.error && <ErrorIcon />}
      {severity === AlertType.info && <InfoIcon />}
      {severity === AlertType.success && <SuccessIcon />}
    </div>
    <div className="alert__message">{children}</div>
  </div>
)
