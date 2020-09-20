import React, { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TodoBlock } from './components/TodoBlock';
import { fetchTodoItems } from './store/todo/actionCreators';
import { selectTodoItems } from './store/todo/selectors';

const App: React.FC = (): ReactElement => {
  const items = useSelector(selectTodoItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodoItems());
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
