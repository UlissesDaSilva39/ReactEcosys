import React from 'react';
import React from 'react-hot-loader';
import TodoList from './todo/TodoList';
 
 

const App = () => (
  <div className="App">
    <TodoList />
  </div>
);

export default hot(module)(App);
