import React, { useEffect, useState } from "react";
import { deleteTodo, getTodo, updateTodo } from "../services/TodoService";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [filterTask, setFilterTask] = useState(""); // For task filtering
    const [sortOrder, setSortOrder] = useState("newest"); // Default to "Newest to Oldest"
    const [dateFilter, setDateFilter] = useState("all"); // Default to "all"

    const fetchTodo = async () => {
        const data = await getTodo();
        setTodos(data);
    };

    useEffect(() => {
        fetchTodo();
    }, []);

    const handleDeleteTodo = async (todo) => {
        await deleteTodo(todo.id);
        fetchTodo();
    };

    const handleToggleComplete = async (id, currentStatus) => {
        await updateTodo(id, { completed: !currentStatus });
        fetchTodo();
    };

    const handleEditTask = async (id, newTask) => {
        if (newTask) {
            await updateTodo(id, { task: newTask });
            fetchTodo();
        }
    };

    // Sort todos based on the selected order
    const sortedTodos = [...todos].sort((a, b) => {
        if (sortOrder === "newest") {
            return b.createdAt.toDate() - a.createdAt.toDate(); // Newest to Oldest
        } else if (sortOrder === "oldest") {
            return a.createdAt.toDate() - b.createdAt.toDate(); // Oldest to Newest
        }
        return 0; // No sorting
    });

    // Filter todos based on predefined date filters and task
    const filteredTodos = sortedTodos.filter((todo) => {
        const now = new Date();
        const todoDate = todo.createdAt.toDate();

        // Handle predefined date filters
        const matchesDate =
            dateFilter === "all"
                ? true
                : dateFilter === "last7days"
                ? todoDate >= new Date(now.setDate(now.getDate() - 7))
                : dateFilter === "yesterday"
                ? todoDate.toLocaleDateString() === new Date(now.setDate(now.getDate() - 1)).toLocaleDateString()
                : dateFilter === "lastmonth"
                ? todoDate >= new Date(new Date().setMonth(new Date().getMonth() - 1)) // Fix: Create a new Date object
                : true;

        // Handle task filter
        const matchesTask = filterTask
            ? todo.task.toLowerCase().includes(filterTask.toLowerCase())
            : true;

        return matchesDate && matchesTask; // Include only if both match
    });

    console.log(Date.now())
    return (
        <div className="w-full col-span-2">
            <h1 className="text-center font-bold text-2xl my-5">Todo List</h1>

            {/* Filter and Sort Inputs */}
            <div className="flex gap-4 mb-4">
                <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="border rounded p-2"
                >
                    <option value="newest">Newest to Oldest</option>
                    <option value="oldest">Oldest to Newest</option>
                </select>
                <select
                    value={dateFilter}
                    onChange={(e) => setDateFilter(e.target.value)}
                    className="border rounded p-2"
                >
                    <option value="all">All</option>
                    <option value="last7days">Last 7 Days</option>
                    <option value="yesterday">Yesterday</option>
                    <option value="lastmonth">Last Month</option>
                </select>
                <input
                    type="text"
                    placeholder="Search by task"
                    value={filterTask}
                    onChange={(e) => setFilterTask(e.target.value)}
                    className="border rounded p-2"
                />
            </div>

            {/* Render Filtered Todos */}
            {filteredTodos.map((todo) => (
                <div key={todo.id} className="border rounded mb-3 flex items-center justify-between px-4 py-2">
                    <p className="w-1/2">
                        {todo.completed ? <span>✅</span> : <span></span>}
                        <span>{todo.task}</span>
                    </p>
                    <p>{todo.createdAt.toDate().toLocaleString()}</p>
                    {todo.imageURL && <img src={todo.imageURL} alt="todo" width={150} />}
                    <div className="flex items-center gap-5">
                        <button
                            onClick={() => handleToggleComplete(todo.id, todo.completed)}
                            className={`p-2 rounded-2xl cursor-pointer ${
                                todo.completed
                                    ? "bg-green-400 text-white text-xl hover:bg-yellow-400"
                                    : "text-xl px-3 hover:bg-green-600 hover:text-white border-1"
                            }`}
                        >
                            {todo.completed ? "Mark Incomplete" : "Mark Complete"}
                        </button>
                        <button
                            onClick={() => handleEditTask(todo.id, prompt("Edit Task:", todo.task))}
                            className="border-2 border-blue-600 rounded-xl p-2 cursor-pointer hover:bg-blue-600 hover:text-white"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => handleDeleteTodo(todo)}
                            className="border-2 border-red-600 p-2 hover:bg-red-600 hover:text-white rounded-2xl cursor-pointer"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TodoList;