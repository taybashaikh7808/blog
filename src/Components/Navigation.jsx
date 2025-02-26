import React from 'react'
import { FaUserCircle } from "react-icons/fa";
function Navigation() {
  return (
    <nav className='border-2 text-black  h-[60px] w-full flex justify-between'>
      <input type="text" placeholder="Enter text....." class="border w-[300px] border-gray-400 p-2 rounded-lg h-10 ml-10 mt-2" />

      <div className='mr-10 mt-2 cursor-pointer'><FaUserCircle size={40} /></div>
    </nav>
  )
}

export default Navigation