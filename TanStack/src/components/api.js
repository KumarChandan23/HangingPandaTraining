
import axios from "axios";

export const FetchUser = async (userId) => {
    const url = userId ? (`http://localhost:8080/users/${userId.queryKey[1]}`) : "http://localhost:8080/users"
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.log("Error Occured while fetching data: ", error)
    }
}

export const Signup = async (payload) => {
    try {
        const response = await axios.post('http://localhost:8080/users', payload);
        console.log("New Account Create successfully")
        return response.data;
    } catch (error) {
        console.log("Error occured while Signup", error)
    }
}

export const Login = async (formData) => {
    try {
        console.log(formData)
        const response = await FetchUser();
        console.log(response)
        const existingUser = response.find(user=> user.email === formData.email && user.password === formData.password);
       
        console.log(existingUser)
        if(!existingUser){
            throw new Error("User Does not Exists")
        }else{
            localStorage.setItem("userId",existingUser.id);
        }

        return existingUser.data;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            throw new Error("User not found(404)", error)
        }
        throw new Error("Error occured while Loggin")
    }
}

export const UpdateUser = async ({userId, inputData})=>{
    console.log(userId);
    console.log(inputData)
    try {
        const response = await axios.put(`http://localhost:8080/users/${userId}`, inputData) ;
        return response.data       
    } catch (error) {
        throw new Error("Error Occured while Updating Account")
    }
}

export const DeleteUser = async (userId)=>{
    console.log(userId)
    try {
       const response  = await axios.delete(`http://localhost:8080/users/${userId}`);
        return response.data
    } catch (error) {
        console.log("Error occured while Delete Account: ", error)
    }
}