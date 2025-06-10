'use client';

import React, { useEffect } from 'react';
import Button from "@/components/btn"
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

const Offers = () => {

    useEffect(() => {
        const ctx= gsap.context(() => {
            gsap.to(".animated-img", {
                yPercent: 20,
                scrollTrigger: {
                    trigger: '.img-container',
                    start: "top bottom",
                    end: "bottom top",
                    markers: false,
                    scrub: true,
                }
            })
        })
        return () => ctx.revert()
    },[])
    


  return (
    <div className='flex min-h-[48rem] justify-between pt-36 overflow-y-hidden relative'>

        <div className='pl-20 pt-20 z-50'>
            <div className=''>
                <Image src='/assets/dropper.jpg' height={500} width={500} alt='dropper' className='h-[16rem] w-[32vh]' />
            </div>
            <div className='pt-16'>
                <div className='w-fit px-4 text-[1.5vh] py-1 border border-gray-400 rounded-xl font-body'>
                    <p className='text-neutral-700 '>QUALITY</p>
                </div>
                <div>
                    <p className='font-body text-neutral-700 text-3xl max-w-sm mt-5'>
                        Only proven Ingredients, quality over quantity always!
                    </p>
                    <p className='text-xs mt-4 font-body max-w-sm text-neutral-400'>
                        Its about what we don’t put in. Squeaky clean formulas with over 1500 Negative Ingredients.
                    </p>
                </div>
            </div>
        </div>
        <div className='w-fit h-[80vh] absolute top-70 -left-10'>
            <Image src='/assets/svg/curved-arrow.svg' height={700} width={700} alt='arrow' />
        </div>

        <div>

            <div className='h-[100vh] w-[45vw] img-container relative overflow-hidden bg-[#E3D8CB] p-[3.5vw] '>
                <div className='h-full w-full absolute top-0 left-0 '>
                <Image src='/assets/product-with-bg.jpg' width={650} height={500} alt='product' className='w-full translate-y-[-10%] h-full object-cover animated-img' />

                </div>

                <div className='relative z-[2]'>
                <div className='flex justify-between items-end'>

                <div className='font-body text-neutral-700'>
                    <h2 className='text-5xl font-semibold'>EXCITING </h2>
                    <h2 className='text-5xl font-semibold'>OFFERS <span className='font-display italic font-light'>awaits</span></h2>
                    <div className='text-xs text-gray-500 mt-2'>
                        <p>Shop now to get a chance to win 2 extra products.</p>
                        <p>Grab the offer before it ends</p>
                    </div>
                </div>

                <div className='ml-28'>
                    
                        <Button />
                        <p className='underline text-neutral-700 text-xs mt-2 font-body cursor-pointer'>SHOP NOW</p>
                    
                </div>
                </div>
            </div>
            </div>

            

        </div>
      
    </div>
  )
}

export default Offers
