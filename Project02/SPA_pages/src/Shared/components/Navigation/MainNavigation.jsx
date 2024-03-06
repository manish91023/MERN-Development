
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import MainHeader from './MainHeader'
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLinks } from './NavLinks';
import SideDrawer from './SideDrawer';
import { NavLink } from 'react-router-dom';

const MainNavigation = (props) => {
    const [drawarIsOpen,setDrawerIsOpen]=useState(false)
    

  return (
    <>
    <div className=' w-[100%] bg-red-600 sm:px-11 md:px-0 '>
   { drawarIsOpen && <SideDrawer >
        <nav  className=' absolute bg-yellow-500 rounded-tr-lg rounded-br-lg px-10 md:hidden'>
        <ul onClick={()=>setDrawerIsOpen(!drawarIsOpen)} className=' flex flex-col gap-5 mt-10'>
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
        </nav>
    </SideDrawer>
}
    <MainHeader>

        <button className='bg-transparent  md:hidden' onClick={(e)=>setDrawerIsOpen(!drawarIsOpen)}>
            <GiHamburgerMenu className=' h-[20px] w-[20px] text-white '/>
        </button>

        <h1>
            <Link className=' text-white hover:text-gray-500' to="/">YourPlaces</Link>
        </h1>

        <nav className='hidden md:block'>
           <NavLinks/>
        </nav>
    </MainHeader>
    </div>
  </>
  )
}

export default MainNavigation