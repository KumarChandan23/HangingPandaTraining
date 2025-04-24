import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='bg-indigo-500 text-white flex justify-around items-center px-5 py-2 h-[60px]'>
           <h1 className='font-bold text-2xl'> <Link href="/">🌐 My Website</Link></h1>
           <nav className='flex items-center gap-5'>
                <Link href="/signup" className='hover:underline decoration-white decoration-[2px] underline-offset-4'>SignUp</Link>
                <Link href="/products" className='hover:underline decoration-white decoration-[2px] underline-offset-4'>Products</Link>
                <Link href="/" className='hover:underline decoration-white decoration-[2px] underline-offset-4'>About</Link>
                <Link href="/" className='hover:underline decoration-white decoration-[2px] underline-offset-4'>Contact</Link>
                <Link href="/" className='hover:underline decoration-white decoration-[2px] underline-offset-4'>Cart</Link>
           </nav>
    </header>
  )
}

export default Header