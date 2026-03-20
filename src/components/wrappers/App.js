import React from 'react';
import TodoList from '../ui/TodoList';
import { StateProvider } from './StateProvider';
import KeyStrokeHandler from './KeyStrokeHandler';

const App = () => {
  return (
    <StateProvider>
      <KeyStrokeHandler>
        <TodoList />
      </KeyStrokeHandler>
    </StateProvider>
  );
};

export default App;