import React from 'react'
import about from '../assets/about1.jpg'
const About = () => {
  return (
    // main section div
    <div className='text-white max-w-[1200px] mx-auto my-12 ' id='about'>
      {/* div for the division of the section into Two parts */}
      <div className='md:grid md:grid-cols-2 sm:py-16 '>
        {/* div for the division picture and text  */}
        <div className='mt-4 md:mt-0 text-left flex  py-6 md:py-0 '>
          {/* div for the left part of the section */}
          <div className='my-auto mx-6  '>
            <h2 className='text-5xl font-bold mb-5 primary-color'>About Me</h2>
            <p className='text-base lg:text-lg'>
              I'm Maaz Iqbal, a Final Year student pursuing a Bachelor's degree in Computer Sciences and a dedicated Software Engineer. With a passion for both front-end and back-end development,
               I specialize in HTML5, CSS3, and JavaScript for crafting intuitive and responsive user interfaces.
                I'm adept at utilizing frameworks like Bootstrap and Tailwind CSS to streamline the design 
                process and ensure a polished look across different devices.
              As a MERN stack developer, I excel in using MongoDB, Express.js,
               React.js, and Node.js to build dynamic and interactive web applications.
                I have a keen interest in creating robust and efficient server-side applications with Node.js,
                 ensuring high performance and scalability.
              Looking forward to connecting and collaborating with fellow developers!
            </p>
          </div>

        </div>
        <img className='mx-auto rounded-3xl mt-6 md:mr-5 ' src={about} height={350} width={350} />
      </div>
    </div>
  )
}

export default About