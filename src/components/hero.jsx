import React from 'react'
import { useEffect } from 'react';
import Button from "@/components/horizontal-btn";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {

  useEffect(() => {
        const ctx= gsap.context(() => {
          gsap.from(".first-one, .second-one",{      
            yPercent: 110,
            stagger:0.5,
          })
        })
        
        return () => ctx.revert()
    },[])

  return (
    <div className='relative h-screen w-screen overflow-hidden'>
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
      <div className='relative pt-[25vh] z-10 flex justify-center items-center w-full text-white text-[5.7vw] flex-col'>
        <div className='w-fit h-fit overflow-hidden flex justify-center'>
       <h1 className='w-[60%] text-center leading-[1.1]'>
        <span className='italic'>True </span>
         to Oneself kind to<span className='italic'>Nature</span>
        
       </h1>
       
        </div>
     
        <div className='w-fit h-fit overflow-hidden pt-2'>

        <p className='text-xs mt-2 max-w-[21vw] text-center font-body second-one'>Unreservedly honest products that truly work, be kind to skin and the planet – no exceptions!</p>
        </div>
      </div>
    </div>

    <div className='absolute items-center bottom-10 w-full h-12 flex justify-center'>
      <div className='bg-white animated-bar w-1/2 h-fit rounded-full flex justify-between p-[0.5vw] cursor-pointer'>
      <p></p>
        <p className='underline font-light text-xs text-neutral-700 font-body flex justify-center items-center'>EXPLORE ALL PRODUCTS</p>
        <div className='my-auto'>
          <Button /></div>
      </div>
      
    </div>

    </div>
  )
}

export default Hero
