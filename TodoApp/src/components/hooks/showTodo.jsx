import React, { useState } from 'react';
import useTodo from './useTodo';

const TodoList = () => {
  const [userInput, setUserInput] = useState('');
  const [editInput, setEditInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const { todos, createTodo, updateTodo, deleteTodo } = useTodo();

  // Handle new todo creation
  const handleSubmitTodo = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;
    createTodo(userInput);
    setUserInput('');
  };

  // Handle start editing a todo
  const handleEdit = (index, currentText) => {
    setEditIndex(index);
    setEditInput(currentText);
  };

  // Submit edited todo
  const handleUpdate = (e) => {
    e.preventDefault();
    if (!editInput.trim()) return;
    updateTodo(editInput, editIndex);
    setEditIndex(null);
    setEditInput('');
  };

  return (
    <div>
      <h2>Todo List</h2>

      <form onSubmit={handleSubmitTodo}>
        <input
          type="text"
          placeholder="Add new task..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            {editIndex === index ? (
              <form onSubmit={handleUpdate}>
                <input
                  type="text"
                  value={editInput}
                  onChange={(e) => setEditInput(e.target.value)}
                />
                <button type="submit">Save</button>
                <button type="button" onClick={() => setEditIndex(null)}>
                  Cancel
                </button>
              </form>
            ) : (
              <>
                {todo.text}
                <button onClick={() => handleEdit(index, todo.text)}>
                  Edit
                </button>
                <button onClick={() => deleteTodo(index)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
