import React, { useEffect, useState } from 'react';
import { useDeleteOne, useFetchData, useUpdateTodo } from './hooks';

const Todos = () => {
    const { data, isLoading, isError } = useFetchData();
    const { mutate: updateTodo } = useUpdateTodo();
    const { mutate: deleteOne } = useDeleteOne();

    const [searchType, setSearchType] = useState('all');
    const [search, setSearch] = useState('');
    const [isClickedOnSearch, setIsClickedOnSearch] = useState(false);

    const [inputTodo, setInputTodo] = useState("");
    const [LocalTodos, setLocalTodos] = useState(() => JSON.parse(localStorage.getItem("todos")) || []);

    console.log(LocalTodos)
    console.log(data)
    const allTodos = [...LocalTodos , ...(data?.todos || [])];

    const filteredTodos = allTodos?.filter((Ltodo) =>
        Ltodo.todo.toLowerCase().includes(search?.toLowerCase())
    );

    const handleCreateTodo = (e) => {
        e.preventDefault();
        const existingTodos = JSON.parse(localStorage.getItem("todos")) || [];
        const newTodo = {
            id: Math.floor(Math.random() * 100) + 30,
            todo: inputTodo,
            completed: false
        }
        const updatedTodo = [newTodo, ...existingTodos];

        localStorage.setItem("todos", JSON.stringify(updatedTodo));
        setLocalTodos(updatedTodo)
        setInputTodo('')
    }

    const handleUpdateTodo = (todo) => {
        if (todo.id > 30) {
            const updatedTodo = LocalTodos?.map(Ltodo => Ltodo.id === todo.id ? { ...Ltodo, completed: !Ltodo.completed } : Ltodo)
            localStorage.setItem("todos", JSON.stringify(updatedTodo));
            setLocalTodos(updatedTodo)
        } else {

            updateTodo({
                id: todo.id,
                completed: !todo.completed,
            });
        }
    };

    const handleDelteTodo = (todo) => {

        if (todo.id > 30) {
            const remainingTodo = LocalTodos.filter(Ltodo => Ltodo.id !== todo.id)
            localStorage.setItem("todos", JSON.stringify(remainingTodo))
            setLocalTodos(remainingTodo);
        } else {
            deleteOne({ id: todo.id })
        }
    }


    const completedTodos = filteredTodos?.filter((todo) => todo.completed);
    const PendingdTodos = filteredTodos?.filter((todo) => !todo.completed);

    const displayTodos = searchType == "completed" ? completedTodos : searchType === "pending" ? PendingdTodos : filteredTodos

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Something went wrong</p>;

    return (
        <div className='px-2 pb-10 w-4xl bg-gray-100 rounded-xl'>
            {/* Add todos */}
            <section className='flex justify-around items-center py-3'>
                <h1 className='font-bold text-blue-800 text-3xl'>To-Do List</h1>

                    <form onSubmit={handleCreateTodo}>
                        <input
                            type="text"
                            value={inputTodo}
                            onChange={(e) => setInputTodo(e.target.value)}
                            placeholder='Add Todo...'
                            className='w-sm border border-gray-300 rounded-xl px-2 h-10 hover:outline-1 focus:outline-blue-400 focus:border-blue-400 text-blue-500 focus:cursor-text cursor-pointer'
                        />
                        <button type="submit" className='border border-green-600 rounded-xl px-2 hover:bg-green-600 hover:text-white h-10 ms-2 cursor-pointer'>
                            Add
                        </button>
                    </form>
               
            </section>

            <section className='my-3 flex justify-between items-center gap-4 px-6'>
                <div className='flex gap-4'>
                    <button onClick={() => setSearchType("all")} className='border-2 border-blue-600 px-3 h-10 rounded-full hover:bg-blue-600 focus:bg-blue-600 focus:text-white hover:text-white cursor-pointer'>All Todos</button>
                    <button onClick={() => setSearchType("completed")} className='border-2 border-green-600 px-3 h-10 rounded-full hover:bg-green-600 focus:bg-green-600 focus:text-white hover:text-white cursor-pointer'>Completed Todos</button>
                    <button onClick={() => setSearchType("pending")} className='border-2 border-yellow-600 px-3 h-10 rounded-full hover:bg-yellow-600 focus:bg-yellow-600 focus:text-white hover:text-white cursor-pointer'>Pending Todos</button>
                </div>
                <div>
                    {isClickedOnSearch && (
                        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} autoFocus placeholder='Search todos...' className='h-10  me-2 border-2 border-blue-400 rounded-xl outline-1 outline-blue-400 px-3' />
                    )}
                    <i className='fa-solid fa-magnifying-glass cursor-pointer hover:bg-gray-300 rounded-full p-2' onClick={() => setIsClickedOnSearch(!isClickedOnSearch)}></i>
                </div>
            </section>

            <section className='rounded-lg overflow-hidden px-5'>
                <table className='w-full border-2 border-blue-200 rounded-xl'>
                    <thead className='bg-blue-200'>
                        <tr>
                            <th className='p-2 w-[500px]'>Todos</th>
                            <th className='border-2 border-blue-300 border-t-0 w-[160px]'>Completed Todos</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayTodos.map((todo) => (
                            <tr key={todo.id} className={`border-2 border-blue-300 text-center ${todo.completed ? "bg-green-100" : ""} hover:bg-blue-100`}>
                                <td className='p-2 text-start flex gap-2 w-full items-center '>
                                    <div className={`flex items-center justify-center `}>
                                        <input
                                            type="checkbox"
                                            id={`check-${todo.id}`}
                                            checked={todo.completed}
                                            onChange={() => handleUpdateTodo(todo)}
                                            className="peer hidden"
                                        />
                                        <label
                                            htmlFor={`check-${todo.id}`}
                                            className="flex justify-center items-center w-5 h-5 rounded-full border-2 border-gray-400  peer-checked:bg-green-600 peer-checked:border-green-600 transition-colors duration-200 cursor-pointer"
                                        >
                                            <i className="fa-solid fa-check text-white text-xs hidden peer-checked:block"></i>
                                        </label>
                                    </div>
                                    <span>
                                        {todo.todo}
                                    </span>
                                </td>
                                <td className='border-2 border-blue-300'>{todo.completed ? "✅ completed" : ""}</td>
                                <td className='items-center py-2'>
                                    <i className='fa-solid fa-trash text-red-500 cursor-pointer p-2 hover:bg-white rounded-full' onClick={() => handleDelteTodo(todo)}></i>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default Todos;
