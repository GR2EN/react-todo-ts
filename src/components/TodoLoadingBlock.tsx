/* eslint-disable react/jsx-max-props-per-line */
import React, { ReactElement } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const TodoLoadingBlock: React.FC = (): ReactElement => (
  <SkeletonTheme color="#f3f3f3" highlightColor="#ecebeb">
    <div className="todo">
      <h4 className="todo__title">
        <Skeleton height={16} width="50%" />
      </h4>
      <div className="todo__content" style={{ paddingBottom: 4 }}>
        <Skeleton height={16} style={{ margin: '8px 16px' }} width="54%" />
        <Skeleton height={16} style={{ margin: '8px 16px' }} width="70%" />
        <Skeleton height={16} style={{ margin: '8px 16px' }} width="60%" />
        <Skeleton height={16} style={{ margin: '8px 16px' }} width="85%" />
        <Skeleton height={16} style={{ margin: '8px 16px' }} width="34%" />
      </div>
    </div>
  </SkeletonTheme>
);

export default TodoLoadingBlock;
