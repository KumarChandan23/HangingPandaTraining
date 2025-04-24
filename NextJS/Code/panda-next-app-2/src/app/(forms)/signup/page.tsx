"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const userdetailsName = {
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const SignUp = () => {

    const [userData, setUserData] = useState(userdetailsName);
    const [errors, setErrors] = useState<any>({});

    const handleChange = (e: any) =>{
        handleInputValidation();
         setUserData({ ...userData, [e.target.name]: e.target.value });
        }

    const handleInputValidation = () => {
        const newErrors: any = {};

        if (!userData.username.trim()) {
            newErrors.username = "Username is required";
        }else if(userData.username.trim().length < 8){
            newErrors.username = "Username at leant have 8 chars"
        }

        if(!userData.email.trim()){
            newErrors.email = "Email is required"
        }else if(!/\S+@\S+\.\S+/.test(userData.email)){
            newErrors.email = "Please enter valid email with @ and .com"
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (!handleInputValidation()) return;
        const { confirmPassword, ...userDataToSend } = userData;
        console.log(userDataToSend);
        setUserData(userdetailsName)
    }

    return (
        <div className='flex flex-col items-center gap-3 h-[calc(100%-60px)] pt-10'>
            <h1 className='font-semibold text-3xl'>SignUp</h1>
            <form onSubmit={handleSubmit} className=' rounded-lg p-5  shadow-lg shadow-indigo-500/50 '>
                <div>
                    <label htmlFor="username">User Name</label>
                    <input type="text" name="username" id="username" value={userData.username} onChange={handleChange} placeholder='Enter username' className={`w-full border-2 border-indigo-300 rounded-lg h-10 outline-blue-600 ps-3 my-1 ${errors.username ? 'border-red-400 outline-red-400': ''}`} />
                    {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" value={userData.email} onChange={handleChange} placeholder='Enter email' className='w-full border-2 border-indigo-300 rounded-lg h-10 outline-blue-600 ps-3 my-1' />
                    {errors.email && <p className='text-red-500'>{errors.email}</p>}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" id="password" value={userData.password} onChange={handleChange} placeholder='Enter password' className='w-full border-2 border-indigo-300 rounded-lg h-10 outline-blue-600 ps-3 my-1' />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="text" name="confirmPassword" id="confirmPassword" value={userData.confirmPassword} onChange={handleChange} placeholder='Confirm password' className='w-full border-2 border-indigo-300 rounded-lg h-10 outline-blue-600 ps-3 my-1' />
                </div>
                <div className='text-center'>
                    <button type='submit' className='cursor-pointer bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white rounded-full py-2 px-4 my-3'>SignUp</button>
                    <div>
                        <p>All ready have an account <Link href="/login" className='text-indigo-600 hover:underline'>Login</Link></p>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignUp