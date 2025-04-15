import { configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import todosSlice from '../features/TodosSlice';

 const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;