import React from 'react'
import {MoveRight} from 'lucide-react'

const Hero = () => {
  return (
    <div className='relative h-screen w-full overflow-hidden'>
      <video 
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 "
      >

        <source src='vid/front-page.mp4' />
      </video>

      <div className='bg-black/10 absolute top-0 left-0 h-screen w-screen'></div>
      

    <div>
      <div className='relative mt-40 z-10 flex justify-center items-center w-full text-white text-7xl flex-col'>
        <h1 className='font-bold font-body tracking-wider'><span className='italic font-medium font-display'>True</span> to Oneself</h1>
        <h1 className='tracking-wider font-semibold font-body'>kind to <span className='italic font-display font-medium'>Nature</span></h1>
        <p className='text-xs  mt-2 max-w-xs text-center font-body'>Unreservedly honest products that truly work, be kind to skin and the planet – no exceptions!</p>
      </div>
    </div>

    <div className='absolute items-center bottom-10 w-full h-12 flex justify-center'>
      <button className='bg-white w-1/2 h-12 rounded-4xl flex justify-between p-1 cursor-pointer'>
      <p></p>
        <p className='underline font-light text-xs text-neutral-700 font-body flex justify-center items-center'>EXPLORE ALL PRODUCTS</p>
        <div><p className='p-2 bg-neutral-700 rounded-full text-white'>
          
          <MoveRight /></p></div>
      </button>
      
    </div>

    </div>
  )
}

export default Hero
