import { createSlice } from '@reduxjs/toolkit';

// Load from localStorage
const loadTodos = () => {
    try {
        const todos = localStorage.getItem('todos');
        return todos ? JSON.parse(todos) : [];
    } catch (err) {
        console.error("Failed to load todos from localStorage", err);
        return [];
    }
};

const saveTodos = (todos) => {
    try {
        localStorage.setItem('todos', JSON.stringify(todos));
    } catch (err) {
        console.error("Failed to save todos to localStorage", err);
    }
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
        deleteAll: () => {
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
            const updatedTodos = state.map((todo) =>
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
            );
            saveTodos(updatedTodos); // <== this line saves to localStorage
            return updatedTodos;
        },
    }
});

export const { addTodos, updateTodo, deleteTodo, deleteAll, toggleComplete } = todoSlice.actions;
export default todoSlice;
