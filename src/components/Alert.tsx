import React, { ReactElement, ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';

import { setTodoLoadingState } from '../store/todo/actionCreators';
import { LoadingState } from '../store/todo/contracts/state';
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

export const Alert: React.FC<Alert> = ({ children, severity }): ReactElement => {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => dispatch(setTodoLoadingState(LoadingState.NEVER)), 5000)
  }, [dispatch]);

  return (
    <AnimatePresence>
      <motion.div
        animate="visible"
        className={classNames('alert', [severity && `alert--${severity}`])}
        exit="hidden"
        initial="hidden"
        transition={{ delay: 0.5 }}
        variants={variants}
      >
        <div className="alert__icon">
          {severity === AlertType.error && <ErrorIcon />}
          {severity === AlertType.info && <InfoIcon />}
          {severity === AlertType.success && <SuccessIcon />}
        </div>
        <div className="alert__message">{children}</div>
      </motion.div>
    </AnimatePresence>
  )
}
