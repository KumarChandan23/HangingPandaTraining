import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../features/todo/TodoSlice.js";


export const todoStore = configureStore({reducer:{todos: todoSlice.reducer}})