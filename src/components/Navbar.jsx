import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        // main div start from here
        <div className='bg-black text-gray-400 h-[100px] max-w-[1200px] m-auto justify-between flex items-center '>
            <h1 className='text-3xl font-bold primary-color ml-4'>Maaz Iqbal.</h1>
            <ul className='hidden md:flex space-x-10'>
                <li className='p-5 hover:text-white transition duration-300'><a href='#about'>About</a></li>
                {/* <li className='p-5 hover:text-white transition duration-300'><a href='#work'>Work</a></li> */}
                <li className='p-5 hover:text-white transition duration-300'><a href='#contact'>Contact</a></li>
            </ul>

            <div onClick={handleNav} className='block md:hidden mr-6 cursor-pointer'>
                {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
            </div>

            <div className={`${nav ? 'fixed' : 'hidden'} top-0 left-0 w-[50%] h-full bg-[#202121] transition-transform duration-500 ease-in-out transform ${nav ? 'translate-x-0' : '-translate-x-full'}`}>
                <h1 className='text-3xl primary-color m-8'>Maaz Iqbal.</h1>
                <ul className='p-8 text-2xl'>
                    <li className='p-2 mt-3 hover:text-white transition duration-300'><a href='#about'>About</a></li>
                    <li className='p-2 mt-3 hover:text-white transition duration-300'><a href='#work'>Work</a></li>
                    <li className='p-2 mt-3 hover:text-white transition duration-300'><a href='#contact'>Contact</a></li>
                </ul>
            </div>
            {/* main div end here */}
        </div>
    );
}

export default Navbar;
