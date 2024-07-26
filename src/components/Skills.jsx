import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'
import bootstrap from '../assets/bootstrap.png'
import node from '../assets/node-js.svg'
import Express from '../assets/Express.jpeg';
import mongo from '../assets/mongo.png';
const Skills = () => {
  return (
    <div className='bg-black text-gray-400 md:h[150px] max-w-[1200px] border border-gray-600  
    mx-auto grid grid-cols-9 place-items-center md:flex md:justify-between md:items-center'>

    <h2 className='primary-color text-2xl md:text-4xl font-bold m-4 '>
     My <br/> Tech <br/> Stack
    </h2>
    {/* logos are start from here */}
    <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] sm:w-[100px]'>
      <img src={html} alt='html' />
      <p className=' mt-2 '>HTML5</p>
    </div>
    <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] sm:w-[100px]'>
      <img src={css} alt='html'  />
      <p className=' mt-2 '>CSS3</p>
    </div>
    <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] sm:w-[100px] '>
      <img src={javascript} alt='html'/>
      <p className=' mt-2 '>javaScript</p>
    </div>
    <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]  lg:h-[100px]  '>
      <img src={bootstrap} alt='html' />
      <p className=' mt-2 '>Bootstrap</p>
    </div>
    <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] sm:w-[100px] '>
      <img src={tailwind} alt='html'/>
      <p className=' mt-2 '>Tailwind CSS</p>
    </div>
    <div className='flex flex-col items-center m-4 sm:my-0  w-[40px] md:w-[100px] sm:w-[100px]'>
      <img src={react} alt='html' />
      <p className=' mt-2 '>ReactJs</p>
    </div>
    <div className='flex flex-col items-center m-4 sm:my-0  w-[40px] md:w-[100px] sm:w-[100px]'>
      <img src={node} alt='html' />
      <p className=' mt-2 '>NodeJs</p>
    </div>
    <div className='flex flex-col items-center m-4 sm:my-0  w-[40px] md:w-[100px] sm:w-[100px]'>
      <img src={Express} alt='html' />
      <p className=' mt-2 '>ExpressJs</p>
    </div>
    <div className='flex flex-col items-center m-4 sm:my-0  w-[40px] md:w-[100px]  sm:w-[100px]'>
      <img src={mongo} alt='html' />
      <p className=' mt-2 '>MongoDB</p>
    </div>
    </div>
  )
}

export default Skills