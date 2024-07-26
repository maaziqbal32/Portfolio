import React from 'react'

const Footer = () => {
  return (
    <div className='max-w-[1200px] sm:h-[150px] p-12px flex justify-between mx-auto  mt-10'>
    <span className='primary-color text-3xl mt-10 '>Maaz Iqbal</span>
       <p className='text-gray-400 text-lg'>iqbalmaaz32@gmail.com 
       <br/>
       <p className='text-gray-400'> &copy; 2023 - {new Date().getFullYear()} <br/>
       <a className='text-gray-400 text-lg hover:text-gray-100  ' href='https://www.linkedin.com/in/maaz-iqbal-8bb28125a/' target='_blank'>My linkedin <i class="fab fa-linkedin"></i> </a>
       <br/>
       <a className='text-gray-400 text-lg hover:text-gray-100  ' href='https://github.com/maaziqbal32' target='_blank'>My Github  <i class="fab fa-github"></i> </a></p>   </p>
       
    </div>
  )
}

export default Footer 