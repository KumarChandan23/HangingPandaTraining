import { useState } from "react";
import "./task.css"

export const Task = ({ task, index, completeTask, removeTask, updateTask }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(task.title);

    const handleUpdate = () => {
        updateTask(newTitle, index);
        setIsEditing(false);
    };

    return (
        <div>
            {isEditing ? (
                <div className="EditArea">
                    <input
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        className="addTaskInput"

                    />
                    <button onClick={handleUpdate} className="saveButton">Save</button>
                </div>
            ) : (
                <div className="task">
                    <div>
                        <input onClick={() => completeTask(index)} type="checkbox" checked={task.completed} />
                        <span className="title">{task.title} - {task.completed ? <span className="completed">Copleted</span> : ""}</span>
                    </div>

                    <div>
                        <button onClick={() => removeTask(index)} className="bi bi-archive-fill"></button>
                        
                        <button onClick={() => setIsEditing(true)} disabled={isEditing} className={`bi bi-pencil-square ${task.completed ? 'displayNone' : ''} `} ></button>
                    </div>
                </div>
            )}
        </div>
    );
};
