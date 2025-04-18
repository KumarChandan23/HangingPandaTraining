import React from 'react'
import { useState } from 'react'
import { useFetchUser } from './hook';
import { useEffect } from 'react';
import { useUpdateUser } from './hook';
import { useNavigate } from 'react-router-dom';

const userData = {username: "", email: "", password: ""};

const UpdateAccount = () => {
    
    const userId = localStorage.getItem("userId")
    const [inputData, setInputData] = useState(userData)
    const {data, isLoading,isError} = useFetchUser(userId);
    const updateMutation = useUpdateUser();
    const navigate = useNavigate();


    const handleChange = (e)=> setInputData({...data, [e.target.name] : e.target.value})
    
    useEffect(()=>{
        if(data){
            setInputData({
                username: data.username || "",
                email: data.email || "",
                password : data.password || ""
            })
        }
    },[data])
    

    const handleUpdate = (e)=>{
        updateMutation.mutate({userId, inputData})
        navigate("/user-account")
    }
    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Something went wrong</p>;
    return (
        <div>
            <h1 className='text-center font-bold text-yellow-400 text-2xl my-2'>Update user Details</h1>
            <form onSubmit={handleUpdate} className='border-2 border-blue-500 w-70 my-2 mx-auto rounded-lg p-3'>
                <div>
                    <label htmlFor="username">User Name</label>
                    <input type="text" name="username" id="username" value={inputData?.username} onChange={handleChange} placeholder='Enter username' className='border-2 border-gray-300 outline-0 px-2 w-full rounded focus:bg-gray-200 focus:text-black h-10' />
                </div>
                <div className='mt-3'>
                    <label htmlFor="email"  >Email</label>
                    <input type="email" name="email" id="email" value={inputData?.email} onChange={handleChange} placeholder='Enter email' className='border-2 border-gray-300 outline-0 px-2 w-full rounded focus:bg-gray-200 focus:text-black h-10' />
                </div>
                <div className='mt-3'>
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" id="password" value={inputData?.password} onChange={handleChange} placeholder='Enter password' className='border-2 border-gray-300 outline-0 px-2 w-full rounded focus:bg-gray-200 focus:text-black h-10' />
                </div>
                <div>
                    <button className='border-2 border-blue-400 my-3 rounded-full p-2 hover:bg-blue-400 hover:text-white cursor-pointer'>Update Account</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateAccount