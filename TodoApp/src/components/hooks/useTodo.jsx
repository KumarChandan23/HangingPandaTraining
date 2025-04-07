import { useState, useEffect } from 'react';

const useTodo = () => {
  const [todos, setTodo] = useState(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  // Save to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const createTodo = (text) => {
    if (!text.trim()) return;
    const newTodo = { text };
    setTodo((prev) => [...prev, newTodo]);
  };

  const updateTodo = (updatedText, index) => {
    setTodo((prev) =>
      prev.map((todo, i) =>
        i === index ? { ...todo, text: updatedText } : todo
      )
    );
  };

  const deleteTodo = (index) => {
    setTodo((prev) => prev.filter((_, i) => i !== index));
  };

  return { todos, createTodo, updateTodo, deleteTodo };
};

export default useTodo;
