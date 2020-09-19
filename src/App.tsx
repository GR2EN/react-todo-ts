import React, { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Todo } from './components/Todo';
import { selectTodoItems } from './store/todo/selectors';
import { thunkFetchTodos } from './store/todo/thunks';

const App: React.FC = (): ReactElement => {
  const items = useSelector(selectTodoItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunkFetchTodos());
  }, [dispatch]);

  return (
    <div className="container">
      <main className="content">
        <Todo items={items} title="Great things" />
      </main>
    </div>
  );
};

export default App;
