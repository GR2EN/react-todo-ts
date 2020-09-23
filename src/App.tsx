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
  selectTodoItemsIsNeverLoading,
} from './store/todo/selectors';

const App: React.FC = (): ReactElement => {
  const items = useSelector(selectTodoItems);
  const neverLoading = useSelector(selectTodoItemsIsNeverLoading);
  const loading = useSelector(selectTodoItemsIsLoading);
  const error = useSelector(selectTodoItemsError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodoItems());
  }, [dispatch]);

  return (
    <div className="container">
      {loading || neverLoading ? (
        <TodoLoadingBlock />
      ) : (
        <TodoBlock items={items} title="Great things" />
      )}
      {error && <Alert severity={AlertType.error}>Что-то пошло не так <span aria-label="" role="img">🙁</span></Alert>}
    </div>
  );
};

export default App;
