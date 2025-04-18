import React, { useState } from "react";
import { db, storage } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function App() {
  const [task, setTask] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!task || !image) return alert("Please add task and image");

    const imageRef = ref(storage, `todos/${image.name}`);
    await uploadBytes(imageRef, image);
    const url = await getDownloadURL(imageRef);

    await addDoc(collection(db, "todos"), {
      task,
      imageUrl: url,
    });

    setTask("");
    setImage(null);
    alert("Task added!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Todo with Image</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default App;
