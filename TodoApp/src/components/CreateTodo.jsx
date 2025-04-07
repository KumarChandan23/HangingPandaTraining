import React, { useEffect, useState } from 'react';
import styles from "./Todo.module.css";

const CreateTodo = () => {
    const [todo, setTodo] = useState({ todo: [] });

      const tasks = localStorage.getItem("todos");
      console.log(tasks)

    const addTodo = (e) => {
        e.preventDefault();
        const newTodo = e.target.todo.value;
        setTodo((prev) => ({ ...prev, todo: [...prev.todo, newTodo] }));
        e.target.todo.value = '';
    }
    const deleteTodo = (index) => {
        setTodo((prev) => {
            const newTodo = [...prev.todo];
            newTodo.splice(index, 1);
            return { ...prev, todo: newTodo };
        });
        console.log(index)
    }
    const updateTodo = (index) => {
        const newTodo = prompt('Enter new todo', todo.todo[index]);
        setTodo((prev) => {
            const updatedTodo = [...prev.todo];
            updatedTodo[index] = newTodo;
            return { ...prev, todo: updatedTodo };
        });
    }
    return (
        <div className={styles.container}>
            <h1>TodoApp</h1>
            <section>
                <form onSubmit={addTodo}>
                    <input type="text" placeholder='Create Todo' name="todo" id="createTodo" />
                    <button type='submit' className={styles.createTodoButton}>Create</button>
                </form>
            </section>
            <section>
                <table cellSpacing={0}>
                    <thead>
                        <tr>
                            <th className={styles.tableHeader} colSpan={3}>Todo List</th>
                        </tr>
                        <tr className={styles.subTableHeader}>
                            <th>Todo</th>
                            <th className={styles.deleteTodoHeader}>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todo.todo &&
                            todo.todo?.map((item, index) => (
                                <tr key={index}>
                                    <td>{item}</td>
                                    <td><button onClick={() => deleteTodo(index)}>❎Delete</button></td>
                                    <td><button onClick={() => updateTodo(index)}>🔡Update</button></td>
                                </tr>
                            ))}
                    </tbody>
                </table>
                
            </section>
        </div>
    )
}

export default CreateTodo