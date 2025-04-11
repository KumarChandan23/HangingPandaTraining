# Redux Toolkit
- redux toolkit is the official recomended way to use Redux.
- It is State management library for js app.
- RTk help us to manage global state in react app with less code and better structure.
- It is usefull for
    - User Authenication
    - Shopping Cart
    - Theme Toggling
    - Api Data fetching

🛠️ Step-by-Step Setup in React
1. Install Redux Toolkit and React-Redux : npm install @reduxjs/toolkit react-redux
2. Create a Slice (mini redux module)
    - Each slice contains State, Reducer and Action
=> counterSlice.jsx
    import { createSlice } from '@reduxjs/toolkit';

    const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
        state.value += 1;
        },
        decrement: (state) => {
        state.value -= 1;
        },
        incrementByAmount: (state, action) => {
        state.value += action.payload;
        }
    }
    });

    export const { increment, decrement, incrementByAmount } = counterSlice.actions;
    export default counterSlice.reducer;

2.  Create the Store : store.js
    import { configureStore } from '@reduxjs/toolkit';
    import counterReducer from '../features/counter/counterSlice';

    export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
    });

3.  Provide Store to Your App : main.jsx
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import App from './App';
    import { Provider } from 'react-redux';
    import { store } from './app/store';

    ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
    );
4.  Use Redux State and Dispatch in Components
=> Counter.jsx
    import React from 'react';
    import { useSelector, useDispatch } from 'react-redux';
    import { increment, decrement, incrementByAmount } from './features/counter/counterSlice';

    const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
        <h2>Counter: {count}</h2>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
        </div>
    );
    };

    export default Counter;


# todo app

  <div className='bg-white rounded-xl py-3 px-5'>


                {/* Display Todos */}
                {todos.length <= 0 ?
                    <h1 className='text-center font-bold my-3 text-xl'>Please Add Todos....</h1>
                    :
                    <>
                        {/* Incompleted Todo List */}
                        <section className='mt-3'>
                            {/* Todos label and Delete Selected */}
                            {/* <div className='flex justify-between items-center'>
                                {incompleteTodos.length <= 0 ? <></> :
                                    <h1 className='bg-blue-300 px-3 py-1 rounded-lg inline '>InCompleted Todo </h1>
                                }

                            </div> */}
                            {/* Todos Items */}

                        </section>

                        {/* Completed Toso */}
                        {/* {todos.length <= 0 ? <></> :
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
                        } */}
                    </>
                }
            </div>