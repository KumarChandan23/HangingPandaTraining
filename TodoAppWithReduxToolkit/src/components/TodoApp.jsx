import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodos, deleteTodo, filterTodos, toggleComplete, updateTodo } from '../features/todo/TodoSlice.js';

const TodoApp = () => {
    const [inputTodo, setInputTodo] = useState('');
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState('');
    const [isSearchClicked, setIsSearchClicked] = useState(false);
    const [inputSearch, setInputSearch] = useState({ taskSearch: "" });
    
    const todos = useSelector((state) => state.todos);
    console.log(todos)
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputTodo.trim()) return;
        dispatch(addTodos(inputTodo));
        setInputTodo('');
    };

    const handleUpdate = (todo) => {
        setEditId(todo.id);
        setEditText(todo.text);
    };

    const handleEdit = (id) => {
        if (!editText.trim()) return;
        dispatch(updateTodo({ id, newText: editText }));
        setEditId(null);
        setEditText('');
    }
    const handleCancelEdit = () => {
        setEditId(null);
        setEditText('');
    };

    const handleFilterTask = () => {
        setIsSearchClicked(!isSearchClicked);
        dispatch(filterTodos(inputSearch.taskSearch));
    };

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setInputSearch({ taskSearch: value });
        dispatch(filterTodos(value));
    };

    return (
        <div className='bg-white rounded-xl p-5'>
            <section className='flex justify-between'>
                <h2 className='text-[#351d69] text-2xl font-bold mb-5'> To-Do List 📝</h2>
                <div className='me-3'>
                    {isSearchClicked && (
                        <input
                            type="text"
                            placeholder='Search here'
                            name="taskSearch"
                            value={inputSearch.taskSearch}
                            onChange={handleSearchChange}
                            className='borde border-1 border-[#351d69] px-2 h-8  rounded-lg bg-[#edeef0] outline-0 me-1'
                        />
                    )}
                    <i className="fa-solid fa-magnifying-glass cursor-pointer  hover:bg-gray-200 p-2 rounded-full" onClick={handleFilterTask}></i>
                </div>
            </section>

            {/* Main Add Form */}
            <section className=' md:bg-[#edeef0] rounded-full'>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={inputTodo}
                        placeholder="Add task..."
                        onChange={(e) => setInputTodo(e.target.value)}
                        className='w-xs bg-[#edeef0] rounded-full p-2 px-4 outline-0'
                    />
                    <button type='submit' className='bg-[#ff5845] hover:bg-orange-600 py-2 px-3 cursor-pointer text-white rounded-full w-25 ms-1'>
                        Add
                    </button>
                </form>
            </section>

            {/* Todo List */}
            <ul className='mt-2 p-2'>
                {todos.filteredTodos.map((todo) => (
                    <li key={todo.id} className='flex items-center flex-wrap max-w-md justify-between mb-3 gap-2'>
                        <section className='flex flex-wrap items-center gap-2'>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => dispatch(toggleComplete(todo.id))}
                                className='me-2 bg-[#ff5845] peer hidden'
                                id={`checkbox-${todo.id}`}
                            />
                            { editId !== todo.id && (
                            <label
                                htmlFor={`checkbox-${todo.id}`}
                                className="w-5 h-5 rounded-full border-2 border-gray-400 cursor-pointer peer-checked:bg-[#ff5845] peer-checked:border-[#ff5845] flex items-center justify-center transition"
                            >
                                <i className="fa-solid fa-check text-[10px] text-white hidden peer-checked:block"></i>
                            </label>
                            )}

                            {editId === todo.id ? (
                                <>
                                    <input
                                        type="text"
                                        value={editText}
                                        onChange={(e) => setEditText(e.target.value)}
                                        autoFocus
                                        className="rounded-lg px-2 py-1 outline-none  bg-gray-200"
                                    />
                                    <button onClick={() => handleEdit(todo.id)} className='bg-green-500 text-white px-2 py-1 rounded ms-2 cursor-pointer active:bg-green-500 hover:bg-green-600' > Update </button>
                                    <button onClick={handleCancelEdit} className='bg-gray-500 text-white px-2 py-1 rounded ms-2 cursor-pointer active:bg-gray-400 hover:bg-gray-600' > Cancel </button>
                                </>
                            ) : (
                                <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} className='max-w-xs'> {todo.text} </span>
                            )}
                        </section>
                        <section>
                            {editId !== todo.id && (
                                <section>
                                    {!todo.completed && (
                                            <button onClick={()=> handleUpdate(todo)} className='fa-regular fa-pen-to-square cursor-pointer  hover:bg-gray-200 p-2 rounded-full' />
                                        )}
                                     <button
                                        onClick={() => dispatch(deleteTodo(todo.id))}
                                        className='fa-solid fa-xmark ms-3 cursor-pointer hover:bg-gray-200 p-2 rounded-full'
                                    ></button>
                                </section>
                            )}
                          
                        
                        </section>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;
