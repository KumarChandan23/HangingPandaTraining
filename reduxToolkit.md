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
