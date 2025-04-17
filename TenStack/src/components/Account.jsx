import React from 'react'
import { useFetchUser } from './hook'

const Account = () => {
    const userId = localStorage.getItem("userId");
    const {data, isLoading, isError} = useFetchUser(userId);

    if(isLoading) return <p className='text-center text-2xl my-5'>Loading.....</p>
    if(isError) return <p>Something went wrong</p>;

    
  return (
    <div>
        <h1 className='text-center text-blue-800 text-3xl font-bold my-2'>Account Details</h1>
        <section className='mx-auto mt-5  text-xl w-xs'>
            <p> <span className='font-bold '>User Name:</span> {data.username}</p>
            <p> <span className='font-bold '>Email: </span> <span className='text-blue-600'>{data.email}</span></p>
            <p> <span className='font-bold '>Password: </span> <span className=''>{data.password}</span></p>
        </section>
    </div>
  )
}

export default Account