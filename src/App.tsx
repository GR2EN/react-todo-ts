import React, { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TodoBlock } from './components/TodoBlock';
import { selectTodoItems } from './store/todo/selectors';
import { thunkFetchTodoItems } from './store/todo/thunks';

const App: React.FC = (): ReactElement => {
  const items = useSelector(selectTodoItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunkFetchTodoItems());
  }, [dispatch]);

  return (
    <div className="container">
      <main className="content">
        <TodoBlock items={items} title="Great things" />
      </main>
    </div>
  );
};

export default App;
