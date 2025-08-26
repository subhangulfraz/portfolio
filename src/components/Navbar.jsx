import React, { useState } from 'react'
import { TiThMenuOutline } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const [menu, Setmenu] = useState(false);
    return (
        <div className=' max-w-screen-2xl container px-4 mx-auto md:px-20 shadow-2xl fixed top-0 bg-white'>
            <div className='flex justify-between items-center h-17'>
                <div className='flex space-x-2 '> 
                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
                         alt="image" 
                         className='h-12 w-12 rounded-full' />
                    <h1 className='font-semibold text-xl'>Subhan Gulfraz
                        <p className='text-sm'>Web Developer</p>
                    </h1>
                </div>
                {/* for desktop */}
                <div className=''>
                    <ul className=' hidden  md:flex space-x-8 font-serif'>
                        <a href="#home" className='hover:scale-130 duration-200 cursor-pointer'>Home</a>
                        <a href="#about" className='hover:scale-130 duration-200 cursor-pointer'>About</a>
                        <a href="#skills" className='hover:scale-130 duration-200 cursor-pointer'>Skills</a>
                        <a href="#experience" className='hover:scale-130 duration-200 cursor-pointer'>Experience</a>
                        <a href="#contact" className='hover:scale-130 duration-200 cursor-pointer'>Contact</a>
                    </ul>
                </div>

                <div className='md:hidden text-2xl' onClick={() => Setmenu(!menu)}>
                    {menu ? <IoClose /> : <TiThMenuOutline />}
                </div>
            </div>

            {/* for mobile view */}
            {menu && (
                <div className=''>
                    <ul className=' md:hidden  flex flex-col space-x-8 font-serif'>
                        <a href="#home" className='hover:scale-130 duration-200 cursor-pointer'>Home</a>
                        <a href="#about" className='hover:scale-130 duration-200 cursor-pointer'>About</a>
                        <a href="skills" className='hover:scale-130 duration-200 cursor-pointer'>Skills</a>
                        <a href="#experience" className='hover:scale-130 duration-200 cursor-pointer'>Experience</a>
                        <a href="#contact" className='hover:scale-130 duration-200 cursor-pointer'>Contact</a>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Navbar;
