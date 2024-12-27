import React from 'react'
import { IoMenuSharp } from "react-icons/io5";
const Navbar = () => {
  return (
    <div className='container pt-8'>
     
     <div className='flex justify-between items-center'>
        <div className='text-xl font-semibold '>SAFWAN AHMED</div>
        <ul className=' gap-5 lg:gap-10 hidden md:flex'>
<li className='menuLink'><a href="#safoo">HOME</a></li>
<li className='menuLink'><a href="#about">ABOUT</a></li>
<li className='menuLink'><a href="#workplace">WORK PLACE</a></li>
<li className='menuLink'><a href="#projects">PROJECTS</a></li>
<li className='menuLink'><a href="#skills">SKILLS</a></li>
<li className='menuLink'><a href="#contact">CONTACTS</a></li>

        </ul>
        <IoMenuSharp className='md: hidden' size={25}/>
        </div> 
    </div>
  )
}

export default Navbar
