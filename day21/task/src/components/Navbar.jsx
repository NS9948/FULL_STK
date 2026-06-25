import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <NavLink to="/">Home</NavLink>
        <br />
        <NavLink to="/employees">EMPLOYEES</NavLink>
        <br />
        <NavLink to="/about">ABOUT</NavLink>


    </div>
  )
}

export default Navbar
