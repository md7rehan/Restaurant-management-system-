import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-300">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><NavLink to='employee'>Employee</NavLink></li>
        <li>
          <NavLink>Food Menu</NavLink>
          <ul className="p-2">
            <li><NavLink to='vegmenu'>Veg</NavLink></li>
            <li><NavLink to='nonvegmenu'>Non Veg</NavLink></li>
          </ul>
        </li>
        <li><NavLink to='revenue'>Revenue</NavLink></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Hotel</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='employee'>Employee</Link></li>
      <li>
        <details>
          <summary>Food Menu</summary>
          <ul className="p-2">
            <li><Link to='vegmenu'>Veg</Link></li>
            <li><Link to='nonvegmenu'>Non Veg </Link></li>
          </ul>
        </details>
      </li>
      <li><Link to='revenue'>Revenue</Link></li>
    </ul>
  </div>
  <div className="navbar-end space-x-2">
    <FaUserCircle className="text-4xl text-gray-600" />
    <Link to='login' className="btn p-2 me-4 px-4 rounded-2xl bg-red-400 hover:bg-red-400 hover:text-white">Logout</Link>
  </div>
</div>


    {/* <div className='flex justify-between items-center p-5  bg-gradient-to-r from-orange-400 to-orange-300 '>
        <NavLink className='text-2xl font-bold'>Logo</NavLink>
        <div className='flex space-x-10'>
            <NavLink to="/employeelist" className='text-xl transform transition hover:scale-105 '>Employee</NavLink>
            <NavLink to="/foodmenu" className='text-xl transform transition  hover:scale-105 '>Menu</NavLink>
            <NavLink to="/revenue" className='text-xl transform transition hover:scale-105 '>Revenue</NavLink>
        </div>
        <div className='flex space-x-5 items-center'>
            <FaUserCircle className="text-4xl text-gray-600" />
            <button className='text-lg bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-700'>Logout</button>
        </div>
    </div> */}
    </>
  )
}

export default Navbar