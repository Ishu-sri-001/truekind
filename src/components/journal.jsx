import React from 'react';
import Image from 'next/image';
import Button from './btn';

const  Journal = () => {
  return (
    <div className='h-fit flex justify-between bg-neutral-800 overflow-x-hidden py-20'>

        <div className='mx-10 bg-white relative pb-0' id='outer-div'>
            <div className='w-full h-[65vh] cursor-pointer'>

            <Image src='/assets/brush.avif' width={800} height={800} alt='brush' className=''/>
            </div>
            <div className='absolute rounded-xl px-4 py-1 bg-white top-5 left-5'>
                <p className='text-xs font-body'>FEATURED</p>
            </div>

            <div className='mt-4 text-neutral-700 font-body px-4 pb-0'>
                <p className='text-[3.5vh] w-lg px-4'>
                    Beauty Secrets from Around the World: Rituals and Ingredients You Need To Try
                </p>
                <p className='text-xs text-gray-500 font-body w-lg px-4 mt-2'>
                    Drawing from our rich ayurvedic legacy of over 30 years and embracing dermal science, we aim to create transparent skincare that is incredibly effective, safe and without harming the environment or the planet.
                </p>

                <div className='flex justify-between px-4 mt-8 pb-0'>
                    <p className='text-xs font-body'>8 feb 2025</p>
                    <p className='text-xs font-body underline'>Read more</p>
                </div>

            </div>
        </div>

        <div className='flex flex-col justify-center items-center py-16 pl-2 pr-4 '>
            
                <div className='h-[35%] mb-10'>
                    <div className='text-white mx-auto '>
                        <p className='text-6xl font-display italic text-center'>clean</p>
                        <p className='font-body text-6xl font-semibold text-center'>JOURNAL</p>
                    </div>
                     <p className='text-white font-body text-xs w-xs text-center mt-2'>Healty tips on skincare, regimen and overall a better lifestyle.</p>
                </div>
        <div className='flex flex-col justify-between h-[65%] '>
        
        <div  className='flex space-x-2'>
        <div className='w-[52vh] bg-white h-fit'>
            <div className='w-[52vh] h-[35vh]'>

            <Image src='/assets/brush2.avif' height={900} width={900} alt='brush' className=''/>
            </div>
            

            <div className='flex flex-col justify-around text-neutral-700 font-body pb-5'>
               
                <p className='text-xs font-body w-xs px-2 mt-2'>
                    Your skincare and Makeup routine Impacts your well being
                </p>

                <div className='flex justify-between px-4 mt-8 '>
                    <p className='text-xs font-body'>8 feb 2025</p>
                    <p className='text-xs font-body underline'>Read more</p>
                </div>

            </div>
        </div>
        
            <div className='w-[52vh] bg-white h-fit'>

                <div className='w-[52vh] h-[35vh]'>

                    <Image src='/assets/facemask.avif' height={800} width={800} alt='facemask' className=''/>
                </div>

            <div className='flex flex-col justify-around text-neutral-700 font-body '>
                
                <p className='text-xs font-body w-xs px-2 mt-3'>
                    How to make your Routine  More eco-friendly
                </p>

                <div className='flex justify-between px-4 py-8'>
                    <p className='text-xs font-body'>8 feb 2025</p>
                    <p className='text-xs font-body underline'>Read more</p>
                </div>

            </div>
        </div>

        </div>

        <div className='w-full flex flex-col justify-between cursor-pointer mt-4 items-center'>
             <Button />
            <p className='font-body text-xs underline text-white mt-2'>SEE ALL</p>
        </div>
                      
                </div>

           
        </div>
            
    </div>
  )
}

export default Journal;
