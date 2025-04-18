import axios from "axios"

export const FetchData = async () => {
    const url = 'https://dummyjson.com/todos';
    console.log(url)
    try {
        const response = await axios.get(url)
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.log("Error occured while fetching data", error)
    }
}

export const UpdateTodo = async ({id, completed})=>{
    try {
        const response = await axios.put(`https://dummyjson.com/todos/${id}`, {completed});
        return response.data
    } catch (error) {
        console.log("Error Occured while Updating todo", error)
    }
}

export const DeleteOne = async ({id}) => {
    try {
        const response = await axios.delete(`https://dummyjson.com/todos/${id}`); 
        return response.data;
    } catch (error) {
        console.log('Error occurred while deleting all todos', error);
        throw error;
    }
};
