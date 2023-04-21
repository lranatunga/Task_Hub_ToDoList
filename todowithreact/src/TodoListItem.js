// TodoListItem.js

import React from 'react';

const TodoListItem = ({ todo, isSelected, onSelectTodo }) => {
  const handleSelectTodo = () => {
    onSelectTodo && onSelectTodo(todo.id);
  };

  return (
    <li
      className={`todo-list-item${isSelected ? ' selected' : ''}`}
      onClick={handleSelectTodo}
    >
      <div className="title">{todo.title}</div>
      <div className="status">{todo.completed ? 'Completed' : 'Incomplete'}</div>
    </li>
  );
};

export default TodoListItem;
