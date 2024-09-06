import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({ todo, OnRemovePressed }) => (
  <div className="todo-item-container">
    <h3>{todo.text}</h3>
    <div className="button-container">
      <button 
      onClick={ () => OnRemovePress(todo.text)}
      className="remove-button">Mark as Completed</button>
      <button>Remove</button>
    </div>
  </div>
);

export default TodoListItem;
