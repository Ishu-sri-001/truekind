'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Button from './horizontal-btn';

gsap.registerPlugin(ScrollTrigger);

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import { ArrowRight, Lock } from 'lucide-react';

const Explore = () => {
  const pureBrillianceProducts = [
    {
      id: 1,
      image: '/assets/img1.avif',
      title: 'AHA BRIGHTENING EXFOLIANT CLEANSER/FACE WASH',
      price: '$ 899'
    },
    {
      id: 2,
      image: '/assets/img2.avif',
      title: 'BIO EXFOLIANT BRIGHTENING SLEEPING MASK',
      price: '$ 899'
    },
    {
      id: 3,
      image: '/assets/img2.avif',
      title: 'BIO EXFOLIANT BRIGHTENING SLEEPING MASK',
      price: '$ 899'
    }
  ];

  const varnayaBlendsProducts = [
    {
      id: 1,
      image: '/assets/img4.avif',
      title: 'AHA BRIGHTENING EXFOLIANT CLEANSER/FACE WASH',
      price: '$ 899'
    },
    {
      id: 2,
      image: '/assets/img5.avif',
      title: 'ACNE CALMING HERB RESCUE MASK',
      price: '$ 899'
    },
    {
      id: 3,
      image: '/assets/img5.avif',
      title: 'ACNE CALMING HERB RESCUE MASK',
      price: '$ 899'
    },
    {
      id: 4,
      image: '/assets/img5.avif',
      title: 'ACNE CALMING HERB RESCUE MASK',
      price: '$ 899'
    }
  ];

  useEffect (() => {

    const ctx=gsap.context(() => {

        
        gsap.from(".animated-img", {
            y: "10vw",
            duration:2,
            scrollTrigger: {
                trigger: ".animated-img",
                start: "top bottom",
                end: "bottom top",
                markers:false,
                scrub:true
            }
        })
    })
    return()=>ctx.revert()
  },[])

  return (
    <div className='w-full h-fit pt-28'>
        <div className='flex flex-col justify-center items-center pb-12 text-neutral-700'>
            <h2 className='font-body font-semibold text-5xl'>EXPLORE</h2>
            <p className='font-display italic text-5xl'>pure potency</p>
        </div>
        
            <div className='grid grid-cols-2'>
                <div className='w-full h-full overflow-hidden'>
                    

                    <Image src='/assets/explore1.jpg' alt='explore' height={1000} width={600} className='h-full w-full object-cover animated-img'  />
                    
                </div>
                <div className=''>
                    <div className='pt-16 w-full text-neutral-700 flex justify-between pl-10 pr-2 items-end'>
                        <div>
                            <h2 className='font-body text-4xl'>Pure</h2>
                            <p className='italic font-display text-4xl'>Brilliance</p>
                        </div>
                        <Button />
                    </div>

                    
                    <div className=' pr-2 pl-4 mt-8'>

                        <Swiper
                            slidesPerView={2.5}
                            spaceBetween={10}
                            className="mySwiper w-full"
                        >
                            {pureBrillianceProducts.map((product) => (
                                <SwiperSlide key={product.id}>
                                    <div className='h-fit w-[250px] p-2 bg-[#F0CCCE] rounded-xl min-h-[420px] cursor-pointer'>
                                        <div className='flex justify-between space-x-16'>
                                            <p className='text-[1.5vh] p-1 bg-white rounded-lg font-body my-auto px-5'>PURE BRILLIANCE</p>
                                            <p className='bg-white p-2 rounded-full'><Lock size={15} className=''/></p>
                                        </div>
                                        <div className='mx-auto'>
                                            <Image src={product.image} width={250} alt='product' height={250} />
                                        </div>
                                        <div className='flex justify-around items-end text-[1.5vh] font-extralight mt-5 font-body text-neutral-700 space-x-10'>
                                            <p className='max-w-xs '>{product.title}</p>
                                            <p className='w-[10vh]'>{product.price}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div>
                        <p className='text-xs pt-10 pl-10 font-extralight text-neutral-700 font-body w-xs'>STAY GLOW AND HEALTHY WITHOUT HAVING TO THINK ABOUT IT</p>
                    </div>

                </div>
            </div>


            <div className='grid grid-cols-2'>
                <div>
                    <div className=''>
                    <div className='pt-20 w-full text-neutral-700 flex justify-between pl-10 pr-4 items-end'>
                        <div>
                            <h2 className='font-body text-4xl'>Varnaya</h2>
                            <p className='italic font-display text-4xl'>Blends</p>
                        </div>
                        <div>
                            <Button />
                        </div>
                    </div>

                    <div className='pl-10 pr-2 mt-8'>

                        <Swiper
                            slidesPerView={2.5}
                            spaceBetween={10}
                            dir="rtl"
                            className="mySwiper w-full"
                        >
                            {varnayaBlendsProducts.map((product) => (
                                <SwiperSlide key={product.id}>
                                    <div className='h-fit w-fit p-2 bg-[#D8CEC4] rounded-xl min-h-[420px] cursor-pointer'>
                                        <div className='flex justify-between space-x-16'>
                                            
                                            <p className='bg-white p-2 rounded-full'><Lock size={15} className=''/></p>
                                            <p className='text-[1.5vh] p-1 bg-white rounded-lg font-body my-auto px-5'>PURE BRILLIANCE</p>
                                        </div>
                                        <div className='mx-auto'>
                                            <Image src={product.image} alt='product' width={250} height={250} />
                                        </div>
                                        <div className='flex justify-around text-[1.5vh] space-x-10 font-extralight mt-5 font-body text-neutral-700'>
                                            
                                            <p className='w-[5vh] '>{product.price}</p>
                                            <p className='text-left'>{product.title}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                    </div>

                    <div>
                        <p className='text-xs pt-10 pl-10 font-body w-xs text-gray-700'>STAY GLOW AND HEALHY WITHOUT HAVING TO THINK ABOUT IT</p>
                    </div>
                </div>
                </div>

                <div className='h-full w-full overflow-hidden'>
                    <Image width={600} src='/assets/explore2.jpg' height={1000} className='h-full w-full object-cover animated-img' alt='explore'  />
                </div>

            </div>
    </div>
  )
}

export default Explore

