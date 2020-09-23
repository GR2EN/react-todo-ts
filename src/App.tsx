import React, { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TodoBlock } from './components/TodoBlock';
import TodoLoadingBlock from './components/TodoLoadingBlock';
import { fetchTodoItems } from './store/todo/actionCreators';
import {
  selectTodoItems,
  selectTodoItemsIsLoading,
  selectTodoItemsIsNeverLoading,
} from './store/todo/selectors';

const App: React.FC = (): ReactElement => {
  const items = useSelector(selectTodoItems);
  const neverLoading = useSelector(selectTodoItemsIsNeverLoading);
  const loading = useSelector(selectTodoItemsIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodoItems());
  }, [dispatch]);

  return (
    <div className="container">
      <main className="content">
        {loading || neverLoading ? (
          <TodoLoadingBlock />
        ) : (
          <TodoBlock items={items} title="Great things" />
        )}
      </main>
    </div>
  );
};

export default App;
