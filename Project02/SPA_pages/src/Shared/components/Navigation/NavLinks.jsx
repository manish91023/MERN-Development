
import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavLinks = (props) => {
  return (
    <ul className=' flex gap-5'>
        <li >
            <NavLink className="text-white bg-yellow-400  p-4 rounded-lg" to="/">All USERS</NavLink>
        </li>
        <li>
            <NavLink className="text-white" to="/ul/places">MY PLACES</NavLink>
        </li>
        <li>
            <NavLink className="text-white" to="/places/new">ADD PLACE</NavLink>
        </li>
        <li>
            <NavLink className="text-white" to="/auth">AUTHENTICATE</NavLink>
        </li>
    </ul>
  )
}
