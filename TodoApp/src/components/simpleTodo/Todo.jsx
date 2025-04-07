import { useState } from "react";
import { Task } from "./Task";
import { CreateTask } from "./CreateTask";
import "./task.css"

export    function Todo() {
        const [tasks, setTasks] = useState([
            {
                title: "Grab some Pizza",
                completed: true
            },
            {
                title: "Do your workout",
                completed: true
            },
            {
                title: "Hangout with friends",
                completed: false
            }
        ]);
        
    
        const addTask = title => {
            const newTasks = [...tasks, { title, completed: false }];
            setTasks(newTasks);
        };
    
        const completeTask = index => {
            const newTasks = [...tasks];
            newTasks[index].completed = !newTasks[index].completed;
            setTasks(newTasks);
        };
        
        const removeTask = index => {
            const newTasks = [...tasks];
            newTasks.splice(index, 1);
            setTasks(newTasks);
        };

        const updateTask = (newTitle,index)=>{
            const newTasks = [...tasks];
            newTasks[index].title = newTitle;
            setTasks(newTasks);
        }

        return (
            <div className="todo-container">
                <div className="header">TODO - ITEMS</div>
                <div className="create-task" >
                    <CreateTask addTask={addTask}  />
                </div>
                <div className="tasks">
                    {tasks.map((task, index) => (
                        <Task
                        task={task}
                        index={index}
                        completeTask={completeTask}
                        removeTask={removeTask}
                        updateTask={updateTask}
                        key={index}
                        />
                    ))}
                </div>
               
            </div>
        );
    }
    
