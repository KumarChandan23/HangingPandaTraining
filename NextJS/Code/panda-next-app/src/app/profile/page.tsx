'use client'
import Button from '@/components/Button'
import Link from 'next/link';
import { useState } from 'react'

const ProfilePage = () => {

  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true)
    setTimeout(()=>{
    alert('Clicked!')
      setLoading(false)
    },2000)

  }
  return (
    <div>
      <h1>This is Profile page</h1>
      <Button isLoading={loading} onClick={handleClick} loadingText='Please wait' className='bg-red-600 cursor-pointer'>Click Me</Button>
      <Link href="/user">User</Link>
    </div>
  )
}

export default ProfilePage