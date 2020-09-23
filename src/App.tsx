import React, { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Alert, AlertType } from './components/Alert';
import { TodoBlock } from './components/TodoBlock';
import TodoLoadingBlock from './components/TodoLoadingBlock';
import { fetchTodoItems } from './store/todo/actionCreators';
import {
  selectTodoItems,
  selectTodoItemsError,
  selectTodoItemsIsLoading,
} from './store/todo/selectors';

const App: React.FC = (): ReactElement => {
  const items = useSelector(selectTodoItems);
  const loading = useSelector(selectTodoItemsIsLoading);
  const error = useSelector(selectTodoItemsError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodoItems());
  }, [dispatch]);

  return (
    <div className="container">
      {loading ? (
        <TodoLoadingBlock />
      ) : (
        <TodoBlock items={items} title="Great things" />
      )}
      {error && <Alert severity={AlertType.error}>Что-то пошло не так</Alert>}
    </div>
  );
};

export default App;
