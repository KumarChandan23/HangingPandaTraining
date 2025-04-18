import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from './hook';

const userData = {
    email:"",
    password:""
}

const Login = () => {

    const [data, setData] = useState(userData)
    const [error, setError ] = useState('');
    const navigate = useNavigate();

    const handleChange = (e)=> setData({...data, [e.target.name]: e.target.value})


    const loginUser = useLogin();

    const handleLoginUser = (e)=>{
        e.preventDefault();
        loginUser.mutate(data,{
            onSuccess: (data)=>{
                console.log("Login success", data)
                navigate("/")
            },
            onError: (data)=> {
                console.log("Login failed", data)
                setError("Passowrd or Emial is increct")
            }
        })
        
        
    }
  return (
    <div>
        <h1 className='text-3xl text-center my-2 font-bold text-green-600'>Login</h1>
        <form onSubmit={handleLoginUser} className=' w-70 mt-2 mx-auto rounded-lg border-2 border-blue-500 p-3 bg-white'>
                <p className='text-red-600 text-xl'>{error}</p>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={handleChange} placeholder='Enter email' className='border-2 h-10 border-gray-400 bg-gray-100 rounded w-full outline-0 px-2 focus:bg-white' />
            </div>
            <div className='my-2'>
                <label htmlFor="password">Passowrd</label>
                <input type="text" name='password' id='password' onChange={handleChange} placeholder='Enter Password' className='border-2 h-10 border-gray-400 bg-gray-100 rounded w-full outline-0 px-2 focus:bg-white' />
            </div>
            <div>
                <button type='submit' className='border-2 border-blue-500 my-2 p-2 rounded-full hover:bg-blue-500 hover:border-blue-500 hover:text-white cursor-pointer '>Login User</button>
            </div>
        </form>
    </div>
  )
}

export default Login