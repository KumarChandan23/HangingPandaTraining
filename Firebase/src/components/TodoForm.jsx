import React, { useState, useRef } from 'react'
import { addTodo } from '../services/TodoService'

const TodoForm = () => {
  const [task, setTask] = useState("")
  const [image, setImage] = useState(null)
  const [preview, setPreview] = useState(null) // For image preview
  const fileInputRef = useRef(null); // Reference to the file input

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreview(null); // Clear the preview as well
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // Reset the file input field
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!task.trim()) {
      return alert("Please enter task first")
    }
    await addTodo(task, image);
    setTask("");
    setImage(null);
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // Reset the file input field on submit
    }
    window.location.reload();
  }

  return (
    <div>
      <h1 className='text-center text-2xl font-bold my-5'>TodoForm</h1>
      <form onSubmit={handleSubmit} className='flex justify-center items-start gap-5 flex-wrap'>
        <div className='flex flex-col gap-3'>
          <input
            type="text"
            placeholder='Enter task....'
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className='border-2 border-gray-400  px-2 rounded-lg h-10 focus:outline-2 focus:outline-blue-400 focus:border-blue-400'
          />
          <input
            type="file"
            onChange={handleImageChange}
            ref={fileInputRef} // Attach ref here
            className='bordre border-2 h-10 rounded-lg p-1 bg-blue-500 text-white border-0 cursor-pointer w-[200px]'
          />
          {preview && (
            <div className="relative mt-2">
              <img
                src={preview}
                alt="Preview"
                className="rounded-md border w-[150px] object-cover"
              />
              <button
                type="button"
                onClick={handleRemoveImage}
                className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
              >
                X
              </button>
            </div>
          )}
        </div>
        <button
          type='submit'
          className='border-2 border-blue-500 py-1 px-2 rounded-2xl hover:bg-blue-600 cursor-pointer hover:text-white'
        >
          Add Task
        </button>
      </form>
    </div>
  )
}

export default TodoForm
