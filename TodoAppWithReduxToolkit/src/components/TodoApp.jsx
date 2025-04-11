import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTodos,
  deleteAll,
  deleteTodo,
  toggleComplete,
  updateTodo,
} from '../features/todo/TodoSlice.js';

const TodoApp = () => {
  const [inputTodo, setInputTodo] = useState('');
  const [inputTodoError, setInputTodoError] = useState('');
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');
  const [editTextError, setEditTextError] = useState('');
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedTodos, setSelectedTodos] = useState([]);
  const [filterType, setFilterType] = useState('all');

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputTodo(e.target.value);
    setInputTodoError('');
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    const trimmedText = inputTodo.trim();
    if (!trimmedText) return;

    const isDuplicate = todos.some(
      (todo) => todo.text.toLowerCase() === trimmedText.toLowerCase()
    );

    if (isDuplicate) {
      setInputTodoError('This task already exists. Please type a different one.');
      return;
    }

    dispatch(addTodos(trimmedText));
    setInputTodo('');
  };

  const handleUpdate = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
    setEditTextError('');
  };

  const handleEdit = (id) => {
    const trimmedText = editText.trim();
    if (!trimmedText) return;

    const isDuplicate = todos.some(
      (todo) => todo.text.toLowerCase() === trimmedText.toLowerCase() && todo.id !== id
    );

    if (isDuplicate) {
      setEditTextError('This task already exists. Please type a different one.');
      return;
    }

    dispatch(updateTodo({ id, newText: trimmedText }));
    setEditId(null);
    setEditText('');
  };

  const handleCancelEdit = () => {
    setEditId(null);
    setEditText('');
    setEditTextError('');
  };

  const handleSelect = (id) => {
    setSelectedTodos((prev) =>
      prev.includes(id) ? prev.filter((todoId) => todoId !== id) : [...prev, id]
    );
  };

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(search.toLowerCase())
  );

  const completedTask = filteredTodos.filter((todo) => todo.completed);
  const displayedTodos = filterType === 'completed' ? completedTask : filteredTodos;

  return (
    <div className="p-5">
      <section className="bg-white rounded-xl py-5 px-6 shadow-lg">
        {/* Header and Search */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[#351d69] text-2xl font-bold">To-Do List 📝</h2>
          <div>
            {isSearchClicked && (
              <input
                type="text"
                placeholder="Search here"
                onChange={(e) => setSearch(e.target.value)}
                className="  px-2 h-8 rounded-lg bg-[#edeef0] focus:outline-2 focus:outline-blue-300 me-1"
              />
            )}
            {todos.length > 1 && (
              <i
                className="fa-solid fa-magnifying-glass cursor-pointer hover:bg-gray-200 p-2 rounded-full"
                onClick={() => setIsSearchClicked(!isSearchClicked)}
              ></i>
            )}
          </div>
        </div>

        {/* Add Todo Form */}
        <form onSubmit={handleAddTodo} className="gap-2 mb-4">
          <div>
            <input
              type="text"
              value={inputTodo}
              placeholder="Add task..."
              onChange={handleInputChange}
              className="mr-2 w-xs bg-[#edeef0] focus:outline-2 focus:outline-blue-200 rounded-full px-4 py-2 outline-0"
            />
            <button
              type="submit"
              className="bg-[#ff5845] cursor-pointer hover:bg-orange-600 py-2 px-4 text-white rounded-full"
            >
              Add
            </button>
          </div>
          <p className="text-red-700">{inputTodoError}</p>
        </form>

        {/* Filters and Delete Buttons */}
        {todos.length > 0 && (
          <div className="flex justify-between items-center mb-3">
            <div className="flex gap-3 text-sm">
              <button
                className={`px-3 py-1 cursor-pointer hover:bg-blue-300 hover:text-white rounded-full border ${filterType === 'all' ? 'bg-blue-100 border-blue-400' : 'bg-gray-200'}`}
                onClick={() => setFilterType('all')}
              >
                All Todos
              </button>
              {completedTask.length > 0 && (
                <button
                  className={`px-3 py-1 rounded-full border cursor-pointer hover:bg-green-600 hover:text-white ${filterType === 'completed' ? 'bg-green-100 border-green-400' : 'bg-gray-200'}`}
                  onClick={() => setFilterType('completed')}
                >
                  Completed Todos
                </button>
              )}
            </div>

            <div className="flex gap-2">
              {selectedTodos.length > 0 && (
                <button
                  onClick={() => {
                    selectedTodos.forEach((id) => dispatch(deleteTodo(id)));
                    setSelectedTodos([]);
                  }}
                  className="bg-red-600 text-sm text-white px-2 py-1 rounded-xl cursor-pointer"
                >
                  Delete Selected ({selectedTodos.length})
                </button>
              )}
              {todos.length > 1 && (
                <button
                  onClick={() => {
                    dispatch(deleteAll());
                    setSelectedTodos([]);
                  }}
                  className="bg-gray-200 hover:bg-red-600 hover:text-white px-3 py-1 rounded-xl cursor-pointer"
                >
                  Delete All
                </button>
              )}
            </div>
          </div>
        )}

        {/* Todo List */}
        {todos.length === 0 ? (
          <h1 className="text-center font-bold text-2xl mt-6">Please add a task...</h1>
        ) : (
          <ul className="grid grid-cols-1 gap-2 max-h-96 overflow-y-auto pr-1">
            {displayedTodos.map((todo) => (
              <li
                key={todo.id}
                className={`flex flex-wrap justify-between items-center border rounded-lg px-3 py-2 ${selectedTodos.includes(todo.id) ? 'bg-blue-200' : 'bg-white'}`}
              >
                {/* Left Section */}
                <div className="flex items-center gap-2 flex-1">
                  {editId !== todo.id && (
                    <>

                      <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => dispatch(toggleComplete(todo.id))}
                        className="peer hidden"
                        id={`checkbox-${todo.id}`}
                      />
                      <label
                        htmlFor={`checkbox-${todo.id}`}
                        className="w-5 h-5 rounded-full border-2 border-gray-400 cursor-pointer peer-checked:bg-[#ff5845] peer-checked:border-[#ff5845] flex items-center justify-center"
                      ></label>
                    </>
                  )}

                  {editId === todo.id ? (
                    <>
                      <div>
                        <input
                          type="text"
                          value={editText}
                          onBlur={() => setEditTextError('')}
                          onChange={(e) => {
                            setEditText(e.target.value);
                            setEditTextError('');
                          }}
                          autoFocus
                          className="rounded-lg px-2 py-1 outline-none bg-gray-200"
                        />
                        <p className="text-xs text-red-600">{editTextError}</p>
                      </div>
                      <button
                        onClick={() => handleEdit(todo.id)}
                        className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 cursor-pointer"
                      >
                        Update
                      </button>
                      <button
                        onClick={handleCancelEdit}
                        className="bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-600 cursor-pointer"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <span
                      className={`w-[280px] break-words ${todo.completed ? 'line-through decoration-red-600' : ''}`}
                    >
                      {todo.text}
                    </span>
                  )}
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-3 flex-wrap justify-end w-full sm:w-auto mt-2 sm:mt-0">
                  {editId !== todo.id &&
                    todo.completed && (
                      <div className=" bg-green-400 w-5 h-5 rounded-full text-white flex items-center justify-center">
                        <i className="fa-solid fa-check"></i>
                      </div>
                    )

                  }

                  {editId !== todo.id && !todo.completed && !selectedTodos.includes(todo.id) && (
                    <div className="relative group ">
                      <span className="absolute bg-blue-300 text-xs text-white px-2 rounded-md right-7 top-2 hidden group-hover:block">
                        Edit
                      </span>
                      <button
                        onClick={() => handleUpdate(todo)}
                        className="cursor-pointer fa-regular fa-pen-to-square hover:text-blue-400 p-2 rounded-full"
                      />
                    </div>
                  )}

                  {editId !== todo.id && (
                    <>
                      <div className="relative group">
                        <button
                          onClick={() => dispatch(deleteTodo(todo.id))}
                          className="fa-solid fa-trash cursor-pointer p-2 rounded-full hover:text-red-600"
                        ></button>
                        <span className="absolute hidden group-hover:block bg-gray-300 text-xs text-red-600 top-[-10px] px-1 rounded">
                          Delete
                        </span>
                      </div>

                      {todos.length > 1 && (
                        <div className="relative group">
                          <input
                            type="checkbox"
                            checked={selectedTodos.includes(todo.id)}
                            onChange={(e) => {
                              e.stopPropagation();
                              handleSelect(todo.id);
                            }}
                            id={`select-checkbox-${todo.id}`}
                            className="peer hidden"
                          />
                          <label
                            htmlFor={`select-checkbox-${todo.id}`}
                            className="w-4 h-4 block border-2 border-gray-400 rounded-full peer-checked:bg-yellow-300 peer-checked:border-orange-600 transition cursor-pointer"
                          ></label>
                          <span className="absolute bg-gray-300 text-xs right-[-6px] top-[-15px] px-1 rounded hidden group-hover:block">
                            Select
                          </span>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default TodoApp;
