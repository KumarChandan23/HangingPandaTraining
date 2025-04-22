"use client"

import Link from 'next/link'
import React, { useState } from 'react'

const page = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
        username: "",
    })
    const onSignup = async () => {

    }
    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
            <h1>Signup</h1>
            <form onSubmit={onSignup} className='border rounded-lg p-3'>
                <div>

                    <label htmlFor="username">User Name</label>
                    <input type="text" name="username" id="username" value={user.username}
                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                        placeholder='username'
                        className='border p-2 rounded-lg  w-full'
                    />
                </div>
                <div className='my-3'>

                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        placeholder='email'
                        className='border p-2 rounded-lg  w-full'
                    />
                </div>
                <div>

                    <label htmlFor="username">Password</label>
                    <input type="text" name="password" id="password" value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        placeholder='password'
                        className='border p-2 rounded-lg  w-full'
                    />
                </div>
                <div>
                    <button className='border rounded p-2 my-2 hover:rounded-full hover:bg-blue-600 hover:border-blue-600 hover:text-white cursor-pointer transition'>SignUp</button>
                    <Link href={"/login"} className='text-blue-600 ms-3 rounded-lg hover:border-blue-600 hover:bg-blue-600 hover:text-white p-2 cursor-pointer'>Login</Link>
                </div>

            </form>
        </div>
    )
}

export default page
