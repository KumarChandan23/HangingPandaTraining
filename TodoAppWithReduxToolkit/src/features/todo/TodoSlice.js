import { createSlice } from '@reduxjs/toolkit';

// Load from localStorage
const loadTodos = () => {
    const data = localStorage.getItem('todos');
    return data ? JSON.parse(data) : [];
};

const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
};

const todoSlice = createSlice({
    name: "todos",
    initialState: loadTodos(),
    reducers: {
        addTodos: (state, action) => {
            const newTodo = { id: Date.now(), text: action.payload, completed: false };
            state.unshift(newTodo);
            saveTodos(state);
        },

        deleteTodo: (state, action) => {
            const newTodos = state.filter(todo => todo.id !== action.payload);
            saveTodos(newTodos);
            return newTodos;
        },
        deleteAll: (state)=>{
            saveTodos([]);
            return [];
        },
        updateTodo: (state, action) => {
            const { id, newText } = action.payload;
            const todo = state.find(todo => todo.id === id);
            if (todo) {
                todo.text = newText;
                saveTodos(state.todos);
            }
        },
        toggleComplete: (state, action) => {
            const todo = state.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
                saveTodos(state);
            }
        },
        clearCompleted: (state) => {
            const newTodos = state.filter(todo => !todo.completed);
            saveTodos(newTodos);
            return newTodos;
        },
       
    }
});

export const { addTodos, updateTodo, deleteTodo,deleteAll,  toggleComplete } = todoSlice.actions;
export default todoSlice;
