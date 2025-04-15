import axios from "axios";

export const fetchTodos = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/todos');
      return  response.data ;
    } catch (error) {
      throw new Error('Failed to fetch todos');
    }
   
  };

export const addTodo = async (newTodo) => {
      try {
        const response = await axios.post('https://dummyjson.com/todos/add', newTodo);
        console.log("new Create Todo", response.data)
        return response.data;
      } catch (error) {
        throw new Error(error.response?.data?.message ||'Failed to add todo');
      }
    }

export const updateTodo = async (id, updatedTodo) => {
 
  try {
    const response = await axios.put(`https://dummyjson.com/todos/${id}`, updatedTodo);
    return response.data; 
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to update todo');
  }
};

export const deleteTodo = async (id)=>{
  try {
    const response = await axios.delete(`https://dummyjson.com/todos/${id}`);
    return response.data; 
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to delete todo');
    
  }
}