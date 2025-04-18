import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul>
            <li><NavLink>sign</NavLink></li>
            <li><NavLink>login</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar