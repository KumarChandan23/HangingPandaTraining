import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDeleteUser } from './hook';

const Navbar = () => {

    const userId = localStorage.getItem("userId");
    const navigate = useNavigate();
    const deleteMutation = useDeleteUser();

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.clear(userId);
        navigate("/login")
    }
    const handleDeleteAccount = (e)=>{
        e.preventDefault();
        deleteMutation.mutate(userId);
        localStorage.clear(userId);
        navigate("/signup")
    }
    return (
        <nav className="flex justify-around items-center bg-blue-400 h-15 text-xl text-white">
            <NavLink to={"/"} className='text-2xl'>TanStack</NavLink>
            <ul className='flex gap-5'>
                {
                    !userId ?
                        <>
                            <li className='hover:bg-white hover:text-black px-2 rounded-full'><NavLink to={"/signup"}>Signup</NavLink></li>
                            <li className='hover:bg-white hover:text-black px-2 rounded-full'><NavLink to={"/login"}>Login</NavLink></li>
                        </>
                        :
                        <>
                            <li className='hover:bg-white hover:text-black px-2 rounded-full'><NavLink to={"/user-account"}>Accoutn Details</NavLink></li>
                            <li onClick={handleLogout} className=' hover:bg-white hover:text-black px-2 rounded-full cursor-pointer'>Logout</li>
                            <li className='hover:bg-white hover:text-black px-2 rounded-full'><NavLink to={"/update-account"}>Edit Account</NavLink></li>
                            <li className='hover:bg-white hover:text-black px-2 rounded-full'><NavLink onClick={handleDeleteAccount}>Delete Account</NavLink></li>

                        </>
                }
            </ul>
        </nav>
    )
}

export default Navbar