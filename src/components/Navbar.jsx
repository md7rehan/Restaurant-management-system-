import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

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
        <li><a>Employee</a></li>
        <li>
          <a>Menu</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Revenue</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Employee</a></li>
      <li>
        <details>
          <summary>Menu</summary>
          <ul className="p-2">
            <li><a>Menu</a></li>
            <li><a>Submenu 2</a></li>
          </ul>y
        </details>
      </li>
      <li><a>Revenue</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
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