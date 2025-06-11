'use client';
import React, { useEffect } from 'react';
import { Instagram } from 'lucide-react';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Connect = () => {

  useEffect(() => {
    const ctx = gsap.context(()=>{
      gsap.fromTo(".face-img",{
        yPercent:50
      }, {
          yPercent:-50,
          scrollTrigger: {
            trigger: ".face-img",
            start: "top bottom",
            end: "bottom top",
            scrub:true,
            markers:false
          }
      }),

      gsap.from(".sixth1 ",{      
        yPercent: 100,
        stagger:0.5,
        scrollTrigger:{
        trigger:".hit-point-connect",
        start:"top 50%",
        markers:false
        }
      })

    })
    return()=>ctx.revert()
  },[])

  return (
    <div>
        <div className='flex justify-between mt-28'>

            <div className='p-12 pt-0 mt-10 flex flex-col justify-between items-start h-full'>
                <div className='w-[15vw] h-[23vh] face-img hit-point-connect'>

                <Image src="/assets/face1.jpg" height={800} width={800} alt='face' className='w-full h-full object-cover' />
                </div>
                <p className=' text-xs text-gray-700 w-42 font-body mt-[30rem]'>Get the latest news about skincare tips and new products.</p>
            </div>

            <div className='relative'>
              <div className='w-[100vh] h-[80vh]'>
                <Image src='/assets/face2.jpg' height={800} width={800} alt='face' className='h-full w-full object-cover' />
              </div>

              <div className='absolute -top-20 flex justify-between items-stretch w-full flex-col h-full'>
                <div className='flex flex-col justify-between items-center '>
                

                  <h2 className='text-neutral-700 text-[3.5vw] font-body font-semibold leading-[1] text-center mx-auto'>
                    
                    <div className='w-fit h-fit overflow-hidden text-center mx-auto'> 
                      <span className='inline-block sixth1'>CONNECT</span>
                      </div>

                      <div className='h-fit w-fit overflow-hidden pl-6'>
                        <span className='text-neutral-700 font-body font-semibold sixth1 inline-block '>WITH  US</span>
                      </div>
                      
                      </h2>
                
                <div className='w-fit h-fit overflow-hidden  text-center mx-auto'>

                  
                </div>
                </div>
              </div>
              <div className='absolute bottom-40 flex flex-col w-full justify-between items-center font-display text-center text-6xl text-neutral-700 italic'>

                <div className=' '>

                
                  <h2 className=' leading-[0.7] justify-between items-center pt-2 pr-2 text-center mx-auto'>
                    <div className='h-fit w-fit overflow-hidden'>
                      <span className='inline-block pl-16 pr-2 sixth1'>on</span>
                    </div>
                    <div className='w-fit h-fit overflow-hidden pt-2 pr-2 pb-2 text-center mx-auto'>

                
                  <span className=' sixth1 inline-block'>instagram</span>
                </div>
                    </h2>
                </div>

                  
                
              </div>

            </div>

            <div className='p-10 pt-[32rem] w-[50vh] h-[20vh] face-img'>
              <Image src='/assets/face3.jpg' width={800} height={800} className=' ' alt='face' />
            </div>

        </div>

        <div className='pt-16 flex  justify-center items-center'>
          <div className='flex justify-between items-center px-5 py-2 text-xs font-light rounded-full border border-neutral-300 cursor-pointer'>
            <p className='text-neutral-700 font-body underline pl-10'> INSTAGRAM</p>
            <div className='p-2 bg-neutral-700 ml-10 rounded-full'>

            <p> <Instagram className='w-5 text-white  h-5'/></p>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Connect
