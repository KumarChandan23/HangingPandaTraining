import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addTodo, deleteTodo, fetchTodos, updateTodo } from './todosAPI';

export const getTodos = createAsyncThunk('todos/getTodos', async () => {
  const response = await fetchTodos();
  return response; 
});

export const createTodo = createAsyncThunk('todos/addTodo', async (newTodo) => {
  const response = await addTodo(newTodo); // returns a single todo
  return response;
});
export const updateTodoStatus = createAsyncThunk('todos/updateTodo', async ({ id, updatedTodo }) => {
  const response = await updateTodo(id, updatedTodo); 
  return response; 
});

export const removeTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
  const response = await deleteTodo(id);
  return response;  
});

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.todos; 
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.data.unshift(action.payload); 
        state.error = null;
      })
      .addCase(createTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateTodoStatus.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateTodoStatus.fulfilled, (state, action) => {
        state.loading = false;
        state.data = state.data.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        );
      })
      .addCase(updateTodoStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(removeTodo.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.data = state.data.filter((todo) => todo.id !== action.payload.id); 
      })
      .addCase(removeTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default todosSlice;
