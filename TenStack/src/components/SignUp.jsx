import React from 'react'
import { useState } from 'react'
import { useSignup } from './hook';
import { useNavigate } from 'react-router-dom';

const userData = {username: "", email:"", password:""}

const SignUp = () => {
    const [data, setData] = useState(userData);
    const navigate = useNavigate()
    const signupMutation = useSignup();

    const handleChange = (e) => setData({...data, [e.target.name] : e.target.value});
    
    const handleSubmit =  (e)=> {
        signupMutation.mutate(data)
        navigate("/login")
    }
  return (
    <div>
        <h1 className='text-center font-bold text-green-600 text-2xl my-2'>SignUp new user</h1>
        <form onSubmit={handleSubmit} className='border-2 border-blue-500 w-70 my-2 mx-auto rounded-lg p-3'>
            <div>
                <label htmlFor="username">User Name</label>
                <input type="text" name="username" id="username" onChange={handleChange} placeholder='Enter username' className='border-2 border-gray-300 outline-0 px-2 w-full rounded focus:bg-gray-200 focus:text-black h-10' />
            </div>
            <div className='mt-3'>
                <label htmlFor="email"  >Email</label>
                <input type="email" name="email" id="email" onChange={handleChange} placeholder='Enter email' className='border-2 border-gray-300 outline-0 px-2 w-full rounded focus:bg-gray-200 focus:text-black h-10' />
            </div>
            <div className='mt-3'>
                <label htmlFor="password">Password</label>
                <input type="text" name="password" id="password" onChange={handleChange} placeholder='Enter password' className='border-2 border-gray-300 outline-0 px-2 w-full rounded focus:bg-gray-200 focus:text-black h-10' />
            </div>
            <div>
                <button type='submit' className='border-2 border-blue-400 my-3 rounded-full p-2 hover:bg-blue-400 hover:text-white cursor-pointer'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default SignUp