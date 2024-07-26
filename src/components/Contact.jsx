import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    

    return (
        <div className='max-w-[1200px] mx-auto bg-black sm:py-20 p-5' id='contact'>
            <div className='text-center'>
                <h2 className='text-4xl font-bold leading-tight primary-color'>Contact Me</h2>
            </div>

            <div className='max-w-[800px] mx-auto'>
                <div className='mt-6 bg-[#161616] rounded-xl'>
                    <div className='p-10'>
                        <form action='https://getform.io/f/bpjmzkgb' method='Post'>
                            <div className='mb-4'>
                                <input
                                    placeholder=' Your Name '
                                    className='w-full p-3 bg-[#161616] border border-gray-500 rounded text-gray-300     '
                                    type='text'
                                    id='name'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='mb-4'>
                                
                                <input
                                     placeholder=' Your Email'
                                    className='w-full p-3 bg-[#161616] border border-gray-500 rounded text-gray-300     '
                                    type='email'
                                    id='email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='mb-6'>
                                
                                <textarea
                                    placeholder='Your Message...'
                                    className='w-full p-3 bg-[#161616] border  border-gray-500 rounded text-gray-300     '
                                  
                                    id='message'
                                    name='message'
                                    rows='5'
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <div className='text-center'>
                                <button
                                    className='bg-primary-color  text-white font-bold py-2 px-4 rounded w-full'
                                    type='submit'
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
