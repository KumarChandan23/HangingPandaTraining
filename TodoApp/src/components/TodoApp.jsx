import React, { useState, useEffect } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [editId, setEditId] = useState(null);

  // ✅ Load todos from localStorage on first render
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(saved);
  }, []);

  // ✅ Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // ✅ Add or update todo
  const handleSubmit = () => {
    if (!input.trim()) return;

    if (editId !== null) {
      setTodos(prev =>
        prev.map(todo =>
          todo.id === editId ? { ...todo, text: input } : todo
        )
      );
      setEditId(null);
    } else {
      const newTodo = {
        id: Date.now(),
        text: input,
        completed: false,
      };
      setTodos(prev => [...prev, newTodo]);
    }

    setInput('');
  };

  // ✅ Delete todo
  const handleDelete = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  // ✅ Toggle complete
  const toggleComplete = (id) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // ✅ Start editing
  const handleEdit = (todo) => {
    setInput(todo.text);
    setEditId(todo.id);
  };

  return (
    <div className='p-4 max-w-md mx-auto bg-white rounded shadow'>
      <h2 className='text-2xl font-bold text-center mb-4'>📝 Todo App</h2>
      <div className='flex gap-2 mb-4'>
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Add or edit task...'
          className='flex-1 border border-gray-300 rounded px-3 py-2'
        />
        <button
          onClick={handleSubmit}
          className='bg-blue-500 text-white px-4 py-2 rounded'
        >
          {editId ? 'Update' : 'Add'}
        </button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className='flex justify-between items-center mb-2'>
            <div className='flex items-center gap-2'>
              <input
                type='checkbox'
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
              />
              <span
                className={todo.completed ? 'line-through text-gray-500' : ''}
              >
                {todo.text}
              </span>
            </div>
            <div className='flex gap-2'>
              <button
                onClick={() => handleEdit(todo)}
                className='text-green-500'
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(todo.id)}
                className='text-red-500'
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
