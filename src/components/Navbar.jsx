import React from 'react'

const Navbar = () => {
  return (
    <div className='w-screen h-[70px] bg-white z-10 fixed drop-shadow-lg'>
        <div className='flex items-center justify-between w-full h-full px-2'>
            <div className='flex items-center'>
                <h1 className='ml-1 text-xl font-bold sm:text-lg sm:ml-16 font-Merriweather'>Bad Beat Bureau</h1>
            </div>
            <div className='flex items-end mr-16'>
                <ul className='flex font-Merriweather'>
                    <li>Home</li>
                    <li>Deals</li>
                    <li>Question</li>
                    <li>Instruction</li>
                    <li className='contact'>Contact Us</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar