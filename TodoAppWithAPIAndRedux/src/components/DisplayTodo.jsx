import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTodo, getTodos, removeTodo, updateTodoStatus } from '../features/TodosSlice';
import { v4 as uuidv4 } from 'uuid';
const TodoList = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.todos);

  console.log(data)
  const [inputTodo, setInputTodo] = useState("");

  console.log(Math.floor(Math.random() * 30) + 1)
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Handle Add Todo
  const handleAddTodo = async (e) => {
    e.preventDefault();
    const newTodo = { id: Date.now(), todo: inputTodo, completed: false, userId: Math.floor(Math.random() * 30) + 1 }
    dispatch(createTodo(newTodo));
    setInputTodo("");
  }

  // Handle Update todo
  const handleToggleComplete = (todo) => {
    dispatch(updateTodoStatus({
      id: todo.id, // Ensure this is a valid number or string
      updatedTodo: { completed: !todo.completed }, // Toggle the completed status
    }));
  };

  // Handle Delete Todo
  const handleDeleteTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="p-3">

      {/* Search and Add Todos */}

      <section className='flex justify-around items-center mb-3 gap-3'>

        {/* Add todo */}
        <div>
          <form onSubmit={handleAddTodo}>
            <input type="text" name="inputTodo" value={inputTodo} onChange={e => setInputTodo(e.target.value)} placeholder='Add todos....' className='w-sm border-2 outline-0 border-gray-400 rounded-lg px-3 py-2 text-blue-500 focus:border-blue-400' />
            <button type='submit' className='bg-gray-400 text-white rounded-lg h-10 px-2 ms-2 cursor-pointer hover:bg-blue-500'>Add Todo</button>
          </form>
        </div>

        {/* Search Todos */}
        <div>
          <button className='hover:bg-gray-300 rounded-full cursor-pointer p-1 text-2xl w-10 h-10'>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>

        </div>
      </section>

      {/* Show Todos */}
      <section className='flex gap-5 p-3'>
        {/* All Todos */}
        <button className='border-2 border-gray-400 rounded-2xl p-2 cursor-pointer hover:bg-blue-400 hover:text-white hover:border-blue-400'>All Todos</button>
        {/* Completed Todos */}
        <button className='border-2 border-green-400 rounded-2xl p-2 cursor-pointer hover:bg-green-600 hover:text-white hover:border-green-600'>Completed Todos</button>

        {/* Uncompleted Todos */}
        <button className='border-2 border-amber-200 rounded-2xl p-2 cursor-pointer hover:border-amber-300 hover:bg-amber-300 hover:text-white'>Uncompleted Todos</button>

        {/* Delete All Todos */}
        <button className='border-2 border-red-400 rounded-2xl p-2 cursor-pointer hover:bg-red-600 hover:text-white hover:border-red-600 '>Delete All Todos</button>

        {/* Delete Selected Todos */}
        <button className='border-2 border-red-500 bg-red-500 rounded-2xl p-2 cursor-pointer  text-white hover:bg-red-600 hover:border-red-600'>Delete Selected Todos</button>

      </section>
      <table className='w-full table-auto rounded-2xl rtl:text-right border-2 border-blue-400  '>
        <thead className=' text-xl text-white '>
          <tr className='bg-blue-400'>
            <th className='p-3'>Todos</th>
            <th className='p-3 border'>Completed Todos</th>
            <th className='p-3'>Operatons</th>
          </tr>
        </thead>
        <tbody>
          {data?.map(todo => (
            <tr key={todo.id} className='border border-blue-400 p-2 hover:bg-blue-200 bg-gray-100 '>
              <td key={todo.id} className='p-3' onClick={() => handleToggleComplete(todo)}>
                <input type="checkbox" name="" id={`checkbox-${todo.id}`} checked={todo.completed ? true : false} className=' hidden peer' />
                <label htmlFor={`checkbox-${todo.id}`} className=' cursor-pointer w-3 h-3 peer-checked:bg-orange-600 peer-checked:border-orange-600 border-2 rounded-full text-white border-gray-400'>
                  <i className='fa-solid fa-check p-1 '></i>
                </label>
                <span className='ms-2'>{todo.todo}</span>

              </td>
              <td className='border border-blue-400 text-center'>
                {todo.completed && (
                  <i className="fa-solid fa-check text-white bg-green-400 p-1.5 rounded-full"></i>
                )}
              </td>
              <td className='border border-blue-400'>
                <div className='flex justify-around items-center'>
                  <span className="ps-2 fa-solid fa-trash cursor-pointer" onClick={()=>handleDeleteTodo(todo.id)}></span>
                  <span className="ps-2 fa-solid fa-pen-to-square cursor-pointer"></span>
                  <span className="ps-2">
                    <input type="checkbox" name="" id={`select-${todo.id}`} className='hidden peer' />
                    <label htmlFor={`select-${todo.id}`} className=' cursor-pointer w-4 block h-4 border-2 border-gray-400 rounded-full peer-checked:bg-blue-600'>
                    </label>
                  </span>
                </div>

              </td>
            </tr>
          ))}
        </tbody>
      </table>




    </div>
  );
};

export default TodoList;
