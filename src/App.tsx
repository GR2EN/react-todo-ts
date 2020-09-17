import React from 'react';

import { Todo } from './components/Todo';
import { TodoListItemProps } from './components/TodoListItem';

const App: React.FC = () => {
  const items: Array<TodoListItemProps> = [
    { id: 0, text: 'Create React project', completed: true },
    { id: 1, text: 'Draw UI template', completed: true },
    { id: 2, text: 'Add typification in App', completed: true },
    { id: 3, text: 'Add components logic', completed: false },
  ];

  return (
    <div className="container">
      <main className="content">
        <Todo items={items} title="Great things" />
      </main>
    </div>
  );
};

export default App;
