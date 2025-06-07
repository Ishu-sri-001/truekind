import React from 'react';
import { Instagram } from 'lucide-react';
import Image from 'next/image';

const Connect = () => {
  return (
    <div>
        <div className='flex justify-between mt-28'>

            <div className='p-12 pt-0 mt-10 flex flex-col justify-between items-start h-full'>
                <div className='w-[35vh]'>

                <Image src="/assets/face1.jpg" height={800} width={800} alt='face' className='' />
                </div>
                <p className=' text-xs text-gray-700 w-42 font-body mt-[30rem]'>Get the latest news about skincare tips and new products.</p>
            </div>

            <div className='relative'>
              <div className='w-[100vh] h-[75vh]'>
                <Image src='/assets/face2.jpg' height={800} width={800} alt='face' className='' />
              </div>

              <div className='absolute top-0 flex justify-between items-stretch w-full flex-col h-full'>
                <div className='flex flex-col justify-between text-center'>

                  <h2 className='text-neutral-700 text-5xl font-body font-semibold'>CONNECT</h2>
                  <h2 className='text-neutral-700 text-5xl font-body font-semibold'>WITH  US</h2>
                </div>
              </div>
              <div className='absolute bottom-5 flex flex-col w-full justify-between items-center font-display text-center text-6xl text-neutral-700 italic'>
                
                  <h2>on</h2>
                  <h2>instagram</h2>
                
              </div>

            </div>

            <div className='p-10 pt-[32rem] w-[50vh] h-[20vh]'>
              <Image src='/assets/face3.jpg' width={800} height={800} className=' ' alt='face' />
            </div>

        </div>

        <div className='mt-8 flex  justify-center items-center'>
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
