import React from 'react'
import { Fade, Zoom } from 'react-awesome-reveal';


const Contact = () => {
  return (
    <div>
      <Zoom>
    <div name='contact' className='w-full h-screen color-content text-[#0a192f] flex justify-center items-center p-4'>
    
        <form method='POST' action="https://getform.io/f/95a757b5-53ec-4c8a-898b-332f059c2b0d" className='glass flex flex-col glow2 max-w-[600px] w-full'>
            
            <div className='pb-2'>
                <p className='text-4xl font-bold inline border-b-4 border-[#6a62d5] text-[#0a192f] '>Contact</p>
                <p className='text-black-300 py-4'> Submit the form below to email</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' /><input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' /> <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea> <button className='ext-black-300 border-pink-600 border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Send</button>
        </form>
    
    </div>
    </Zoom>
    </div>
  )
}

export default Contact