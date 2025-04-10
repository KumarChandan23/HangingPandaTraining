import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodos, deleteAll, deleteTodo, toggleComplete, updateTodo } from '../features/todo/TodoSlice.js';

const TodoApp = () => {
    const [inputTodo, setInputTodo] = useState('');
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState('');
    const [isSearchClicked, setIsSearchClicked] = useState(false);
    const [search, setSearch] = useState('');
    const [selectedTodos, setSelectedTodos] = useState([]);

    const todos = useSelector((state) => state.todos);
    console.log(todos)
    const dispatch = useDispatch();

    const handleAddTodo = (e) => {
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
    const handleSelect = (id) => {
        setSelectedTodos(prev =>
            prev.includes(id) ? prev.filter(todoId => todoId !== id) : [...prev, id]
        );
    };

    const filteredTodos = todos.filter(todo =>
        todo.text.toLowerCase().includes(search.toLowerCase())
    );
    const incompleteTodos = filteredTodos.filter(todo => !todo.completed);
    const completedTodos = filteredTodos.filter(todos => todos.completed)

    return (
        <div>
            <div className='bg-white rounded-xl py-3 px-5'>


                {/* Display Todos */}
                {todos.length <= 0 ?
                    <h1 className='text-center font-bold my-3 text-xl'>Please Add Todos....</h1>
                    :
                    <>
                        {/* Incompleted Todo List */}
                        <section className='mt-3'>
                            {/* Todos label and Delete Selected */}
                            <div className='flex justify-between items-center'>
                                {incompleteTodos.length <= 0 ? <></> :
                                    <h1 className='bg-blue-300 px-3 py-1 rounded-lg inline '>InCompleted Todo </h1>
                                }

                            </div>
                            {/* Todos Items */}

                        </section>

                        {/* Completed Toso */}
                        {todos.length <= 0 ? <></> :
                            <section>
                                <div className='flex justify-between items-center'>
                                    <h1 className='bg-green-600 text-white inline px-2 py-1 mb-2 rounded-lg '>Completed Todos</h1>

                                </div>
                                <ul className='max-h-45 overflow-y-auto scrollbar-hidden  mt-2'>
                                    {completedTodos.map(todo => (
                                        <li key={todo.id} className='flex items-center justify-between mb-1 p-0 text-gray-500'>
                                            <section className='flex items-center gap-2'>
                                                
                                                <span>{todo.text}</span>
                                            </section>
                                            <section className='flex items-center gap-2'>
                                                <section className='relative  group'>
                                                    <input type="checkbox" checked={todo.completed} id={`checkbox-${todo.id}`}
                                                        onChange={() => dispatch(toggleComplete(todo.id))}
                                                        className='me-2 bg-[#ff5845] peer hidden'
                                                    />

                                                    {editId !== todo.id && (
                                                        <label htmlFor={`checkbox-${todo.id}`}
                                                            className="w-5 h-5 rounded-full border-2 border-gray-400 cursor-pointer peer-checked:bg-red-400 peer-checked:border-0 flex items-center justify-center transition"
                                                        >
                                                            <i className="fa-solid fa-xmark text-[10px] text-white hidden peer-checked:block"></i>
                                                        </label>

                                                    )}
                                                    <span className="absolute bottom-full top-[-5px] right-[25px] h-5 translate-1 bg-black text-white text-xs px-1 rounded hidden group-hover:block transition-all whitespace-nowrap z-10">
                                                        UnComplete
                                                    </span>
                                                </section>

                                                <div className='relative group'>
                                                    <button
                                                        onClick={() => dispatch(deleteTodo(todo.id))}
                                                        className='fa-solid fa-trash ms-3 cursor-pointer p-2 rounded-full hover:text-red-600'
                                                    ></button>
                                                    <span className='absolute hidden group-hover:block bg-gray-300 text-xs text-red-600 top-[10px] left-[-20px] px-1 rounded'> Delete</span>
                                                </div>
                                            </section>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        }
                    </>
                }
            </div>
            <section className='bg-white rounded-xl py-3 px-5 w-xl'>

                {/* Header and Search Todo Area */}
                <section className='flex justify-between'>
                    <h2 className='text-[#351d69] text-2xl font-bold mb-5'> To-Do List 📝</h2>
                    <div className='me-3'>
                        {isSearchClicked && (
                            <input
                                type="text"
                                placeholder='Search here'
                                name="taskSearch"
                                onChange={(e) => setSearch(e.target.value)}
                                className='borde border-1 border-[#351d69] px-2 h-8  rounded-lg bg-[#edeef0] outline-0 me-1'
                            />
                        )}
                        {todos.length <= 0 ? <></> :
                            <i className="fa-solid fa-magnifying-glass cursor-pointer  hover:bg-gray-200 p-2 rounded-full" onClick={() => setIsSearchClicked(!isSearchClicked)}></i>
                        }
                    </div>
                </section>

                {/* Main Add Form */}
                <section className=' md:bg-[#edeef0] rounded-full'>
                    <form onSubmit={handleAddTodo}>
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

                {/* Delete Section */}
                <section className='text-end my-4'>
                    {selectedTodos.length > 0 && (
                        <button
                            onClick={() => {
                                selectedTodos.forEach(id => dispatch(deleteTodo(id)));
                                setSelectedTodos([]);
                            }}
                            className="bg-red-600 text-white p-1 px-2 rounded-xl ms-2"
                        >
                            Delete Selected ({selectedTodos.length})
                        </button>
                    )}
                    {incompleteTodos.length <= 1 ? <></> :
                        <button onClick={() => dispatch(deleteAll())} className='p-1 ms-2 px-2 text-black  bg-gray-200 hover:bg-red-600 hover:text-gray-50  rounded-xl cursor-pointer'>Delete All</button>
                    }
                </section>


                {/* Show todo section */}
                <section>

                    <div className=''>
                    <section className='flex items-center justify-between border-2 border-blue-400 '>
                                <div className='flex justify-center  w-full border-r-2 p-1 border-blue-400'>All Todo</div>
                                <div className='flex justify-between w-full p-1  border-l-2 border-blue-400'>
                                <div>Completed Todo</div>
                                <div>Operations</div>
                                </div>
                            </section>
                        <ul className=' max-h-50 overflow-y-auto scrollbar-hidden border'>
                           
                            {todos.map((todo) => (
                                <li key={todo.id} className='flex items-center justify-between  flex-wrap   gap-2'>

                                    {/* Show todo Section */}
                                    <section className='flex flex-wrap justify-between border items-center gap-2  border-r-3 border-blue-300'>

                                        {editId !== todo.id && (
                                            <div className=' '>
                                                   
                                                    {editId !== todo.id && (
                                                        <label
                                                            htmlFor={`checkbox-${todo.id}`}
                                                            className="w-5 h-5 rounded-full border-2 border-gray-400 cursor-pointer peer-checked:bg-[#ff5845] peer-checked:border-[#ff5845] flex items-center justify-center transition"
                                                        >
                                                            <i className="fa-solid fa-check text-[10px] text-white hidden peer-checked:block"></i>
                                                        </label>
                                                    )}
                                                     <input
                                                        type="checkbox"
                                                        checked={todo.completed}
                                                        onChange={() => dispatch(toggleComplete(todo.id))}
                                                        className='me-2 bg-[#ff5845] peer hidden'
                                                        id={`checkbox-${todo.id}`}
                                                    />
                                             
                                            </div>
                                        )}

                                        {editId === todo.id ? (
                                            <>
                                                <input type="text" value={editText} autoFocus
                                                    onChange={(e) => setEditText(e.target.value)}
                                                    className="rounded-lg px-2 py-1 outline-none  bg-gray-200"
                                                />
                                                <button onClick={() => handleEdit(todo.id)} className='bg-green-500 text-white px-2 py-1 rounded ms-2 cursor-pointer active:bg-green-500 hover:bg-green-600' > Update </button>
                                                <button onClick={handleCancelEdit} className='bg-gray-500 text-white px-2 py-1 rounded ms-2 cursor-pointer active:bg-gray-400 hover:bg-gray-600' > Cancel </button>
                                            </>
                                        ) : (
                                            <div style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} className=' w-[240px] break-words  p-2 '> {todo.text} </div>
                                        )}
                                    </section>
                                    {/* Delete one and Edid button */}
                                    <section className='border'>
                                        {editId !== todo.id && (
                                            <section className='flex justify-between  w-[250px]'>
                                                <section>Completed</section>
                                                <section className='flex gap-1 items-center '>
                                                {!todo.completed && (
                                                    <div className='relative group'>
                                                        <span className='absolute  bg-blue-300 text-xs text-white  px-2 rounded-md right-7 top-2 hidden group-hover:block '>Edit</span>
                                                        <button onClick={() => handleUpdate(todo)} className='fa-regular fa-pen-to-square hover:text-blue-400 cursor-pointer  p-2 rounded-full' />
                                                    </div>
                                                )}
                                                <div className='relative group'>
                                                    <button
                                                        onClick={() => dispatch(deleteTodo(todo.id))}
                                                        className='fa-solid fa-trash ms-3 cursor-pointer p-2 rounded-full hover:text-red-600'
                                                    ></button>
                                                    <span className='absolute hidden group-hover:block bg-gray-300 text-xs text-red-600 top-[-10px] px-1 rounded'> Delete</span>
                                                </div>
                                                <div>
                                                {completedTodos.length <= 1 ?
                                                    <div className='p-1  flex items-center justify-center bg-green-400 w-5 h-5 rounded-full text-white'>
                                                        <i className=' fa-solid fa-check'></i>
                                                    </div>
                                                    :
                                                    <div className="relative group">
                                                        <input
                                                            type="checkbox"
                                                            checked={selectedTodos.includes(todo.id)}
                                                            onChange={() => handleSelect(todo.id)}
                                                            className="accent-pink-500 rounded-full cursor-pointer"
                                                        />
                                                    </div>
                                                }
                                                </div>
                                                </section>
                                            </section>
                                        )}


                                    </section>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>



            </section>

        </div>
    );
};

export default TodoApp;
