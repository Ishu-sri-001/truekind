'use client';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const Page = () => {

    // useEffect(() => {
    //   const ctx= gsap.context(() => {
    //     gsap.from(".box2", {        
    //       scale:0,
    //       delay:1,
    //       duration: 2,
    //       rotate: 360,
    //       scrollTrigger: {
    //         trigger: '.box2',
    //         // scroller: 'body',
    //         start:"top 80%",
    //         end:"bottom 30%",
    //         scrub:1,
    //         markers: true
          
    //       }
    //     })
    //   })
    //   return()=>ctx.revert()
    // })

    useEffect(() => {
      const ctx= gsap.context(() => {
        gsap.to(".head h1", {        
          transform: "translateX(-100%)",
          duration: 2,
          scrollTrigger: {
            trigger: '.head h1',
            // scroller: 'body',
            start:"top 0%",
            end: "top -100%",
            // end:"bottom 30%",
            // scrub:1,
            markers: true
          
          }
        })
      })
      return()=>ctx.revert()
    })


  return (
    <section className='flex flex-col items-center justify-center'>
      <div className='w-full h-screen flex flex-col items-center justify-center'>

        <div className='box w-[30vh] h-[30vh] bg-neutral-800 black-box'>

        </div>
      </div>
      <div className='h-[50vh]'></div>

      <div className='w-full h-screen flex flex-col items-center justify-center second'>
        <div className='box2 w-[30vh] h-[30vh] bg-blue-700'>

        </div>

      </div>
      <div className='overflow-x-hidden head'>
        <h1 className='text-[40vw]'>Experiences</h1>
      </div>
    </section>  
  )
}

export default Page
