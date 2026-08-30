import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

const NavLink = () => {
  return (
    <div id='nav-link' className='w-56 flex items-center justify-evenly'>
      <Link to='/'>Home</Link>
      <Link to='/collection'>Collection</Link>
    </div>
  )
}

export default NavLink