// TodoList.js

import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, selectedTodoId, onSelectTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          isSelected={todo.id === selectedTodoId}
          onSelectTodo={onSelectTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
