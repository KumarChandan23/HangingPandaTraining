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
    initialState: {
        todos: loadTodos(),
        filteredTodos: loadTodos()
    },
    reducers: {
        addTodos: (state, action) => {
            const newTodo = { id: Date.now(), text: action.payload, completed: false };
            state.todos.push(newTodo);
            state.filteredTodos = state.todos;
            saveTodos(state.todos);
        },

        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
            state.filteredTodos = state.filteredTodos.filter(todo => todo.id !== action.payload);
            saveTodos(state.todos);
        },

        updateTodo: (state, action) => {
            const { id, newText } = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) {
                todo.text = newText;
                saveTodos(state.todos);
            }
            // Also update filteredTodos
            state.filteredTodos = state.todos.filter(todo =>
                todo.text.toLowerCase().includes('')
            );
        },
        toggleComplete: (state, action) => {
            state.filteredTodos = state.filteredTodos.map((todo) =>
                todo.id === action.payload
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );
        },

        SearchTodos: (state, action) => {
            state.filteredTodos = state.todos.filter(todo =>
                todo.text.toLowerCase().includes(action.payload.toLowerCase())
            );
        },
        CompletedTodos: (state, action)=>{
            console.log(action)
        }

    }
});

export const { addTodos, deleteTodo, updateTodo, toggleComplete, SearchTodos } = todoSlice.actions;
export default todoSlice;
