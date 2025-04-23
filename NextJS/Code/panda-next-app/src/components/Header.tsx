import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
           <header style={{ padding: "1rem", background: "#eee" }}>
          <h1>🌐 My Website</h1>
          <nav>
            <Link href="/">Home</Link> |
             <Link href="/about">About</Link> |
             <Link href="/profile">Profile</Link> |
             <Link href="/products">Products</Link>
          </nav>
        </header>
    </div>
  )
}

export default Header