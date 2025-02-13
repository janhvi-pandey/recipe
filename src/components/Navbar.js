import React from 'react'
// import { IoSearch } from "react-icons/io5";
import { MdOutlineSearch } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='flex flex-row items-center justify-between p-8 bg-black text-white w-screen fixed'>
      <div className='text-xl  font-bold'>Recipe<span className='text-amber-400'>Hub</span></div>
      <ul className='flex flex-row list-none text-l gap-6 '>
       
            <li>Home</li>
            <li>Recipe</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      
   
      <div className='flex flex-row gap-4 text-2xl'>
      <span ><MdOutlineSearch/></span>
      <span><FaUserCircle/></span>
      </div>
    </div>
  )
}

export default Navbar
