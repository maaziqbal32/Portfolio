import React from 'react'
import Maaz from '../assets/Maaz6.png'
import{TypeAnimation} from 'react-type-animation'
const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px]
    md:h-[90vh] mx-auto py-8 bg-black'>
     {/* div that holding the img and hold 1 col */}
     <div className='col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]'>
        <img src={Maaz} alt='profile' />
      </div>
     {/* div that hold the text and hold the 2 cols  */}
     <div className='col-span-2 px-5 my-auto'>
       <h1 className='text-white text-4xl sm:text-5xl lg:text-7xl font-extrabold ml-5'>
        <span className='primary-color'> 
        I'm  a
        </span>  <br/>
        <TypeAnimation
            sequence={[
                 "Software Engineer",
                 1000,
                "MERN Stack Developer",
                1000,
                "FrontEnd Developer",
                1000,
               
            ]}
            wrapper='span'
            speed={10}
            repeat={Infinity}
        />
       </h1>
       <p className='text-white sm:text-lg py-6 lg:text-xl ml-5'>
        My Name is <span className='primary-color'>Maaz Iqbal</span> and 
        I am passionate Software Engineer.
       </p>
       {/* div for the buttons  */}
       <div className='my-6'>
        <a href='https://drive.google.com/file/d/1x0ZO7GzGJ0XcVw63Jav6k_wj9fKry0fJ/view?usp=drive_link' target='_blank' className='text-white bg-primary-color px-6 py-3  ml-5 
        rounded-xl hover:bg-primary-color-dark border border-gray-400
        '>Download Cv
        </a>
         <a href='#contact' className='text-white  px-6 py-3  ml-5
        rounded-xl hover:bg-gradient-to-br from-orange-500 to-pink-500 border border-gray-400 hover:border-none
        '>Contact
        </a>
       </div>

     </div>
    </div>
  )
}

export default Hero