import React from 'react'

function Hero() {
  return (
    <div className='flex flex-col justify-between bg-white pl-[25rem] pr-[15rem] pt-20'>
      <div className='bg-hero w-full h-[1100px]'>
        <div className='grid md:grid-col-2 max-w-screen mt-44'>
            <div className='flex flex-col justify-start w-full px-2 py-1 md:item-start'>
                <p className='text-[45px] font-Merriweather'>FOR PLAYER <span className='text-green-500 font-Merriweather'>BY PLAYER</span></p>
                <p className='text-xl font-Merriweather'>Free 1 on 1 consulting to find the best site for you</p>
                <div className='py-4 font-Merriweather'>
                    <button className='px-3 py-1 ml-1 text-white bg-green-500 rounded-md'>Get touch</button>
                    <span className='ml-5 text-sm'>ghaluhwizz@gmail.com</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero